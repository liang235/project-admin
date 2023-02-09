/*
 * @Description: 主页面操作
 * 依靠 unplugin-auto-import 自动导出
 * @Date: 2022-11-08 16:03:34
 * @LastEditTime: 2023-02-06 14:47:01
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
