/*
 * @Description: 刷新页面
 * 依靠 unplugin-auto-import 自动导出
 * @Date: 2022-11-08 16:03:34
 * @LastEditTime: 2022-12-04 16:50:09
 */
import router from '@/router/index.js' // 路由

export default function useMainPage() {
	function reload() {
		router.push({
			name: 'reload',
		})
	}

	return {
		reload,
	}
}
