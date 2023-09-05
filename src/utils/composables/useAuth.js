/*
 * @Description: 权限验证
 * 依靠 unplugin-auto-import 自动导出
 */
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useUserStore from '@/store/modules/user.js' // 用户数据'

export default function useAuth() {
	// 是否有权限
	function hasPermission(permission) {
		const settingsStore = useSettingsStore()
		const userStore = useUserStore()
		if (settingsStore.app.enablePermission) {
			return userStore.permissions.some((v) => {
				return v === permission
			})
		}
		return true
	}

	/**
	 * @description: 单权限验证
	 * @description: <button v-auth="'department.create'">新增部门</button>
	 * @description: 多权限验证，用户只要具备其中任何一个权限，则验证通过
	 * @description: <button v-auth="['department.create', 'department.edit']">新增部门</button>
	 */
	function auth(value) {
		let auth
		if (typeof value === 'string') {
			auth = hasPermission(value)
		} else {
			auth = value.some((item) => {
				return hasPermission(item)
			})
		}
		return auth
	}

	/**
	 * @description: 多权限验证，用户必须具备全部权限，才验证通过
	 * @description: <button v-auth-all="['department.create', 'department.edit']">新增部门</button>
	 */
	function authAll(value) {
		const auth = value.every((item) => {
			return hasPermission(item)
		})
		return auth
	}

	return {
		auth,
		authAll,
	}
}
