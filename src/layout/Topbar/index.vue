<template>
	<div
		v-if="settingsStore.topbar.enable"
		class="topbar-container"
		:class="{
			[`topbar-${settingsStore.topbar.mode}`]: true,
			shadow: scrollTop,
			hide: scrollOnHide,
		}"
		data-fixed-calc-width
	>
		<div class="left-box">
			<div
				v-if="settingsStore.menu.enableSubMenuCollapseButton"
				class="sidebar-collapse"
				:class="{ 'is-collapse': settingsStore.menu.subMenuCollapse }"
				@click="settingsStore.toggleSidebarCollapse()"
			>
				<svg-icon name="collapse" />
			</div>

			<!-- 面包屑 -->
			<breadcrumb />
		</div>

		<!-- 工具栏 -->
		<tools />
	</div>
</template>

<script setup name="Topbar">
import Tools from '../Tools/index.vue' // 工具栏
import Breadcrumb from '../Breadcrumb/index.vue' // 面包屑
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()

// 当前页面的滚动条纵坐标位置
const scrollTop = ref(0)
const scrollOnHide = ref(false)

/**
 * @description: 获取当前页面的滚动条纵坐标位置
 * @return {*}
 */
const onScroll = () => {
	scrollTop.value = (document.documentElement || document.body).scrollTop
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	window.addEventListener('scroll', onScroll)
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})

// 监听当前页面的滚动条纵坐标位置
watch(scrollTop, (val, oldVal) => {
	const topbarHeight = parseInt(getComputedStyle(document.documentElement || document.body).getPropertyValue('--g-topbar-height'), 10)
	scrollOnHide.value = settingsStore.topbar.mode === 'sticky' && val > oldVal && val > topbarHeight
})
</script>

<style lang="scss" scoped>
.topbar-container {
	position: absolute;
	z-index: 999;
	top: 0;
	display: flex;
	height: var(--g-topbar-height);
	align-items: center;
	justify-content: space-between;
	background-color: var(--g-toolbar-bg);
	box-shadow: 0 0 1px 0 var(--el-border-color);
	transition: width 0.3s, top 0.3s, transform 0.3s, background-color 0.3s, var(--el-transition-box-shadow);

	&.topbar-fixed,
	&.topbar-sticky {
		position: fixed;

		&.shadow {
			box-shadow: 0 10px 10px -10px var(--g-box-shadow-color);
		}
	}

	&.topbar-sticky.hide {
		top: calc(var(--g-topbar-height) * -1) !important;
	}

	.left-box {
		display: flex;
		overflow: hidden;
		align-items: center;
		padding-right: 50px;
		mask-image: linear-gradient(90deg, #000 0%, #000 calc(100% - 50px), transparent);

		.sidebar-collapse {
			display: flex;
			height: 50px;
			align-items: center;
			padding: 0 20px;
			cursor: pointer;

			.svg-icon {
				color: var(--el-text-color-primary);
				transition: var(--el-transition-color), var(--el-transition-md-fade);
			}

			&:hover .svg-icon {
				color: var(--el-color-primary);
			}

			&.is-collapse .svg-icon {
				transform: rotateZ(-180deg);
			}

			& + .el-breadcrumb {
				margin-left: 0;
			}
		}
	}
}
</style>
