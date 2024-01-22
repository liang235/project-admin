/*
 * @Description: vite 使用插件集合
 */
import vue from '@vitejs/plugin-vue'
import createAutoImport from './unplugin-auto-import.js'
import createComponents from './unplugin-vue-components.js'
import createSetupExtend from './vite-plugin-vue-setup-extend.js'
import createSvgIcon from './vite-plugin-svg-icons.js'
import createInspector from './vite-plugin-vue-inspector.js'
import createCompression from './vite-plugin-compression.js'
import createEslint from './vite-plugin-eslint.js'
import createStylelint from './vite-plugin-stylelint.js'

// 创建 vite 插件实例化
export default function createVitePlugins(_viteEnv, _isBuild = false) {
	const vitePlugins = []
	vitePlugins.push(vue())
	vitePlugins.push(createAutoImport())
	vitePlugins.push(createComponents())
	vitePlugins.push(createSetupExtend())
	vitePlugins.push(createSvgIcon())
	vitePlugins.push(createInspector())
	vitePlugins.push(createCompression())
	vitePlugins.push(createEslint())
	vitePlugins.push(createStylelint())

	return vitePlugins
}
