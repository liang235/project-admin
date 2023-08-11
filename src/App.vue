<template>
	<el-config-provider :locale="zhCn" :size="settingsStore.app.elementSize" :button="buttonConfig">
		<router-view
			:style="{
				'--g-main-sidebar-actual-width': mainSidebarActualWidth,
				'--g-sub-sidebar-actual-width': subSidebarActualWidth,
			}"
		/>
	</el-config-provider>
</template>

<script setup name="App">
import { ElMessage } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // element 语言/中文
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import { getLightColor, getDarkColor } from '@/utils/primaryColor.js' // 改变主题色方法
import Watermark from '@/utils/wartermark.js' // 页面水印

// 对按钮进行配置
const buttonConfig = ref({
	autoInsertSpace: true, // 自动在两个中文字符之间插入空格
})

// 定义 pinia
const settingsStore = useSettingsStore()

// 侧边栏主导航当前实际宽度
const mainSidebarActualWidth = computed(() => {
	let actualWidth = getComputedStyle(document.documentElement).getPropertyValue('--g-main-sidebar-width')
	actualWidth = parseInt(actualWidth, 10)
	if (['head', 'single'].includes(settingsStore.menu.menuMode)) {
		actualWidth = 0
	}
	return `${actualWidth}px`
})

// 侧边栏次导航当前实际宽度
const subSidebarActualWidth = computed(() => {
	let actualWidth = getComputedStyle(document.documentElement).getPropertyValue('--g-sub-sidebar-width')
	actualWidth = parseInt(actualWidth, 10)
	if (settingsStore.menu.subMenuCollapse) {
		actualWidth = 64
	}
	return `${actualWidth}px`
})

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	// 设置显示模式，支持：mobile、pc
	settingsStore.setMode(document.documentElement.clientWidth)
	window.onresize = () => {
		settingsStore.setMode(document.documentElement.clientWidth)
	}
})

// 监听高亮/暗黑模式
watch(
	() => settingsStore.app.colorScheme,
	() => {
		if (settingsStore.app.colorScheme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	},
	{
		immediate: true,
	}
)

// 监听侧边栏模式
watch(
	() => settingsStore.menu.menuMode,
	() => {
		document.body.setAttribute('data-menu-mode', settingsStore.menu.menuMode)
	},
	{
		immediate: true,
	}
)

// 监听显示模式，支持：mobile、pc
watch(
	() => settingsStore.mode,
	() => {
		switch (settingsStore.mode) {
			case 'pc':
				settingsStore.$patch((state) => {
					state.menu.subMenuCollapse = settingsStore.subMenuCollapseLastStatus
				})
				break
			case 'mobile':
				settingsStore.$patch((state) => {
					state.menu.subMenuCollapse = true
				})
				break
		}
		document.body.setAttribute('data-mode', settingsStore.mode)
	},
	{
		immediate: true,
	}
)

// 监听页宽模式
watch(
	() => settingsStore.layout.appWidthMode,
	() => {
		document.body.setAttribute('data-app-width-mode', settingsStore.layout.appWidthMode)
	},
	{
		immediate: true,
	}
)

// 监听灰色模式
watch(
	() => settingsStore.app.grayscale,
	() => {
		if (settingsStore.app.grayscale) {
			document.documentElement.classList.add('grayscale')
		} else {
			document.documentElement.classList.remove('grayscale')
		}
	},
	{
		immediate: true,
	}
)

// 监听颜色主题
watch(
	() => settingsStore.app.elePrimaryColor,
	() => {
		if (!settingsStore.app.elePrimaryColor) return ElMessage.warning('全局主题 primary 颜色值不能为空')

		// 颜色加深
		document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(settingsStore.app.elePrimaryColor, 0.1)}`)
		document.documentElement.style.setProperty('--el-color-primary', settingsStore.app.elePrimaryColor)
		// 颜色变浅，不设置的话，更改完主题色，hover 效果什么的不发生变化，还是原来的主题色配套
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(settingsStore.app.elePrimaryColor, i / 10)}`)
		}
	},
	{
		immediate: true,
	}
)

// 监听页面水印
watch(
	() => settingsStore.app.watermark,
	() => {
		if (settingsStore.app.watermark) {
			Watermark.set(settingsStore.app.wartermarkText)
		} else {
			Watermark.del()
		}
	},
	{
		immediate: true,
	}
)
</script>

<style lang="scss" scoped>


</style>
