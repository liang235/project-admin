import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// js 工具库
import { kebabCase } from 'lodash-es'

// tailwindcss 组件应用样式
import '@/assets/styles/tailwind.scss'

// 全局样式
import '@/assets/styles/globals.scss'

// 引入 svg 图标注册脚本
import 'virtual:svg-icons-register'

// 引入路由
import router from '@/router/index.js'
app.use(router)

// 数据存储
import pinia from '@/store/index.js'
app.use(pinia)

// 自定义指令
import directive from '@/directive/index.js'
directive(app)

// plugin 插件部分
import plugins from '@/plugins/index.js'
plugins(app)

// ElementPlus 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${kebabCase(key)}`, component)
}

app.mount('#app')
