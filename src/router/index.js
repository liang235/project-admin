/*
 * @Description: 路由根页面
 */
import { createRouter, createWebHashHistory } from 'vue-router' // 路由
import { useTitle } from '@vueuse/core' // vue 工具库
import { useNProgress } from '@vueuse/integrations/useNProgress' // 进度条相关
import '@/assets/styles/nprogress.scss' // 进度条样式
import { constantRoutes, asyncRoutes } from './routes.js' // 路由相关数据
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useUserStore from '@/store/modules/user.js' // 用户数据
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据
import useRouteStore from '@/store/modules/route.js' // 路由数据
import useKeepAliveStore from '@/store/modules/keepAlive.js' // 缓存数据

const { isLoading } = useNProgress()

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
})

// 路由加载前
router.beforeEach(async (to, from, next) => {
	// 定义 pinia
	const settingsStore = useSettingsStore()
	const userStore = useUserStore()
	const menuStore = useMenuStore()
	const routeStore = useRouteStore()

	// 开启进度条
	if (settingsStore.app.enableProgress) isLoading.value = true

	// 是否已登录
	if (userStore.isLogin) {
		// 是否已根据权限动态生成并挂载路由
		if (routeStore.isGenerate) {
			// 导航栏如果不是 single 模式，则需要根据 path 定位主导航的选中状态
			if (settingsStore.menu.menuMode !== 'single') menuStore.setActived(to.path)

			if (to.name) {
				if (to.matched.length !== 0) {
					// 如果已登录状态下，进入登录页会强制跳转到主页页面
					if (to.name === 'login') {
						next({ name: 'home', replace: true })
					} else if (!settingsStore.home.enable && to.name === 'home') {
						// 如果未开启主页页面，则默认进入侧边栏导航第一个模块
						if (menuStore.sidebarMenus.length > 0) {
							next({
								path: menuStore.sidebarMenusFirstDeepestPath,
								replace: true,
							})
						} else {
							next()
						}
					} else {
						next()
					}
				} else {
					// 如果是通过 name 跳转，并且 name 对应的路由没有权限时，需要做这步处理，手动指向到 404 页面
					next({ path: '/404' })
				}
			} else {
				next()
			}
		} else {
			// 路由数据来源
			switch (settingsStore.app.routeBaseOn) {
				// 前端
				case 'frontend':
					await routeStore.generateRoutesAtFront(asyncRoutes)
					break
				// 后端接口
				case 'backend':
					await routeStore.generateRoutesAtBack()
					break
			}

			// 动态路由部分
			const removeRoutes = []
			routeStore.flatRoutes.forEach((route) => {
				if (!/^(https?:|mailto:|tel:)/.test(route.path)) {
					removeRoutes.push(router.addRoute(route))
				}
			})

			// 系统路由部分
			routeStore.flatSystemRoutes.forEach((route) => {
				removeRoutes.push(router.addRoute(route))
			})

			// 记录的 accessRoutes 路由数据，在登出时会使用到，不使用 router.removeRoute 是考虑配置的路由可能不一定有设置 name ，则通过调用 router.addRoute() 返回的回调进行删除
			routeStore.setCurrentRemoveRoutes(removeRoutes)
			next({
				path: to.fullPath,
				query: to.query,
				replace: true,
			})
		}
	} else if (to.name !== 'login') {
		next({
			name: 'login',
			query: {
				redirect: to.fullPath,
			},
		})
	} else {
		next()
	}
})

// 路由加载结束前
router.afterEach((to, from) => {
	// 定义 pinia
	const settingsStore = useSettingsStore()
	const keepAliveStore = useKeepAliveStore()

	// 关闭进度条
	if (settingsStore.app.enableProgress) isLoading.value = false

	// 设置页面 title
	if (to.meta.title && settingsStore.app.enableDynamicTitle) {
		const title = typeof to.meta.title === 'function' ? to.meta.title() : to.meta.title
		useTitle(`${title} - ${import.meta.env.VITE_APP_TITLE}`)
	} else {
		useTitle(import.meta.env.VITE_APP_TITLE)
	}

	// 判断当前页面是否开启缓存，如果开启，则将当前页面的 name 信息存入 keep-alive 全局状态
	if (to.meta.cache) {
		const componentName = to.matched.at(-1)?.components?.default.name
		if (componentName) {
			keepAliveStore.add(componentName)
		} else {
			console.warn('该页面组件未设置组件名，会导致缓存失效，请检查')
		}
	}

	// 判断离开页面是否开启缓存，如果开启，则根据缓存规则判断是否需要清空 keep-alive 全局状态里离开页面的 name 信息
	if (from.meta.cache) {
		const componentName = from.matched.at(-1)?.components?.default.name
		if (componentName) {
			// 通过 meta.cache 判断针对哪些页面进行缓存
			switch (typeof from.meta.cache) {
				case 'string':
					if (from.meta.cache !== to.name) {
						keepAliveStore.remove(componentName)
					}
					break
				case 'object':
					if (!from.meta.cache.includes(to.name)) {
						keepAliveStore.remove(componentName)
					}
					break
			}
			// 如果进入的是 reload 页面，则也将离开页面的缓存清空
			if (to.name === 'reload') {
				keepAliveStore.remove(componentName)
			}
		}
	}

	document.documentElement.scrollTop = 0
})

export default router
