<template>
	<div class="useIntersectionObserver">
		<page-header title="欢迎使用 useIntersectionObserver">
			<template #content>
				<p>useIntersectionObserver 函数是基于 Web API 中的 Intersection Observer 的 Vue.js 封装</p>
				<p>它允许您观察一个或多个元素与其父元素或视口的交叉情况</p>
				<p>您可以配置 useIntersectionObserver 来观察元素何时进入或离开视口，以及元素与视口的交叉比例</p>
				<p>这个函数通常用于实现复杂的可见性逻辑，例如在元素滚动到特定位置或达到一定可见性时触发操作</p>
			</template>
		</page-header>

		<page-main title="响应式监听目标元素的可见性">
			<div ref="target" class="div"></div>
		</page-main>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
