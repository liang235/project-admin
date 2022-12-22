<!--
 * @Description: 多权限验证，用户必须具备全部权限，才验证通过
 * @Date: 2022-11-30 14:29:56
 * @LastEditTime: 2022-11-30 16:09:42
-->

<template>
	<div class="authAll">
		<slot v-if="check()" />
		<slot v-else name="no-auth" />
	</div>
</template>

<script setup name="AuthAll">
// 定义父组件传过来的值
const props = defineProps({
	value: Array,
})

/**
 * @description: 权限验证
 * @return {*}
 */
const check = () => {
	return useAuth().authAll(props.value)
}
</script>

<style lang="scss" scoped></style>
