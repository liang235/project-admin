import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

const Layout = () => import('@/layout/index.vue') // 布局主页面

// 静态路由（默认路由）/ 免登录页面 / 不会在侧边栏中显示 / 不会出现在面包屑中
const constantRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/:all(.*)*',
		name: 'notFound',
		component: () => import('@/views/error/404.vue'),
		meta: {
			title: '找不到页面',
		},
	},
]

// 系统路由 - 每个角色都有的页面，不需要权限
const systemRoutes = [
	{
		path: '/',
		component: Layout,
		meta: {
			title: () => {
				return useSettingsStore().home.title
			},
			breadcrumb: false,
		},
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: () => {
						return useSettingsStore().home.title
					},
					breadcrumb: false,
				},
			},
			{
				path: 'reload',
				name: 'reload',
				component: () => import('@/views/reload/index.vue'),
				meta: {
					title: '重新加载',
					breadcrumb: false,
				},
			},
			{
				path: 'personal/setting',
				name: 'personalSetting',
				component: () => import('@/views/personal/setting.vue'),
				meta: {
					title: '个人设置',
					cache: 'personalEditPassword',
				},
			},
		],
	},
]

import example from './modules/example.js' // 默认演示
import systemSettings from './modules/systemSettings.js' // 系统设置

// 动态路由（异步路由、导航栏路由）
// 主导航并非路由的一部分，它只是将我们配置好的路由模块进行归类
// 主导航只需设置 meta 和 children 两个参数，其中 meta 只接受 title 和 icon 这两个参数，children 则是存放我们配置的路由模块数据
const asyncRoutes = [
	{
		path: 1,
		meta: {
			title: '演示',
			icon: 'example',
			auth: ['admin'],
		},
		children: [...example],
	},
	{
		path: 2,
		meta: {
			title: '系统',
			icon: 'system',
		},
		children: [...systemSettings],
	},
]

export { constantRoutes, systemRoutes, asyncRoutes }
