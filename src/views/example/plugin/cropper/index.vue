<!--
 * @Description: 图片裁剪
 * @Date: 2022-12-10 20:47:32
 * @LastEditTime: 2022-12-11 21:23:55
-->
<template>
	<div>
		<page-header title="图片裁剪">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i vue-cropperjs</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 vue-cropperjs
			</el-button>
		</page-header>

		<page-main>
			<template #title>
				<div class="grid grid-cols-9 gap-4">
					<el-button type="primary" @click="zoom(0.2)">放大</el-button>
					<el-button type="primary" @click="zoom(-0.2)">缩小</el-button>
					<el-button type="primary" @click="move(-10, 0)">向左移动</el-button>
					<el-button type="primary" @click="move(10, 0)">向右移动</el-button>
					<el-button type="primary" @click="move(0, -10)">向上一点</el-button>
					<el-button type="primary" @click="move(0, 10)">向下移动</el-button>
					<el-button type="primary" @click="rotate(90)">旋转 +90deg </el-button>
					<el-button type="primary" @click="rotate(-90)">旋转 -90deg </el-button>
					<el-button type="primary" @click="flip(1)">水平和垂直翻转</el-button>
					<el-button type="primary" @click="flip(-1, 1)">水平翻转</el-button>
					<el-button type="primary" @click="flip(1, -1)">垂直翻转</el-button>
					<el-button type="primary" @click="cropImage">裁剪图片</el-button>
					<el-button type="primary" @click="reset">重置</el-button>
				</div>
			</template>

			<div class="content">
				<section class="cropper-area">
					<vue-cropper
						ref="cropperRef"
						:src="cropper.src"
						:autoCrop="cropper.autoCrop"
						:viewMode="cropper.viewMode"
						:dragMode="cropper.dragMode"
						:initialAspectRatio="cropper.initialAspectRatio"
						:aspectRatio="cropper.aspectRatio"
						:preview="cropper.preview"
						:background="cropper.background"
						:autoCropArea="cropper.autoCropArea"
						:zoomOnWheel="cropper.zoomOnWheel"
					/>
				</section>

				<section class="preview-area">
					<p>预览</p>
					<div class="preview" />
				</section>

				<section class="preview-area">
					<p>裁剪图像</p>
					<div class="cropped-image">
						<img v-if="cropper.cropImg" :src="cropper.cropImg" alt="Cropped Image" />
						<div v-else class="crop-placeholder" />
					</div>
				</section>
			</div>
		</page-main>
	</div>
</template>

<script setup name="PluginCropper">
// 图片裁剪插件
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

// 默认裁剪的图片
import imgSrc from '@/assets/images/E0199E25.png'

// 跳转链接
const open = () => {
	window.open('https://github.com/Agontuk/vue-cropperjs', '_blank')
}

// 裁剪配置项
const cropperRef = ref()
const cropper = reactive({
	src: imgSrc, // 默认裁剪的图片
	autoCrop: true, // 初始化时自动裁剪图像，为 false 时候需要 dragMode: 'crop'
	viewMode: 1, // 视图模式
	dragMode: 'crop', // 拖动模式
	initialAspectRatio: 1, // 定义裁剪框的初始纵横比,仅当 aspectRatio 选项设置为 NaN 时可用
	aspectRatio: 16 / 16, // 定义裁剪框的固定长宽比
	preview: '.preview', // 为预览添加额外的元素(容器)
	background: true, // 容器的网格背景
	autoCropArea: 0.6, // 定义自动裁剪区域大小
	zoomOnWheel: false, // 允许通过鼠标滚轮缩放图像
	cropImg: '', // 裁剪后的地址
})

// 缩放
const zoom = (percent) => {
	cropperRef.value.relativeZoom(percent)
}

// 移动
const move = (offsetX, offsetY) => {
	cropperRef.value.move(offsetX, offsetY)
}

// 旋转
const rotate = (deg) => {
	cropperRef.value.rotate(deg)
}

// 翻转
const flip = (x, y) => {
	x && y ? cropperRef.value.scale(x, y) : cropperRef.value.scale(x)
}

// 裁剪图片，获取图像数据进行后期处理，例如上传或设置图像SRC
const cropImage = () => {
	cropper.cropImg = cropperRef.value.getCroppedCanvas().toDataURL()
}

// 重置
const reset = () => {
	cropperRef.value.cropper.reset()
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	justify-content: space-between;

	.cropper-area {
		width: 400px;
	}

	.preview-area {
		width: 300px;

		p {
			font-size: 1.25rem;
			margin: 0;
			margin-bottom: 1rem;
		}

		p:last-of-type {
			margin-top: 1rem;
		}

		// 高度要对应 aspectRatio 的宽高比
		.preview {
			width: 100%;
			height: calc(300px * (16 / 16));
			overflow: hidden;
		}
	}

	.cropped-image img {
		max-width: 100%;
	}

	.crop-placeholder {
		width: 100%;
		height: calc(300px * (16 / 16));
		background: #ccc;
	}
}

.el-button {
	margin-left: 0;
}
</style>
