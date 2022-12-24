<!--
 * @Description: 用户管理
 * @Date: 2022-11-08 14:45:23
 * @LastEditTime: 2022-12-24 03:20:57
-->
<template>
    <page-main title="用户管理" v-loading="loading">
        <search-bar>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="search.name" placeholder="请输入用户名称" clearable />
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

            <el-table-column prop="name" label="账户名称" />
            <el-table-column prop="nickname" label="用户昵称" />
            <el-table-column prop="sign" label="关联角色" />
            <el-table-column prop="phone" label="手机号" />
            <el-table-column prop="email" label="邮箱" />

            <el-table-column prop="status" label="用户状态" align="center">
                <template #default="scope">
                    <el-tag type="success" v-if="scope.row.status">启用</el-tag>
                    <el-tag type="info" v-else>禁用</el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="describe" label="用户描述" />

            <el-table-column label="操作" align="center">
                <template #default="scope">
                    <el-button size="small" type="primary">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 新增 -->
        <add ref="addRef" title="新增用户" />
    </page-main>
</template>

<script setup name="SystemUser">
import { systemUserList } from '@/api/system.js' // 系统 api
import Add from './components/add.vue' // 新增

// 加载状态
const loading = ref(false)

// 查询列表
const search = ref({
    name: '', // 菜单名称
    currentPage: 1, // 当前页
    pageSize: 10, // 每页条数
    total: 0 // 总条数
})

const addRef = ref() // 新增
const tableData = ref([]) // 数据列表

/**
 * @description: 获取用户列表
 * @return {*}
 */
const getSystemUserList = () => {
    loading.value = true
    systemUserList().then((res) => {
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
    getSystemUserList()
})
</script>

<style lang="scss" scoped></style>
