<!--
 * @Description: 系统信息
 * @Date: 2022-11-26 19:04:50
 * @LastEditTime: 2022-11-26 21:11:49
-->
<template>
    <el-drawer v-model="isShow" title="系统信息" direction="rtl" :size="400">
        <el-descriptions :column="1" :border="true">
            <el-descriptions-item label="版本号" align="center">
                {{ pkg.version }}
            </el-descriptions-item>
            <el-descriptions-item label="最后编译时间" align="center">
                {{ lastBuildTime }}
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions title="生产环境依赖" :column="1" size="small" :border="true">
            <el-descriptions-item v-for="(val, key) in pkg.dependencies" :key="key" :label="key">
                {{ val }}
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions title="开发环境依赖" :column="1" size="small" :border="true">
            <el-descriptions-item v-for="(val, key) in pkg.devDependencies" :key="key" :label="key">
                {{ val }}
            </el-descriptions-item>
        </el-descriptions>
    </el-drawer>
</template>

<script setup name="SystemInfo">
import { useEventBus } from '@vueuse/core' // vue 工具库

// vue 工具库
const bus = useEventBus()

// 是否显示系统信息
const isShow = ref(false)

// 系统信息
const { pkg, lastBuildTime } = __SYSTEM_INFO__

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
    bus.on((event) => {
        if (event === 'global-system-info-toggle') isShow.value = !isShow.value
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
