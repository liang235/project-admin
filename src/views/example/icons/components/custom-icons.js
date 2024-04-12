/*
 * @Description: 自定义 svg 图标格式化
 */
let customIcons = []
const svgFiles = import.meta.glob('@/assets/icons/*.svg')
for (const path in svgFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	customIcons = [...customIcons, moduleName]
}

export default customIcons
