<!--
 * @Description: 主导航切换
 * @Date: 2022-12-18 00:56:40
 * @LastEditTime: 2022-12-18 01:06:27
-->
<template>
    <div>
        <page-header title="主导航切换">
            <template #content>
                <p>该特性只有在导航模式为 side 和 head 时生效</p>
            </template>
        </page-header>

        <page-main>
            <p class="mb-4">该特性只有在导航模式为 side 和 head 时生效</p>
            <el-button type="primary" @click="menuswitch">切换下一个</el-button>
        </page-main>
    </div>
</template>

<script setup name="FeatureMenuswitch">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据

// 定义 pinia
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()

// 切换主导航
const menuswitch = () => {
    if (settingsStore.menu.enableHotkeys) {
        useMenu().switchTo(menuStore.actived + 1 < menuStore.allMenus.length ? menuStore.actived + 1 : 0)
    }
}
</script>

<style lang="scss" scoped></style>
