<template>
    <div>401</div>
</template>

<script setup name="401">
const route = useRoute() // 路由参数
const router = useRouter() // 路由实例
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据
const state = reactive({})

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
