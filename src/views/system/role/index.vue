<!--
 * @Description: 角色管理
-->
<template>
	<page-main title="角色管理" v-loading="loading">
		<search-bar>
			<el-row :gutter="20">
				<el-col :span="6">
					<el-input v-model="search.name" placeholder="请输入角色名称" clearable />
				</el-col>
				<el-col :span="18">
					<el-button type="primary">
						<template #icon>
							<svg-icon name="ele-search" />
						</template>
						查询
					</el-button>
					<el-button type="success" @click="handleOpen(addRef)">
						<template #icon>
							<svg-icon name="ele-folder-add" />
						</template>
						新增
					</el-button>
				</el-col>
			</el-row>
		</search-bar>

		<el-table :data="tableData" :border="true" size="large" table-layout="auto" class="white-space-nowrap">
			<el-table-column label="序号" align="center" width="60">
				<template #default="scope">
					<span>{{ (search.currentPage - 1) * search.pageSize + scope.$index + 1 }}</span>
				</template>
			</el-table-column>

			<el-table-column prop="name" label="角色名称" />
			<el-table-column prop="sign" label="角色标识" />
			<el-table-column prop="sort" label="排序" align="center" />

			<el-table-column label="角色状态" align="center">
				<template #default="scope">
					<el-tag type="success" v-if="scope.row.status">启用</el-tag>
					<el-tag type="info" v-else>禁用</el-tag>
				</template>
			</el-table-column>

			<el-table-column prop="describe" label="角色描述" />

			<el-table-column label="操作" align="center">
				<template>
					<el-button size="small" type="primary">编辑</el-button>
					<el-button size="small" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 新增 -->
		<add ref="addRef" title="新增角色" />
	</page-main>
</template>

<script setup name="SystemName">
import { systemRoleList } from '@/api/system.js' // 系统 api
import Add from './components/add.vue' // 新增

// 加载状态
const loading = ref(false)

// 查询列表
const search = ref({
	name: '', // 菜单名称
	currentPage: 1, // 当前页
	pageSize: 10, // 每页条数
	total: 0, // 总条数
})

const addRef = ref() // 新增
const tableData = ref([]) // 数据列表

/**
 * @description: 获取角色列表
 * @return {*}
 */
const getSystemRoleList = () => {
	loading.value = true
	systemRoleList().then((res) => {
		tableData.value = res.data

		setTimeout(() => {
			loading.value = false
		}, 500)
	})
}

/**
 * @description: 打开新增/编辑弹窗
 * @return {*}
 */
const handleOpen = (val) => {
	val.openDialog()
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	getSystemRoleList()
})
</script>

<style lang="scss" scoped></style>
