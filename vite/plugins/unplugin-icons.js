/*
 * @Description: 自动导入 ElementPlus 图标
 * @Date: 2022-10-26 09:32:05
 * @LastEditTime: 2022-11-22 10:59:16
 */
import Icons from 'unplugin-icons/vite'

export default function createUnpluginIcons() {
	return Icons({
		autoInstall: true,
	})
}
