<!--
 * @Description: 省市区街道联动
-->
<template>
	<div class="components">
		<page-header title="省市区街道联动" content="PcasCascader" />

		<page-main title="多级联动">
			<p>省份/城市联动</p>
			<pcas-cascader v-model="pcas1" type="pc" />
			<p>省份/城市/区县联动</p>
			<pcas-cascader v-model="pcas2" type="pca" />
			<p>省份/城市/区县/街道联动</p>
			<pcas-cascader v-model="pcas3" type="pcas" />
		</page-main>

		<page-main title="数据格式化">
			<p>{{ pcasCode }}</p>
			<pcas-cascader v-model="pcasCode" format="code" />
			<p>{{ pcasName }}</p>
			<pcas-cascader v-model="pcasName" format="name" />
			<p>{{ pcasBoth }}</p>
			<pcas-cascader v-model="pcasBoth" format="both" />
		</page-main>

		<page-main title="表单验证">
			<el-form ref="formRef" :model="ruleForm" :rules="rules">
				<el-form-item label="地区" prop="pca">
					<pcas-cascader v-model="ruleForm.pca" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm"> 提交 </el-button>
				</el-form-item>
			</el-form>
		</page-main>
	</div>
</template>

<script setup name="ComponentPcasCascader">
import { ElMessage } from 'element-plus'

const pcas1 = ref([]) // 省份/城市联动
const pcas2 = ref([]) // 省份/城市/区县联动
const pcas3 = ref([]) // 省份/城市/区县/街道联动

// 数据格式化
const pcasCode = ref(['33', '3301', '330106'])
const pcasName = ref(['浙江省', '杭州市', '西湖区'])
const pcasBoth = ref([
	{ code: '33', name: '浙江省' },
	{ code: '3301', name: '杭州市' },
	{ code: '330106', name: '西湖区' },
])

// 表单验证
const formRef = ref()
const ruleForm = ref({
	pca: [],
})
const rules = ref({
	pca: [{ type: 'array', required: true, message: '请选择地区', trigger: 'change' }],
})
function submitForm() {
	formRef.value?.validate((valid) => {
		if (valid) {
			ElMessage.success('提交成功')
		}
	})
}
</script>

<style lang="scss" scoped>
p {
	margin: 16px 0;
}

:deep(.el-cascader) {
	width: 300px;
}
</style>
