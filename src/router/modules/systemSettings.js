/*
 * @Description: 系统设置导航路由
 * @Date: 2022-11-08 12:26:24
 * @LastEditTime: 2022-12-02 13:06:17
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

export default [
	{
		path: '/system',
		component: Layout,
		name: 'system',
		meta: {
			title: '系统设置',
			icon: 'system',
		},
		redirect: '/system/user',
		children: [
			{
				path: 'menu',
				name: 'systemMenu',
				component: () => import('@/views/system/menu/index.vue'),
				meta: {
					title: '菜单管理',
				},
			},
			{
				path: 'role',
				name: 'systemRole',
				component: () => import('@/views/system/role/index.vue'),
				meta: {
					title: '角色管理',
				},
			},
			{
				path: 'user',
				name: 'systemUser',
				component: () => import('@/views/system/user/index.vue'),
				meta: {
					title: '用户管理',
				},
			},
			{
				path: 'dept',
				name: 'systemDept',
				component: () => import('@/views/system/dept/index.vue'),
				meta: {
					title: '部门管理',
				},
			},
		],
	},
]
