/*
 * @Description: vueuse 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/State',
		component: Layout,
		meta: {
			title: 'State',
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
			title: 'Elements',
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
			title: 'Sensors',
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
		path: '/Component',
		component: Layout,
		meta: {
			title: 'Component',
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
]

export default [...formComponent]
