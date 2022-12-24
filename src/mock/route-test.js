export default {
	error: '',
	status: 1,
	data: [
		{
			path: 1,
			meta: {
				title: '演示',
				icon: 'example',
			},
			children: [
				{
					path: '/icons',
					component: 'Layout',
					meta: {
						title: 'icons 图标',
						icon: 'icons',
						auth: ['test'],
					},
					children: [
						{
							path: '',
							name: 'icons',
							component: 'example/icons/index.vue',
							meta: {
								title: 'icons 图标',
								breadcrumb: false,
								sidebar: false,
								activeMenu: '/icons',
							},
						},
					],
				},
				{
					path: '/permission',
					component: 'Layout',
					meta: {
						title: '权限验证',
						icon: 'ele-key',
						auth: ['test'],
					},
					children: [
						{
							path: '',
							name: 'permission',
							component: 'example/permission/index.vue',
							meta: {
								title: '权限验证',
								breadcrumb: false,
								sidebar: false,
								activeMenu: '/permission',
							},
						},
					],
				},
				{
					path: '/components',
					name: 'components',
					component: 'Layout',
					meta: {
						title: '扩展组件',
						icon: 'component',
						auth: ['test'],
					},
					redirect: '/components/svg-icon',
					children: [
						{
							path: 'svg-icon',
							name: 'componentSvgIcon',
							component: 'example/components/svg-icon-demo.vue',
							meta: {
								title: 'SVG Icon',
							},
						},
						{
							path: 'page-header',
							name: 'componentPageHeader',
							component: 'example/components/page-header-demo.vue',
							meta: {
								title: '页头',
							},
						},
						{
							path: 'page-main',
							name: 'componentPageMain',
							component: 'example/components/page-main-demo.vue',
							meta: {
								title: '内容快',
							},
						},
						{
							path: 'fixed-bottom',
							name: 'componentFixedBottom',
							component: 'example/components/fixed-bottom-demo.vue',
							meta: {
								title: '固定底部操作栏',
							},
						},
						{
							path: 'search-bar',
							name: 'componentSearchBar',
							component: 'example/components/search-bar-demo.vue',
							meta: {
								title: '搜索面板',
							},
						},
					],
				},
				{
					path: '/breadcrumb',
					name: 'breadcrumb',
					component: 'Layout',
					meta: {
						title: '面包屑导航',
						icon: 'breadcrumb',
						auth: ['admin'],
					},
					redirect: '/breadcrumb/list1',
					children: [
						{
							path: 'list1',
							name: 'breadcrumbList1',
							component: 'example/breadcrumb/list1/index.vue',
							meta: {
								title: '列表1（平级模式）',
							},
						},
						{
							path: 'detail1',
							name: 'breadcrumbDetail1',
							component: 'example/breadcrumb/list1/detail.vue',
							meta: {
								title: '详情1',
								sidebar: false,
								activeMenu: '/breadcrumb/list1',
							},
						},
						{
							path: 'list2',
							name: 'breadcrumbList2',
							redirect: '/breadcrumb/list2',
							meta: {
								title: '列表2（层级模式）',
							},
							children: [
								{
									path: '',
									component: 'example/breadcrumb/list2/index.vue',
									meta: {
										title: '列表2（层级模式）',
										sidebar: false,
										breadcrumb: false,
									},
								},
								{
									path: 'detail2',
									name: 'breadcrumbDetail2',
									component: 'example/breadcrumb/list2/detail.vue',
									meta: {
										title: '详情2',
										sidebar: false,
										activeMenu: '/breadcrumb/list2',
									},
								},
							],
						},
					],
				},
				{
					path: '/keep-alive',
					name: 'keepAlive',
					component: 'Layout',
					meta: {
						title: '页面缓存',
						icon: 'keep-alive',
						auth: ['admin'],
					},
					redirect: '/keep-alive/page',
					children: [
						{
							path: 'page',
							name: 'keepAlivePage',
							component: 'example/keep-alive/page.vue',
							meta: {
								title: '页面缓存',
								breadcrumb: false,
							},
						},
						{
							path: 'detail',
							name: 'keepAlivePageDetail',
							component: 'example/keep-alive/detail.vue',
							meta: {
								title: '同级路由',
								sidebar: false,
							},
						},
						{
							path: 'nested',
							redirect: '/keep-alive/nested/detail',
							meta: {
								title: '嵌套路由',
								sidebar: false,
							},
							children: [
								{
									path: 'detail',
									name: 'keepAliveNestedDetail',
									component: 'example/keep-alive/detail.vue',
									meta: {
										title: '嵌套路由',
										activeMenu: '/keep-alive/page',
									},
								},
							],
						},
						{
							path: 'nested1',
							name: 'keepAliveNested1',
							component: 'example/keep-alive/nested/nested.vue',
							meta: {
								title: '路由多级缓存1',
							},
							children: [
								{
									path: 'nested2',
									name: 'keepAliveNested2',
									component: 'example/keep-alive/nested/nested/nested.vue',
									meta: {
										title: '路由多级缓存1-1',
									},
									children: [
										{
											path: 'index',
											name: 'keepAliveNestedIndex',
											component: 'example/keep-alive/nested/nested/nested/index.vue',
											meta: {
												title: '路由多级缓存1-1-1',
												cache: true,
											},
										},
									],
								},
							],
						},
					],
				},
				{
					path: '/multilevel',
					name: 'multilevel',
					component: 'Layout',
					meta: {
						title: '多级导航',
						icon: 'nested',
						auth: ['admin'],
					},
					redirect: '/multilevel/menu1',
					children: [
						{
							path: 'menu1',
							name: 'multilevelMenu1',
							meta: {
								title: '导航1',
							},
							children: [
								{
									path: 'menu1-1',
									name: 'multilevelMenu1-1',
									component: 'example/multilevel/menu1/menu1-1/index.vue',
									meta: {
										title: '导航1-1',
									},
								},
							],
						},
						{
							path: 'menu2',
							name: 'multilevelMenu2',
							meta: {
								title: '导航2',
							},
							children: [
								{
									path: 'menu2-1',
									name: 'multilevelMenu2-1',
									component: 'example/multilevel/menu2/menu2-1/index.vue',
									meta: {
										title: '导航2-1',
									},
								},
							],
						},
					],
				},
			],
		},
	],
}
