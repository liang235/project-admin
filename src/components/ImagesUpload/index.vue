<!--
 * @Description: 多图上传
 * @Date: 2022-12-04 22:10:10
 * @LastEditTime: 2022-12-20 16:20:03
-->
<template>
	<div class="upload-container">
		<div v-for="(item, index) in url" :key="index" class="images">
			<el-image v-if="index < max" :src="item" :style="`width:${width}px;height:${height}px;`" fit="cover" />
			<div class="mask">
				<div class="actions">
					<span title="预览" @click="preview(index)">
						<svg-icon name="ele-zoom-in" />
					</span>
					<span title="移除" @click="remove(index)">
						<svg-icon name="ele-delete" />
					</span>
					<span v-show="url.length > 1" title="左移" :class="{ disabled: index === 0 }" @click="move(index, 'left')">
						<svg-icon name="ele-back" />
					</span>
					<span v-show="url.length > 1" title="右移" :class="{ disabled: index === url.length - 1 }" @click="move(index, 'right')">
						<svg-icon name="ele-right" />
					</span>
				</div>
			</div>
		</div>

		<el-upload
			v-show="url.length < max"
			:show-file-list="false"
			:headers="headers"
			:action="action"
			:data="data"
			:name="name"
			:before-upload="beforeUpload"
			:on-progress="onProgress"
			:on-success="onSuccess"
			drag
			class="images-upload"
		>
			<div class="image-slot" :style="`width:${width}px;height:${height}px;`">
				<svg-icon name="ele-plus" />
			</div>
			<div v-show="uploadData.progress.percent" class="progress" :style="`width:${width}px;height:${height}px;`">
				<el-image :src="uploadData.progress.preview" :style="`width:${width}px;height:${height}px;`" fit="fill" />
				<el-progress type="circle" :width="Math.min(width, height) * 0.8" :percentage="uploadData.progress.percent" />
			</div>
		</el-upload>

		<div v-if="!notip" class="el-upload__tip">
			<div style="display: inline-block">
				<el-alert
					:title="`上传图片支持 ${ext.join(
						' / '
					)} 格式，单张图片大小不超过 ${size}MB，建议图片尺寸为 ${width}*${height}，且图片数量不超过 ${max} 张`"
					type="info"
					show-icon
					:closable="false"
				/>
			</div>
		</div>
		<el-image-viewer
			v-if="uploadData.imageViewerVisible"
			:url-list="url"
			:initial-index="uploadData.dialogImageIndex"
			:teleported="true"
			@close="previewClose"
		/>
	</div>
</template>

<script setup name="ImagesUpload">
// 定义父组件传过来的值
const props = defineProps({
	// 必选参数，上传的地址
	action: {
		type: String,
		required: true,
	},
	// 设置上传的请求头部
	headers: {
		type: Object,
		default: () => {},
	},
	// 上传时附带的额外参数
	data: {
		type: Object,
		default: () => {},
	},
	// 上传的文件字段名
	name: {
		type: String,
		default: 'file',
	},
	// 上传的图片列表
	url: {
		type: Array,
		default: () => [],
	},
	// 上传数量限制
	max: {
		type: Number,
		default: 3,
	},
	// 上传文件大小限制，单位为MB
	size: {
		type: Number,
		default: 2,
	},
	// 展示宽度
	width: {
		type: Number,
		default: 150,
	},
	// 展示高度
	height: {
		type: Number,
		default: 150,
	},
	// 占位图
	placeholder: {
		type: String,
		default: '',
	},
	// 是否隐藏提示栏
	notip: {
		type: Boolean,
		default: false,
	},
	// 支持的文件类型
	ext: {
		type: Array,
		default: () => ['jpg', 'png', 'gif', 'bmp', 'jpeg'],
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['update:url', 'onSuccess'])

const uploadData = ref({
	dialogImageIndex: 0,
	imageViewerVisible: false, // 预览状态
	progress: {
		preview: '',
		percent: 0,
	},
})

// 预览
function preview(index) {
	uploadData.value.dialogImageIndex = index
	uploadData.value.imageViewerVisible = true
}

// 关闭预览
function previewClose() {
	uploadData.value.imageViewerVisible = false
}

// 移除
function remove(index) {
	const url = props.url
	url.splice(index, 1)
	emit('update:url', url)
}

// 移动
function move(index, type) {
	const url = props.url
	if (type === 'left' && index !== 0) {
		url[index] = url.splice(index - 1, 1, url[index])[0]
	}
	if (type === 'right' && index !== url.length - 1) {
		url[index] = url.splice(index + 1, 1, url[index])[0]
	}
	emit('update:url', url)
}

// 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传
const beforeUpload = (file) => {
	const fileName = file.name.split('.')
	const fileExt = fileName.at(-1)
	const isTypeOk = props.ext.includes(fileExt)
	const isSizeOk = file.size / 1024 / 1024 < props.size
	if (!isTypeOk) {
		ElMessage.error(`上传图片只支持 ${props.ext.join(' / ')} 格式！`)
	}
	if (!isSizeOk) {
		ElMessage.error(`上传图片大小不能超过 ${props.size}MB！`)
	}
	if (isTypeOk && isSizeOk) {
		uploadData.value.progress.preview = URL.createObjectURL(file)
	}
	return isTypeOk && isSizeOk
}

// 文件上传时的钩子
const onProgress = (file) => {
	uploadData.value.progress.percent = ~~file.percent
}

// 文件上传成功时的钩子
const onSuccess = (res) => {
	uploadData.value.progress.preview = ''
	uploadData.value.progress.percent = 0
	emit('onSuccess', res)
}
</script>

<style lang="scss" scoped>
.upload-container {
	line-height: initial;
}

.el-image {
	display: block;
}

.images {
	position: relative;
	display: inline-block;
	margin-right: 10px;
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	overflow: hidden;

	.mask {
		opacity: 0;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--el-overlay-color-lighter);
		transition: opacity 0.3s;

		.actions {
			width: 100px;
			height: 100px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;

			@include position-center(xy);

			span {
				width: 50%;
				text-align: center;
				cursor: pointer;
				color: var(--el-color-white);
				transition: color 0.1s, transform 0.1s;

				&.disabled {
					color: var(--el-text-color-disabled);
					cursor: not-allowed;
				}

				&:hover:not(.disabled) {
					transform: scale(1.5);
				}

				.svg-icon {
					font-size: 24px;
				}
			}
		}
	}

	&:hover .mask {
		opacity: 1;
	}
}

.images-upload {
	display: inline-block;
	vertical-align: top;
}

:deep(.el-upload) {
	.el-upload-dragger {
		display: inline-block;
		padding: 0;

		&.is-dragover {
			border-width: 1px;
		}

		.image-slot {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			color: var(--el-text-color-placeholder);
			background-color: transparent;

			i {
				font-size: 30px;
			}
		}

		.progress {
			position: absolute;
			top: 0;

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				background-color: var(--el-overlay-color-lighter);
			}

			.el-progress {
				z-index: 1;

				@include position-center(xy);

				.el-progress__text {
					color: var(--el-text-color-placeholder);
				}
			}
		}
	}
}
</style>
