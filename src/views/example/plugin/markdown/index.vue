<!--
 * @Description: Markdown 编辑器
-->
<template>
	<div>
		<page-header title="Markdown 编辑器">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i @kangc/v-md-editor</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 v-md-editor
			</el-button>
		</page-header>

		<page-main title="编辑带预览">
			<v-md-editor
				v-model="text"
				height="400px"
				:mode="mode"
				:left-toolbar="leftToolbar"
				:disabled-menus="[]"
				@upload-image="handleUploadImage"
				@copy-code-success="handleCopyCodeSuccess"
				@save="handleSave"
			></v-md-editor>
		</page-main>
	</div>
</template>

<script setup name="PluginMarkdown">
// 跳转链接
const open = () => {
	window.open('http://ckang1229.gitee.io/vue-markdown-editor/zh/#%E4%BB%8B%E7%BB%8D', '_blank')
}

const text = ref('编辑带预览') // 编辑器内容
const mode = ref('editable') // 编辑器模式

// 左侧工具栏
const leftToolbar = ref('undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code |emoji todo-list tip | save')

// 上传图片
const handleUploadImage = (event, insertImage, files) => {
	// 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
	console.log(files)

	// 此处只做示例
	insertImage({
		url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
		desc: '七龙珠',
		// width: 'auto',
		// height: 'auto',
	})
}

// 复制
const handleCopyCodeSuccess = (code) => {
	console.log(code)
}

// 点击工具栏保存
const handleSave = () => {
	console.log(text.value)
}
</script>

<style lang="scss" scoped></style>
