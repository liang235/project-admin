<!--
 * @Description: 部门管理
 * @Date: 2022-12-02 13:05:10
 * @LastEditTime: 2022-12-02 13:07:35
-->
<template>
	<page-main> 部门管理 </page-main>
</template>

<script setup name="SystemDept">
// 路由实例
const route = useRoute()
const router = useRouter()

// vue 实例
const { proxy } = getCurrentInstance()

// 定义响应式数据
const state = reactive({})

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
