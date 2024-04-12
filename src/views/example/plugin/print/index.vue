<!--
 * @Description: 页面打印
-->
<template>
	<div>
		<page-header title="打印">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i print-js</el-tag></p>
				<p>还可以打印页面及PDF文件等，详情参考官网</p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 Print.js
			</el-button>
		</page-header>

		<page-main title="打印 JSON">
			<el-button icon="ele-printer" type="primary" class="mb-2.5" @click="onPrintJson">打印</el-button>

			<el-table :data="tableData" :border="true">
				<el-table-column prop="date" label="Date" width="180" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
			</el-table>
		</page-main>

		<page-main title="打印图片">
			<el-button icon="ele-printer" type="primary" class="mb-2.5" @click="onPrintImg">打印</el-button>
			<br />
			<img v-for="item in images" :key="item" class="w-60 mr-5 inline-block" :src="item" />
		</page-main>
	</div>
</template>

<script setup name="PluginPrint">
import printJs from 'print-js' // 打印插件

// 跳转链接
const open = () => {
	window.open('https://github.com/crabbly/Print.js', '_blank')
}

// 打印JSON
const tableData = ref([
	{ date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
	{ date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
])
const onPrintJson = () => {
	printJs({
		printable: tableData.value,
		properties: ['date', 'name', 'address'],
		type: 'json',
	})
}

// 打印图片
const images = ref([
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
])
const onPrintImg = () => {
	printJs({
		printable: images.value,
		type: 'image',
		header: 'Multiple Images',
		imageStyle: 'width:50%;margin-bottom:20px;',
	})
}
</script>

<style lang="scss" scoped></style>
