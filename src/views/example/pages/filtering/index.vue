<!--
 * @Description: 过滤筛选组件
-->
<template>
	<page-main title="过滤筛选支持单选和多选">
		<div
			class="filtering"
			v-for="(val, key) in data.filtering"
			:key="key"
			:ref="
				(el) => {
					if (el) dlRefs[key] = el
				}
			"
		>
			<div class="filtering-title">{{ val.title }}<svg-icon name="ele-arrow-right" /></div>
			<div class="filtering-item" :style="{ height: val.isMore ? 'auto' : '54px' }">
				<el-tag
					:effect="v.active ? 'dark' : 'plain'"
					:type="v.active ? '' : 'info'"
					v-for="(v, k) in val.children"
					:key="k"
					@click="onSelItem(val, v)"
					>{{ v.label }}</el-tag
				>

				<div class="more" v-if="val.isShowMore" @click="val.isMore = !val.isMore">
					<span>{{ val.isMore ? '收起' : '展开' }}</span>
					<svg-icon :name="!val.isMore ? 'ele-caret-bottom' : 'ele-caret-top'" />
				</div>
			</div>
		</div>

		<el-table :data="data.filterList" :border="true" class="mt-5">
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
		</el-table>
	</page-main>
</template>

<script setup name="PagesFiltering">
import { cloneDeep } from 'lodash-es' // js 工具库
import { filtering, filterList } from './mock.js' // mock 数据

const mode = ref('multi') // 模式 radio/multi
const dlRefs = ref([]) // 导航 refs
// 数据列表
const data = ref({
	filtering,
	filterList,
})
const setFiltering = ref({}) // 选中的导航数据

// 过滤当前选中的数据
const onSelItem = (val, v) => {
	let arr = [] // 临时变量，当前选择的列表项，本示例中暂没用到

	switch (mode.value) {
		case 'radio':
			val.children.map((v) => (v.active = false))
			v.active = true

			// 当前选择的列表项
			data.value.filtering.map((item) => {
				item.children.map((chil) => {
					if (chil.active) {
						arr.push({
							...item,
							children: [{ ...chil }],
						})
					}
				})
			})
			break
		case 'multi':
			v.active = !v.active

			const cloneFiltering = cloneDeep(data.value.filtering)
			// 当前选择的列表项
			cloneFiltering.map((item) => {
				item.children = item.children.filter((chil) => {
					return chil.active
				})
			})
			arr = cloneFiltering
			break
	}

	initActive()
}

// 初始化，默认过滤选项
const initActive = () => {
	switch (mode.value) {
		case 'radio':
			data.value.filtering.map((item) => {
				item.children.map((chil) => {
					if (chil.active) {
						setFiltering.value[item.value] = chil.value
					}
				})
			})
			break
		case 'multi':
			data.value.filtering.map((item) => {
				setFiltering.value[item.value] = []
				item.children.map((chil) => {
					if (chil.active) {
						setFiltering.value[item.value].push(chil.value)
					}
				})
			})
	}
}

// 初始化 `收起、展开` 按钮
const initBtnToggle = () => {
	nextTick(() => {
		const els = dlRefs.value
		els.map((v, k) => {
			if (v.scrollHeight < v.lastChild.scrollHeight) {
				data.value.filtering[k].isShowMore = true
			} else {
				data.value.filtering[k].isShowMore = false
			}
		})
	})
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	initActive()
	initBtnToggle()
})
</script>

<style lang="scss" scoped>
// 导航数据
.filtering {
	display: flex;
	border-bottom: 1px dotted var(--el-border-color);

	&:first-child {
		border-top: 1px dotted var(--el-border-color);
	}

	.filtering-title {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 60px;
		margin: 15px 0;
		font-weight: 700;
		color: var(--el-text-color-secondary);
	}

	.filtering-item {
		position: relative;
		flex: 1;
		padding-left: 15px;
		overflow: hidden;

		.el-tag {
			margin-top: 15px;
			margin-right: 10px;

			&:last-of-type {
				margin-right: 0;
				margin-bottom: 15px;
			}

			&:hover {
				// color: var(--el-color-primary);
				cursor: pointer;
			}
		}

		.more {
			position: absolute;
			top: 18px;
			right: 0;
			font-size: 14px;

			&:hover {
				cursor: pointer;
			}
		}
	}
}

.filtering:last-of-type {
	border-bottom: 1px dotted var(--el-border-color);
}
</style>
