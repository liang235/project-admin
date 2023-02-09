/*
 * @Description: 路由数据
 * @Date: 2022-10-10 09:36:19
 * @LastEditTime: 2023-02-07 13:54:32
 */
import { cloneDeep } from 'lodash-es' // js 工具库
import { getRouteList } from '@/api/user.js' // 用户 api
import { systemRoutes } from '@/router/routes.js' // 路由相关数据
import { resolveRoutePath } from '@/utils/tools.js' // 自定义工具
import useSettingsStore from './settings.js' // 系统配置数据
import useUserStore from './user.js' // 用户数据

/**
 * @description: 判断是否有权限
 * @param {*} permissions
 * @param {*} route
 * @return {*}
 */
function hasPermission(permissions, route) {
	let isAuth = false
	if (route.meta?.auth) {
		isAuth = permissions.some((auth) => {
			return typeof route.meta?.auth === 'string'
				? route.meta.auth === auth
				: typeof route.meta?.auth === 'object'
				? route.meta.auth.includes(auth)
				: false
		})
	} else {
		isAuth = true
	}
	return isAuth
}

/**
 * @description: 权限功能开启，则需要对动态路由数据进行筛选过滤
 * @param {*} routes
 * @param {*} permissions
 * @return {*}
 */
function filterAsyncRoutes(routes, permissions) {
	const res = []
	routes.forEach((route) => {
		const tmpRoute = cloneDeep(route)
		if (hasPermission(permissions, tmpRoute)) {
			if (tmpRoute.children) {
				tmpRoute.children = filterAsyncRoutes(tmpRoute.children, permissions)
				if (tmpRoute.children.length) res.push(tmpRoute)
			} else {
				res.push(tmpRoute)
			}
		}
	})
	return res
}

/**
 * @description: 处理后端根据权限动态生成路由（后端获取）
 * @param {*} routes
 * @param {*} views
 * @return {*}
 */
function formatBackRoutes(routes, views = import.meta.glob('../../views/**/*.vue')) {
	return routes.map((route) => {
		switch (route.component) {
			case 'Layout':
				route.component = () => import('@/layout/index.vue')
				break
			default:
				if (route.component) {
					route.component = views[`../../views/${route.component}`]
				}
		}
		if (route.children) {
			route.children = formatBackRoutes(route.children, views)
		}
		return route
	})
}

// 将多层嵌套路由处理成两层，保留顶层和最子层路由，中间层级将被拍平
function flatAsyncRoutes(routes) {
	if (routes.children) {
		routes.children = flatAsyncRoutesRecursive(
			routes.children,
			[
				{
					path: routes.path,
					title: routes.meta?.title,
					hide: !routes.meta?.breadcrumb && routes.meta?.breadcrumb === false,
				},
			],
			routes.path
		)
	}
	return routes
}

// 异步递归拍平路由，并处理面包屑
function flatAsyncRoutesRecursive(routes, breadcrumb = [], baseUrl = '') {
	const res = []
	routes.forEach((route) => {
		if (route.children) {
			const childrenBaseUrl = resolveRoutePath(baseUrl, route.path)
			const tmpBreadcrumb = cloneDeep(breadcrumb)
			tmpBreadcrumb.push({
				path: childrenBaseUrl,
				title: route.meta?.title,
				hide: !route.meta?.breadcrumb && route.meta?.breadcrumb === false,
			})
			const tmpRoute = cloneDeep(route)
			tmpRoute.path = childrenBaseUrl
			if (!tmpRoute.meta) {
				tmpRoute.meta = {}
			}
			tmpRoute.meta.breadcrumbNeste = tmpBreadcrumb
			delete tmpRoute.children
			res.push(tmpRoute)
			const childrenRoutes = flatAsyncRoutesRecursive(route.children, tmpBreadcrumb, childrenBaseUrl)
			childrenRoutes.forEach((item) => {
				// 如果 path 一样则覆盖，因为子路由的 path 可能设置为空，导致和父路由一样，直接注册会提示路由重复
				if (res.some((v) => v.path === item.path)) {
					res.forEach((v, i) => {
						if (v.path === item.path) {
							res[i] = item
						}
					})
				} else {
					res.push(item)
				}
			})
		} else {
			const tmpRoute = cloneDeep(route)
			tmpRoute.path = resolveRoutePath(baseUrl, tmpRoute.path)
			// 处理面包屑导航
			const tmpBreadcrumb = cloneDeep(breadcrumb)
			tmpBreadcrumb.push({
				path: tmpRoute.path,
				title: tmpRoute.meta?.title,
				hide: !tmpRoute.meta?.breadcrumb && tmpRoute.meta?.breadcrumb === false,
			})
			if (!tmpRoute.meta) {
				tmpRoute.meta = {}
			}
			tmpRoute.meta.breadcrumbNeste = tmpBreadcrumb
			res.push(tmpRoute)
		}
	})
	return res
}

// 唯一ID route
const useRouteStore = defineStore('route', {
	state: () => ({
		isGenerate: false, // 是否已根据权限动态生成并挂载路由
		routes: [], // 动态生成后的路由
		routesNo: [], // 没有处理的路由
		currentRemoveRoutes: [], // 记录 accessRoutes 路由，用于登出时删除路由
	}),
	getters: {
		// 扁平化路由（将三级及以上路由数据拍平成二级）
		flatRoutes: (state) => {
			const routes = []
			if (state.routes) {
				state.routes.map((item) => {
					routes.push(...cloneDeep(item.children))
				})
				routes.map((item) => flatAsyncRoutes(item))
			}
			return routes
		},

		flatSystemRoutes: () => {
			const routes = [...systemRoutes]
			routes.forEach((item) => flatAsyncRoutes(item))
			return routes
		},
	},
	actions: {
		// 根据权限动态生成路由（前端生成）
		async generateRoutesAtFront(asyncRoutes) {
			// 定义 pinia
			const settingsStore = useSettingsStore()
			const userStore = useUserStore()
			let accessedRoutes

			// 如果权限功能开启，则需要对路由数据进行筛选过滤
			if (settingsStore.app.enablePermission) {
				const permissions = await userStore.getPermissions()
				accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
			} else {
				accessedRoutes = cloneDeep(asyncRoutes)
			}

			// 设置 routes 数据
			this.isGenerate = true
			this.routes = accessedRoutes.filter((item) => item.children?.length !== 0)
		},

		// 根据权限动态生成路由（后端获取）
		async generateRoutesAtBack() {
			// 定义 pinia
			const settingsStore = useSettingsStore()
			const userStore = useUserStore()

			await getRouteList({ account: userStore.account })
				.then(async (res) => {
					this.routesNo = cloneDeep(res.data)
					const asyncRoutes = formatBackRoutes(res.data)
					let accessedRoutes

					// 如果权限功能开启，则需要对路由数据进行筛选过滤
					if (settingsStore.app.enablePermission) {
						const permissions = await userStore.getPermissions()
						accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
					} else {
						accessedRoutes = cloneDeep(asyncRoutes)
					}

					// 设置 routes 数据
					this.isGenerate = true
					this.routes = accessedRoutes.filter((item) => item.children?.length !== 0)
				})
				.catch(() => {})
		},

		// 记录 accessRoutes 路由，用于登出时删除路由
		setCurrentRemoveRoutes(routes) {
			this.currentRemoveRoutes = routes
		},

		// 清空路由
		removeRoutes() {
			this.isGenerate = false
			this.routes = []
			this.routesNo = []
			this.currentRemoveRoutes.forEach((removeRoute) => {
				removeRoute()
			})
			this.currentRemoveRoutes = []
		},
	},
})

export default useRouteStore
