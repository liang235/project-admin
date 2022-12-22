<!--
 * @Description: 页面页头
 * @Date: 2022-11-17 18:20:46
 * @LastEditTime: 2022-11-19 17:51:07
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
const props = defineProps({
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
	margin-bottom: 20px;
	padding: 16px 20px;
	background-color: var(--g-app-bg);
	transition: background-color 0.3s;

	.main {
		flex: 1;
		margin-right: 20px;

		.title {
			font-size: 22px;
			color: var(--el-text-color-primary);
			transition: var(--el-transition-color);
		}

		.content {
			margin-top: 10px;
			font-size: 14px;
			color: var(--el-text-color-secondary);
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
