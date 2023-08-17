<template>
	<page-main title="多选后无法编辑删除，在vue2中遇到了这个问题">
		<el-select v-model="value" multiple placeholder="Select" style="width: 100%">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
		</el-select>
	</page-main>
</template>

<script setup name="ElementPlusInput">
const value = ref(['Option1', 'Option2', 'Option3', 'Option4', 'Option5'])

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
	},
	{
		value: 'Option3',
		label: 'Option3',
	},
	{
		value: 'Option4',
		label: 'Option4',
	},
	{
		value: 'Option5',
		label: 'Option5',
	},
]
</script>

<style lang="scss" scoped></style>
