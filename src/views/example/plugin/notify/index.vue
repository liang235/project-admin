<!--
 * @Description: 通知
 * @Date: 2022-12-09 15:06:13
 * @LastEditTime: 2022-12-09 19:17:31
-->
<template>
	<div>
		<page-header title="通知">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i @wcjiang/notify</el-tag></p>
				<p>JS 实现浏览器标题闪烁，滚动，语音提示，Chrome/Safari/FireFox/IE 通知</p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 @wcjiang/notify
			</el-button>
		</page-header>

		<page-main title="Favicon 通知">
			<p class="mb-2.5">注意看浏览器标题左侧的数字</p>
			<el-button @click="notify.setFavicon(10)">设置 Favicon</el-button>
			<el-button @click="notify.faviconClear()">清空 Favicon</el-button>
		</page-main>

		<page-main title="标题通知">
			<el-button @click="notify.setTitle(true)">设置标题通知</el-button>
			<el-button @click="notify.setTitle(false)">清空标题通知</el-button>
		</page-main>
	</div>
</template>

<script setup name="PluginNotify">
import Notify from '@wcjiang/notify' // 通知插件

// 跳转链接
const open = () => {
	window.open('https://github.com/jaywcjlove/iNotify', '_blank')
}

// 实例化 Notify
const notify = new Notify({
	message: '有新消息~', // 页面标题
	effect: 'flash', // flash | scroll, 闪烁或滚动
	// 标题闪烁，或滚动速度
	interval: 1000,
	disableFavicon: false, // 可选，默认为false，如果为 true，则不再覆盖原始图标
})
</script>

<style lang="scss" scoped></style>
