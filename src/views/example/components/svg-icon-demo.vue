<template>
	<div class="components">
		<page-header title="SVG Icon" content="除了使用 Element Plus 提供的图标外，你还可以使用自己的 SVG 图标" />

		<page-main>
			<svg-icon name="emotion" :flip="flip" :rotate="rotate" />
			<svg-icon name="emotion-laugh" :flip="flip" :rotate="rotate" />
			<svg-icon name="emotion-unhappy" :flip="flip" :rotate="rotate" />

			<p>也支持彩色 SVG Icon</p>
			<svg-icon name="example-crown" :flip="flip" :rotate="rotate" />
			<svg-icon name="example-star" :flip="flip" :rotate="rotate" />
			<svg-icon name="example-vip" :flip="flip" :rotate="rotate" />

			<p>翻转：</p>
			<el-radio-group v-model="flip">
				<el-radio-button label=""> 无 </el-radio-button>
				<el-radio-button label="horizontal"> 水平翻转 </el-radio-button>
				<el-radio-button label="vertical"> 垂直翻转 </el-radio-button>
				<el-radio-button label="both"> 水平垂直翻转 </el-radio-button>
			</el-radio-group>

			<p>旋转：</p>
			<el-slider v-model="rotate" :min="0" :max="360" style="width: 50%" />

			<p>使用方法：</p>
			<ol>
				<li>上 <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a> 下载需要的 svg 图标</li>
				<li>将 svg 文件放入 ./src/assets/icons 目录下，文件名即为 name</li>
			</ol>
		</page-main>
	</div>
</template>

<script setup name="ComponentSvgIcon">
const flip = ref('')
const rotate = ref(0)
</script>

<style lang="scss" scoped>
.svg-icon {
	font-size: 48px;
}

p {
	margin: 1em 0;
}
</style>
