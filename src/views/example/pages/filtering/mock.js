// 导航数据
export const filtering = [
    {
        id: 0,
        title: '权限',
        value: 'permission',
        isMore: false, // 展开/收起状态
        isShowMore: false, // 是否显示展开/收起切换按钮
        children: [
            {
                id: '01',
                label: '全部',
                value: 'all',
                active: true
            },
            {
                id: '02',
                label: '管理员',
                value: 'admin',
                active: false
            },
            {
                id: '03',
                label: '普通用户',
                value: 'ordinary',
                active: false
            }
        ]
    },
    {
        id: 1,
        title: '布局',
        value: 'layout',
        isMore: false,
        isShowMore: false,
        children: [
            {
                id: 11,
                label: '全部',
                value: 'all',
                active: true
            },
            {
                id: 12,
                label: '默认',
                value: 'defaults',
                active: false
            },
            {
                id: 13,
                label: '经典',
                value: 'classic',
                active: false
            },
            {
                id: 14,
                label: '横向',
                value: 'transverse',
                active: false
            },
            {
                id: 15,
                label: '分栏',
                value: 'columns',
                active: false
            }
        ]
    },
    {
        id: 2,
        title: '配置',
        value: 'settings',
        isMore: false,
        isShowMore: false,
        children: [
            {
                id: 21,
                label: '全部',
                value: 'all',
                active: true
            },
            {
                id: 22,
                label: '开启 Breadcrumb',
                value: 'Breadcrumb',
                active: false
            },
            {
                id: 23,
                label: '开启 Tags-View',
                value: 'Tags-View',
                active: false
            },
            {
                id: 24,
                label: '固定 Header',
                value: 'Header',
                active: false
            },
            {
                id: 25,
                label: '侧边栏 Logo',
                value: 'Logo',
                active: false
            },
            {
                id: 26,
                label: '开启折叠 NavMenu',
                value: 'NavMenu',
                active: false
            },
            {
                id: 27,
                label: '开启一个 NavMenu 展开',
                value: 'FirstNavMenu',
                active: false
            },
            {
                id: 28,
                label: '登录用户头像',
                value: 'UserImg',
                active: false
            }
        ]
    }
]

// 列表数据
export const filterList = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
]
