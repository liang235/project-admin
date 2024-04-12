<template>
	<page-main title="自定义附件列表">
		<el-upload :show-file-list="true">
			<el-button type="primary">上传</el-button>
		</el-upload>
		<ul class="el-upload-list el-upload-list--text">
			<li v-for="item in fileList" :key="item.name" class="el-upload-list__item is-success">
				<div class="el-upload-list__item-info">
					<a class="el-upload-list__item-name">
						<svg-icon name="ele-document" />
						<span class="el-upload-list__item-file-name" :title="item.name">{{ item.name }}</span>
					</a>
				</div>
				<label class="el-upload-list__item-status-label">
					<svg-icon name="ele-success-filled" class="el-icon el-icon--upload-success el-icon--circle-check" />
				</label>
				<svg-icon name="ele-close" class="el-icon el-icon--close" />
				<i class="el-icon--close-tip">按 delete 键可删除</i>
			</li>
		</ul>
	</page-main>
</template>

<script setup name="ElementPlusUpload">
// 附件列表
const fileList = ref([
	{
		name: 'element-plus-logo.svg',
		url: 'https://element-plus.org/images/element-plus-logo.svg',
	},
	{
		name: 'element-plus-logo2.svg',
		url: 'https://element-plus.org/images/element-plus-logo.svg',
	},
])
</script>

<style lang="scss" scoped></style>
