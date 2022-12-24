<!--
 * @Description: 表单表格验证
 * @Date: 2022-12-20 17:01:38
 * @LastEditTime: 2022-12-20 17:30:56
-->
<template>
    <page-main tilte="表单表格验证">
        <el-form ref="tableRulesRef" :model="tableData">
            <el-table :data="tableData.data" :border="true">
                <el-table-column
                    v-for="(item, index) in tableData.header"
                    :key="index"
                    :show-overflow-tooltip="true"
                    :prop="item.prop"
                    :width="item.width"
                    :label="item.label"
                >
                    <template v-slot:header>
                        <span v-if="item.isRequired" class="text-red-600">*</span>
                        <span class="pl-1">{{ item.label }}</span>
                        <el-tooltip v-if="item.isTooltip" effect="dark" content="这是tooltip" placement="top">
                            <svg-icon name="permissions" />
                        </el-tooltip>
                    </template>

                    <template v-slot="scope">
                        <el-form-item
                            :prop="`data.${scope.$index}.${item.prop}`"
                            :rules="[{ required: item.isRequired, message: '不能为空', trigger: `${item.type}` == 'input' ? 'blur' : 'change' }]"
                        >
                            <el-select v-if="item.type === 'select'" v-model="scope.row[item.prop]" placeholder="请选择">
                                <el-option v-for="sel in tableData.option" :key="sel.value" :label="sel.label" :value="sel.value" />
                            </el-select>

                            <el-date-picker
                                v-else-if="item.type === 'date'"
                                v-model="scope.row[item.prop]"
                                type="date"
                                placeholder="选择日期"
                                style="width: 100%"
                            />

                            <el-input v-else-if="item.type === 'input'" v-model="scope.row[item.prop]" placeholder="请输入内容" />

                            <el-input v-else-if="item.type === 'dialog'" v-model="scope.row[item.prop]" readonly placeholder="请输入内容" />
                        </el-form-item>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>

        <div class="flex-center mt-5">
            <el-button size="default" type="success" @click="onValidate(tableRulesRef)">表格验证</el-button>
            <el-button size="default" type="primary" @click="onAddRow">新增一行</el-button>
        </div>
    </page-main>
</template>

<script setup name="PagesFormTableRules">
const tableRulesRef = ref()
const tableData = ref({
    data: [],
    header: [
        { prop: 'a1', width: '', label: '一级分类', isRequired: true, type: 'select' },
        { prop: 'a2', width: '', label: '二级分类', isRequired: true, type: 'select' },
        { prop: 'a3', width: '', label: '三级分类', isRequired: true, type: 'select' },
        { prop: 'a4', width: '', label: '四级分类', isRequired: true, type: 'date' },
        { prop: 'a5', width: '', label: '五级分类', isRequired: true, type: 'input' },
        { prop: 'a6', width: '', label: '六级分类', isTooltip: true, type: 'dialog' },
        { prop: 'a7', width: '', label: '演示级分类', type: 'input' },
        { prop: 'a8', width: '', label: '颜色是分类', type: 'input' }
    ],
    option: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' }
    ]
})

// 表格验证
const onValidate = (formEl) => {
    if (tableData.value.data.length <= 0) return ElMessage.warning('请先点击增加一行')
    if (!formEl) return
    formEl.validate((valid) => {
        if (!valid) return ElMessage.warning('表格项必填未填')
        ElMessage.success('全部验证通过')
    })
}

// 新增一行
const onAddRow = () => {
    tableData.value.data.push({
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: ''
    })
}
</script>

<style lang="scss" scoped></style>
