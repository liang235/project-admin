/*
 * @Description: 侧边栏数据
 * @Date: 2022-11-02 10:38:13
 * @LastEditTime: 2022-12-02 15:40:08
 */
import { resolveRoutePath } from '@/utils/tools.js' // 自定义工具
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useRouteStore from '@/store/modules/route.js' // 路由数据

/**
 * @description: 获取路径
 * @param {*} routes
 * @param {*} rootPath
 * @return {*}
 */
function getDeepestPath(menu, rootPath = '') {
    let retnPath = ''
    if (menu.children) {
        const item = menu.children.find((item) => item.meta?.sidebar !== false)
        if (item) {
            retnPath = getDeepestPath(item, resolveRoutePath(rootPath, menu.path))
        } else {
            retnPath = getDeepestPath(menu.children[0], resolveRoutePath(rootPath, menu.path))
        }
    } else {
        retnPath = resolveRoutePath(rootPath, menu.path)
    }
    return retnPath
}

// 处理次导航是否默认展开
function getDefaultOpenedPaths(menus, rootPath = '') {
    const defaultOpenedPaths = []
    menus.forEach((item) => {
        if (item.meta?.defaultOpened && item.children) {
            defaultOpenedPaths.push(resolveRoutePathss(rootPath, item.path))
            const childrenDefaultOpenedPaths = getDefaultOpenedPaths(item.children, resolveRoutePathss(rootPath, item.path))
            if (childrenDefaultOpenedPaths.length > 0) {
                defaultOpenedPaths.push(...childrenDefaultOpenedPaths)
            }
        }
    })
    return defaultOpenedPaths
}

// 唯一ID menu
const useMenuStore = defineStore('menu', {
    state: () => ({
        menus: [], // 完整导航数据
        actived: 0 // 切换主导航
    }),
    getters: {
        // 完整导航数据
        allMenus() {
            const settingsStore = useSettingsStore()
            let menus = [
                {
                    meta: {},
                    children: []
                }
            ]
            const routeStore = useRouteStore()
            if (settingsStore.menu.menuMode === 'single') {
                menus[0].children = []
                routeStore.routes.forEach((item) => {
                    menus[0].children?.push(...item.children)
                })
            } else {
                menus = routeStore.routes
            }
            return menus
        },

        // 次导航数据
        sidebarMenus() {
            return this.allMenus.length > 0 ? this.allMenus[this.actived].children : []
        },

        // 次导航里第一个导航的路径
        sidebarMenusFirstDeepestPath() {
            return this.allMenus.length > 0 ? getDeepestPath(this.sidebarMenus[0]) : '/'
        },

        // 次导航是否默认展开
        defaultOpenedPaths() {
            let defaultOpenedPaths = []
            defaultOpenedPaths = getDefaultOpenedPaths(this.sidebarMenus)
            return defaultOpenedPaths
        }
    },
    actions: {
        // 切换主导航
        setActived(data) {
            if (typeof data === 'number') {
                // 如果是 number 类型，则认为是主导航的索引
                this.actived = data
            } else {
                // 如果是 string 类型，则认为是路由，需要查找对应的主导航索引
                this.allMenus.map((item, index) => {
                    if (
                        item.children.some((r) => {
                            return data.indexOf(r.path + '/') === 0 || data == r.path
                        })
                    ) {
                        this.actived = index
                    }
                })
            }
        }
    }
})

export default useMenuStore
