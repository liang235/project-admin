<!--
 * @Description: 主页面最大化
-->
<template>
	<div>
		<page-header title="主页面最大化">
			<template #content>
				<p>扩大可视范围和操作区域，能更专注于主页面上的操作</p>
			</template>
		</page-header>

		<page-main>
			<p class="mb-4">可通过双击标签页，或在标签页上右键并选择“最大化”进入</p>
			<p class="mb-4">同时框架还提供全局函数，可自由控制主页面是否最大化</p>
			<el-button type="primary" @click="settingsStore.toggleMainPageMax(true)">开启最大化</el-button>
		</page-main>
	</div>
</template>

<script setup name="FeatureMaximize">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()
</script>

<style lang="scss" scoped></style>
