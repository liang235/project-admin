<!--
 * @Description: 重新加载/刷新页面
-->
<template>
	<div></div>
</template>

<script setup name="Reload">
const router = useRouter() // 路由实例

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	router.go(-1)
})
</script>

<style lang="scss" scoped></style>
