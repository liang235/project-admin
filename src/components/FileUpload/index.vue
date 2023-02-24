<!--
 * @Description: 文件上传
 * @Date: 2022-12-04 22:19:35
 * @LastEditTime: 2022-12-04 23:26:37
-->
<template>
	<el-upload
		:headers="headers"
		:action="action"
		:data="data"
		:name="name"
		:before-upload="beforeUpload"
		:on-exceed="onExceed"
		:on-success="onSuccess"
		:file-list="files"
		:limit="max"
		:drag="drag"
	>
		<div class="slot">
			<svg-icon name="ele-upload-filled" class="el-icon--upload" />
			<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		</div>
		<template #tip>
			<div v-if="!notip" class="el-upload__tip">
				<div style="display: inline-block">
					<el-alert
						:title="`上传文件支持 ${ext.join(' / ')} 格式，单个文件大小不超过 ${size}MB，且文件数量不超过 ${max} 个`"
						type="info"
						show-icon
						:closable="false"
					/>
				</div>
			</div>
		</template>
	</el-upload>
</template>

<script setup name="FileUpload">
import { ElMessage } from 'element-plus'

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
	// 上传文件大小限制，单位为MB
	size: {
		type: Number,
		default: 2,
	},
	// 上传数量限制
	max: {
		type: Number,
		default: 3,
	},
	// 上传的文件列表，例如：[{name: 'xxx.jpg', url: 'http://xxx.cdn.com/xxx.jpg'}]
	files: {
		type: Array,
		default: () => [],
	},
	// 是否隐藏提示栏
	notip: {
		type: Boolean,
		default: false,
	},
	// 是否启用拖拽上传
	drag: {
		type: Boolean,
		default: true,
	},
	// 支持的文件类型
	ext: {
		type: Array,
		default: () => ['zip', 'rar'],
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['onSuccess'])

// 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传
const beforeUpload = (file) => {
	const fileName = file.name.split('.')
	const fileExt = fileName.at(-1)
	const isTypeOk = props.ext.includes(fileExt)
	const isSizeOk = file.size / 1024 / 1024 < props.size
	if (!isTypeOk) {
		ElMessage.error(`上传文件只支持 ${props.ext.join(' / ')} 格式！`)
	}
	if (!isSizeOk) {
		ElMessage.error(`上传文件大小不能超过 ${props.size}MB！`)
	}
	return isTypeOk && isSizeOk
}

// 当超出限制时，执行的钩子函数
const onExceed = () => {
	ElMessage.warning('文件上传超过限制')
}

// 文件上传成功时的钩子
const onSuccess = (res, file, fileList) => {
	emit('onSuccess', res, file, fileList)
}
</script>

<style lang="scss" scoped>
:deep(.el-upload.is-drag) {
	display: inline-block;

	.el-upload-dragger {
		padding: 0;
	}

	&.is-dragover {
		border-width: 1px;
	}

	.slot {
		width: 300px;
		padding: 40px 0;
	}
}
</style>
