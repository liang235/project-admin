/*
 * @Description: vueuse 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/component',
		component: Layout,
		meta: {
			title: '组件',
		},
		redirect: '/component/useVModel',
		children: [
			{
				path: 'useVModel',
				name: 'useVModel',
				component: () => import('@/views/vueuse/useVModel.vue'),
				meta: {
					title: 'useVModel',
				},
			},
		],
	},
]

export default [...formComponent]
