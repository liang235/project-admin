<!--
 * @Description: 查询部分
-->
<template>
	<div class="table-search-container" v-if="search.length > 0">
		<el-form ref="formRef" :model="form" label-width="100px">
			<el-row :gutter="20">
				<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(val, key) in search" :key="key" v-show="key === 0 || isToggle">
					<template v-if="val.type !== ''">
						<el-form-item
							:label="val.label"
							:prop="val.prop"
							:rules="[{ required: val.required, message: `${val.label}不能为空`, trigger: val.type === 'input' ? 'blur' : 'change' }]"
						>
							<el-input
								v-model="form[val.prop]"
								:placeholder="val.placeholder"
								:clearable="true"
								v-if="val.type === 'input'"
								style="width: 100%"
							/>

							<el-date-picker v-model="form[val.prop]" type="date" :placeholder="val.placeholder" v-else-if="val.type === 'date'" />

							<el-select v-model="form[val.prop]" :placeholder="val.placeholder" v-else-if="val.type === 'select'">
								<el-option v-for="item in val.options" :key="item.value" :label="item.label" :value="item.value" />
							</el-select>
						</el-form-item>
					</template>
				</el-col>

				<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
					<el-form-item :label-width="!isToggle ? '65px' : '100px'">
						<template #label v-if="search.length > 1">
							<div class="toggle" @click="isToggle = !isToggle">
								<span>{{ isToggle ? '收筛选' : '展筛选' }}</span>
								<SvgIcon :name="isToggle ? 'ele-arrow-up' : 'ele-arrow-down'" />
							</div>
						</template>
						<div>
							<el-button type="primary" @click="onSearch(formRef)">查询 </el-button>
							<el-button type="info" @click="onReset(formRef)"> 重置 </el-button>
						</div>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script setup name="PagesTableFullEditSearch">
// 定义父组件传过来的值
const props = defineProps({
	// 搜索表单
	search: {
		type: Array,
		default: () => [],
	},
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['search'])

const formRef = ref() // form 表单
const form = ref({}) // 表单查询
const isToggle = ref(false) // 展开/收起

// 初始化 form 字段，取自父组件 search.prop
const initFormField = () => {
	if (props.search.length <= 0) return false
	props.search.forEach((v) => (form.value[v.prop] = ''))
}

// 查询
const onSearch = (formEl) => {
	if (!formEl) return
	formEl.validate((valid) => {
		if (valid) {
			emit('search', form.value)
		} else {
			return false
		}
	})
}

// 重置
const onReset = (formEl) => {
	if (!formEl) return
	formEl.resetFields()
	emit('search', form.value)
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	initFormField()
})
</script>

<style lang="scss" scoped>
.toggle {
	display: flex;
	align-items: center;
	color: var(--el-color-primary);
	white-space: nowrap;
	cursor: pointer;
	user-select: none;
}
</style>
