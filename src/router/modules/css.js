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
			icon: 'css',
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
			icon: 'css',
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
			icon: 'css',
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
	{
		path: '/continuous_text_shadow',
		component: Layout,
		meta: {
			title: '文字连续光影',
			icon: 'css',
		},
		children: [
			{
				path: '',
				name: 'continuous_text_shadow',
				component: () => import('@/views/css-case/continuous_text_shadow.vue'),
				meta: {
					title: '文字连续光影',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/continuous_text_shadow',
				},
			},
		],
	},
	{
		path: '/olympic_rings',
		component: Layout,
		meta: {
			title: '奥运五环',
			icon: 'css',
		},
		children: [
			{
				path: '',
				name: 'olympic_rings',
				component: () => import('@/views/css-case/olympic_rings.vue'),
				meta: {
					title: '奥运五环',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/olympic_rings',
				},
			},
		],
	},
]

export default [...formComponent]
