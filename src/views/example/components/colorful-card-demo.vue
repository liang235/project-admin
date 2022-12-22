<!--
 * @Description: 多彩渐变卡片
 * @Date: 2022-12-14 14:56:44
 * @LastEditTime: 2022-12-14 19:51:29
-->
<template>
	<div>
		<page-header title="多彩渐变卡片">
			<template #content>
				<p>ColorfulCard</p>
			</template>
		</page-header>

		<page-main>
			<el-row :gutter="20">
				<el-col :xs="24" :md="6">
					<colorful-card header="header" :num="520" tip="较上周上升50%"></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#f9a8d4"
						colorTo="#be185d"
						:num="520"
						tip="较上周上升50%"
						icon="ele-link"
					></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#5eead4"
						colorTo="#0f766e"
						:num="520"
						tip="较上周上升50%"
						icon="ele-baseball"
					></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#f9a8d4"
						colorTo="#881337"
						:num="520"
						tip="较上周上升50%"
						icon="ele-flag"
					></colorful-card>
				</el-col>
			</el-row>
		</page-main>
	</div>
</template>

<script setup name="ComponentColorfulCard">
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
