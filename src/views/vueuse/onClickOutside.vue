<template>
	<div class="onClickOutside">
		<page-header title="欢迎使用 onClickOutside">
			<template #content>
				<p>监听元素外部的点击事件，对模态框和下拉菜单很有用</p>
			</template>
		</page-header>

		<page-main title="监听元素外部的点击事件">
			<el-button ref="container">点击按钮以外的地方</el-button>
		</page-main>
	</div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core' // vue 工具库

// 为想要追踪的 container  元素创建一个 ref
const container = ref(null)

// 监听元素之外的点击
onClickOutside(container, () => console.log('您点击了按钮以为的地方'))
</script>

<style lang="scss" scoped></style>
