<!--
 * @Description: 水波纹
-->
<template>
	<div>
		<page-header title="水波纹"></page-header>

		<page-main title="指令效果（v-waves）">
			<el-button v-waves>默认效果</el-button>
			<el-button type="primary" v-waves="'light'">light 效果</el-button>
			<el-button type="success" v-waves="'red'">red 效果</el-button>
			<el-button type="info" v-waves="'orange'">orange 效果</el-button>
			<el-button type="warning" v-waves="'purple'">purple 效果</el-button>
			<el-button type="danger" v-waves="'green'">green 效果</el-button>
			<el-button type="primary" v-waves="'teal'">teal 效果</el-button>

			<div class="main">
				<div class="div flex-center" v-waves>作用于 div</div>

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
		background: var(--el-color-primary);
		color: var(--el-color-white);
		transition: all 0.3s ease;
	}

	img {
		width: 250px;
		height: 250px;
	}
}
</style>
