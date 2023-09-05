<!--
 * @Description: table 表格功能
-->
<template>
	<el-table :data="data" :border="setBorder" row-key="id" v-loading="config.loading" @selection-change="onSelectionChange" height="100%">
		<el-table-column v-if="config.isSelection" type="selection" :reserve-selection="true" width="50" align="center" />
		<el-table-column v-if="config.isSerialNo" type="index" label="序号" width="60" align="center" />

		<el-table-column
			v-for="(item, index) in setHeader"
			:key="index"
			show-overflow-tooltip
			:prop="item.key"
			:width="item.colWidth"
			:label="item.title"
			align="center"
		>
			<template v-slot="scope">
				<template v-if="item.type === 'image'">
					<img :src="scope.row[item.key]" :width="item.width" :height="item.height" />
				</template>
				<template v-else>
					{{ scope.row[item.key] }}
				</template>
			</template>
		</el-table-column>

		<el-table-column label="操作" width="100" v-if="config.isOperate" align="center">
			<template v-slot="scope">
				<el-popconfirm title="确定删除吗？" @confirm="onDelRow(scope.row)">
					<template #reference>
						<el-button text type="primary">删除</el-button>
					</template>
				</el-popconfirm>
			</template>
		</el-table-column>
	</el-table>
	<div>123</div>
</template>

<script setup name="TableFull">
// 定义父组件传过来的值
const props = defineProps({
	// 列表内容
	data: {
		type: Array,
		default: () => [],
	},
	// 表头内容
	header: {
		type: Array,
		default: () => [],
	},
	// 配置项
	config: {
		type: Object,
		default: () => {},
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['delRow', 'pageChange', 'sortHeader'])

// 分页参数
const page = ref({
	pageNum: 1,
	pageSize: 10,
})

// 设置边框显示/隐藏
const setBorder = computed(() => {
	return !!props.config.isBorder
})

// 设置 tool header 数据
const setHeader = computed(() => {
	return props.header.filter((v) => v.isCheck)
})

// 当选择项发生变化时会触发该事件，用于导出
const selectlist = ref([])
const onSelectionChange = (val) => {
	selectlist.value = val
}

// 删除当前项
const onDelRow = (row) => {
	emit('delRow', row)
}

// 搜索时，分页还原成默认
const pageReset = () => {
	page.value.pageNum = 1
	page.value.pageSize = 10
	emit('pageChange', page.value)
}

// 暴露变量
defineExpose({
	pageReset,
})
</script>

<style lang="scss" scoped></style>
