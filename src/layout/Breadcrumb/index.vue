<!--
 * @Description: 面包屑导航
 * @Date: 2022-11-27 00:39:50
 * @LastEditTime: 2022-12-10 16:10:45
-->
<template>
	<el-breadcrumb v-if="settingsStore.breadcrumb.enable && settingsStore.mode === 'pc'" :class="[settingsStore.breadcrumb.mode]">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item
				v-for="(item, index) in breadcrumbList"
				:key="item.path"
				:to="index < breadcrumbList.length - 1 ? pathCompile(item.path) : ''"
			>
				{{ item.title ?? '[ 无标题 ]' }}
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script setup name="Breadcrumb">
import { compile } from 'path-to-regexp'
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()

// 路由实例
const route = useRoute()

// 面包屑合集
const breadcrumbList = computed(() => {
	const breadcrumbList = []
	if (settingsStore.home.enable) {
		breadcrumbList.push({
			path: '/',
			title: settingsStore.home.title,
		})
	}
	if (route.meta.breadcrumbNeste) {
		breadcrumbList.push(...route.meta.breadcrumbNeste.filter((item) => item.hide === false))
	}
	return breadcrumbList
})

const pathCompile = (path) => {
	const toPath = compile(path)
	return toPath(route.params)
}
</script>

<style lang="scss" scoped>
// 默认风格
.el-breadcrumb.default {
	margin-left: 20px;
	white-space: nowrap;

	:deep(.el-breadcrumb__item) {
		display: inline-block;
		float: none;

		span {
			font-weight: 400;
		}

		&:last-child .el-breadcrumb__inner {
			color: var(--el-text-color-secondary);
			transition: var(--el-transition-color);
		}
	}
}

// 现代风格
.el-breadcrumb.modern {
	:deep(.el-breadcrumb__item) {
		span {
			font-weight: 400;
		}

		.el-breadcrumb__separator {
			display: none;
		}

		&:first-child:not(:last-child) .el-breadcrumb__inner {
			padding-left: 12px;
			border-radius: 6px 0 0 6px;
			clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%);
		}

		&:last-child:not(:first-child) .el-breadcrumb__inner {
			padding-right: 12px;
			border-radius: 0 6px 6px 0;
			background-color: var(--el-fill-color-darker);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 8px 50%);
		}

		&:first-child:is(:last-child) .el-breadcrumb__inner {
			padding-left: 12px;
			border-radius: 6px 0 0 6px;
			background-color: var(--el-fill-color-darker);
			clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%);
		}

		.el-breadcrumb__inner {
			display: inline-block;
			padding: 8px 16px;
			background-color: var(--el-fill-color);
			clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%);
			transition: background-color 0.3s, var(--el-transition-color);

			&.is-link:hover {
				background-color: var(--el-fill-color-darker);
			}
		}
	}
}

// 面包屑动画
.breadcrumb-enter-active {
	transition: transform 0.3s, opacity 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
	opacity: 0;
	transform: translateX(30px) skewX(-50deg);
}
</style>
