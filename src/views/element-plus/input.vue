<template>
	<page-main title="clear 事件不触发 click 事件">
		<el-input v-model="name" clearable @click.stop="handlerDialog"></el-input>
	</page-main>
</template>

<script setup name="ElementPlusInput">
const name = ref('')

const handlerDialog = () => {
	console.log('handlerDialog')
}
</script>

<style lang="scss" scoped></style>
