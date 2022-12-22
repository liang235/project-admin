<!--
 * @Description: 次导航
 * @Date: 2022-11-04 10:47:31
 * @LastEditTime: 2022-12-20 20:16:23
-->
<template>
	<div class="sidebar-item">
		<router-link v-if="!hasChildren" v-slot="{ href, navigate, isActive, isExactActive }" custom :to="resolveRoutePath(basePath, item.path)">
			<a
				:href="item.meta?.link ? item.meta.link : href"
				:class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
				:target="item.meta?.link ? '_blank' : '_self'"
				@click="navigate"
			>
				<el-menu-item :title="item.meta?.title ?? '[ 无标题 ]'" :index="resolveRoutePath(basePath, item.path || '')">
					<el-icon v-if="item.meta?.icon" class="title-icon" :style="item.meta?.icon === 'dot' ? 'width:10px' : 'width:18px'">
						<svg-icon :name="item.meta.icon" />
					</el-icon>
					<span class="title">{{ item.meta?.title ?? '[ 无标题 ]' }}</span>
				</el-menu-item>
			</a>
		</router-link>

		<el-sub-menu v-else :title="item.meta?.title ?? '[ 无标题 ]'" :index="resolveRoutePath(basePath, item.path)">
			<template #title>
				<el-icon v-if="item.meta?.icon" class="title-icon">
					<svg-icon :name="item.meta.icon" />
				</el-icon>
				<span class="title">{{ item.meta?.title ?? '[ 无标题 ]' }}</span>
			</template>
			<template v-for="route in item.children">
				<sidebar-item
					v-if="route.meta?.sidebar !== false"
					:key="route.path"
					:item="route"
					:base-path="resolveRoutePath(basePath, item.path)"
				/>
			</template>
		</el-sub-menu>
	</div>
</template>

<script setup name="SidebarItem">
import SidebarItem from './index.vue' // 当前自身页面，用于递归
import { resolveRoutePath } from '@/utils/tools.js' // 自定义工具

// 定义父组件传过来的值
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
	basePath: {
		type: String,
		default: '',
	},
})

/**
 * @description: 判断是否有子级
 * @param {*} computed
 * @return {*}
 */
const hasChildren = computed(() => {
	let flag = true
	if (props.item.children) {
		if (props.item.children.every((item) => item.meta?.sidebar === false)) {
			flag = false
		}
	} else {
		flag = false
	}
	return flag
})
</script>

<style lang="scss" scoped>
:deep(.el-menu-item),
:deep(.el-menu-item span.title),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu__title span.title) {
	flex: 1;
	vertical-align: inherit;
	@include text-overflow;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
	display: flex;
	align-items: center;
	// justify-content: center;
}

:deep(.el-sub-menu),
:deep(.el-menu-item) {
	.title-icon {
		width: 18px;
		font-size: 18px;
		transition: transform 0.3s;
		color: unset;
		margin-left: 2px;
	}

	.title-icon + .title {
		margin-left: 10px;
	}

	&:hover > .title-icon,
	.el-sub-menu__title:hover > .title-icon {
		transform: scale(1.2);
	}
}

a {
	cursor: pointer;
	color: inherit;
	text-decoration: none;
}

.el-sub-menu__title {
	> .badge {
		&-dot {
			right: 40px;
		}

		&-text {
			right: 40px;
		}
	}
}
</style>

<style lang="scss">
.el-menu--inline {
	background-color: var(--g-sub-sidebar-menu-bg) !important;

	.el-menu-item,
	.el-sub-menu > .el-sub-menu__title {
		color: var(--g-sub-sidebar-menu-color);
		background-color: var(--g-sub-sidebar-menu-bg) !important;

		&:hover {
			color: var(--g-sub-sidebar-menu-hover-color) !important;
			background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
		}
	}
}

.el-menu-item,
.el-sub-menu__title {
	color: var(--g-sub-sidebar-menu-color) !important;
	background: transparent !important;

	&:hover {
		color: var(--g-sub-sidebar-menu-hover-color) !important;
		background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
	}
}

.el-menu-item.is-active,
.el-menu--collapse .el-sub-menu.is-active > .el-sub-menu__title,
.el-sub-menu .el-menu--inline .el-menu-item.is-active {
	color: var(--g-sub-sidebar-menu-active-color) !important;
	background-color: var(--g-sub-sidebar-menu-active-bg) !important;

	.svg-icon,
	.el-sub-menu__icon-arrow {
		color: unset;
	}
}
</style>
