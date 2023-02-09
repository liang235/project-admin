/*
 * @Description: 自动导入 composition api
 * @Date: 2022-09-23 14:45:38
 * @LastEditTime: 2023-02-09 11:33:28
 */
import AutoImport from 'unplugin-auto-import/vite' // 自动导入 composition api
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 自动导入 ElementPlus

export default function createAutoImport() {
	return AutoImport({
		imports: ['vue', 'vue-router', 'pinia'],
		/**
		 * 自定义解析器，与 unplug-vue-components 兼容
		 * 参见 https://github.com/antfu/unplugin-auto-import/pull/23/
		 */
		resolvers: [
			// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
			// ElementPlusResolver(),
		],
		/**
		 * 自动导入目录下的模块导出
		 * 默认情况下，它只扫描目录下的一层模块
		 */
		dirs: ['./src/utils/composables/**'],
		eslintrc: {
			// 默认false, true启用。false生成一次就可以，避免每次工程启动都生成
			enabled: true,
			filepath: './.eslintrc-auto-import.json', // 生成json文件
			globalsPropValue: true,
		},
	})
}
