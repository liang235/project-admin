/*
 * @Description: vueuse 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/sensors',
		component: Layout,
		meta: {
			title: '传感器',
		},
		children: [
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
		path: '/component',
		component: Layout,
		meta: {
			title: '组件',
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
