/*
 * @Description: 全局系统配置
 * @Description: 该文件为系统默认配置，请勿修改！！！
 * @Description: 在 ./settings.custom.js 中修改
 * @Date: 2022-10-10 09:34:58
 * @LastEditTime: 2022-12-17 22:36:12
 */
const globalSettings = {
    // 应用程序
    app: {
        // ElementPlus 颜色主题
        elePrimaryColor: '#409EFF',

        /**
         * 高亮模式和黑暗模式，可选值为 light、dark
         * 不管是高亮模式还是黑暗模式，都是黑白色之间的切换，这种主题风格对于有色盲的用户群体而言是非常有友好的
         */
        colorScheme: 'light',

        // 是否开启灰色色调
        grayscale: false,

        // Element 组件默认尺寸，支持：large、default、small
        elementSize: 'default',

        // 是否开启权限验证功能
        enablePermission: false,

        // 是否开启载入进度条
        enableProgress: true,

        // 是否开启动态标题
        enableDynamicTitle: true,

        // 是否开启页面最大化
        mainPageMax: false,

        // 页面水印
        watermark: false,

        // 水印文案
        wartermarkText: 'Project-Admin',

        /**
         * 路由数据来源
         * frontend 前端
         * backend 后端
         */
        routeBaseOn: 'frontend'
    },

    // 主页
    home: {
        // 是否开启
        enable: true,

        // 主页名称
        title: '主页'
    },

    // 布局
    layout: {
        // 是否开启移动端适配，开启后当页面宽度小于 992px 时自动切换为移动端展示
        enableMobileAdaptation: true,

        /**
         * 路由数据来源
         * adaption 自适应
         * adaption-min-width 自适应（有最小宽度）
         * center 定宽居中
         * center-max-width 定宽居中（有最大宽度）
         */
        appWidthMode: 'adaption',
    },

    // 导航栏
    menu: {
        /**
         * 导航栏模式
         * side 侧边栏模式（含主导航）
         * head 顶部模式
         * single 侧边栏模式（无主导航）
         */
        menuMode: 'side',

        /**
         * 导航栏填充风格
         * '' 默认
         * nav-fill-radius 圆角
         */
        menuStyle: '',

        /**
         * 导航栏激活风格
         * '' 默认
         * nav-active-arrow 箭头
         * nav-active-line 线条
         * nav-active-dot 点
         */
        menuActiveStyle: '',

        // 切换主导航时，页面自动跳转至该主导航下，次导航里第一个导航
        switchMainMenuAndPageJump: false,

        // 次导航只保持一个子项的展开
        subMenuUniqueOpened: false,

        // 次导航是否收起
        subMenuCollapse: false,

        // 是否开启次导航的展开/收起按钮
        enableSubMenuCollapseButton: true,

        // 是否开启主导航切换快捷键
        enableHotkeys: true
    },

    // 顶栏
    topbar: {
        // 是否开启
        enable: true,

        /**
         * 模式
         * @默认值 static 静止，跟随页面滚动
         * @可选值 fixed 固定，不跟随页面滚动，始终固定在顶部
         * @可选值 sticky 粘性，页面往下滚动时隐藏，往上滚动时显示
         */
        mode: 'fixed',
    },

    // 工具栏
    toolbar: {
        // 是否开启消息通知
        enableNotice: true,

        // 是否开启全屏
        enableFullscreen: true,

        // 是否开启页面刷新
        enablePageReload: true,

        // 是否开启高亮模式和黑暗模式
        enableColorScheme: true,

        // 是否开启应用配置（建议在生产环境关闭）
        enableAppSetting: true
    },

    // 导航搜素
    navSearch: {
        // 是否开启
        enable: true,

        // 是否开启导航搜索快捷键
        enableHotkeys: true,
    },

    // 面包屑导航
    breadcrumb: {
        // 是否开启
        enable: true,

        /**
         * 模式
         * @默认值 default 默认风格
         * @可选值 modern 现代风格
         */
        mode: 'default',
    },

    // 底部版权
    copyright: {
        // 是否开启，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
        enable: true,

        // 日期
        dates: '2020-2022',

        // 公司
        company: 'Project-Admin',

        // 网站
        website: 'https://fantastic-admin.netlify.app',

        // 信息备案
        beian: '信息备案'
    }
}

export default globalSettings