/*
 * @Description: 主页面操作
 * 依靠 unplugin-auto-import 自动导出
 */
import router from '@/router/index.js' // 路由

export default function useMainPage() {
	// 刷新页面
	function reload() {
		router.push({
			name: 'reload',
		})
	}

	return {
		reload,
	}
}
