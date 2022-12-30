<!--
 * @Description: 顶部模式(menuMode:head)
 * @Date: 2022-11-20 16:20:58
 * @LastEditTime: 2022-12-08 22:25:14
-->
<template>
	<transition name="header">
		<header v-if="settingsStore.mode === 'pc' && settingsStore.menu.menuMode === 'head'">
			<div class="header-container">
				<div class="main">
					<Logo />

					<div
						ref="navRef"
						class="nav"
						:class="[settingsStore.menu.menuStyle, settingsStore.menu.menuActiveStyle]"
						@wheel.prevent="handlerMouserScroll"
					>
						<template v-for="(item, index) in menuStore.allMenus" :key="index">
							<div
								v-if="item.children && item.children.length !== 0"
								class="item-container"
								:class="{ active: index === menuStore.actived }"
							>
								<div class="item" @click="switchTo(index)">
									<svg-icon v-if="item.meta?.icon" :name="item.meta.icon" />
									<span>{{ item.meta.title ?? '[ 无标题 ]' }}</span>
								</div>
							</div>
						</template>
					</div>
				</div>

				<!-- 工具栏 -->
				<Tools />
			</div>
		</header>
	</transition>
</template>

<script setup name="Header">
import Logo from '../Logo/index.vue' // logo/标题
import Tools from '../Tools/index.vue' // 工具栏
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useMenuStore from '@/store/modules/menu.js' // 侧边栏数据

// 切换主导航
const { switchTo } = useMenu()

// 定义 pinia
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()

// refs
const navRef = ref()

// 顶部模式鼠标滚轮事件
const handlerMouserScroll = (event) => {
	navRef.value.scrollBy({
		left: (event.deltaY || event.detail) > 0 ? 50 : -50,
	})
}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: var(--g-header-height);
	align-items: center;
	padding: 0 20px;
	margin: 0 auto;
	background-color: var(--g-header-bg);
	box-shadow: -1px 0 0 0 var(--g-border-color), 1px 0 0 0 var(--g-border-color);
	color: var(--g-header-color);
	transition: var(--el-transition-all), background-color 0.3s;

	.header-container {
		display: flex;
		width: var(--g-header-width);
		height: 100%;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;

		.main {
			display: flex;
			height: 100%;
			flex: 1;
			flex-wrap: wrap;
			align-items: center;
		}
	}

	@media screen and (max-width: var(--g-header-width)) {
		.header-container {
			width: 100%;
		}
	}

	// 导航栏填充风格 - 默认
	.nav {
		display: flex;
		width: 0;
		height: 100%;
		flex: 1;
		padding: 0 20px;
		margin: 0 30px;
		mask-image: linear-gradient(to right, transparent, #000 20px, #000 calc(100% - 20px), transparent);
		overflow-x: auto;
		// firefox隐藏滚动条
		scrollbar-width: none;

		// Chrome 隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}

		.item-container {
			position: relative;
			display: flex;
			width: initial;
			transition: var(--el-transition-all);

			&.active {
				.item {
					background-color: var(--g-header-menu-active-bg);
					color: var(--g-header-menu-active-color);
				}
			}

			.item {
				display: flex;
				width: 80px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 0 5px;
				background-color: var(--g-header-bg);
				color: var(--g-header-menu-color);
				cursor: pointer;
				transition: var(--el-transition-all), background-color 0.3s, var(--el-transition-color);

				&:hover {
					background-color: var(--g-header-menu-hover-bg);
					color: var(--g-header-menu-hover-color);
				}

				.svg-icon {
					font-size: 24px;
				}

				span {
					display: -webkit-box;
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					text-align: center;
					word-break: break-all;
				}
			}
		}
	}

	// 导航栏填充风格 - 圆角
	.nav.nav-fill-radius {
		.item-container {
			margin-right: 5px;

			&:last-child {
				margin-right: 0;
			}

			.item {
				border-radius: 5px;
				margin: 10px 0;
			}
		}

		.sidebar-item {
			margin-right: 5px;

			&:last-child {
				margin-right: 0;
			}

			.el-sub-menu__title .item {
				height: calc(100% - 20px);
				border-radius: 5px;
				margin: 10px 0;
			}
		}
	}

	// 导航栏激活风格 - 箭头
	.nav-active-arrow {
		.item-container::before,
		.sidebar-item .el-sub-menu__title::before {
			position: absolute;
			bottom: -5px;
			left: 50%;
			width: 0;
			height: 0;
			border-right: 5px solid transparent;
			border-bottom: 5px solid var(--g-sub-sidebar-bg);
			border-left: 5px solid transparent;
			content: '';
			opacity: 0;
			transform: translate(-50%);
			transition: all 0.3s;
		}

		.item-container.active::before,
		.sidebar-item .is-active .el-sub-menu__title::before {
			bottom: 0;
			opacity: 1;
		}
	}

	// 导航栏激活风格 - 线条
	.nav-active-line {
		.item-container::before,
		.sidebar-item .el-sub-menu__title::before {
			position: absolute;
			bottom: 8px;
			left: 50%;
			width: 0;
			height: 4px;
			border-radius: 2px;
			background-color: var(--g-header-menu-active-bg);
			box-shadow: 0 0 0 1px var(--g-header-bg);
			content: '';
			opacity: 0;
			transform: translate(-50%);
			transition: all 0.3s;
		}

		.item-container.active::before,
		.sidebar-item .is-active .el-sub-menu__title::before {
			width: 20px;
			opacity: 1;
		}
	}

	// 导航栏激活风格 - 点
	.nav-active-dot {
		.item-container::before,
		.sidebar-item .el-sub-menu__title::before {
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: var(--g-header-menu-active-bg);
			box-shadow: 0 0 0 1px var(--g-main-sidebar-bg);
			content: '';
			opacity: 0;
			transform: translate(-50%);
			transition: all 0.3s;
		}

		.item-container.active::before,
		.sidebar-item .is-active .el-sub-menu__title::before {
			bottom: 5px;
			opacity: 1;
		}
	}

	// 左侧大标题 Logo
	:deep(a.title) {
		position: relative;
		width: inherit;
		height: inherit;
		padding: inherit;
		background-color: inherit;

		.logo {
			width: 50px;
			height: 50px;
		}

		span {
			color: var(--g-header-color);
			font-size: 24px;
			letter-spacing: 1px;
		}
	}

	// 工具栏
	:deep(.tools) {
		padding: 0;

		.buttons .item .svg-icon {
			color: var(--g-header-color);
		}

		.user-container {
			color: var(--g-header-color);
			font-size: 16px;
		}
	}
}

// 头部动画
.header-enter-active,
.header-leave-active {
	transition: transform 0.3s;
}

.header-enter-from,
.header-leave-to {
	transform: translateY(calc(var(--g-header-height) * -1));
}
</style>
