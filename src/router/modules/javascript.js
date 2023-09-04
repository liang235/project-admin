/*
 * @Description: JavaScript 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/js-case',
		component: Layout,
		meta: {
			title: 'JS 案例',
			icon: 'js',
			defaultOpened: true,
		},
		children: [
			{
				path: '/js-case/infinite-scroll',
				name: 'infinite-scroll',
				component: () => import('@/views/js-case/infinite-scroll.vue'),
				meta: {
					title: '无限滚动',
					icon: 'dot',
				},
			},
		],
	},
]

export default [...formComponent]
