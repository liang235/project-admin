/*
 * @Description: 页面缓存
 */
const useKeepAliveStore = defineStore('keepAlive', {
	state: () => ({
		list: [], // 缓存列表
	}),
	actions: {
		// 添加缓存
		add(name) {
			if (typeof name === 'string') {
				if (!this.list.includes(name)) this.list.push(name)
			} else {
				name.forEach((v) => {
					if (v && !this.list.includes(v)) this.list.push(v)
				})
			}
		},

		// 删除缓存
		remove(name) {
			if (typeof name === 'string') {
				this.list = this.list.filter((v) => {
					return v !== name
				})
			} else {
				this.list = this.list.filter((v) => {
					return !name.includes(v)
				})
			}
		},

		// 清空缓存
		clean() {
			this.list = []
		},
	},
})

export default useKeepAliveStore
