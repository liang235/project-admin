<template>
	<el-image
		fit="cover"
		:src="src"
		:lazy="true"
		:style="`width:${realWidth};height:${realHeight};`"
		:preview-src-list="previewSrcList.length > 0 ? previewSrcList : [src]"
		:initial-index="initialIndex"
		:preview-teleported="true"
	>
		<template #error>
			<div class="image-slot">
				<svg-icon name="image-load-fail" />
			</div>
		</template>
	</el-image>
</template>

<script setup name="ImagePreview">
const props = defineProps({
	// 默认图片地址
	src: {
		type: String,
		required: true,
	},
	// 预览大图列表
	previewSrcList: {
		type: Array,
		default: () => [],
	},
	// 初始化第一张预览图片的位置
	initialIndex: {
		type: Number,
		default: 0,
	},
	// 宽度
	width: {
		type: [Number, String],
		default: '',
	},
	// 高度
	height: {
		type: [Number, String],
		default: '',
	},
})

// 最终宽度
const realWidth = computed(() => {
	return typeof props.width === 'string' ? props.width : `${props.width}px`
})

// 最终高度
const realHeight = computed(() => {
	return typeof props.height === 'string' ? props.height : `${props.height}px`
})
</script>

<style lang="scss" scoped>
.el-image {
	border-radius: 5px;
	background-color: var(--el-fill-color);
	box-shadow: var(--el-box-shadow-light);
	transition:
		background-color 0.3s,
		var(--el-transition-box-shadow);

	:deep(.el-image__inner) {
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			transform: scale(1.2);
		}
	}

	:deep(.image-slot) {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		color: #909399;
		font-size: 30px;
	}
}
</style>
