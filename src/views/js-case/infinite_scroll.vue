<!--
 * @Description: 无限滚动
-->
<template>
	<page-main title="无限滚动">
		<h1>无限滚动</h1>
		<!-- 用于观察的加载元素 -->
		<span class="loading" ref="loadingElement"></span>
	</page-main>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const isLoading = ref(false) // 加载状态
const loadingElement = ref(null) // 用于存储加载元素的引用

const intersectionObserver = new IntersectionObserver(async (entries) => {
	if (entries[0].intersectionRatio <= 0) return // 如果元素不在视窗内，不执行任何操作

	if (isLoading.value) {
		return // 如果正在加载中，则不执行任何操作
	}

	isLoading.value = true // 设置加载状态为 true
	await loadItems() // 执行加载数据的函数
	isLoading.value = false // 设置加载状态为 false
})

onMounted(() => {
	if (loadingElement.value) {
		intersectionObserver.observe(loadingElement.value) // 在组件挂载后开始观察加载元素
	}
})

const loadItems = () => {
	ElMessage.success('加载更多数据')
}
</script>

<style lang="scss" scoped></style>
