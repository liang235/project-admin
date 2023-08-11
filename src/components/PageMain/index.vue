<!--
 * @Description: 页面内容块
 * @Date: 2022-11-03 14:06:33
 * @LastEditTime: 2023-08-11 16:54:56
-->
<template>
	<div class="page-main" :class="{ 'is-collaspe': collaspe }" :style="{ height: calcHeight }">
		<!-- title 或者 具名插槽 title -->
		<div v-if="titleSlot || title" class="title-container">
			<slot v-if="titleSlot" name="title" />
			<template v-else>{{ title }}</template>
		</div>

		<!-- 具体内容 -->
		<div class="main-container" :style="bodyStyle">
			<slot />
		</div>

		<!-- 展开 -->
		<div v-show="height && collaspe" class="collaspe" @click="collaspeData = !collaspeData">
			<svg-icon :name="collaspeData ? 'ele-arrow-down' : 'ele-arrow-up'" />
		</div>
	</div>
</template>

<script setup name="PageMain">
// 定义父组件传过来的值
const props = defineProps({
	// 页面标题
	title: {
		type: String,
		default: '',
	},
	// 页面高度
	height: {
		type: String,
		default: '',
	},
	// 定义 main-containe 部分的样式
	bodyStyle: {
		type: Object,
		default: () => {},
	},
	// 展开收缩，需要与 height 结合使用
	collaspe: {
		type: Boolean,
		default: false,
	},
})

// 使用 slot 具名插槽传递的 title
const titleSlot = !!useSlots().title

// 展开收起功能
const collaspeData = ref(toRefs(props).collaspe)

// 计算高度
const calcHeight = computed(() => {
	if (props.height && !props.collaspe) {
		return props.height
	}
	if (!props.height && props.collaspe) {
		return ''
	}
	if (props.height && props.collaspe) {
		return collaspeData.value ? props.height : ''
	}
})
</script>

<style lang="scss" scoped>
.page-main {
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 20px;
	background-color: var(--g-app-bg);
	transition: all 0.3s;

	&:hover {
		box-shadow: var(--el-box-shadow-light);
	}

	.title-container {
		padding: 14px 20px;
		border-bottom: 1px solid var(--el-border-color-lighter);
		transition: var(--el-transition-border);
	}

	.main-container {
		overflow: hidden;
		flex: 1;
		padding: 20px;
		transition: all 0.3s;
	}

	.collaspe {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
		background: linear-gradient(to bottom, transparent, var(--el-color-info));
		color: var(--el-text-color-primary);
		cursor: pointer;
		font-size: 24px;
		text-align: center;
		text-shadow: 0 0 1px var(--el-text-color-primary);
		transition:
			background 0.3s,
			var(--el-transition-color);

		&:hover {
			color: var(--el-text-color-secondary);
		}
	}

	&.is-collaspe {
		overflow: hidden;
	}
}
</style>
