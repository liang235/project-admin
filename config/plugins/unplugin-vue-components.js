/*
 * @Description: 按需导入
 * @Date: 2022-09-23 14:47:28
 * @LastEditTime: 2022-12-29 21:04:33
 */
import Components from 'unplugin-vue-components/vite' // 按需导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 按需导入 ElementPlus

export default function createComponents() {
	return Components({
		// 自定义组件的解析器
		resolvers: [
			// 自动导入 Element Plus 组件
			ElementPlusResolver(),
		],
		// 用于搜索组件的目录的相对路径
		dirs: ['src/components'],
		deep: true,
		// 变换目标的滤波器
		include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
	})
}
