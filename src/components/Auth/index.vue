<!--
 * @Description: 鉴权组件：单权限验证/多权限验证，用户只要具备其中任何一个权限，则验证通过
-->
<template>
	<div class="auth">
		<slot v-if="check()" />
		<slot v-else name="no-auth" />
	</div>
</template>

<script setup name="Auth">
// 定义父组件传过来的值
const props = defineProps({
	value: String | Array,
})

/**
 * @description: 权限验证
 * @return {*}
 */
const check = () => {
	return useAuth().auth(props.value)
}
</script>

<style lang="scss" scoped></style>
