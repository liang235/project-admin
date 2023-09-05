<!--
 * @Description: 图片预览
-->
<template>
	<div class="components">
		<page-header title="图片预览" content="ImagePreview" />

		<page-main title="图片预览列表">
			<image-preview :src="src" :preview-src-list="srcList" :width="200" />
		</page-main>

		<page-main title="图片加载失败时">
			<image-preview src="" width="100px" height="100px" />
		</page-main>

		<page-main title="结合 el-table 使用">
			<el-table :data="tableData" :border="true">
				<el-table-column prop="date" label="日期" width="180" fixed="left" />
				<el-table-column prop="name" label="姓名" width="180" />
				<el-table-column prop="address" label="地址" />
				<el-table-column label="图片">
					<template #default="{ row }">
						<image-preview :src="row.src" width="100px" height="100px" />
					</template>
				</el-table-column>
			</el-table>
		</page-main>
	</div>
</template>

<script setup name="ComponentImagePreview">
// 默认展示图片
const src = ref('https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582')

const srcList = ref([
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
	'https://img2.baidu.com/it/u=2379534599,616446419&fm=253&fmt=auto&app=138&f=JPEG?w=425&h=388',
	'https://img1.baidu.com/it/u=2509112872,1133771085&fm=253&fmt=auto&app=138&f=JPEG?w=519&h=500',
])

const tableData = [
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		src: 'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		src: 'https://img2.baidu.com/it/u=2379534599,616446419&fm=253&fmt=auto&app=138&f=JPEG?w=425&h=388',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		src: 'https://img1.baidu.com/it/u=2509112872,1133771085&fm=253&fmt=auto&app=138&f=JPEG?w=519&h=500',
	},
]
</script>

<style lang="scss" scoped></style>
