<!--
 * @Description: 页面页头
-->
<template>
	<div class="header">
		<div class="main">
			<div class="title">{{ title }}</div>
			<div class="content">
				<slot name="content">{{ content }}</slot>
			</div>
		</div>
		<div class="sub">
			<slot />
		</div>
	</div>
</template>

<script setup name="PageHeader">
// 定义父组件传过来的值
defineProps({
	// 页面标题
	title: {
		type: String,
		required: true,
	},
	// 页面内容
	content: {
		type: String,
		default: '',
	},
})
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 20px;
	margin-bottom: 20px;
	background-color: var(--g-app-bg);
	transition: background-color 0.3s;

	.main {
		flex: 1;
		margin-right: 20px;

		.title {
			color: var(--el-text-color-primary);
			font-size: 22px;
			transition: var(--el-transition-color);
		}

		.content {
			margin-top: 10px;
			color: var(--el-text-color-secondary);
			font-size: 14px;
			transition: var(--el-transition-color);

			&:empty {
				display: none;
			}
		}
	}

	.sub {
		flex: none;
	}
}
</style>
