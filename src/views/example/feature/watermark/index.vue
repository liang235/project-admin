<!--
 * @Description: 页面水印
-->
<template>
	<div>
		<page-header title="页面水印">
			<template #content>
				<p>在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生</p>
			</template>
		</page-header>

		<page-main title="可在 src/utils/wartermark.js 中修改水印样式">
			<el-radio-group v-model="settingsStore.app.watermark" class="mb-4">
				<el-radio-button :label="true">开启</el-radio-button>
				<el-radio-button :label="false">关闭</el-radio-button>
			</el-radio-group>
			<p>水印文案</p>
			<el-input v-model="settingsStore.app.wartermarkText" :disabled="!settingsStore.app.watermark" />
		</page-main>
	</div>
</template>

<script setup name="FeatureWatermark">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()
</script>

<style lang="scss" scoped></style>
