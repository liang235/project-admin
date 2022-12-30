<template>
	<div class="layout">
		<div class="app-main" :class="{ 'main-page-maximize': settingsStore.mainPageMax }">
			<!-- 顶部模式 -->
			<Header />

			<div class="wrapper">
				<!-- 侧边导航栏 -->
				<div class="sidebar-container" :class="{ show: settingsStore.mode === 'mobile' && !settingsStore.menu.subMenuCollapse }">
					<main-sidebar />
					<sub-sidebar />
				</div>

				<!-- 模态框 -->
				<div
					class="sidebar-mask"
					:class="{ show: settingsStore.mode === 'mobile' && !settingsStore.menu.subMenuCollapse }"
					@click="settingsStore.toggleSidebarCollapse()"
				/>

				<!-- 主体内容 -->
				<div class="main-container">
					<!-- 顶栏 -->
					<Topbar />

					<div class="main">
						<!-- 退出最大化 -->
						<div v-show="settingsStore.mainPageMax" class="exit-main-page-maximize" @click="settingsStore.toggleMainPageMax(false)">
							<svg-icon name="exit" />
						</div>

						<router-view v-slot="{ Component, route }">
							<transition name="main" mode="out-in" appear>
								<keep-alive :include="keepAliveStore.list">
									<component :is="Component" v-show="!isLink" :key="route.fullPath" />
								</keep-alive>
							</transition>
						</router-view>
						<link-view v-if="isLink" />
					</div>

					<!-- 底部版权 -->
					<copy-right />
				</div>
			</div>

			<el-backtop :right="20" :bottom="20" title="回到顶部" />
		</div>

		<!-- 导航搜索 -->
		<search />
		<!-- 全局应用配置 -->
		<app-setting />
		<!-- 快捷键介绍 -->
		<hotkeys-intro />
		<!-- 系统信息 -->
		<system-info />
		<!-- 页面右侧固定 -->
		<fixed-right />
	</div>
</template>

<script setup name="Layout">
import { useEventBus } from '@vueuse/core' // vue 工具库
import hotkeys from 'hotkeys-js' // 键盘快捷键
import MainSidebar from './MainSidebar/index.vue' // 主导航
import SubSidebar from './SubSidebar/index.vue' // 侧边栏模式（无主导航）
import Header from './Header/index.vue' // 顶部模式
import CopyRight from './Copyright/index.vue' // 底部版权
import Topbar from './Topbar/index.vue' // 顶栏
import Search from './Search/index.vue' // 导航搜索
import AppSetting from './AppSetting/index.vue' // 全局应用配置
import HotkeysIntro from './HotkeysIntro/index.vue' // 快捷键介绍
import SystemInfo from './SystemInfo/index.vue' // 系统信息
import LinkView from './LinkView/index.vue' // 外链提醒
import FixedRight from './FixedRight/index.vue' // 页面右侧固定
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据
import useKeepAliveStore from '@/store/modules/keepAlive.js' // 缓存数据

// 路由实例
const route = useRoute()

// 定义 pinia
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()
const keepAliveStore = useKeepAliveStore()

// vue 工具库
const bus = useEventBus()

// 是否为外链地址
const isLink = computed(() => !!route.meta.link)

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	hotkeys('f5', (e) => {
		if (settingsStore.toolbar.enablePageReload) {
			e.preventDefault()
			useMainPage().reload()
		}
	})

	hotkeys('alt+`', (e) => {
		if (settingsStore.menu.enableHotkeys) {
			e.preventDefault()
			useMenu().switchTo(menuStore.actived + 1 < menuStore.allMenus.length ? menuStore.actived + 1 : 0)
		}
	})

	hotkeys('alt+i', () => {
		bus.emit('global-system-info-toggle')
	})

	hotkeys('alt+up', (e) => {
		if (settingsStore.app.mainPageMax) {
			e.preventDefault()
			settingsStore.toggleMainPageMax(true)
		}
	})

	hotkeys('alt+down', (e) => {
		if (settingsStore.app.mainPageMax) {
			e.preventDefault()
			settingsStore.toggleMainPageMax(false)
		}
	})
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
	hotkeys.unbind('f5')
	hotkeys.unbind('alt+`')
	hotkeys.unbind('alt+i')
	hotkeys.unbind('alt+up')
	hotkeys.unbind('alt+down')
})
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
}

.app-main {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	transition: all 0.2s;
}

// 最大化
.app-main.main-page-maximize {
	header,
	.sidebar-container {
		display: none;
	}

	.wrapper {
		padding-top: 0;

		.main-container {
			margin-left: 0;

			.topbar-container {
				display: none;
			}

			.main {
				margin: 0;
			}
		}
	}

	[data-fixed-calc-width] {
		width: 100%;
		transform: translate(-50%);
	}
}

.wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	box-shadow: -1px 0 0 0 var(--g-box-shadow-color);
	transition: padding-top 0.3s;

	.sidebar-container {
		position: fixed;
		z-index: 999;
		top: 0;
		bottom: 0;
		display: flex;
		width: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-actual-width));
		transition: transform 0.3s, top 0.3s;
	}

	// 模态框样式
	.sidebar-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: saturate(50%) blur(4px);
		background-image: radial-gradient(transparent 1px, rgb(0 0 0 / 30%) 1px);
		background-size: 4px 4px;
		opacity: 0;

		// background-color: rgb(0 0 0 / 50%);
		// backdrop-filter: blur(2px);
		// transform: translateZ(0);

		transition: all 0.2s;
		visibility: hidden;

		&.show {
			opacity: 1;
			visibility: visible;
		}
	}

	.main-sidebar-container:not(.main-sidebar-leave-active) + .sub-sidebar-container {
		left: var(--g-main-sidebar-width);
	}

	.main-container {
		display: flex;
		min-height: 100%;
		flex-direction: column;
		margin-left: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-actual-width));
		background-color: var(--g-main-bg);
		box-shadow: -1px 0 0 0 var(--g-border-color), 1px 0 0 0 var(--g-border-color);
		transition: margin-left 0.3s, background-color 0.3s, var(--el-transition-box-shadow);

		.topbar-container {
			z-index: 997;
			top: 0;
		}

		.main {
			position: relative;
			overflow: hidden;
			height: 100%;
			flex: auto;
			transition: 0.3s;

			.exit-main-page-maximize {
				position: fixed;
				z-index: 1000;
				top: -40px;
				right: -40px;
				width: 80px;
				height: 80px;
				border-radius: 50%;
				background-color: var(--el-overlay-color-lighter);
				color: #eee;
				cursor: pointer;
				transition: background-color 0.3s, var(--el-transition-color);

				&:hover {
					background-color: var(--el-overlay-color-light);
					color: #fff;
				}

				.svg-icon {
					position: absolute;
					bottom: 16px;
					left: 16px;
				}
			}
		}

		.topbar-container + .main {
			margin: var(--g-topbar-height) 0 0;
		}
	}
}

header:not(.header-leave-active) + .wrapper {
	padding-top: var(--g-header-height);

	.sidebar-container {
		top: var(--g-header-height);

		:deep(.sidebar-logo) {
			display: none;
		}

		:deep(.el-menu) {
			padding-top: 0;
		}
	}

	.main-container {
		.topbar-container {
			top: var(--g-header-height);

			:deep(.tools) {
				display: none;
			}
		}
	}
}

// 主内容区动画
.main-enter-active {
	transition: 0.2s;
}

.main-leave-active {
	transition: 0.15s;
}

.main-enter-from {
	margin-left: -20px;
	opacity: 0;
}

.main-leave-to {
	margin-left: 20px;
	opacity: 0;
}
</style>
