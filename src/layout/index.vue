<template>
	<div class="layout">
		<div id="app-main" :class="{ 'main-page-maximize': settingsStore.mainPageMax }">
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
					<div
						class="topbar-container"
						:class="{
							[`topbar-${settingsStore.topbar.mode}`]: true,
							shadow: scrollTop,
							hide: scrollOnHide,
							'has-tabbar': settingsStore.tabbar.enable,
							'has-toolbar': settingsStore.toolbar.enable,
						}"
						data-fixed-calc-width
					>
						<!-- 选项卡 -->
						<tab-bar />
						<!-- 工具栏 -->
						<tool-bar />
					</div>

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
import TabBar from './TabBar/index.vue' // 选项卡
import ToolBar from './ToolBar/index.vue' // 工具栏
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

// 当前页面的滚动条纵坐标位置
const scrollTop = ref(0)
const scrollOnHide = ref(false)

// 是否为外链地址
const isLink = computed(() => !!route.meta.link)

/**
 * @description: 获取当前页面的滚动条纵坐标位置
 * @return {*}
 */
const onScroll = () => {
	scrollTop.value = (document.documentElement || document.body).scrollTop
}

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

	window.addEventListener('scroll', onScroll)
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
	hotkeys.unbind('f5')
	hotkeys.unbind('alt+`')
	hotkeys.unbind('alt+i')
	hotkeys.unbind('alt+up')
	hotkeys.unbind('alt+down')
	window.removeEventListener('scroll', onScroll)
})

// 监听当前页面的滚动条纵坐标位置
watch(scrollTop, (val, oldVal) => {
	const topbarHeight = parseInt(getComputedStyle(document.documentElement || document.body).getPropertyValue('--g-topbar-height'), 10)
	scrollOnHide.value = settingsStore.topbar.mode === 'sticky' && val > oldVal && val > topbarHeight
})
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
}

#app-main {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	transition: all 0.2s;
}

// 最大化
#app-main.main-page-maximize {
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
		top: 0;
		bottom: 0;
		z-index: 1010;
		display: flex;
		width: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-actual-width));
		box-shadow: -1px 0 0 0 var(--g-border-color);
		transition:
			transform 0.3s,
			var(--el-transition-box-shadow),
			top 0.3s;
	}

	// 模态框样式
	.sidebar-mask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
		width: 100%;
		height: 100%;
		visibility: hidden;
		background-image: radial-gradient(transparent 1px, rgb(0 0 0 / 30%) 1px);
		background-size: 4px 4px;
		backdrop-filter: saturate(50%) blur(4px);
		opacity: 0;

		// background-color: rgb(0 0 0 / 50%);
		// backdrop-filter: blur(2px);
		// transform: translateZ(0);

		transition: all 0.2s;

		&.show {
			visibility: visible;
			opacity: 1;
		}
	}

	.main-sidebar-container:not(.main-sidebar-leave-active) + .sub-sidebar-container {
		left: var(--g-main-sidebar-width);
	}

	.main-container {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		margin-left: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-actual-width));
		background-color: var(--g-main-bg);
		box-shadow:
			-1px 0 0 0 var(--g-border-color),
			1px 0 0 0 var(--g-border-color);
		transition:
			margin-left 0.3s,
			background-color 0.3s,
			var(--el-transition-box-shadow);

		.topbar-container {
			position: absolute;
			top: 0;
			z-index: 999;
			display: flex;
			flex-direction: column;
			transition:
				width 0.3s,
				top 0.3s,
				transform 0.3s,
				var(--el-transition-box-shadow);

			&.topbar-fixed,
			&.topbar-sticky {
				position: fixed;

				&.shadow {
					box-shadow: 0 10px 10px -10px var(--g-box-shadow-color);
				}
			}

			&.topbar-sticky.hide {
				top: calc((var(--g-tabbar-height) + var(--g-toolbar-height)) * -1) !important;
			}

			&.has-tabbar + .main {
				margin: var(--g-tabbar-height) 0 0;
			}

			&.has-toolbar + .main {
				margin: var(--g-toolbar-height) 0 0;
			}

			&.has-tabbar.has-toolbar + .main {
				margin: calc(var(--g-tabbar-height) + var(--g-toolbar-height)) 0 0;
			}
		}

		.main {
			position: relative;
			flex: auto;
			height: 100%;
			overflow: hidden;
			transition: 0.3s;

			.exit-main-page-maximize {
				position: fixed;
				top: -40px;
				right: -40px;
				z-index: 1000;
				width: 80px;
				height: 80px;
				color: #eee;
				cursor: pointer;
				background-color: var(--el-overlay-color-lighter);
				border-radius: 50%;
				transition:
					background-color 0.3s,
					var(--el-transition-color);

				&:hover {
					color: #fff;
					background-color: var(--el-overlay-color-light);
				}

				.svg-icon {
					position: absolute;
					bottom: 16px;
					left: 16px;
				}
			}
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
