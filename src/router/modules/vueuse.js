/*
 * @Description: vueuse 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/State',
		component: Layout,
		meta: {
			title: 'State 状态',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'useRefHistory',
				name: 'useRefHistory',
				component: () => import('@/views/vueuse/useRefHistory.vue'),
				meta: {
					title: 'useRefHistory',
				},
			},
		],
	},
	{
		path: '/Elements',
		component: Layout,
		meta: {
			title: 'Elements 元素',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'useElementVisibility',
				name: 'useElementVisibility',
				component: () => import('@/views/vueuse/useElementVisibility.vue'),
				meta: {
					title: 'useElementVisibility',
				},
			},
			{
				path: 'useIntersectionObserver',
				name: 'useIntersectionObserver',
				component: () => import('@/views/vueuse/useIntersectionObserver.vue'),
				meta: {
					title: 'useIntersectionObserver',
				},
			},
		],
	},
	{
		path: '/Sensors',
		component: Layout,
		meta: {
			title: 'Sensors 传感器',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'onClickOutside',
				name: 'onClickOutside',
				component: () => import('@/views/vueuse/onClickOutside.vue'),
				meta: {
					title: 'onClickOutside',
				},
			},
			{
				path: 'useInfiniteScroll',
				name: 'useInfiniteScroll',
				component: () => import('@/views/vueuse/useInfiniteScroll.vue'),
				meta: {
					title: 'useInfiniteScroll',
				},
			},
		],
	},
	{
		path: '/Animation',
		component: Layout,
		meta: {
			title: 'Animation 动画',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'useTransition',
				name: 'useTransition',
				component: () => import('@/views/vueuse/useTransition.vue'),
				meta: {
					title: 'useTransition',
				},
			},
		],
	},
	{
		path: '/Component',
		component: Layout,
		meta: {
			title: 'Component 组件',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'useVirtualList',
				name: 'useVirtualList',
				component: () => import('@/views/vueuse/useVirtualList.vue'),
				meta: {
					title: 'useVirtualList',
				},
			},
			{
				path: 'useVModel',
				name: 'useVModel',
				component: () => import('@/views/vueuse/useVModel.vue'),
				meta: {
					title: 'useVModel',
				},
			},
			{
				path: 'useVModels',
				name: 'useVModels',
				component: () => import('@/views/vueuse/useVModels.vue'),
				meta: {
					title: 'useVModels',
				},
			},
		],
	},
	{
		path: '/Integrations',
		component: Layout,
		meta: {
			title: '@Integrations 集成',
			icon: 'vueuse',
		},
		children: [
			{
				path: 'useFocusTrap',
				name: 'useFocusTrap',
				component: () => import('@/views/vueuse/useFocusTrap.vue'),
				meta: {
					title: 'useFocusTrap',
				},
			},
		],
	},
]

export default [...formComponent]
