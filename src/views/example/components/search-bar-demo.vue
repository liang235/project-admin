<!--
 * @Description: 搜索面板
 * @Date: 2022-11-28 23:54:25
 * @LastEditTime: 2022-12-03 00:40:52
-->
<template>
    <div class="components">
        <page-header title="搜索面板" content="SearchBar" />

        <page-main title="设置显示展开/收起按钮，并默认展开所有内容">
            <search-bar :show-more="true" :unfold="true" @toggle="searchMore = $event">
                <el-form :model="search" label-width="120px">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="姓名 / 手机号">
                                <el-input v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="姓名 / 手机号">
                                <el-input v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-collapse-transition>
                        <el-row :gutter="20" v-show="searchMore">
                            <el-col :span="8">
                                <el-form-item label="部门">
                                    <el-select v-model="search.department_id" clearable placeholder="请选择部门">
                                        <el-option label="技术部" :value="1" />
                                        <el-option label="设计部" :value="2" />
                                        <el-option label="行政部" :value="3" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="职位">
                                    <el-select v-model="search.department_job_id" clearable placeholder="请选择职位">
                                        <el-option label="程序员" :value="1" />
                                        <el-option label="设计师" :value="2" />
                                        <el-option label="人事" :value="3" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="角色">
                                    <el-select v-model="search.role_id" clearable placeholder="请选择角色">
                                        <el-option label="主管" :value="1" />
                                        <el-option label="普通职员" :value="2" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-collapse-transition>
                </el-form>
            </search-bar>
        </page-main>
    </div>
</template>

<script setup name="ComponentSearchBar">
// 查询表单字段
const search = ref({
    name: '',
    department_id: '',
    department_job_id: '',
    role_id: '',
    check1: true,
    check2: false
})

// 展开收起
const searchMore = ref(false)
</script>

<style lang="scss" scoped></style>
