/*
 * @Description: 用户数据
 * @Date: 2022-10-10 09:36:12
 * @LastEditTime: 2022-12-03 15:52:02
 */
import { login, getPermission } from '@/api/user.js' // 用户 api
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据
import useRouteStore from '@/store/modules/route.js' // 路由数据

// 唯一ID user
const useUserStore = defineStore('user', {
	state: () => ({
		account: localStorage.account || '', // 用户名
		token: localStorage.token || '', // token
		failure_time: localStorage.failure_time || '', // 登录时间
		permissions: [], // 权限列表
	}),
	getters: {
		// 是否登录
		isLogin: (state) => {
			let retn = false
			if (state.token) {
				if (new Date().getTime() < state.failure_time * 1000) {
					retn = true
				}
			}
			return retn
		},
	},
	actions: {
		// 登录
		login(data) {
			return new Promise((resolve, reject) => {
				login(data)
					.then((res) => {
						localStorage.setItem('account', res.data.account)
						localStorage.setItem('token', res.data.token)
						localStorage.setItem('failure_time', res.data.failure_time)
						this.account = res.data.account
						this.token = res.data.token
						this.failure_time = res.data.failure_time
						resolve()
					})
					.catch((error) => {
						reject(error)
					})
			})
		},

		// 退出
		logout() {
			return new Promise((resolve) => {
				const routeStore = useRouteStore()
				const menuStore = useMenuStore()
				localStorage.removeItem('account')
				localStorage.removeItem('token')
				localStorage.removeItem('failure_time')
				localStorage.removeItem('settings')
				// vueuse 中  useDark() 会自动存储到 localStorage
				localStorage.removeItem('vueuse-color-scheme')
				this.account = ''
				this.token = ''
				this.failure_time = ''
				routeStore.removeRoutes()
				menuStore.setActived(0)
				resolve()
			})
		},

		// 获取用户权限
		async getPermissions() {
			const res = await getPermission({ account: this.account })
			this.permissions = [...res.data.permissions, ...res.data.btnAuth]

			return this.permissions
		},
	},
})

export default useUserStore
