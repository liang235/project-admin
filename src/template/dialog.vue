<!--
 * @Description: dialog 模版
 * @Date: 2022-12-03 13:44:43
 * @LastEditTime: 2022-12-25 16:09:36
-->
<template>
	<el-dialog v-model="isShowDialog" :width="width" :close-on-click-modal="false" :destroy-on-close="true" :draggable="true">
		<template #header>
			<div>{{ title }}</div>
		</template>

		<el-scrollbar :max-height="maxHeight">
			<el-form ref="formRef" :model="form" label-width="150px">
				<el-form-item prop="input1" label="上级党组织">
					<el-input v-model="form.input1" />
				</el-form-item>
				<el-form-item prop="input2" label="上级党组织">
					<el-select v-model="form.input2" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</el-scrollbar>

		<template #footer>
			<div class="dialog-footer">
				<el-button round type="primary" @click="onSubmit">确认</el-button>
				<el-button round @click="closeDialog">取消</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
// props
defineProps({
	// 标题
	title: {
		type: String,
		default: () => '',
	},
	// 宽度
	width: {
		type: Number,
		default: () => 677,
	},
	// 最大高度
	maxHeight: {
		type: Number,
		default: () => 450,
	},
})

// 弹窗状态
const isShowDialog = ref(false)

// form 表单
const formRef = ref()
const form = ref({})

// 打开弹窗
const openDialog = () => {
	isShowDialog.value = true
}

// 关闭弹窗
const closeDialog = () => {
	isShowDialog.value = false

	// 重置表单，必须要有 prop 属性，否则失效
	formRef.value.resetFields()
}

// 提交
const onSubmit = () => {
	closeDialog()
}

// 暴露数据到 vue 实例
defineExpose({
	openDialog,
})
</script>

<style lang="scss" scoped></style>
