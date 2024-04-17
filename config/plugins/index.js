/*
 * @Description: vite 使用插件集合
 */
import vue from '@vitejs/plugin-vue'
import createViteJsx from './vite-plugin-vue-jsx'
import createViteLegacy from './vite-plugin-legacy'
import createDevtools from './vite-plugin-vue-devtools'
import createConsole from './unplugin-turbo-console'
import createAutoImport from './unplugin-auto-import.js'
import createComponents from './unplugin-vue-components.js'
import createSetupExtend from './vite-plugin-vue-setup-extend.js'
import createSvgIcon from './vite-plugin-svg-icons.js'
import createInspector from './vite-plugin-vue-inspector.js'
import createCompression from './vite-plugin-compression.js'

// 创建 vite 插件实例化
export default function createVitePlugins(viteEnv, isBuild = false) {
	const vitePlugins = []
	vitePlugins.push(vue())
	vitePlugins.push(createViteJsx())
	vitePlugins.push(createViteLegacy())
	vitePlugins.push(createDevtools(viteEnv))
	vitePlugins.push(createConsole())
	vitePlugins.push(createAutoImport())
	vitePlugins.push(createComponents())
	vitePlugins.push(createSetupExtend())
	vitePlugins.push(createSvgIcon())
	vitePlugins.push(createInspector())
	vitePlugins.push(createCompression())

	return vitePlugins
}
