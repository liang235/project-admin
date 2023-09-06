<template>
	<el-card header="测试页面">
		<el-table :data="tableData1" border style="width: 100%">
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
		</el-table>
		<el-pagination
			v-model:current-page="currentPage1"
			v-model:page-size="pageSize1"
			:page-sizes="[100, 200, 300, 400]"
			:background="background"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400"
			@size-change="handleSizeChange1"
			@current-change="handleCurrentChange1"
		/>

		<el-table :data="tableData2" border style="width: 100%">
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
		</el-table>
		<el-pagination
			v-model:current-page="currentPage2"
			v-model:page-size="pageSize2"
			:page-sizes="[100, 200, 300, 400]"
			:background="background"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400"
			@size-change="handleSizeChange2"
			@current-change="handleCurrentChange2"
		/>
	</el-card>
</template>

<script setup>
const currentPage1 = ref(1)
const pageSize1 = ref(10)
const currentPage2 = ref(1)
const pageSize2 = ref(10)
const tableData1 = [
	{ date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]
const tableData2 = [
	{ date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]

// 每页显示条目个数
const handleSizeChange1 = (val) => {
	pageSize1.value = val
	// 这里调用接口获取tableData1的数据
}
// 当前页数
const handleCurrentChange1 = (val) => {
	currentPage1.value = val
	// 这里调用接口获取tableData1的数据
}
// 每页显示条目个数
const handleSizeChange2 = (val) => {
	pageSize2.value = val
	// 这里调用接口获取tableData2的数据
}
// 当前页数
const handleCurrentChange2 = (val) => {
	currentPage2.value = val
	// 这里调用接口获取tableData2的数据
}
</script>

<style lang="scss" scoped></style>
