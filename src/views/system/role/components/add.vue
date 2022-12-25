<!--
 * @Description: 新增角色
 * @Date: 2022-12-03 13:39:18
 * @LastEditTime: 2022-12-25 03:10:52
-->
<template>
	<el-dialog v-model="isShowDialog" :width="width" :close-on-click-modal="false" :destroy-on-close="true" :draggable="true">
		<template #header>
			<div>{{ title }}</div>
		</template>

		<el-scrollbar :max-height="maxHeight">
			<el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
				<el-row :gutter="20">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="name" label="角色名称">
							<el-input v-model="form.name" placeholder="请输入角色名称" clearable />
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="sign" label="角色标识">
							<el-input v-model="form.sign" placeholder="请输入角色标识" clearable />
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
						<el-form-item prop="describe" label="角色描述">
							<el-input v-model="form.describe" type="textarea" placeholder="请输入角色描述" maxlength="150" />
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="sort" label="排序">
							<el-input-number v-model="form.sort" :min="0" :max="999" controls-position="right" placeholder="请输入排序" />
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="status" label="角色状态">
							<el-switch v-model="form.status" inline-prompt active-text="启" inactive-text="禁" />
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-scrollbar>

		<template #footer>
			<el-button type="primary" @click="onSubmit">确认</el-button>
			<el-button @click="closeDialog">取消</el-button>
		</template>
	</el-dialog>
</template>

<script setup name="SystemRoleAdd">
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
		default: () => 769,
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
const formRef = ref(null)
const form = ref({
	name: '', // 角色名称
	sign: '', // 角色标识
	sort: 0, // 排序
	status: true, // 角色状态
	describe: '', // 角色描述
})
const rules = ref({
	name: [{ required: true, trigger: 'blur', message: '请输入角色名称' }],
	sign: [{ required: true, trigger: 'blur', message: '请输入角色标识' }],
})

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
	formRef.value.validate((valid) => {
		if (valid) {
		} else {
			return false
		}
	})
}

// 暴露数据到 vue 实例
defineExpose({
	openDialog,
})
</script>

<style lang="scss" scoped></style>
