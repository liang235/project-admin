/*
 * @Description: ElementPlus UI 组件
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/form-component',
		name: 'form-component',
		component: Layout,
		meta: {
			title: 'Form 表单组件',
			icon: 'form',
		},
		redirect: '/form-component/input',
		children: [
			{
				path: '/form-component/input',
				name: 'formComponentInput',
				component: () => import('@/views/element-plus/input.vue'),
				meta: {
					title: 'Input 输入框',
				},
			},
			{
				path: '/form-component/select',
				name: 'formComponentSelect',
				component: () => import('@/views/element-plus/select.vue'),
				meta: {
					title: 'Select 选择器',
				},
			},
		],
	},
]

export default [...formComponent]
