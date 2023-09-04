/*
 * @Description: CSS 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/css-case',
		component: Layout,
		meta: {
			title: 'CSS 案例',
			icon: 'css',
			defaultOpened: true,
		},
		children: [
			{
				path: '/css-case/3d_text',
				name: '3d_text',
				component: () => import('@/views/css-case/3d_text.vue'),
				meta: {
					title: '立体文字',
					icon: 'dot',
				},
			},
		],
	},
]

export default [...formComponent]
