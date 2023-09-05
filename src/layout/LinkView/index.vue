<!--
 * @Description: 外链提醒
-->
<template>
	<div class="link-view">
		<transition name="link" mode="out-in" appear>
			<page-main :key="route.meta.link" title="⚠️访问提醒">
				<div class="container">
					<div class="title">是否访问此链接</div>
					<div class="link">
						{{ route.meta.link }}
					</div>
					<el-button type="primary" plain round @click="open">
						<template #icon>
							<svg-icon name="ele-link" />
						</template>
						立即访问
					</el-button>
				</div>
			</page-main>
		</transition>
	</div>
</template>

<script setup name="LinkView">
// 路由实例
const route = useRoute()

function open() {
	window.open(route.meta.link, '_blank')
}
</script>

<style lang="scss" scoped>
.link-view {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;

	.page-main {
		display: flex;
		height: 100%;
		flex: 1;
		flex-direction: column;

		.container {
			display: flex;
			height: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 50px;

			.title {
				margin: 10px 0;
				color: var(--el-text-color-primary);
				font-size: 22px;
			}

			.link {
				max-width: 300px;
				margin: 10px 0;
				color: var(--el-text-color-disabled);
				font-size: 14px;

				@include text-overflow(3);
			}

			.el-button {
				margin: 20px 0;
			}
		}
	}
}

// link 区动画
.link-enter-active {
	transition: 0.2s;
}

.link-leave-active {
	transition: 0.15s;
}

.link-enter-from {
	opacity: 0;
	transform: translateX(-20px);
}

.link-leave-to {
	opacity: 0;
	transform: translateX(20px);
}
</style>
