<template>
	<div class="useElementVisibility">
		<page-header title="欢迎使用 useElementVisibility">
			<template #content>
				<p>useElementVisibility 函数用于检测元素是否在视口中可见</p>
				<p>
					当您使用 useElementVisibility 时，它会跟踪指定元素的可见性状态，并提供一个 ref，该 ref 的值会根据元素的可见性变化而更新，通常是
					true（可见）或 false（不可见）
				</p>
				<p>这个函数通常用于检测特定元素的可见性，以便在元素进入或离开视口时触发一些操作</p>
			</template>
		</page-header>

		<page-main title="判断元素是否在可视窗口内">
			<div ref="target" class="div"></div>
		</page-main>
	</div>
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, (newVal) => {
	newVal ? ElMessage.success('在可视窗口内') : ElMessage.success('在可视窗口外')
})
</script>

<style lang="scss" scoped>
.useElementVisibility {
	height: 1000px;
}

.div {
	width: 100px;
	height: 100px;
	background-color: red;
}
</style>
