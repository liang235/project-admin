import { defaultsDeep } from 'lodash-es' // js 工具库
import settingsDefault from '@/settings.default.js' // 系统默认配置
import settingsCustom from '@/settings.custom.js' // 修改系统默认配置

// 唯一ID settings
const useSettingsStore = defineStore('settings', {
    state: () => ({
        ...defaultsDeep(settingsCustom, settingsDefault),

        // 侧边栏是否收起（用于记录 pc 模式下最后的状态）
        subMenuCollapseLastStatus: settingsCustom.menu.subMenuCollapse,

        // 显示模式，支持：mobile、pc
        mode: 'pc',

        // 最大化状态
        mainPageMax: false
    }),
    actions: {
        // 设置访问模式
        setMode(width) {
            if (this.layout.enableMobileAdaptation) {
                // 先判断 UA 是否为移动端设备（手机&平板）
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    this.mode = 'mobile'
                } else {
                    // 如果为桌面设备，再根据页面宽度判断是否需要切换为移动端展示
                    this.mode = width < 992 ? 'mobile' : 'pc'
                }
            } else {
                this.mode = 'pc'
            }
        },

        // 切换侧边栏导航展开/收起
        toggleSidebarCollapse() {
            // this 指向 state
            this.menu.subMenuCollapse = !this.menu.subMenuCollapse

            if (this.mode === 'pc') {
                this.subMenuCollapseLastStatus = !this.subMenuCollapseLastStatus
            }
        },

        // 切换最大化状态
        toggleMainPageMax(bool) {
            this.mainPageMax = bool
        }
    },
    // 开启数据缓存，根据 pinia-plugin-persist 插件
    persist: {
        enabled: true,
        strategies: [
            {
                // 指定 Storage 的 key，默认是根据模块的 ID
                key: 'settings',

                // 存储默认走的是 sessionStorage
                storage: localStorage // 使用 localStorage 存储
            }
        ]
    }
})

export default useSettingsStore
