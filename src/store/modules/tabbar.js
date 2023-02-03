/*
 * @Description: 标签栏数据
 * @Date: 2023-02-01 16:14:03
 * @LastEditTime: 2023-02-01 17:17:15
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
