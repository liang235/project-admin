/*
 * @Description: 修改全局系统配置
 * @Date: 2022-11-02 10:13:01
 * @LastEditTime: 2023-02-03 10:35:55
 */
const settingsCustom = {
	app: {
		elePrimaryColor: '#409EFF',
		colorScheme: 'light',
		grayscale: false,
		elementSize: 'default',
		enablePermission: false,
		enableProgress: true,
		enableDynamicTitle: true,
		mainPageMax: true,
		watermark: false,
		wartermarkText: 'Project-Admin',
		routeBaseOn: 'frontend',
		appWidthMode: 'adaption',
	},
	home: {
		enable: true,
		title: '主页',
	},
	layout: {
		enableMobileAdaptation: true,
		appWidthMode: 'adaption',
	},
	menu: {
		menuMode: 'side',
		menuStyle: 'nav-fill-radius',
		menuActiveStyle: 'nav-active-dot',
		switchMainMenuAndPageJump: false,
		subMenuUniqueOpened: false,
		subMenuCollapse: false,
		enableSubMenuCollapseButton: true,
		enableHotkeys: true,
	},
	topbar: {
		enable: true,
		mode: 'fixed',
	},
	toolbar: {
		enableNotice: true,
		enableFullscreen: true,
		enablePageReload: true,
		enableColorScheme: true,
		enableAppSetting: true,
		enable: true,
	},
	navSearch: {
		enable: true,
		enableHotkeys: true,
	},
	breadcrumb: {
		enable: true,
		mode: 'default',
	},
	copyright: {
		enable: true,
		dates: '2020-2022',
		company: 'Project-Admin',
		website: 'https://fantastic-admin.netlify.app',
		beian: '信息备案',
	},
	tabbar: {
		enable: false,
		enableIcon: true,
		enableMerge: '1',
		enableHotkeys: true,
		mode: 'fashion',
	},
}

export default settingsCustom
