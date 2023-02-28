<!--
 * @Description: ElementPlus 图标
 * @Date: 2022-11-18 15:21:03
 * @LastEditTime: 2022-12-10 15:34:04
-->
<template>
	<el-row class="svg-container">
		<el-col :xs="24" :sm="8" :md="6" :lg="3" :xl="2" v-for="(icon, index) in icons" :key="index">
			<div class="icon-item" @click="handleCopy(icon.name)">
				<svg-icon :name="`ele-${kebabCase(icon.name)}`" />
				<span class="mt-5px">ele-{{ kebabCase(icon.name) }}</span>
			</div>
		</el-col>
	</el-row>
</template>

<script setup name="ElementIcons">
import { kebabCase } from 'lodash-es' // js 工具库
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 导出图标
import { handleClipboard } from '@/utils/clipboard.js' // 复制粘贴

// ElementPlus 图标合集
const icons = ref(ElementPlusIconsVue)

// 复制粘贴
const handleCopy = (name) => {
	const text = `<svg-icon name="ele-${kebabCase(name)}" />`
	handleClipboard(text)
}

// 暴露给vue实例上的数据
defineExpose({
	count: Object.keys(ElementPlusIconsVue).length,
})
</script>

<style lang="scss" scoped></style>
