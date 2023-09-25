<template>
	<div class="useElementVisibility">
		<page-header title="欢迎使用 useElementVisibility">
			<template #content>
				<p>跟踪元素在视口中的可见性</p>
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
