<!--
 * @Description: 拆分面板
-->
<template>
	<div>
		<page-header title="拆分面板">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i splitpanes</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 splitpanes
			</el-button>
		</page-header>

		<page-main>
			<splitpanes class="default-theme" style="height: 400px" @resize="paneSize = $event[0].size">
				<pane :size="30" min-size="10">1</pane>
				<pane :size="40">
					<splitpanes class="default-theme" :horizontal="true">
						<pane :size="100">2</pane>
						<pane :size="100">3</pane>
						<pane :size="100">4</pane>
					</splitpanes>
				</pane>
				<pane :size="30" min-size="10">5</pane>
			</splitpanes>
		</page-main>
	</div>
</template>

<script setup name="PluginSplitpanes">
// 窗格拆分器插件
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// 跳转链接
const open = () => {
	window.open('https://github.com/antoniandre/splitpanes', '_blank')
}

// 定义变量内容
const paneSize = ref(50)
</script>

<style lang="scss" scoped>
.splitpanes__pane {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 70px;
	color: var(--el-color-primary-light-5);
	background-color: var(--el-color-primary) !important;
	border: 1px solid var(--el-border-color-lighter);
}
</style>
