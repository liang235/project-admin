<!--
 * @Description: Header 组件右侧工具栏
 * @Date: 2022-11-20 18:49:55
 * @LastEditTime: 2022-12-18 01:11:44
-->
<template>
    <div class="tools">
        <div class="buttons">
            <span v-if="settingsStore.mode === 'pc'" class="item item-pro">
                <svg-icon name="pro" />
                <span class="title">我好看吧</span>
            </span>

            <!-- 导航搜索 -->
            <span v-if="settingsStore.navSearch.enable" class="item" @click="bus.emit('global-search-toggle')">
                <svg-icon name="ele-search" />
            </span>

            <!-- 消息通知 -->
            <span v-if="settingsStore.toolbar.enableNotice" class="item">
                <el-popover placement="bottom" trigger="click" transition="el-zoom-in-top" :width="300" :persistent="false">
                    <template #reference>
                        <el-badge :is-dot="isDot">
                            <svg-icon name="ele-bell" />
                        </el-badge>
                    </template>
                    <template #default>
                        <tools-notice />
                    </template>
                </el-popover>
            </span>

            <!-- 全屏展示 -->
            <span v-if="settingsStore.toolbar.enableFullscreen" class="item" @click="toggle">
                <svg-icon :name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
            </span>

            <!-- 页面刷新 -->
            <span v-if="settingsStore.toolbar.enablePageReload" class="item" @click="reload()">
                <svg-icon name="ele-refresh" />
            </span>

            <!-- 高亮模式和黑暗模式 -->
            <span
                v-if="settingsStore.toolbar.enableColorScheme"
                class="item"
                @click="settingsStore.app.colorScheme = settingsStore.app.colorScheme === 'dark' ? 'light' : 'dark'"
            >
                <svg-icon :name="settingsStore.app.colorScheme === 'dark' ? 'ele-moon' : 'ele-sunny'" />
            </span>

            <!-- 应用配置 -->
            <span v-if="settingsStore.toolbar.enableAppSetting" class="item" @click="bus.emit('global-theme-toggle')">
                <svg-icon name="ele-setting" />
            </span>
        </div>

        <!-- 用户设置 -->
        <el-dropdown class="user-container" @command="userCommand">
            <div class="user-wrapper">
                <el-avatar size="small">
                    <svg-icon name="ele-user-filled" />
                </el-avatar>
                {{ userStore.account }}
                <svg-icon name="ele-caret-bottom" />
            </div>
            <template #dropdown>
                <el-dropdown-menu class="user-dropdown">
                    <el-dropdown-item v-if="settingsStore.home.enable" command="home">
                        {{ settingsStore.home.title }}
                    </el-dropdown-item>
                    <el-dropdown-item divided command="setting">个人设置</el-dropdown-item>
                    <el-dropdown-item divided command="hotkeys">快捷键介绍</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup name="Tools">
import { useFullscreen, useEventBus } from '@vueuse/core' // vue 工具库
import ToolsNotice from './components/notice.vue' // 消息通知
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useUserStore from '@/store/modules/user.js' // 用户数据

// 路由实例
const router = useRouter()

// 定义 pinia
const settingsStore = useSettingsStore()
const userStore = useUserStore()

// vue 工具库
const bus = useEventBus()
const { isFullscreen, toggle } = useFullscreen()

// 页面刷新
const { reload } = useMainPage()

// 是否有新消息通知
const isDot = ref(true)

/**
 * @description: 点击菜单项触发的事件回调
 * @param {*} command
 * @return {*}
 */
const userCommand = (command) => {
    switch (command) {
        case 'home':
            router.push({ name: 'home' })
            break
        case 'setting':
            router.push({
                name: 'personalSetting'
            })
            break
        case 'hotkeys':
            bus.emit('global-hotkeys-intro-toggle')
            break
        case 'logout':
            userStore.logout().then(() => {
                router.push({ name: 'login' })
            })
            break
    }
}
</script>

<style lang="scss" scoped>
.tools {
    display: flex;
    align-items: center;
    padding: 0 20px;
    white-space: nowrap;

    .buttons {
        margin-right: 20px;

        .item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 34px;
            cursor: pointer;
            vertical-align: middle;

            .svg-icon {
                color: var(--el-text-color-primary);
                transition: var(--el-transition-color);
            }

            &:hover {
                .svg-icon {
                    animation: iconAnimation 0.3s ease-in-out;
                }
            }
        }

        .item-pro {
            width: auto;
            padding: 0 10px;
            transform-origin: right center;
            animation: pro-text 3s ease-out infinite;

            @keyframes pro-text {
                0%,
                20% {
                    transform: scale(1);
                }

                50%,
                70% {
                    transform: scale(1.2);
                }

                100% {
                    transform: scale(1);
                }
            }

            .svg-icon {
                display: inline-block;
            }

            .title {
                padding-left: 5px;
                font-weight: bold;
                font-size: 14px;
                background-image: linear-gradient(to right, #ffa237, #fc455d);
                /* stylelint-disable-next-line property-no-vendor-prefix */
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        :deep(.el-badge) {
            .el-badge__content.is-fixed.is-dot {
                top: 2px;
            }
        }
    }
}

:deep(.user-container) {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    cursor: pointer;

    .user-wrapper {
        .el-avatar {
            vertical-align: middle;
            margin-top: -2px;
            margin-right: 4px;
        }
    }
}
</style>
