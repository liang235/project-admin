/*
 * @Description: hooks 案例
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const formComponent = [
	{
		path: '/hooks',
		component: Layout,
		meta: {
			title: 'hooks 工具',
			icon: 'hooks',
		},
		children: [
			{
				path: 'useFlattenTree',
				name: 'useFlattenTree',
				component: () => import('@/views/hooks/useFlattenTree.vue'),
				meta: {
					title: 'tree 扁平化',
				},
			},
		],
	},
]

export default [...formComponent]
