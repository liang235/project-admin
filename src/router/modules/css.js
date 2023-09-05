/*
 * @Description: CSS 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/repeated_gradient_border',
		component: Layout,
		meta: {
			title: '重复渐变的边框',
			icon: 'repeated_gradient_border',
		},
		children: [
			{
				path: '',
				name: 'repeated_gradient_border',
				component: () => import('@/views/css-case/repeated_gradient_border.vue'),
				meta: {
					title: '重复渐变的边框',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/repeated_gradient_border',
				},
			},
		],
	},
	{
		path: '/image_grid',
		component: Layout,
		meta: {
			title: '图片九宫格',
			icon: 'image_grid',
		},
		children: [
			{
				path: '',
				name: 'image_grid',
				component: () => import('@/views/css-case/image_grid.vue'),
				meta: {
					title: '图片九宫格',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/image_grid',
				},
			},
		],
	},
	{
		path: '/3d_text',
		component: Layout,
		meta: {
			title: '立体文字',
			icon: '3d_text',
		},
		children: [
			{
				path: '',
				name: '3d_text',
				component: () => import('@/views/css-case/3d_text.vue'),
				meta: {
					title: '立体文字',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/3d_text',
				},
			},
		],
	},
]

export default [...formComponent]
