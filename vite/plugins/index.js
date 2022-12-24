/*
 * @Description: vite 使用插件集合
 * @Date: 2022-09-23 14:25:26
 * @LastEditTime: 2022-12-22 21:54:00
 */
import vue from '@vitejs/plugin-vue' // 使 vite 支持 vue 开发
import createAutoImport from './unplugin-auto-import.js' // 自动导入
import createComponents from './unplugin-vue-components.js' // 按需导入 ElementPlus
import createUnpluginIcons from './unplugin-icons.js' // 自动导入图标
import createSetupExtend from './vite-plugin-vue-setup-extend.js' // 让 vue 脚本设置语法支持 name 属性
import createSvgIcon from './vite-plugin-svg-icons.js' // vite 中使用 svg 图标
import createHtml from './vite-plugin-html.js' // 针对 index.html 提供压缩和基于 ejs 模板等功能
import createInspector from './vite-plugin-vue-inspector.js' // 从浏览器跳转到代码所在的位置
import createCompression from './vite-plugin-compression.js' // 打包压缩

// 创建 vite 插件实例化
export default function createVitePlugins(viteEnv, isBuild = false) {
	const vitePlugins = []
	vitePlugins.push(vue())
	vitePlugins.push(createAutoImport())
	vitePlugins.push(createComponents())
	vitePlugins.push(createUnpluginIcons())
	vitePlugins.push(createSetupExtend())
	vitePlugins.push(createSvgIcon())
	vitePlugins.push(createHtml(viteEnv, isBuild))
	vitePlugins.push(createInspector())
	vitePlugins.push(createCompression())

	return vitePlugins
}
