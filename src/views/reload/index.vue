<!--
 * @Description: 重新加载/刷新页面
 * @Date: 2022-11-01 18:20:06
 * @LastEditTime: 2022-11-18 14:10:59
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
