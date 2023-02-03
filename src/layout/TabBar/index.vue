<template>
	<div class="tabbar-container" v-if="settingsStore.tabbar.enable">
		<div class="tabs" :class="{ [`tabs-${settingsStore.tabbar.mode}`]: true }">
			<div class="tab-container">
				<div class="tab actived" v-for="(item, index) in tabbarStore.tabbar" :key="index">
					<div class="tab-dividers"></div>
					<div class="tab-background"></div>
					<div class="tab-content">
						<div class="title">
							<svg-icon :name="item.icon" />
							{{ item.title }}
						</div>
						<svg-icon name="ele-close" class="action-icon" />
						<div class="drag-handle"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup name="TabBar">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useTabbarStore from '@/store/modules/tabbar.js' // 标签卡数据

// 定义 pinia
const settingsStore = useSettingsStore()
const tabbarStore = useTabbarStore()
// console.log(tabbarStore.tabbar)

// 添加 tabbar
// const addTabbar = () => {
// 	nextTick(() => {})
// }

// 路由更新时（组件内生命钩子）
onBeforeRouteUpdate((to) => {
	console.log(to)
})

// // 路由实例
// const route = useRoute()
// const router = useRouter()

// // 在组件挂载完并创建 DOM 节点后运行
// onMounted(() => {})
</script>

<style lang="scss" scoped>
.tabbar-container {
	position: relative;
	height: var(--g-tabbar-height);
	background-color: var(--g-tabbar-bg);
	transition: background-color 0.3s;

	// 默认样式
	.tabs {
		position: absolute;
		right: 0;
		left: 0;
		padding-right: 50px;
		overflow-y: hidden;
		scrollbar-width: none;
		white-space: nowrap;

		&::-webkit-scrollbar {
			display: none;
		}

		.tab-container {
			display: inline-block;

			&:not(.dragging) .tab:not(.actived):hover {
				z-index: 3;
			}

			&:not(.dragging) .tab:not(.actived):hover::before,
			&:not(.dragging) .tab:not(.actived):hover::after {
				content: none;
			}

			&:not(.dragging) .tab:not(.actived):hover .tab-content .title,
			&:not(.dragging) .tab:not(.actived):hover .tab-content .action-icon {
				color: var(--g-tabbar-tab-hover-color);
			}

			.tab {
				position: relative;
				display: inline-block;
				min-width: var(--g-tabbar-tab-min-width);
				max-width: var(--g-tabbar-tab-max-width);
				height: var(--g-tabbar-height);
				cursor: pointer;
				font-size: 14px;
				line-height: calc(var(--g-tabbar-height) - 2px);
				pointer-events: none;
				vertical-align: bottom;

				* {
					user-select: none;
				}

				&.actived {
					z-index: 5;

					.tab-content .title,
					.tab-content .action-icon {
						color: var(--g-tabbar-tab-active-color);
					}
				}

				&.actived::before,
				&.actived::after {
					content: none;
				}

				&.tab-ghost {
					opacity: 0 !important;
				}

				.tab-dividers {
					position: absolute;
					z-index: 0;
					top: 50%;
					right: 0;
					left: 0;
					height: 14px;
					margin-top: -7px;

					&::before {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 1px;
						display: block;
						width: 1px;
						background-color: var(--g-tabbar-dividers-bg);
						content: '';
						opacity: 1;
						transition: opacity 0.2s ease, background-color 0.3s;
					}
				}

				&:first-child .tab-dividers::before {
					opacity: 0;
				}

				.tab-background {
					position: absolute;
					z-index: 0;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
				}

				.tab-content {
					display: flex;
					width: 100%;
					height: 100%;
					pointer-events: all;

					.title {
						display: flex;
						overflow: hidden;
						height: 100%;
						flex: 1;
						align-items: center;
						padding: 0 10px;
						margin-right: 10px;
						color: var(--g-tabbar-tab-color);
						mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent);
						transition: margin-right 0.3s, var(--el-transition-color);
						white-space: nowrap;

						&:has(+ .action-icon) {
							margin-right: 28px;
						}

						.svg-icon {
							margin-right: 10px;
						}
					}

					.action-icon {
						position: absolute;
						z-index: 10;
						top: 50%;
						right: 6px;
						width: 1.5em;
						height: 1.5em;
						border-radius: 50%;
						margin-top: -9px;
						color: var(--g-tabbar-tab-color);
						font-size: 10px;
						transition: var(--el-transition-color);

						&:hover {
							background-color: var(--el-fill-color);
						}
					}

					.drag-handle {
						position: absolute;
						z-index: 9;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
					}
				}
			}
		}
	}

	// 时尚风格
	.tabs.tabs-fashion {
		bottom: -1px;

		.tab-container:not(.dragging) .tab:not(.actived):hover + .tab .tab-dividers::before {
			opacity: 0;
		}

		.tab-container:not(.dragging) .tab:not(.actived):hover .tab-background {
			opacity: 1;
		}

		.tab-container:not(.dragging) .tab:not(.actived):hover .tab-background::before,
		.tab-container:not(.dragging) .tab:not(.actived):hover .tab-background::after {
			box-shadow: 0 0 0 20px var(--g-tabbar-tab-hover-bg);
		}

		.tab-container {
			.tab {
				height: calc(var(--g-tabbar-height) - 10px);
				margin-right: -10px;
				margin-left: 10px;
				line-height: calc(var(--g-tabbar-height) - 12px);

				&:last-child {
					margin-right: 0;
				}

				&.tab-ontop .tab-background {
					transform: rotate(180deg);
				}

				&:not(.actived) .tab-background {
					opacity: 0;
				}

				.tab-background {
					border-radius: 10px 10px 0 0;
					background-color: var(--g-tabbar-tab-hover-bg);
					transition: opacity 0.3s, background-color 0.3s;

					&::before,
					&::after {
						position: absolute;
						bottom: 0;
						width: 20px;
						height: 20px;
						border-radius: 100%;
						box-shadow: 0 0 0 20px transparent;
						content: '';
						transition: box-shadow 0.3s;
					}

					&::before {
						left: -20px;
						clip-path: inset(50% -10px 0 50%);
					}

					&::after {
						right: -20px;
						clip-path: inset(50% 50% 0 -10px);
					}
				}

				&.actived + .tab .tab-dividers::before {
					opacity: 0;
				}

				&.actived {
					.tab-background {
						background-color: var(--g-tabbar-tab-active-bg);
						opacity: 1;
					}

					.tab-background::before,
					.tab-background::after {
						box-shadow: 0 0 0 20px var(--g-tabbar-tab-active-bg);
					}
				}
			}
		}
	}
}
</style>
