/*
 * @Description: SpreadJS 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/SpreadJS',
		component: Layout,
		meta: {
			title: 'SpreadJS',
			icon: 'SpreadJS',
		},
		children: [
			{
				path: '',
				name: 'SpreadJS',
				component: () => import('@/views/SpreadJS/index.vue'),
				meta: {
					title: 'SpreadJS',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/SpreadJS',
				},
			},
		],
	},
]

export default [...formComponent]
