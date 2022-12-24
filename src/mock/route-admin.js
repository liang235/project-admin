export default {
    error: '',
    status: 1,
    data: [
        {
            path: 1,
            meta: {
                title: '演示',
                icon: 'example',
                auth: ['admin']
            },
            children: [
                {
                    path: '/icons',
                    component: 'Layout',
                    meta: {
                        title: 'icons 图标',
                        icon: 'icons'
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
                                activeMenu: '/icons'
                            }
                        }
                    ]
                },

                {
                    path: '/permission',
                    component: 'Layout',
                    meta: {
                        title: '权限验证',
                        icon: 'ele-key'
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
                                activeMenu: '/permission'
                            }
                        }
                    ]
                },

                {
                    path: '/components',
                    name: 'components',
                    component: 'Layout',
                    meta: {
                        title: '扩展组件',
                        icon: 'component'
                    },
                    redirect: '/components/svg-icon',
                    children: [
                        {
                            path: 'svg-icon',
                            name: 'componentSvgIcon',
                            component: 'example/components/svg-icon-demo.vue',
                            meta: {
                                title: 'SVG Icon',
                                icon: 'icons'
                            }
                        },
                        {
                            path: 'page-header',
                            name: 'componentPageHeader',
                            component: 'example/components/page-header-demo.vue',
                            meta: {
                                title: '页头',
                                icon: 'page-header'
                            }
                        },
                        {
                            path: 'page-main',
                            name: 'componentPageMain',
                            component: 'example/components/page-main-demo.vue',
                            meta: {
                                title: '内容快',
                                icon: 'page-main'
                            }
                        },
                        {
                            path: 'fixed-bottom',
                            name: 'componentFixedBottom',
                            component: 'example/components/fixed-bottom-demo.vue',
                            meta: {
                                title: '固定底部操作栏',
                                icon: 'fixed-bottom'
                            }
                        },
                        {
                            path: 'search-bar',
                            name: 'componentSearchBar',
                            component: 'example/components/search-bar-demo.vue',
                            meta: {
                                title: '搜索面板',
                                icon: 'ele-search'
                            }
                        },
                        {
                            path: 'wang-editor',
                            name: 'componentsWangEditor',
                            component: 'example/components/wang-editor-demo.vue',
                            meta: {
                                title: '富文本编辑器',
                                icon: 'wang-editor'
                            }
                        },
                        {
                            path: 'image-preview',
                            name: 'componentImagePreview',
                            component: 'example/components/image-preview-demo.vue',
                            meta: {
                                title: '图片预览',
                                icon: 'ele-view'
                            }
                        },
                        {
                            path: 'upload',
                            name: 'componentUpload',
                            component: 'example/components/upload-demo.vue',
                            meta: {
                                title: '上传文件',
                                icon: 'ele-upload-filled'
                            }
                        },
                        {
                            path: 'copper',
                            name: 'componentCopper',
                            component: 'example/components/cropper-demo.vue',
                            meta: {
                                title: '图片裁剪',
                                icon: 'ele-crop'
                            }
                        },
                        {
                            path: 'pcas-cascader',
                            name: 'componentPcas-Cascader',
                            component: 'example/components/pcas-cascader-demo.vue',
                            meta: {
                                title: '省市区街道联动',
                                icon: 'city'
                            }
                        },
                        {
                            path: 'colorful-card',
                            name: 'componentColorfulCard',
                            component: 'example/components/colorful-card-demo.vue',
                            meta: {
                                title: '多彩渐变卡片',
                                icon: 'colorful'
                            }
                        },
                        {
                            path: 'signature-pad',
                            name: 'componentSignaturePad',
                            component: 'example/components/sign-canvas-demo.vue',
                            meta: {
                                title: '电子签名',
                                icon: 'signature'
                            }
                        }
                    ]
                },

                {
                    path: '/feature',
                    name: 'feature',
                    component: 'Layout',
                    meta: {
                        title: '功能展示',
                        icon: 'feature'
                    },
                    redirect: '/feature/waves',
                    children: [
                        {
                            path: 'layout-container',
                            name: 'featureLayoutContainer',
                            component: 'example/feature/layout-container/index.vue',
                            meta: {
                                title: '布局容器',
                                icon: 'layout',
                                copyright: false
                            }
                        },
                        {
                            path: 'waves',
                            name: 'featureWaves',
                            component: 'example/feature/waves/index.vue',
                            meta: {
                                title: '水波纹',
                                icon: 'waves'
                            }
                        },
                        {
                            path: 'watermark',
                            name: 'featureWatermark',
                            component: 'example/feature/watermark/index.vue',
                            meta: {
                                title: '页面水印',
                                icon: 'watermark'
                            }
                        },
                        {
                            path: 'leavetips',
                            name: 'featureLeavetips',
                            component: 'example/feature/leavetips/index.vue',
                            meta: {
                                title: '页面离开提醒',
                                icon: 'leave'
                            }
                        },
                        {
                            path: 'maximize',
                            name: 'featureMaximize',
                            component: 'example/feature/maximize/index.vue',
                            meta: {
                                title: '主页面最大化',
                                icon: 'maximize'
                            }
                        },
                        {
                            path: 'menuswitch',
                            name: 'featureMenuswitch',
                            component: 'example/feature/menuswitch/index.vue',
                            meta: {
                                title: '主导航切换',
                                icon: 'nav'
                            }
                        },
                        {
                            path: 'reload',
                            name: 'featureReload',
                            component: 'example/feature/reload/index.vue',
                            meta: {
                                title: '主页面刷新',
                                icon: 'ele-refresh',
                                cache: true
                            }
                        },
                        {
                            path: 'scroll',
                            name: 'featureScroll',
                            component: 'example/feature/scroll/index.vue',
                            meta: {
                                title: '记录滚动位置',
                                icon: 'scroll',
                                cache: true
                            }
                        }
                    ]
                },

                {
                    path: '/pages',
                    name: 'pages',
                    component: Layout,
                    meta: {
                        title: '页面展示',
                        icon: 'page'
                    },
                    redirect: '/pages/filtering',
                    children: [
                        {
                            path: 'filtering',
                            name: 'pagesFiltering',
                            component: 'example/pages/filtering/index.vue',
                            meta: {
                                title: '过滤筛选组件',
                                icon: 'ele-filter'
                            }
                        },
                        {
                            path: 'form',
                            name: 'pageForm',
                            meta: {
                                title: '表单页面',
                                icon: 'form'
                            },
                            children: [
                                {
                                    path: 'adapt',
                                    name: 'pagesFormAdapt',
                                    component: 'example/pages/form/adapt.vue',
                                    meta: {
                                        title: '表单自适应',
                                        icon: 'dot'
                                    }
                                },
                                {
                                    path: 'table-rules',
                                    name: 'pagesFormTableRules',
                                    component: 'example/pages/form/table-rules.vue',
                                    meta: {
                                        title: '表单表格验证',
                                        icon: 'dot'
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    path: '/plugin',
                    name: 'plugin',
                    component: 'Layout',
                    meta: {
                        title: '插件',
                        icon: 'plugin'
                    },
                    redirect: '/plugin/qrcode',
                    children: [
                        {
                            path: 'qrcode',
                            name: 'pluginQrcode',
                            component: 'example/plugin/qrcode/index.vue',
                            meta: {
                                title: '二维码',
                                icon: 'qrcode'
                            }
                        },
                        {
                            path: 'print',
                            name: 'pluginPrint',
                            component: 'example/plugin/print/index.vue',
                            meta: {
                                title: '打印',
                                icon: 'ele-printer'
                            }
                        },
                        {
                            path: 'notify',
                            name: 'pluginNotify',
                            component: 'example/plugin/notify/index.vue',
                            meta: {
                                title: '通知',
                                icon: 'notify'
                            }
                        },
                        {
                            path: 'countup',
                            name: 'pluginCountup',
                            component: 'example/plugin/countup/index.vue',
                            meta: {
                                title: '数字滚动',
                                icon: 'ele-odometer'
                            }
                        },
                        {
                            path: 'splitpanes',
                            name: 'pluginSplitpanes',
                            component: 'example/plugin/splitpanes/index.vue',
                            meta: {
                                title: '窗格拆分器',
                                icon: 'splitpanes'
                            }
                        },
                        {
                            path: 'cropper',
                            name: 'pluginCropper',
                            component: 'example/plugin/cropper/index.vue',
                            meta: {
                                title: '图片裁剪',
                                icon: 'ele-crop'
                            }
                        },
                        {
                            path: 'markdown',
                            name: 'pluginMarkdown',
                            component: 'example/plugin/markdown/index.vue',
                            meta: {
                                title: 'Markdown',
                                icon: 'markdown'
                            }
                        }
                    ]
                },

                {
                    path: '/breadcrumb',
                    name: 'breadcrumb',
                    component: 'Layout',
                    meta: {
                        title: '面包屑导航',
                        icon: 'breadcrumb'
                    },
                    redirect: '/breadcrumb/list1',
                    children: [
                        {
                            path: 'list1',
                            name: 'breadcrumbList1',
                            component: 'example/breadcrumb/list1/index.vue',
                            meta: {
                                title: '列表1（平级模式）'
                            }
                        },
                        {
                            path: 'detail1',
                            name: 'breadcrumbDetail1',
                            component: 'example/breadcrumb/list1/detail.vue',
                            meta: {
                                title: '详情1',
                                sidebar: false,
                                activeMenu: '/breadcrumb/list1'
                            }
                        },
                        {
                            path: 'list2',
                            name: 'breadcrumbList2',
                            redirect: '/breadcrumb/list2',
                            meta: {
                                title: '列表2（层级模式）'
                            },
                            children: [
                                {
                                    path: '',
                                    component: 'example/breadcrumb/list2/index.vue',
                                    meta: {
                                        title: '列表2（层级模式）',
                                        sidebar: false,
                                        breadcrumb: false
                                    }
                                },
                                {
                                    path: 'detail2',
                                    name: 'breadcrumbDetail2',
                                    component: 'example/breadcrumb/list2/detail.vue',
                                    meta: {
                                        title: '详情2',
                                        sidebar: false,
                                        activeMenu: '/breadcrumb/list2'
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    path: '/keep-alive',
                    name: 'keepAlive',
                    component: 'Layout',
                    meta: {
                        title: '页面缓存',
                        icon: 'keep-alive'
                    },
                    redirect: '/keep-alive/page',
                    children: [
                        {
                            path: 'page',
                            name: 'keepAlivePage',
                            component: 'example/keep-alive/page.vue',
                            meta: {
                                title: '页面缓存',
                                breadcrumb: false
                            }
                        },
                        {
                            path: 'detail',
                            name: 'keepAlivePageDetail',
                            component: 'example/keep-alive/detail.vue',
                            meta: {
                                title: '同级路由',
                                sidebar: false
                            }
                        },
                        {
                            path: 'nested',
                            redirect: '/keep-alive/nested/detail',
                            meta: {
                                title: '嵌套路由',
                                sidebar: false
                            },
                            children: [
                                {
                                    path: 'detail',
                                    name: 'keepAliveNestedDetail',
                                    component: 'example/keep-alive/detail.vue',
                                    meta: {
                                        title: '嵌套路由',
                                        activeMenu: '/keep-alive/page'
                                    }
                                }
                            ]
                        },
                        {
                            path: 'nested1',
                            name: 'keepAliveNested1',
                            component: 'example/keep-alive/nested/nested.vue',
                            meta: {
                                title: '路由多级缓存1'
                            },
                            children: [
                                {
                                    path: 'nested2',
                                    name: 'keepAliveNested2',
                                    component: 'example/keep-alive/nested/nested/nested.vue',
                                    meta: {
                                        title: '路由多级缓存1-1'
                                    },
                                    children: [
                                        {
                                            path: 'index',
                                            name: 'keepAliveNestedIndex',
                                            component: 'example/keep-alive/nested/nested/nested/index.vue',
                                            meta: {
                                                title: '路由多级缓存1-1-1',
                                                cache: true
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    path: '/multilevel',
                    name: 'multilevel',
                    component: 'Layout',
                    meta: {
                        title: '多级导航',
                        icon: 'nested'
                    },
                    redirect: '/multilevel/menu1',
                    children: [
                        {
                            path: 'menu1',
                            name: 'multilevelMenu1',
                            meta: {
                                title: '导航1'
                            },
                            children: [
                                {
                                    path: 'menu1-1',
                                    name: 'multilevelMenu1-1',
                                    component: 'example/multilevel/menu1/menu1-1/index.vue',
                                    meta: {
                                        title: '导航1-1'
                                    }
                                }
                            ]
                        },
                        {
                            path: 'menu2',
                            name: 'multilevelMenu2',
                            meta: {
                                title: '导航2'
                            },
                            children: [
                                {
                                    path: 'menu2-1',
                                    name: 'multilevelMenu2-1',
                                    component: 'example/multilevel/menu2/menu2-1/index.vue',
                                    meta: {
                                        title: '导航2-1'
                                    }
                                }
                            ]
                        }
                    ]
                },

                {
                    path: '/link',
                    component: 'Layout',
                    redirect: '/link/gitee',
                    name: 'externalLink',
                    meta: {
                        title: '外链',
                        icon: 'link'
                    },
                    children: [
                        {
                            path: 'gitee',
                            redirect: '',
                            name: 'externalLinkGitee',
                            meta: {
                                title: 'Gitee 仓库',
                                link: 'https://gitee.com/hooray/fantastic-admin'
                            }
                        },
                        {
                            path: 'github',
                            redirect: '',
                            name: 'externalLinkGithub',
                            meta: {
                                title: 'Github 仓库',
                                link: 'https://github.com/hooray/fantastic-admin'
                            }
                        }
                    ]
                }
            ]
        },

        {
            path: 2,
            meta: {
                title: '系统',
                icon: 'system'
            },
            children: [
                {
                    path: '/system',
                    component: 'Layout',
                    name: 'system',
                    meta: {
                        title: '系统设置',
                        icon: 'system'
                    },
                    redirect: '/system/user',
                    children: [
                        {
                            path: 'menu',
                            name: 'systemMenu',
                            component: 'system/menu/index.vue',
                            meta: {
                                title: '菜单管理'
                            }
                        },
                        {
                            path: 'role',
                            name: 'systemRole',
                            component: 'system/role/index.vue',
                            meta: {
                                title: '角色管理'
                            }
                        },
                        {
                            path: 'user',
                            name: 'systemUser',
                            component: 'system/user/index.vue',
                            meta: {
                                title: '用户管理'
                            }
                        },
                        {
                            path: 'dept',
                            name: 'systemDept',
                            component: 'system/dept/index.vue',
                            meta: {
                                title: '部门管理'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
