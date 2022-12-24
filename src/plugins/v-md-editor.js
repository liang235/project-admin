import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'

// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// 按需引入语言包（推荐）
import Prism from 'prismjs' // 代码高亮

// Emoji 表情
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'

// markdown支持代码快速复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

// 使 preview html 组件支持复制代码功能
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html'
import createCopyCodePreview from '@kangc/v-md-editor/lib/plugins/copy-code/preview'

// 高亮代码行
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index'
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css'

// 代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'

// TodoList 任务列表
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'

// 主题，按需引入语言包（推荐）
VueMarkdownEditor.use(vuepressTheme, {
    Prism
})

// Emoji 表情
VueMarkdownEditor.use(createEmojiPlugin())

// markdown支持代码快速复制
VueMarkdownEditor.use(createCopyCodePlugin())

// preview html 组件支持复制
VMdPreviewHtml.use(createCopyCodePreview())

// 高亮代码行
VueMarkdownEditor.use(createHighlightLinesPlugin())

// 代码行号
VueMarkdownEditor.use(createLineNumbertPlugin())

// TodoList 任务列表
VueMarkdownEditor.use(createTodoListPlugin())

export default VueMarkdownEditor
