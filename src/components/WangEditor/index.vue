<!--
 * @Description: 富文本编辑器
-->
<template>
	<div class="editor-container">
		<Toolbar :editor="editorRef" :mode="mode" />
		<Editor
			:mode="mode"
			:defaultConfig="editorConfig"
			:style="{ height }"
			v-model="editorVal"
			@onCreated="handleCreated"
			@onChange="handleChange"
		/>
	</div>
</template>

<script setup name="WangEditor">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue' // 编辑器插件

// 定义父组件传过来的值
const props = defineProps({
	// 是否只读
	readOnly: {
		type: Boolean,
		default: () => false,
	},
	// 占位符
	placeholder: {
		type: String,
		default: () => '请输入内容...',
	},
	// mode: 'default' 默认模式 - 集成了 wangEditor 所有功能
	// mode: 'simple' 简洁模式 - 仅有部分常见功能，但更加简洁易用
	// 模式，可选 <default|simple>，默认 default
	mode: {
		type: String,
		default: () => 'default',
	},
	// 高度
	height: {
		type: String,
		default: () => '310px',
	},
	// 双向绑定，用于获取 editor.getHtml()
	getHtml: String,
	// 双向绑定，用于获取 editor.getText()
	getText: String,
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['update:getHtml', 'update:getText'])

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 默认配置
const editorConfig = ref({
	placeholder: props.placeholder,
	readOnly: props.readOnly,
})

// 内容 HTML
const editorVal = ref(props.getHtml)

// 编辑器回调函数
const handleCreated = (editor) => {
	// 记录 editor 实例，重要！
	editorRef.value = editor
}

// 编辑器内容改变时
const handleChange = (editor) => {
	// 非格式化的 html
	emit('update:getHtml', editor.getHtml())
	// 当前编辑器的纯文本内容
	emit('update:getText', editor.getText())
}

// 在一个组件实例被卸载之前调用
onBeforeUnmount(() => {
	const editor = editorRef.value
	if (editor == null) return
	editor.destroy() // 销毁编辑器和工具栏
})
</script>

<style lang="scss" scoped>
.editor-container {
	z-index: 9999; // 用于 wangeditor 点击全屏时

	:deep(.w-e-toolbar) {
		z-index: 2 !important;
		border: 1px solid var(--el-border-color-light, #ebeef5) !important;
		border-bottom: 1px solid var(--el-border-color-light, #ebeef5) !important;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	:deep(.w-e-text-container) {
		z-index: 1 !important;
		border: 1px solid var(--el-border-color-light, #ebeef5) !important;
		border-top: none !important;
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}
}
</style>
