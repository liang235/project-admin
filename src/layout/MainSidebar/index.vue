<!--
 * @Description: 主导航
 * @Date: 2022-11-04 10:51:58
 * @LastEditTime: 2022-12-09 21:49:00
-->
<template>
	<transition name="main-sidebar">
		<div
			v-if="settingsStore.menu.menuMode === 'side' || (settingsStore.mode === 'mobile' && settingsStore.menu.menuMode !== 'single')"
			class="main-sidebar-container"
		>
			<Logo :show-title="false" class="sidebar-logo" />

			<!-- 侧边栏模式（含主导航） -->
			<div class="nav" :class="[settingsStore.menu.menuStyle, settingsStore.menu.menuActiveStyle]">
				<div v-for="(item, index) in menuStore.allMenus" :key="index" class="item-container" :class="{ active: index === menuStore.actived }">
					<div
						v-if="item.children && item.children.length !== 0"
						:key="index"
						:class="{ item: true, active: index === menuStore.actived }"
						:title="item.meta?.title ?? '[ 无标题 ]'"
						@click="switchTo(index)"
					>
						<svg-icon v-if="item.meta?.icon" :name="item.meta.icon" />
						<span>{{ item.meta?.title ?? '[ 无标题 ]' }}</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup name="MainSidebar">
import Logo from '../Logo/index.vue' // logo/title
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 菜单栏数据

// 切换主导航
const { switchTo } = useMenu()

// 定义 pinia
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()
</script>

<style lang="scss" scoped>
.main-sidebar-container {
	overflow-x: hidden;
	overflow-y: auto;
	overscroll-behavior: contain;
	// FireFox 隐藏滚动条
	scrollbar-width: none;
	position: relative;
	z-index: 1;
	width: var(--g-main-sidebar-width);
	color: var(--g-main-sidebar-menu-color);
	background-color: var(--g-main-sidebar-bg);
	transition: background-color 0.3s, var(--el-transition-color);

	// chrome隐藏滚动条
	&::-webkit-scrollbar {
		display: none;
	}

	// logo
	.sidebar-logo {
		transition: 0.3s;
		background-color: var(--g-main-sidebar-bg);
	}

	// 导航栏填充风格 - 默认
	.nav {
		width: inherit;
		padding-top: var(--g-sidebar-logo-height);

		.item-container {
			position: relative;
			display: flex;
			transition: var(--el-transition-all);

			&.active {
				.item {
					color: var(--g-main-sidebar-menu-active-color);
					background-color: var(--g-main-sidebar-menu-active-bg);
				}
			}

			.item {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 100%;
				height: 60px;
				padding: 0 5px;
				cursor: pointer;
				color: var(--g-main-sidebar-menu-color);
				background-color: var(--g-main-sidebar-bg);
				transition: var(--el-transition-all), background-color 0.3s, var(--el-transition-color);

				&:hover {
					color: var(--g-main-sidebar-menu-hover-color);
					background-color: var(--g-main-sidebar-menu-hover-bg);
				}

				.svg-icon {
					font-size: 24px;
					margin-bottom: 5px;
				}

				span {
					font-size: 14px;
					line-height: 1;
					text-align: center;
					word-break: break-all;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
		}
	}

	// 导航栏填充风格 - 圆角
	.nav.nav-fill-radius {
		.item-container {
			margin-bottom: 5px;

			&:last-child {
				margin-bottom: 0;
			}

			.item {
				border-radius: 5px;
				margin: 0 10px;
			}
		}

		.sidebar-item {
			margin-bottom: 5px;

			&:last-child {
				margin-right: 0;
			}

			.el-sub-menu__title .item {
				border-radius: 5px;
				margin: 0 10px;
			}
		}
	}

	// 导航栏激活风格 - 箭头
	.nav-active-arrow {
		.item-container:before,
		.sidebar-item .el-sub-menu__title:before {
			content: '';
			opacity: 0;
			right: -5px;
			width: 0;
			height: 0;
			border-top: 5px solid transparent;
			border-bottom: 5px solid transparent;
			border-right: 5px solid var(--g-sub-sidebar-bg);
			transition: all 0.3s;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		.item-container.active:before,
		.sidebar-item .is-active .el-sub-menu__title:before {
			opacity: 1;
			right: 0;
		}
	}

	// 导航栏激活风格 - 线条
	.nav-active-line {
		.item-container:before,
		.sidebar-item .el-sub-menu__title:before {
			content: '';
			opacity: 0;
			left: 8px;
			width: 4px;
			height: 0;
			border-radius: 2px;
			background-color: var(--g-main-sidebar-menu-active-bg);
			box-shadow: 0 0 0 1px var(--g-main-sidebar-bg);
			transition: all 0.3s;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		.item-container.active:before,
		.sidebar-item .is-active .el-sub-menu__title:before {
			opacity: 1;
			height: 20px;
		}
	}

	// 导航栏激活风格 - 点
	.nav-active-dot {
		.item-container:before,
		.sidebar-item .el-sub-menu__title:before {
			content: '';
			opacity: 0;
			left: 0;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: var(--g-main-sidebar-menu-active-bg);
			box-shadow: 0 0 0 1px var(--g-main-sidebar-bg);
			transition: all 0.3s;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		.item-container.active:before,
		.sidebar-item .is-active .el-sub-menu__title:before {
			opacity: 1;
			left: 5px;
		}
	}
}

// 主侧边栏动画
.main-sidebar-enter-active,
.main-sidebar-leave-active {
	transition: transform 0.3s;
}

.main-sidebar-enter-from,
.main-sidebar-leave-to {
	transform: translateX(calc(var(--g-main-sidebar-width) * -1));
}
</style>
