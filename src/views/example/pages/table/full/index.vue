<!--
 * @Description: table 表格完整功能
-->
<template>
	<div class="pages-table-full-container">
		<page-main height="calc(100% - 40px)">
			<search-list :search="searchForm" @search="onSearch" />

			<table-full
				ref="tableRef"
				:data="tableData"
				:header="tableHeader"
				:config="tableConfig"
				@delRow="onTableDelRow"
				@pageChange="onTablePageChange"
			/>
		</page-main>
	</div>
</template>

<script setup name="PagesTableFull">
import { ElMessage } from 'element-plus'
import SearchList from './search.vue' // 查询部分

// 搜索表单，动态生成（传空数组时，将不显示搜索，注意格式）
const searchForm = ref([
	{ label: '采样点名称', prop: 'name', placeholder: '请输入应检尽检核酸采样点名称', required: true, type: 'input' },
	{ label: '详细地址', prop: 'address', placeholder: '请输入详细地址', required: false, type: 'input' },
	{ label: '联系电话', prop: 'phone', placeholder: '请输入采样点联系电话', required: false, type: 'input' },
	{ label: '开放时间', prop: 'time', placeholder: '请选择', required: false, type: 'date' },
	{
		label: '支持24小时',
		prop: 'isSupport',
		placeholder: '请选择',
		required: false,
		type: 'select',
		options: [
			{ label: '是', value: 1 },
			{ label: '否', value: 0 },
		],
	},
	{ label: '图片描述', prop: 'image', placeholder: '请输入图片描述', required: false, type: 'input' },
	{ label: '核酸机构', prop: 'mechanism', placeholder: '请输入核酸机构', required: false, type: 'input' },
])

// table 表格数据
const tableRef = ref()
// 列表数据（必传）
const tableData = ref([])
// 表头内容（必传，注意格式）
const tableHeader = ref([
	{ key: 'name', colWidth: '', title: '应检尽检核酸采样点名称', type: 'text', isCheck: true },
	{ key: 'address', colWidth: '', title: '详细地址', type: 'text', isCheck: true },
	{ key: 'phone', colWidth: '', title: '采样点联系电话', type: 'text', isCheck: true },
	{ key: 'time', colWidth: '', title: '开放时间', type: 'text', isCheck: true },
	{ key: 'isSupport', colWidth: '', title: '是否支持24小时核酸检测', type: 'text', isCheck: true },
	{ key: 'image', colWidth: '', width: '70', height: '40', title: '图片描述', type: 'image', isCheck: true },
])
// 配置项（必传）
const tableConfig = ref({
	total: 0, // 列表总数
	loading: true, // loading 加载
	isBorder: true, // 是否显示表格边框
	isSerialNo: true, // 是否显示表格序号
	isSelection: true, // 是否显示表格多选
	isOperate: true, // 是否显示表格操作栏
})
// 搜索参数（不用传，用于分页、搜索时传给后台的值，`getTableData` 中使用）
const tableParam = ref({
	pageNum: 1,
	pageSize: 10,
})

// 初始化列表数据
const getTableData = () => {
	tableConfig.value.loading = true
	tableData.value = []
	for (let i = 0; i < 20; i++) {
		tableData.value.push({
			id: `123456789${i + 1}`,
			name: `莲塘别墅广场${i + 1}`,
			address: `中沧公寓中庭榕树下${i + 1}`,
			phone: `0592-6081259${i + 1}`,
			time: `6:00 ~ 24:00`,
			isSupport: `${i % 2 === 0 ? '是' : '否'}`,
			image: `https://img2.baidu.com/it/u=417454395,2713356475&fm=253&fmt=auto?w=200&h=200`,
		})
	}
	// 数据总数（模拟，真实从接口取）
	tableConfig.value.total = tableData.value.length
	setTimeout(() => {
		tableConfig.value.loading = false
	}, 500)
}

// 搜索点击时表单回调
const onSearch = (data) => {
	tableParam.value = { ...tableParam.value, ...data }
	tableRef.value.pageReset()
}

// 删除当前项回调
const onTableDelRow = (row) => {
	ElMessage.success(`删除${row.name}成功！`)
	getTableData()
}

// 分页改变时回调
const onTablePageChange = (page) => {
	tableParam.value.pageNum = page.pageNum
	tableParam.value.pageSize = page.pageSize
	getTableData()
}

// 拖动显示列排序回调
// const onSortHeader = (data) => {
// 	tableHeader.value = data
// }

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	getTableData()
})
</script>

<style lang="scss" scoped>
.pages-table-full-container {
	position: absolute;
	width: 100%;
	height: 100%;

	:deep(.main-container) {
		display: flex;
		flex-direction: column;
	}
}
</style>
