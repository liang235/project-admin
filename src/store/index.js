/*
 * @Description: pinia 数据共享
 * @Date: 2022-09-23 15:51:15
 * @LastEditTime: 2022-09-23 15:58:15
 */
// https://pinia.vuejs.org/
import { createPinia } from 'pinia' // pinia
import piniaPluginPersist from 'pinia-plugin-persist' // pinia 存储持久化插件

// 创建 pinia
const pinia = createPinia()

// 使用 piniaPluginPersist 插件
pinia.use(piniaPluginPersist)

// 导出
export default pinia
