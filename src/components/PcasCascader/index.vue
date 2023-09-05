<!--
 * @Description: 省市区街道联动
-->
<template>
	<el-cascader
		v-model="myValue"
		:options="pcasData"
		:props="{ value: 'code', label: 'name' }"
		:clearable="true"
		:filterable="true"
		:disabled="disabled"
	/>
</template>

<script setup name="PcasCascader">
// 行政区划数据来源于 https://github.com/modood/Administrative-divisions-of-China
import pcasRaw from './pcas-code.json'

// 定义父组件传过来的值
const props = defineProps({
	// 联动数据选中项绑定值
	modelValue: {
		type: Array,
		default: () => [],
	},
	// 是否禁用
	disabled: {
		type: Boolean,
		default: false,
	},
	/**
	 * 联动类型
	 * pc 省市
	 * pca 省市区
	 * pcas 省市区街道
	 */
	type: {
		type: String,
		default: 'pca',
	},
	/**
	 * 绑定数据的格式化类型
	 * code 编码
	 * name 名称
	 * both 编码/名称
	 */
	format: {
		type: String,
		default: 'code',
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['update:modelValue'])

// 联动数据选中项绑定值
const myValue = computed({
	// 将入参数据转成 code 码
	get: () => {
		return anyToCode(props.modelValue)
	},
	// 将 code 码转成出参数据
	set: (value) => {
		emit('update:modelValue', value ? codeToAny(value) : [])
	},
})

// 可选项数据源，键名可通过 Props 属性配置
const pcasData = computed(() => {
	const data = []
	// 省份
	pcasRaw.forEach((p) => {
		const tempP = {
			code: p.code,
			name: p.name,
		}
		const tempChildrenC = []
		// 城市
		p.children.forEach((c) => {
			const tempC = {
				code: c.code,
				name: c.name,
			}
			if (['pca', 'pcas'].includes(props.type)) {
				const tempChildrenA = []
				// 区县
				c.children.forEach((a) => {
					const tempA = {
						code: a.code,
						name: a.name,
					}
					if (props.type === 'pcas') {
						const tempChildrenS = []
						// 街道
						a.children.forEach((s) => {
							const tempS = {
								code: s.code,
								name: s.name,
							}
							tempChildrenS.push(tempS)
						})
						tempA.children = tempChildrenS
					}
					tempChildrenA.push(tempA)
				})
				tempC.children = tempChildrenA
			}
			tempChildrenC.push(tempC)
		})
		tempP.children = tempChildrenC
		data.push(tempP)
	})
	return data
})

// 将入参数据转成 code 码
const anyToCode = (value, dictionarie = pcasData.value) => {
	const input = []
	if (value.length > 0) {
		const findItem = dictionarie.find((item) => {
			if (props.format === 'code') {
				return item.code === value[0]
			}
			if (props.format === 'name') {
				return item.name === value[0]
			}
			return item.name === value[0].name && item.code === value[0].code
		})
		input.push(findItem.code)
		if (findItem.children) {
			input.push(...anyToCode(value.slice(1 - value.length), findItem.children))
		}
	}
	return input
}

// 将 code 码转成出参数据
const codeToAny = (codes, dictionarie = pcasData.value) => {
	const output = []
	const findItem = dictionarie.find((item) => item.code === codes[0])
	if (findItem) {
		switch (props.format) {
			case 'code':
				output.push(findItem.code)
				break
			case 'name':
				output.push(findItem.name)
				break
			case 'both':
				output.push({
					code: findItem.code,
					name: findItem.name,
				})
		}
		const newCodes = codes.slice(1 - codes.length)
		if (newCodes.length > 0 && findItem.children) {
			output.push(...codeToAny(newCodes, findItem.children))
		}
	}
	return output
}
</script>

<style lang="scss" scoped></style>
