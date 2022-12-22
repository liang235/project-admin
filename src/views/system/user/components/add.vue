<!--
 * @Description: 新增用户
 * @Date: 2022-12-03 17:56:45
 * @LastEditTime: 2022-12-04 01:13:32
-->
<!--
 * @Description: 新增角色
 * @Date: 2022-12-03 13:39:18
 * @LastEditTime: 2022-12-03 17:57:30
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
						<el-form-item prop="name" label="账户名称">
							<el-input v-model="form.name" placeholder="请输入账号名称" :clearable="true"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="nickname" label="用户昵称">
							<el-input v-model="form.nickname" placeholder="请输入用户昵称" :clearable="true"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="password" label="账户密码">
							<el-input v-model="form.password" placeholder="请输入账户密码" type="password" :clearable="true"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="sign" label="关联角色">
							<el-select
								v-model="form.sign"
								placeholder="请选择"
								:clearable="true"
								:multiple="true"
								:collapse-tags="true"
								:collapse-tags-tooltip="true"
							>
								<el-option v-for="item in roleList" :key="item.sign" :label="item.name" :value="item.sign"></el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="sex" label="性别">
							<el-select v-model="form.sex" placeholder="请选择" :clearable="true">
								<el-option label="男" value="0"></el-option>
								<el-option label="女" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="status" label="用户状态">
							<el-switch v-model="form.status" inline-prompt active-text="启" inactive-text="禁"></el-switch>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="phone" label="手机号">
							<el-input v-model="form.phone" placeholder="请输入手机号" :clearable="true"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item prop="email" label="邮箱">
							<el-input v-model="form.email" placeholder="请输入邮箱" :clearable="true"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
						<el-form-item prop="describe" label="用户描述">
							<el-input v-model="form.describe" type="textarea" placeholder="请输入用户描述" maxlength="150"></el-input>
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

<script setup name="SystemUserAdd">
import { systemRoleList } from '@/api/system.js' // 系统 api

// props
const props = defineProps({
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
const formRef = ref()
const form = ref({
	status: true,
})
const rules = ref({
	name: [{ required: true, trigger: 'blur', message: '请输入账户名称' }],
	nickname: [{ required: true, trigger: 'blur', message: '请输入用户名称' }],
	password: [{ required: true, trigger: 'blur', message: '请输入用户密码' }],
})

/**
 * @description: 获取角色列表
 * @return {*}
 */
const roleList = ref([]) // 角色列表
const getSystemRoleList = () => {
	systemRoleList().then((res) => {
		roleList.value = res.data
	})
}

// 打开弹窗
const openDialog = () => {
	isShowDialog.value = true
	getSystemRoleList()
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
			console.log(form.value)
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
