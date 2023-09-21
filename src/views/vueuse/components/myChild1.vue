<template>
	<h1>子组件 - 父组件的传值：{{ modelValue_local }}</h1>
	<el-button @click="modelValue_local--">子组件 - 按钮</el-button>
</template>

<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['update:modelValue'])

const modelValue_local = useVModel(props, 'modelValue', emits)
</script>
