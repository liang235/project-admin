<!--
 * @Description: 侧边栏模式（无主导航）
 * @Date: 2022-11-07 11:28:45
 * @LastEditTime: 2022-12-24 14:02:21
-->
<template>
	<div
		v-if="['side', 'head', 'single'].includes(settingsStore.menu.menuMode)"
		class="sub-sidebar-container"
		:class="{ 'is-collapse': settingsStore.menu.subMenuCollapse }"
		@scroll="onSidebarScroll"
	>
		<Logo
			:show-logo="settingsStore.menu.menuMode === 'single'"
			:class="{
				'sidebar-logo': true,
				'sidebar-logo-bg': settingsStore.menu.menuMode === 'single',
				shadow: sidebarScrollTop,
			}"
		/>

		<!-- 侧边栏模式（无主导航） -->
		<el-menu
			:unique-opened="settingsStore.menu.subMenuUniqueOpened"
			:default-openeds="menuStore.defaultOpenedPaths"
			:default-active="$route.meta.activeMenu || $route.path"
			:collapse="settingsStore.menu.subMenuCollapse"
			:collapse-transition="false"
			:class="{
				'is-collapse-without-logo': settingsStore.menu.menuMode !== 'single' && settingsStore.menu.subMenuCollapse,
				round: settingsStore.menu.menuStyle,
			}"
		>
			<transition-group name="sub-sidebar">
				<template v-for="(route, index) in menuStore.sidebarMenus">
					<sidebar-item v-if="route.meta?.sidebar !== false" :key="route.path || index" :item="route" :base-path="route.path" />
				</template>
			</transition-group>
		</el-menu>
	</div>
</template>

<script setup name="SubSidebar">
import Logo from '../Logo/index.vue' // logo/title
import SidebarItem from '../SidebarItem/index.vue' // 侧边栏
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 菜单栏数据

// 定义 pinia
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()

const sidebarScrollTop = ref(0)

function onSidebarScroll(e) {
	sidebarScrollTop.value = e.target.scrollTop
}
</script>

<style lang="scss" scoped>
.sub-sidebar-container {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: var(--g-sub-sidebar-width);
	background-color: var(--g-sub-sidebar-bg);
	box-shadow: 10px 0 10px -10px var(--g-box-shadow-color);
	overflow-x: hidden;
	overflow-y: auto;
	overscroll-behavior: contain;
	// firefox 隐藏滚动条
	scrollbar-width: none;
	transition: background-color 0.3s, var(--el-transition-box-shadow), left 0.3s, width 0.3s;

	// chrome隐藏滚动条
	&::-webkit-scrollbar {
		display: none;
	}

	&.is-collapse {
		width: var(--g-sub-sidebar-collapse-width);

		.sidebar-logo {
			&:not(.sidebar-logo-bg) {
				display: none;
			}

			:deep(span) {
				display: none;
			}
		}
	}

	.sidebar-logo {
		background-color: var(--g-sub-sidebar-bg);
		box-shadow: 0 0 1px 0 var(--el-border-color);
		transition: background-color 0.3s, var(--el-transition-box-shadow);

		&:not(.sidebar-logo-bg) {
			:deep(span) {
				color: var(--el-text-color-primary);
				transition: var(--el-transition-color);
			}
		}

		&.sidebar-logo-bg {
			background-color: var(--g-main-sidebar-bg);
		}

		&.shadow {
			box-shadow: 0 10px 10px -10px var(--g-box-shadow-color);
		}
	}

	// 导航栏填充风格 - 默认
	.el-menu {
		width: 100%;
		padding-top: var(--g-sidebar-logo-height);
		border-right: 0;
		background-color: var(--g-sub-sidebar-bg);
		transition: background-color 0.3s, var(--el-transition-color), var(--el-transition-border), padding-top 0.3s;

		&:not(.el-menu--collapse) {
			width: inherit;
		}

		&.is-collapse-without-logo {
			padding-top: 0;
		}

		&.el-menu--collapse {
			:deep(.title-icon) {
				margin-right: 0;
			}

			:deep(.el-menu-item),
			:deep(.el-sub-menu__title) {
				span,
				.el-sub-menu__icon-arrow {
					display: none;
				}
			}
		}
	}

	// 导航栏填充风格 - 圆角
	.el-menu.round:not(.el-menu--collapse) {
		.sidebar-item {
			padding: 0 10px;

			&:first-child {
				padding-top: 10px;
			}

			&:last-child {
				padding-bottom: 10px;
			}
		}

		:deep(.el-menu--inline),
		:deep(.el-menu-item),
		:deep(.el-sub-menu__title) {
			border-radius: 10px;
		}
	}
}

// 次侧边栏动画
.sub-sidebar-enter-active {
	transition: opacity 0.3s, transform 0.3s;
}

.sub-sidebar-enter-from,
.sub-sidebar-leave-active {
	opacity: 0;
	transform: translateY(30px) skewY(10deg);
}

.sub-sidebar-leave-active {
	position: absolute;
}
</style>
