<template>
	<div>
		<page-header title="欢迎使用 useVModel">
			<template #content>
				<p>v-model 简写，props + emit -> ref</p>
				<p>v-model 指令是很好的语法糖，使双向数据绑定更容易</p>
				<p>但 useVModel 更进一步，摆脱了一堆没有人真正想写的模板代码</p>
			</template>
		</page-header>

		<page-main title="双向绑定">
			<el-button @click="myData++">父组件 - 按钮</el-button>
			<myChild1 v-model="myData" />
		</page-main>
	</div>
</template>

<script setup>
import myChild1 from './components/myChild1.vue'

const myData = ref(123)
</script>

<style lang="scss" scoped></style>
