<!--
 * @Description: 快捷键介绍
 * @Date: 2022-11-26 18:31:42
 * @LastEditTime: 2022-12-16 17:13:31
-->
<template>
    <el-drawer v-model="isShow" title="快捷键介绍" direction="rtl" :size="400">
        <el-descriptions title="全局" :column="1" :border="true">
            <el-descriptions-item label="查看系统信息"> Alt + I </el-descriptions-item>

            <el-descriptions-item v-if="settingsStore.navSearch.enable && settingsStore.navSearch.enableHotkeys" label="唤起导航搜索">
                Alt + S
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            v-if="settingsStore.menu.enableHotkeys && ['side', 'head'].includes(settingsStore.menu.menuMode)"
            title="主导航"
            :column="1"
            :border="true"
        >
            <el-descriptions-item label="激活下一个主导航"> Alt + ` </el-descriptions-item>
        </el-descriptions>

        <el-descriptions title="页面" :column="1" :border="true">
            <el-descriptions-item label="开启最大化"> Alt + ↑ </el-descriptions-item>
            <el-descriptions-item label="关闭最大化"> Alt + ↓ </el-descriptions-item>
        </el-descriptions>
    </el-drawer>
</template>

<script setup name="HotkeysIntro">
import { useEventBus } from '@vueuse/core' // vue 工具库
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// vue 工具库
const bus = useEventBus()

// 定义 pinia
const settingsStore = useSettingsStore()

// 是否显示快捷键介绍
const isShow = ref(false)

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
    bus.on((event) => {
        if (event === 'global-hotkeys-intro-toggle') isShow.value = !isShow.value
    })
})
</script>

<style lang="scss" scoped>
.el-descriptions {
    :deep(.el-descriptions__label) {
        width: 230px;
    }
}
</style>
