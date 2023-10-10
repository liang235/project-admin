import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { kebabCase } from 'lodash-es' // js 工具库
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // ElementPlus 图标
import { GcSpreadSheets, GcWorksheet, GcColumn } from '@grapecity/spread-sheets-vue' // SpreadJS
import App from './App.vue'

import '@/assets/styles/globals.scss' // 全局样式
import 'virtual:svg-icons-register' // 引入 svg 图标注册脚本
import router from '@/router/index.js' // 引入路由
import pinia from '@/store/index.js' // 数据存储
import directive from '@/directive/index.js' // 自定义指令
import plugins from '@/plugins/index.js' // plugin 插件部分

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.component('gc-spread-sheets', GcSpreadSheets)
app.component('gc-worksheet', GcWorksheet)
app.component('gc-column', GcColumn)
directive(app)
plugins(app)

// ElementPlus 图标并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(`ele-${kebabCase(key)}`, component)
}

app.mount('#app')
