/*
 * @Description: vite 中使用 svg 图标
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // vite 使用 svg 图标
import path from 'node:path' // node 路径插件

export default function createSvgIcon() {
	return createSvgIconsPlugin({
		// 指定需要缓存的图标文件夹
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		// 指定 symbolId 格式
		symbolId: 'icon-[dir]-[name]',
	})
}
