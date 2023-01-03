<!--
 * @Description: 固定底部操作栏
 * @Date: 2022-11-28 17:03:15
 * @LastEditTime: 2022-11-28 21:02:36
-->
<template>
	<div class="fixed-bottom" :class="{ shadow: !isBottom }" data-fixed-calc-width>
		<slot />
	</div>
</template>

<script setup name="FixedBottom">
// 滚动条是否到底部
const isBottom = ref(false)

/**
 * @description: 滚动条事件
 * @return {*}
 */
const onScroll = () => {
	// 变量 scrollTop 是滚动条滚动时，滚动条上端距离顶部的距离
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	// 变量 windowHeight 是可视区的高度
	const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
	// 变量 scrollHeight 是滚动条的总高度（当前可滚动的页面的总高度）
	const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
	// 滚动条是否到底部
	isBottom.value = Math.ceil(scrollTop + windowHeight) >= scrollHeight
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	onScroll()
	window.addEventListener('scroll', onScroll)
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.fixed-bottom {
	z-index: 4;
	bottom: 0;
	padding: 20px;
	background-color: var(--g-app-bg);
	box-shadow: 0 0 1px 0 var(--g-box-shadow-color);
	text-align: center;
	transition: all 0.3s, var(--el-transition-box-shadow);

	&.shadow {
		box-shadow: 0 -10px 10px -10px var(--g-box-shadow-color);
	}
}
</style>
