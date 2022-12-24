<!--
 * @Description: 富文本编辑器
 * @Date: 2022-12-04 13:30:27
 * @LastEditTime: 2022-12-14 20:50:56
-->
<template>
    <div class="components">
        <page-header title="富文本编辑器">
            <template #content>
                <p class="mb-2.5">WangEditor 三方组件</p>
                <p>安装命令：<el-tag>pnpm i @wangeditor/editor @wangeditor/editor-for-vue@next</el-tag></p>
            </template>
            <el-button type="primary" @click="open">
                <template #icon>
                    <svg-icon name="ele-link" />
                </template>
                访问 WangEditor
            </el-button>
        </page-header>

        <page-main title="富文本编辑器">
            <wang-editor v-model:getHtml="editor.htmlVal" v-model:getText="editor.textVal" />

            <div>htmlVal：{{ editor.htmlVal }}</div>
            <div>textVal：{{ editor.textVal }}</div>
        </page-main>
    </div>
</template>

<script setup name="ComponentEditor">
// 跳转链接
const open = () => {
    window.open('https://www.wangeditor.com/v5/for-frame.html#%E5%AE%89%E8%A3%85-1', '_blank')
}

const editor = ref({
    htmlVal: '',
    textVal: ''
})
</script>

<style lang="scss" scoped></style>
