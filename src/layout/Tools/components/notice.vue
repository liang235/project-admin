<!--
 * @Description: 消息通知
 * @Date: 2022-12-17 17:34:13
 * @LastEditTime: 2022-12-19 23:30:57
-->
<template>
	<div class="tools-notice">
		<div class="head-box">
			<div class="head-box-title">通知</div>
		</div>

		<div class="content-box">
			<template v-if="list.length > 0">
				<div class="content-box-item" v-for="(v, k) in list" :key="k">
					<div>{{ v.label }}</div>
					<div class="content-box-msg">
						{{ v.value }}
					</div>
					<div class="content-box-time">{{ v.time }}</div>
				</div>
			</template>
			<el-empty description="暂无通知" v-else></el-empty>
		</div>

		<div class="foot-box" v-if="list.length > 0">前往通知中心</div>
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
		height: 35px;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--el-border-color-lighter);
		color: var(--el-text-color-primary);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.content-box {
		font-size: 13px;

		.content-box-item {
			padding-top: 12px;

			&:last-of-type {
				padding-bottom: 12px;
			}

			.content-box-msg {
				color: var(--el-text-color-secondary);
				margin-top: 5px;
				margin-bottom: 5px;
			}

			.content-box-time {
				color: var(--el-text-color-secondary);
			}
		}
	}

	.foot-box {
		height: 35px;
		color: var(--el-color-primary);
		font-size: 13px;
		padding-top: 12px;
		opacity: 0.8;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--el-border-color-lighter);

		&:hover {
			opacity: 1;
		}
	}

	:deep(.el-empty__description p) {
		font-size: 13px;
	}
}
</style>
