/*
 * @Description: 多级导航路由
 */
const Layout = () => import('@/layout/index.vue') // 布局主页面

const icons = [
	{
		path: '/icons',
		component: Layout,
		meta: {
			title: 'icons 图标',
			icon: 'icons',
		},
		children: [
			{
				path: '',
				name: 'icons',
				component: () => import('@/views/example/icons/index.vue'),
				meta: {
					title: 'icons 图标',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/icons',
				},
			},
		],
	},
]

const permission = [
	{
		path: '/permission',
		component: Layout,
		meta: {
			title: '权限验证',
			icon: 'ele-key',
		},
		children: [
			{
				path: '',
				name: 'permission',
				component: () => import('@/views/example/permission/index.vue'),
				meta: {
					title: '权限验证',
					breadcrumb: false,
					sidebar: false,
					activeMenu: '/permission',
				},
			},
		],
	},
]

const components = [
	{
		path: '/components',
		name: 'components',
		component: Layout,
		meta: {
			title: '扩展组件',
			icon: 'component',
		},
		redirect: '/components/svg-icon',
		children: [
			{
				path: 'svg-icon',
				name: 'componentSvgIcon',
				component: () => import('@/views/example/components/svg-icon-demo.vue'),
				meta: {
					title: 'SVG Icon',
					icon: 'icons',
				},
			},
			{
				path: 'page-header',
				name: 'componentPageHeader',
				component: () => import('@/views/example/components/page-header-demo.vue'),
				meta: {
					title: '页头',
					icon: 'page-header',
				},
			},
			{
				path: 'page-main',
				name: 'componentPageMain',
				component: () => import('@/views/example/components/page-main-demo.vue'),
				meta: {
					title: '内容快',
					icon: 'page-main',
				},
			},
			{
				path: 'fixed-bottom',
				name: 'componentFixedBottom',
				component: () => import('@/views/example/components/fixed-bottom-demo.vue'),
				meta: {
					title: '固定底部操作栏',
					icon: 'fixed-bottom',
				},
			},
			{
				path: 'search-bar',
				name: 'componentSearchBar',
				component: () => import('@/views/example/components/search-bar-demo.vue'),
				meta: {
					title: '搜索面板',
					icon: 'ele-search',
				},
			},
			{
				path: 'wang-editor',
				name: 'componentsWangEditor',
				component: () => import('@/views/example/components/wang-editor-demo.vue'),
				meta: {
					title: '富文本编辑器',
					icon: 'wang-editor',
				},
			},
			{
				path: 'image-preview',
				name: 'componentImagePreview',
				component: () => import('@/views/example/components/image-preview-demo.vue'),
				meta: {
					title: '图片预览',
					icon: 'ele-view',
				},
			},
			{
				path: 'upload',
				name: 'componentUpload',
				component: () => import('@/views/example/components/upload-demo.vue'),
				meta: {
					title: '上传文件',
					icon: 'ele-upload-filled',
				},
			},
			{
				path: 'copper',
				name: 'componentCopper',
				component: () => import('@/views/example/components/cropper-demo.vue'),
				meta: {
					title: '图片裁剪',
					icon: 'ele-crop',
				},
			},
			{
				path: 'pcas-cascader',
				name: 'componentPcasCascader',
				component: () => import('@/views/example/components/pcas-cascader-demo.vue'),
				meta: {
					title: '省市区街道联动',
					icon: 'city',
				},
			},
			{
				path: 'colorful-card',
				name: 'componentColorfulCard',
				component: () => import('@/views/example/components/colorful-card-demo.vue'),
				meta: {
					title: '多彩渐变卡片',
					icon: 'colorful',
				},
			},
			{
				path: 'signature-pad',
				name: 'componentSignaturePad',
				component: () => import('@/views/example/components/signature-pad-demo.vue'),
				meta: {
					title: '电子签名',
					icon: 'signature',
				},
			},
		],
	},
]

const feature = [
	{
		path: '/feature',
		name: 'feature',
		component: Layout,
		meta: {
			title: '功能展示',
			icon: 'feature',
		},
		redirect: '/feature/waves',
		children: [
			{
				path: 'layout-container',
				name: 'featureLayoutContainer',
				component: () => import('@/views/example/feature/layout-container/index.vue'),
				meta: {
					title: '布局容器',
					icon: 'layout',
					copyright: false,
				},
			},
			{
				path: 'waves',
				name: 'featureWaves',
				component: () => import('@/views/example/feature/waves/index.vue'),
				meta: {
					title: '水波纹',
					icon: 'waves',
				},
			},
			{
				path: 'watermark',
				name: 'featureWatermark',
				component: () => import('@/views/example/feature/watermark/index.vue'),
				meta: {
					title: '页面水印',
					icon: 'watermark',
				},
			},
			{
				path: 'leavetips',
				name: 'featureLeavetips',
				component: () => import('@/views/example/feature/leavetips/index.vue'),
				meta: {
					title: '页面离开提醒',
					icon: 'leave',
				},
			},
			{
				path: 'maximize',
				name: 'featureMaximize',
				component: () => import('@/views/example/feature/maximize/index.vue'),
				meta: {
					title: '主页面最大化',
					icon: 'maximize',
				},
			},
			{
				path: 'menuswitch',
				name: 'featureMenuswitch',
				component: () => import('@/views/example/feature/menuswitch/index.vue'),
				meta: {
					title: '主导航切换',
					icon: 'nav',
				},
			},
			{
				path: 'reload',
				name: 'featureReload',
				component: () => import('@/views/example/feature/reload/index.vue'),
				meta: {
					title: '主页面刷新',
					icon: 'ele-refresh',
					cache: true,
				},
			},
			{
				path: 'scroll',
				name: 'featureScroll',
				component: () => import('@/views/example/feature/scroll/index.vue'),
				meta: {
					title: '记录滚动位置',
					icon: 'scroll',
					cache: true,
				},
			},
		],
	},
]

const pages = [
	{
		path: '/pages',
		name: 'pages',
		component: Layout,
		meta: {
			title: '页面展示',
			icon: 'page',
		},
		redirect: '/pages/filtering',
		children: [
			{
				path: 'filtering',
				name: 'pagesFiltering',
				component: () => import('@/views/example/pages/filtering/index.vue'),
				meta: {
					title: '过滤筛选组件',
					icon: 'ele-filter',
				},
			},
			{
				path: 'form',
				name: 'pageForm',
				meta: {
					title: 'Form 表单',
					icon: 'form',
				},
				children: [
					{
						path: 'adapt',
						name: 'pagesFormAdapt',
						component: () => import('@/views/example/pages/form/adapt.vue'),
						meta: {
							title: '表单自适应',
							icon: 'dot',
						},
					},
					{
						path: 'table-rules',
						name: 'pagesFormTableRules',
						component: () => import('@/views/example/pages/form/table-rules.vue'),
						meta: {
							title: '表单表格验证',
							icon: 'dot',
						},
					},
				],
			},
			{
				path: 'table',
				name: 'pageTable',
				meta: {
					title: 'Table 表格',
					icon: 'table',
				},
				children: [
					{
						path: 'full',
						name: 'pagesTableFull',
						component: () => import('@/views/example/pages/table/full/index.vue'),
						meta: {
							title: '完整功能',
							icon: 'dot',
							copyright: false,
						},
					},
				],
			},
		],
	},
]

const plugin = [
	{
		path: '/plugin',
		name: 'plugin',
		component: Layout,
		meta: {
			title: '插件',
			icon: 'plugin',
		},
		redirect: '/plugin/qrcode',
		children: [
			{
				path: 'qrcode',
				name: 'pluginQrcode',
				component: () => import('@/views/example/plugin/qrcode/index.vue'),
				meta: {
					title: '二维码',
					icon: 'qrcode',
				},
			},
			{
				path: 'print',
				name: 'pluginPrint',
				component: () => import('@/views/example/plugin/print/index.vue'),
				meta: {
					title: '打印',
					icon: 'ele-printer',
				},
			},
			{
				path: 'notify',
				name: 'pluginNotify',
				component: () => import('@/views/example/plugin/notify/index.vue'),
				meta: {
					title: '通知',
					icon: 'notify',
				},
			},
			{
				path: 'countup',
				name: 'pluginCountup',
				component: () => import('@/views/example/plugin/countup/index.vue'),
				meta: {
					title: '数字滚动',
					icon: 'ele-odometer',
				},
			},
			{
				path: 'splitpanes',
				name: 'pluginSplitpanes',
				component: () => import('@/views/example/plugin/splitpanes/index.vue'),
				meta: {
					title: '窗格拆分器',
					icon: 'splitpanes',
				},
			},
			{
				path: 'cropper',
				name: 'pluginCropper',
				component: () => import('@/views/example/plugin/cropper/index.vue'),
				meta: {
					title: '图片裁剪',
					icon: 'ele-crop',
				},
			},
			{
				path: 'markdown',
				name: 'pluginMarkdown',
				component: () => import('@/views/example/plugin/markdown/index.vue'),
				meta: {
					title: 'Markdown',
					icon: 'markdown',
				},
			},
		],
	},
]

const breadcrumb = [
	{
		path: '/breadcrumb',
		name: 'breadcrumb',
		component: Layout,
		meta: {
			title: '面包屑导航',
			icon: 'breadcrumb',
		},
		redirect: '/breadcrumb/list1',
		children: [
			{
				path: 'list1',
				name: 'breadcrumbList1',
				component: () => import('@/views/example/breadcrumb/list1/index.vue'),
				meta: {
					title: '列表1（平级模式）',
				},
			},
			{
				path: 'detail1',
				name: 'breadcrumbDetail1',
				component: () => import('@/views/example/breadcrumb/list1/detail.vue'),
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
						component: () => import('@/views/example/breadcrumb/list2/index.vue'),
						meta: {
							title: '列表2（层级模式）',
							sidebar: false,
							breadcrumb: false,
						},
					},
					{
						path: 'detail2',
						name: 'breadcrumbDetail2',
						component: () => import('@/views/example/breadcrumb/list2/detail.vue'),
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
]

const keepAlive = [
	{
		path: '/keep-alive',
		name: 'keepAlive',
		component: Layout,
		meta: {
			title: '页面缓存',
			icon: 'keep-alive',
		},
		redirect: '/keep-alive/page',
		children: [
			{
				path: 'page',
				name: 'keepAlivePage',
				component: () => import('@/views/example/keep-alive/page.vue'),
				meta: {
					title: '页面缓存',
					breadcrumb: false,
				},
			},
			{
				path: 'detail',
				name: 'keepAlivePageDetail',
				component: () => import('@/views/example/keep-alive/detail.vue'),
				meta: {
					title: 'Page 同级详情页',
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
						component: () => import('@/views/example/keep-alive/detail.vue'),
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
				component: () => import('@/views/example/keep-alive/nested/nested.vue'),
				meta: {
					title: '路由多级缓存1',
				},
				children: [
					{
						path: 'nested2',
						name: 'keepAliveNested2',
						component: () => import('@/views/example/keep-alive/nested/nested/nested.vue'),
						meta: {
							title: '路由多级缓存1-1',
						},
						children: [
							{
								path: 'index',
								name: 'keepAliveNestedIndex',
								component: () => import('@/views/example/keep-alive/nested/nested/nested/index.vue'),
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
]

const multilevel = [
	{
		path: '/multilevel',
		name: 'multilevel',
		component: Layout,
		meta: {
			title: '多级导航',
			icon: 'nested',
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
						component: () => import('@/views/example/multilevel/menu1/menu1-1/index.vue'),
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
						component: () => import('@/views/example/multilevel/menu2/menu2-1/index.vue'),
						meta: {
							title: '导航2-1',
						},
					},
				],
			},
		],
	},
]

const link = [
	{
		path: '/link',
		component: Layout,
		redirect: '/link/gitee',
		name: 'externalLink',
		meta: {
			title: '外链',
			icon: 'link',
		},
		children: [
			{
				path: 'gitee',
				redirect: '',
				name: 'externalLinkGitee',
				meta: {
					title: 'Gitee 仓库',
					link: 'https://gitee.com/hooray/fantastic-admin',
				},
			},
			{
				path: 'github',
				redirect: '',
				name: 'externalLinkGithub',
				meta: {
					title: 'Github 仓库',
					link: 'https://github.com/hooray/fantastic-admin',
				},
			},
		],
	},
]

export default [...icons, ...permission, ...components, ...feature, ...pages, ...plugin, ...breadcrumb, ...keepAlive, ...multilevel, ...link]
