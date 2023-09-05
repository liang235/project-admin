/*
 * @Description: 侧边栏操作
 * 依靠 unplugin-auto-import 自动导出
 */
import router from '@/router/index.js' // 路由
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据

export default function useMenu() {
	// 定义 pinia
	const settingsStore = useSettingsStore()
	const menuStore = useMenuStore()

	function switchTo(index) {
		menuStore.setActived(index)
		// 切换主导航同时跳转页面
		if (settingsStore.menu.switchMainMenuAndPageJump) {
			router.push(menuStore.sidebarMenusFirstDeepestPath)
		}
	}

	return {
		switchTo,
	}
}
