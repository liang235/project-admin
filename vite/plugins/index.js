/*
 * @Description: vite 使用插件集合
 * @Date: 2022-12-22 20:48:35
 * @LastEditTime: 2022-12-22 20:50:25
 */
import vue from '@vitejs/plugin-vue' // 使 vite 支持 vue 开发

// 创建 vite 插件实例化
export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = []
    vitePlugins.push(vue())


    return vitePlugins
}
