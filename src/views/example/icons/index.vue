<!--
 * @Description: svg/element 图标展示
-->
<template>
	<page-main title="Icons 图标">
		<el-tabs>
			<el-tab-pane :label="`Custom Icons (${state.customIconsCount})`">
				<custom-icons ref="customIconsRef" />
			</el-tab-pane>
			<el-tab-pane :label="`ElementPlus Icons (${state.elementIconsCount})`">
				<element-icons ref="elementIconsRef" />
			</el-tab-pane>
		</el-tabs>
	</page-main>
</template>

<script setup name="Icons">
import CustomIcons from './components/custom-icons.vue' // 自定义 svg 图标
import ElementIcons from './components/element-icons.vue' // element svg 图标

// 定义响应式数据
const customIconsRef = ref()
const elementIconsRef = ref()
const state = reactive({
	customIconsCount: 0, // 自定义 svg 数量
	elementIconsCount: 0, // element svg 数量
})

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	state.customIconsCount = customIconsRef?.value?.count
	state.elementIconsCount = elementIconsRef?.value?.count
})
</script>

<style lang="scss" scoped>
:deep(.svg-container) {
	border-top: 1px solid var(--el-border-color);
	border-left: 1px solid var(--el-border-color);
	border-radius: 4px;

	.icon-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100px;
		font-size: 13px;
		color: var(--el-text-color-regular);
		cursor: pointer;
		border-right: 1px solid var(--el-border-color);
		border-bottom: 1px solid var(--el-border-color);
		transition: background-color var(--el-transition-duration);

		.svg-icon {
			margin-bottom: 5px;
			font-size: 30px;
		}

		.icon-name {
			margin-top: 5px;
		}

		&:hover {
			color: var(--el-color-primary);
			background-color: var(--el-border-color-extra-light);
		}
	}
}
</style>
