<template>
	<h1>子组件 - 父组件的传值 - modelValue：{{ modelValue }}</h1>
	<h1>子组件 - 父组件的传值 - sum：{{ sum }}</h1>
	<el-button @click="modelValue--">子组件按钮 - modelValue</el-button>
	<el-button @click="sum--">子组件按钮 - sum</el-button>
</template>

<script setup>
import { useVModels } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
	sum: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['update:modelValue', 'update:sum'])

const { modelValue, sum } = useVModels(props, emits)
</script>
