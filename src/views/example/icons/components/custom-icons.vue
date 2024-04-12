<!--
 * @Description: 自定义 svg 图标
-->
<template>
	<el-row class="svg-container">
		<el-col v-for="(icon, index) in icons" :key="index" :xs="24" :sm="8" :md="6" :lg="3" :xl="2">
			<div class="icon-item" @click="handleCopy(icon)">
				<svg-icon :name="icon" />
				<span class="icon-name">{{ icon }}</span>
			</div>
		</el-col>
	</el-row>
</template>

<script setup name="CustomIcons">
import { handleClipboard } from '@/utils/clipboard.js' // 复制粘贴
import customIcons from './custom-icons.js' // svg 图标集合

// 定义响应式数据
const icons = ref(customIcons)

// 复制粘贴
const handleCopy = (name) => {
	const text = `<svg-icon name="${name}" />`
	handleClipboard(text)
}

// 暴露给vue实例上的数据
defineExpose({
	count: customIcons.length,
})
</script>

<style lang="scss" scoped></style>
