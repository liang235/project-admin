/*
 * @Description: 标签栏数据
 */

// 唯一ID tabbar
const useTabbarStore = defineStore('tabbar', {
	state: () => ({
		tabbar: [
			{
				title: '主页',
				icon: 'system',
			},
		],
	}),
	getters: {},
	actions: {},
})

export default useTabbarStore
