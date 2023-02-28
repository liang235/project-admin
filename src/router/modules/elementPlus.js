/*
 * @Description: ElementPlus UI 组件
 * @Date: 2023-02-28 15:46:02
 * @LastEditTime: 2023-02-28 16:01:40
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

export default [
	{
		path: '/skeleton',
		component: Layout,
		meta: {
			title: 'Skeleton 骨架屏',
			icon: '',
		},
		children: [
			{
				path: '',
				name: 'skeleton',
				component: () => import('@/views/element-plus/skeleton.vue'),
				meta: {
					title: 'Skeleton 骨架屏',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/skeleton',
				},
			},
		],
	},
]
