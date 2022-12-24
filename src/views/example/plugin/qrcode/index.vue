<!--
 * @Description: 二维码
 * @Date: 2022-12-08 14:56:45
 * @LastEditTime: 2022-12-09 17:13:34
-->
<template>
	<div>
		<page-header title="二维码">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm add qrcode</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 node-qrcode
			</el-button>
		</page-header>

		<el-row :gutter="20" style="margin: 0 10px">
			<el-col :xs="24" :lg="8">
				<page-main title="渲染成 img 标签">
					<img src="" id="image1" />
				</page-main>
			</el-col>
			<el-col :xs="24" :lg="8">
				<page-main title="渲染成 canvas 标签">
					<canvas id="canvas"></canvas>
				</page-main>
			</el-col>
			<el-col :xs="24" :lg="8">
				<page-main title="自定义颜色">
					<img src="" id="image2" />
				</page-main>
			</el-col>
		</el-row>
	</div>
</template>

<script setup name="PluginQrcode">
import QRCode from 'qrcode' // 二维码插件

// 跳转链接
const open = () => {
	window.open('https://github.com/soldair/node-qrcode', '_blank')
}

// 配置项
const opts = ref({
	errorCorrectionLevel: 'H',
	type: 'image/jpeg',
	color: {
		dark: '#010599FF',
		light: '#FFBF60FF',
	},
	width: 116,
	height: 116,
})

const generateQRCode = () => {
	// 渲染成 img 标签
	const img1 = document.getElementById('image1')
	QRCode.toDataURL('text', { type: 'image/jpeg' }, function (err, url) {
		if (err) throw err
		img1.src = url
	})

	// 渲染成 canvas 标签
	const canvas = document.getElementById('canvas')
	QRCode.toCanvas(canvas, 'sample text', function (error) {
		if (error) console.error(error)
	})

	// 自定义颜色
	const img2 = document.getElementById('image2')
	QRCode.toDataURL('text', opts.value, function (err, url) {
		if (err) throw err
		img2.src = url
	})
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	generateQRCode()
})
</script>

<style lang="scss" scoped>
.page-main {
	margin: 0;
	text-align: center;
}

canvas,
img {
	display: inline-block;
	vertical-align: inherit;
}
</style>
