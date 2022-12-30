<!--
 * @Description: 单图上传
 * @Date: 2022-12-04 20:11:40
 * @LastEditTime: 2022-12-30 16:04:22
-->
<template>
	<div class="upload-container">
		<el-upload
			:show-file-list="false"
			:headers="headers"
			:action="action"
			:data="data"
			:name="name"
			:before-upload="beforeUpload"
			:on-progress="onProgress"
			:on-success="onSuccess"
			drag
			class="image-upload"
		>
			<el-image v-if="url === ''" :src="url === '' ? placeholder : url" :style="`width:${width}px;height:${height}px;`" fit="fill">
				<template #error>
					<div class="image-slot" :style="`width:${width}px;height:${height}px;`">
						<svg-icon name="ele-plus" />
					</div>
				</template>
			</el-image>

			<div v-else class="image">
				<el-image :src="url" :style="`width:${width}px;height:${height}px;`" fit="fill" />
				<div class="mask">
					<div class="actions">
						<span title="预览" @click.stop="preview">
							<svg-icon name="ele-zoom-in" />
						</span>
						<span title="移除" @click.stop="remove">
							<svg-icon name="ele-delete" />
						</span>
					</div>
				</div>
			</div>

			<div v-show="url === '' && uploadData.progress.percent" class="progress" :style="`width:${width}px;height:${height}px;`">
				<el-image :src="uploadData.progress.preview" :style="`width:${width}px;height:${height}px;`" fit="fill" />
				<el-progress type="circle" :width="Math.min(width, height) * 0.8" :percentage="uploadData.progress.percent" />
			</div>
		</el-upload>

		<div v-if="!notip" class="el-upload__tip">
			<div style="display: inline-block">
				<el-alert
					:title="`上传图片支持 ${ext.join(' / ')} 格式，且图片大小不超过 ${size}MB，建议图片尺寸为 ${width}*${height}`"
					type="info"
					show-icon
					:closable="false"
				/>
			</div>
		</div>

		<el-image-viewer v-if="uploadData.imageViewerVisible" :url-list="[url]" :teleported="true" @close="previewClose" />
	</div>
</template>

<script setup name="ImageUpload">
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
	// 上传的图片地址
	url: {
		type: String,
		default: '',
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

// 上传配置
const uploadData = ref({
	imageViewerVisible: false, // 预览状态
	progress: {
		preview: '',
		percent: 0, // 上传时候的进度条进度
	},
})

// 预览
function preview() {
	uploadData.value.imageViewerVisible = true
}

// 关闭预览
function previewClose() {
	uploadData.value.imageViewerVisible = false
}

// 移除
function remove() {
	emit('update:url', '')
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

.image {
	position: relative;
	overflow: hidden;
	border-radius: 6px;

	.mask {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--el-overlay-color-lighter);
		opacity: 0;
		transition: opacity 0.3s;

		.actions {
			display: flex;
			width: 100px;
			height: 100px;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;

			@include position-center(xy);

			span {
				width: 50%;
				color: var(--el-color-white);
				cursor: pointer;
				text-align: center;
				transition: color 0.1s, transform 0.1s;

				&:hover {
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

.image-upload {
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
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			color: var(--el-text-color-placeholder);

			i {
				font-size: 30px;
			}
		}

		.progress {
			position: absolute;
			top: 0;

			&::after {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: var(--el-overlay-color-lighter);
				content: '';
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
