/*
 * @Description: JavaScript 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/infinite_scroll',
		component: Layout,
		meta: {
			title: '无限滚动',
			icon: 'js',
		},
		children: [
			{
				path: '',
				name: 'infinite_scroll',
				component: () => import('@/views/js-case/infinite_scroll.vue'),
				meta: {
					title: '无限滚动',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/infinite_scroll',
				},
			},
		],
	},
]

export default [...formComponent]
