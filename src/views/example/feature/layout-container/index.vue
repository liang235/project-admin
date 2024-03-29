<!--
 * @Description: 布局容器
-->
<template>
	<div class="layout-container">
		<page-header title="布局容器">
			<template #content>
				<p>提供双栏、三栏布局，侧栏支持折叠</p>
			</template>
		</page-header>

		<page-main>
			<div class="mode">
				<span class="label">模式选择:</span>
				<el-radio-group v-model="mode">
					<el-radio-button label="three-columns"><svg-icon name="three-columns" />三栏布局 </el-radio-button>
					<el-radio-button label="left-columns"><svg-icon name="left-columns" />左侧双栏布局</el-radio-button>
					<el-radio-button label="right-columns"><svg-icon name="right-columns" />右侧双栏布局</el-radio-button>
				</el-radio-group>
			</div>
		</page-main>

		<div class="bottom">
			<div class="flex-container">
				<div v-show="leftShow && mode !== 'right-columns'" class="left-side">
					<h2>左侧栏</h2>
				</div>
				<div class="main">
					<h2>主体内容</h2>
					<svg-icon
						v-show="mode !== 'right-columns'"
						:name="leftShow ? 'ele-caret-left' : 'ele-caret-right'"
						class="left-side-icon"
						@click="leftShow = !leftShow"
					/>
					<svg-icon
						v-show="mode !== 'left-columns'"
						:name="rightShow ? 'ele-caret-right' : 'ele-caret-left'"
						class="right-side-icon"
						@click="rightShow = !rightShow"
					/>
				</div>
				<div v-show="rightShow && mode !== 'left-columns'" class="right-side">
					<h2>右侧栏</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup name="FeatureLayoutContainer">
const mode = ref('three-columns') // 模式选择
const leftShow = ref(true) // 左侧栏状态
const rightShow = ref(true) // 右侧栏状态
</script>

<style lang="scss" scoped>
.layout-container {
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	.page-main {
		margin-top: 0;
		margin-bottom: 0;

		.mode {
			display: flex;
			align-items: center;

			.label {
				margin-right: 20px;
			}

			.svg-icon {
				margin-right: 10px;
			}
		}
	}

	h2 {
		font-size: 20px;
		text-align: center;
	}

	.bottom {
		position: relative;
		flex: 1 1 0%;
	}
}

.flex-container {
	position: absolute;
	display: flex;
	width: 100%;
	height: 100%;
	padding: 20px;

	.left-side,
	.right-side,
	.main {
		--container-padding: 15px;

		height: 100%;
		padding: var(--container-padding);
		background-color: var(--g-app-bg);
		transition: background-color 0.3s ease 0s;
	}

	.left-side {
		flex: 0 0 auto;
		width: 300px;
		margin-right: 20px;
		overflow: auto;
	}

	.main {
		position: relative;
		flex: 1 1 0%;
		width: 100%;

		.left-side-icon,
		.right-side-icon {
			position: absolute;
			top: 50%;
			width: 24px;
			height: 24px;
			font-size: 18px;
			color: var(--el-text-color-placeholder);
			cursor: pointer;
			background-color: var(--g-app-bg);
			border-radius: 50%;
			transition:
				background-color 0.3s,
				var(--el-transition-color);
			transform: translateY(-50%);

			&:hover {
				color: var(--el-text-color-regular);
			}
		}

		.left-side-icon {
			left: -10px;
		}

		.right-side-icon {
			right: -10px;
		}
	}

	.right-side {
		flex: 0 0 auto;
		width: 300px;
		margin-left: 20px;
		overflow: auto;
	}
}
</style>
