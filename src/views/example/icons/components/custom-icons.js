/*
 * @Description: 自定义 svg 图标格式化
 * @Date: 2022-06-10 16:11:29
 * @LastEditTime: 2022-12-30 17:05:22
 */
let customIcons = []
const svgFiles = import.meta.globEager('@/assets/icons/*.svg')
for (const path in svgFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	customIcons = [...customIcons, moduleName]
}

export default customIcons
