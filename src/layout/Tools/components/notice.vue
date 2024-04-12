<!--
 * @Description: 消息通知
-->
<template>
	<div class="tools-notice">
		<div class="head-box">
			<div class="head-box-title">通知</div>
		</div>

		<div class="content-box">
			<template v-if="list.length > 0">
				<div v-for="(v, k) in list" :key="k" class="content-box-item">
					<div>{{ v.label }}</div>
					<div class="content-box-msg">
						{{ v.value }}
					</div>
					<div class="content-box-time">{{ v.time }}</div>
				</div>
			</template>
			<el-empty v-else description="暂无通知"></el-empty>
		</div>

		<div v-if="list.length > 0" class="foot-box">前往通知中心</div>
	</div>
</template>

<script setup name="ToolsNotice">
// 消息列表
const list = ref([
	{
		label: '关于版本发布的通知',
		value: '基于 vue3 + CompositionAPI + vite + element plus',
		time: '2020-12-08',
	},
	{
		label: '关于学习交流的通知',
		value: '关于学习交流的通知',
		time: '2020-12-08',
	},
])
</script>

<style lang="scss" scoped>
.tools-notice {
	.head-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 35px;
		padding-bottom: 12px;
		color: var(--el-text-color-primary);
		border-bottom: 1px solid var(--el-border-color-lighter);
	}

	.content-box {
		font-size: 13px;

		.content-box-item {
			padding-top: 12px;

			&:last-of-type {
				padding-bottom: 12px;
			}

			.content-box-msg {
				margin-top: 5px;
				margin-bottom: 5px;
				color: var(--el-text-color-secondary);
			}

			.content-box-time {
				color: var(--el-text-color-secondary);
			}
		}
	}

	.foot-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 35px;
		padding-top: 12px;
		font-size: 13px;
		color: var(--el-color-primary);
		cursor: pointer;
		border-top: 1px solid var(--el-border-color-lighter);
		opacity: 0.8;

		&:hover {
			opacity: 1;
		}
	}

	:deep(.el-empty__description p) {
		font-size: 13px;
	}
}
</style>
