<template>
	<div class="useTransition">
		<page-header title="欢迎使用 useTransition">
			<template #content>
				<p>
					对于简单的过度，提供一个数字源值来监听。更改后，output将转换为新值。如果源在过渡过程中发生变化，则新的过渡将从前一个过渡中断的地方开始
				</p>
			</template>
		</page-header>

		<el-row>
			<el-col :span="12">
				<page-main title="做个数字加载动画">
					<h2>{{ Math.round(output) }}+</h2>
				</page-main>
			</el-col>
			<el-col :span="12">
				<page-main title="颜色转换">
					<h2 :style="{ color: color }">COLOR CHANGING</h2>
				</page-main>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import { useTransition, TransitionPresets } from '@vueuse/core' // vue 工具库

const count = ref(0)

const output = useTransition(count, {
	duration: 3000,
	transition: TransitionPresets.easeOutExpo,
})
count.value = 5000

const source = ref([0, 0, 0])
const output2 = useTransition(source, {
	duration: 5000,
	transition: TransitionPresets.easeOutExpo,
})
const color = computed(() => {
	const [r, g, b] = output2.value
	return `rgb(${r}, ${g}, ${b})`
})
source.value = [238, 71, 60]
</script>

<style lang="scss" scoped></style>
