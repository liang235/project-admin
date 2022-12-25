<!--
 * @Description: 图片裁剪
 * @Date: 2022-12-10 21:04:35
 * @LastEditTime: 2022-12-25 16:09:04
-->
<template>
	<el-dialog v-model="isShowDialog" :width="width" :close-on-click-modal="false" :destroy-on-close="true" :draggable="true">
		<template #header>
			<div>{{ title }}</div>
		</template>

		<el-scrollbar :max-height="maxHeight">
			<div class="cropper-wrap">
				<vue-cropper
					ref="cropperRef"
					class="cropperRef"
					:src="src"
					:autoCrop="autoCrop"
					:viewMode="viewMode"
					:dragMode="dragMode"
					:initialAspectRatio="initialAspectRatio"
					:aspectRatio="aspectRatio"
					:preview="preview"
					:background="background"
					:autoCropArea="autoCropArea"
					:zoomOnWheel="zoomOnWheel"
					@ready="ready"
					@zoom="zoom"
					@cropmove="cropmove"
					@cropstart="cropstart"
					@cropend="cropend"
					@crop="crop"
				/>
				<div class="preview-wrap">
					<div class="preview-item">
						<div class="preview" />
						<div class="preview-label">150 x 150</div>
					</div>

					<div class="preview-item">
						<div class="preview preview-size" />
						<div class="preview-label">100 x 100</div>
					</div>
				</div>
			</div>
		</el-scrollbar>

		<template #footer>
			<div class="dialog-footer">
				<el-button round type="primary" @click="onSubmit">确认</el-button>
				<el-button round @click="closeDialog">取消</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup name="Cropper">
// 图片裁剪插件
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

// 定义父组件传过来的值
defineProps({
	// 标题
	title: {
		type: String,
		default: () => '图片裁剪',
	},
	// 宽度
	width: {
		type: Number,
		default: () => 677,
	},
	// 最大高度
	maxHeight: {
		type: Number,
		default: () => 450,
	},
	// 默认裁剪的图片
	src: {
		type: String,
		default: () => '',
	},
	/**
	 * 初始化时自动裁剪图像
	 * 为 false 时候需要 dragMode: 'crop'
	 */
	autoCrop: {
		type: Boolean,
		default: true,
	},
	// 视图模式
	viewMode: {
		type: Number,
		default: () => 1,
	},
	/**
	 * 拖动模式
	 * crop: 创建一个新的裁剪框
	 * move: 移动画布
	 * none: 什么都不做
	 */
	dragMode: {
		type: String,
		default: () => 'crop',
	},
	// 定义裁剪框的初始纵横比,仅当 aspectRatio 选项设置为 NaN 时可用
	initialAspectRatio: {
		type: Number,
		default: () => 1,
	},
	// 定义裁剪框的固定长宽比
	aspectRatio: {
		type: Number,
		default: () => 1,
	},
	// 为预览添加额外的元素(容器)
	preview: {
		type: String,
		default: () => '.preview',
	},
	// 容器的网格背景
	background: {
		type: Boolean,
		default: true,
	},
	// 定义自动裁剪区域大小
	autoCropArea: {
		type: Number,
		default: () => 0.6,
	},
	// 允许通过鼠标滚轮缩放图像
	zoomOnWheel: {
		type: Boolean,
		default: true,
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['onSubmit'])

// 弹窗状态
const isShowDialog = ref(false)

// 裁剪配置项
const cropperRef = ref()
const cropperImgBase64 = ref('') // 裁剪后的地址

// 初始化完成
const ready = () => {
	// 回显，右侧预览
	cropperImgBase64.value = cropperRef.value.getCroppedCanvas().toDataURL('image/jpeg')
}

// 缩放事件
const zoom = () => {}

// 裁剪框移动事件
const cropmove = () => {}

// 裁剪开始
const cropstart = () => {}

// 裁剪结束
const cropend = () => {}

// 裁剪进行时事件
const crop = () => {
	cropperImgBase64.value = cropperRef.value.getCroppedCanvas().toDataURL('image/jpeg')
}

// 打开弹窗
const openDialog = () => {
	isShowDialog.value = true
}

// 关闭弹窗
const closeDialog = () => {
	isShowDialog.value = false
}

// 提交
const onSubmit = () => {
	emit('onSubmit', cropperImgBase64.value)
	closeDialog()
}

// 暴露数据到 vue 实例
defineExpose({
	openDialog,
})
</script>

<style lang="scss" scoped>
.cropper-wrap {
	display: flex;

	.cropperRef {
		flex: 1;
		height: 350px;
	}

	.preview-wrap {
		display: flex;
		justify-content: space-between;
		padding-left: 20px;
		width: 250px;
		flex-direction: column;

		.preview-title {
			font-size: 20px;
			text-align: center;
			line-height: 20px;
		}

		.preview-item {
			.preview {
				overflow: hidden;
				margin: auto;
				width: 150px;
				height: 150px;
				border-radius: var(--el-border-radius-circle);

				&.preview-size {
					width: 100px;
					height: 100px;
				}
			}

			.preview-label {
				height: 30px;
				font-size: 14px;
				text-align: center;
				color: var(--el-text-color-primary);
				line-height: 30px;
			}
		}
	}
}
</style>
