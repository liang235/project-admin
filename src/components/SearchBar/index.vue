<!--
 * @Description: 搜索面板
 * 配合 <el-collapse-transition /> 组件可以实现展开收起动画效果
 * @Date: 2022-11-28 23:49:10
 * @LastEditTime: 2022-12-08 22:02:27
-->
<template>
	<div class="search-container">
		<!-- 内容块 -->
		<slot />

		<!-- 展开收起 -->
		<div v-if="showMore" class="more">
			<el-button :icon="isUnfold ? 'ele-caret-top' : 'ele-caret-bottom'" type="primary" @click="toggle">
				{{ isUnfold ? '收起' : '展开' }}
			</el-button>
		</div>
	</div>
</template>

<script setup name="SearchBar">
// 定义父组件传过来的值
const props = defineProps({
	// 是否显示展开收起
	showMore: {
		type: Boolean,
		default: false,
	},

	// 是否默认展开所有内容
	unfold: {
		type: Boolean,
		default: false,
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['toggle'])

// 取反，用来动态设置展开收起图标
const isUnfold = ref(!props.unfold)

// 监听是否默认展开所有内容
watch(
	() => props.unfold,
	() => toggle(),
	{
		// 这里设置为 true 时候 toggle 不能使用箭头函数，否则报错
		immediate: true,
	}
)

/**
 * @description: 切换展开收起
 * @return {*}
 */
function toggle() {
	isUnfold.value = !isUnfold.value
	emit('toggle', isUnfold.value)
}
</script>

<style lang="scss" scoped>
.search-container {
	position: relative;
	margin: 20px 0;
	padding: 20px;
	background-color: var(--el-fill-color-lighter);
	transition: background-color 0.3s;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	:deep(.el-form) {
		margin-bottom: -10px;

		.el-select {
			width: 100%;
		}

		.el-date-editor {
			width: 100%;
		}
	}

	.more {
		position: relative;
		text-align: center;
		margin-bottom: -10px;
		padding: 10px 0;
	}
}
</style>
