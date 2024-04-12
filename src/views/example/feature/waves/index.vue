<!--
 * @Description: 水波纹
-->
<template>
	<div>
		<page-header title="水波纹"></page-header>

		<page-main title="指令效果（v-waves）">
			<el-button v-waves>默认效果</el-button>
			<el-button v-waves="'light'" type="primary">light 效果</el-button>
			<el-button v-waves="'red'" type="success">red 效果</el-button>
			<el-button v-waves="'orange'" type="info">orange 效果</el-button>
			<el-button v-waves="'purple'" type="warning">purple 效果</el-button>
			<el-button v-waves="'green'" type="danger">green 效果</el-button>
			<el-button v-waves="'teal'" type="primary">teal 效果</el-button>

			<div class="main">
				<div v-waves class="div flex-center">作用于 div</div>

				<i v-waves>
					<img :src="imgSrc" />
				</i>
			</div>
		</page-main>
	</div>
</template>

<script setup name="FeatureWaves">
import imgSrc from '@/assets/images/E0199E25.png'
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	margin-top: 20px;

	.div {
		width: 250px;
		height: 250px;
		margin-right: 20px;
		color: var(--el-color-white);
		background: var(--el-color-primary);
		transition: all 0.3s ease;
	}

	img {
		width: 250px;
		height: 250px;
	}
}
</style>
