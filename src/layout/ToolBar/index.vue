<!--
 * @Description: 工具栏
 * @Date: 2022-12-30 21:05:40
 * @LastEditTime: 2023-02-01 12:25:30
-->
<template>
	<div v-if="settingsStore.toolbar.enable" class="toolbar-container">
		<div class="left-box">
			<div
				v-if="settingsStore.menu.enableSubMenuCollapseButton"
				class="sidebar-collapse"
				:class="{ 'is-collapse': settingsStore.menu.subMenuCollapse }"
				@click="settingsStore.toggleSidebarCollapse()"
			>
				<svg-icon name="collapse" />
			</div>

			<!-- 面包屑 -->
			<breadcrumb />
		</div>

		<!-- 工具栏 -->
		<tools />
	</div>
</template>

<script setup name="ToolBar">
import Tools from '../Tools/index.vue' // 工具栏
import Breadcrumb from '../Breadcrumb/index.vue' // 面包屑
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()
</script>

<style lang="scss" scoped>
.toolbar-container {
	display: flex;
	height: var(--g-toolbar-height);
	align-items: center;
	justify-content: space-between;
	background-color: var(--g-toolbar-bg);
	box-shadow: 0 0 1px 0 var(--el-border-color);
	transition:
		width 0.3s,
		top 0.3s,
		transform 0.3s,
		background-color 0.3s,
		var(--el-transition-box-shadow);

	.left-box {
		display: flex;
		overflow: hidden;
		align-items: center;
		padding-right: 50px;
		mask-image: linear-gradient(90deg, #000 0%, #000 calc(100% - 50px), transparent);

		.sidebar-collapse {
			display: flex;
			height: 50px;
			align-items: center;
			padding: 0 20px;
			cursor: pointer;

			.svg-icon {
				color: var(--el-text-color-primary);
				transition: var(--el-transition-color), var(--el-transition-md-fade);
			}

			&:hover .svg-icon {
				color: var(--el-color-primary);
			}

			&.is-collapse .svg-icon {
				transform: rotateZ(-180deg);
			}

			& + .el-breadcrumb {
				margin-left: 0;
			}
		}
	}
}
</style>
