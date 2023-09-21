<template>
	<div>
		<page-header title="欢迎使用 useVModels">
			<template #content>
				<p>props v-model 简写。可以把它想象成 toRefs(props)，但变化也会触发更新</p>
			</template>
		</page-header>

		<page-main title="双向绑定">
			<el-button @click="myData++">父组件按钮 - modelValue</el-button>
			<el-button @click="sum++">父组件按钮 - sum</el-button>
			<myChild2 v-model:modelValue="myData" v-model:sum="sum" />
		</page-main>
	</div>
</template>

<script setup>
import myChild2 from './components/myChild2.vue'

const myData = ref(123)
const sum = ref(222)
</script>

<style lang="scss" scoped></style>
