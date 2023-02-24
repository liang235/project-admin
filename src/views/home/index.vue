<!--
 * @Description: 主页
 * @Date: 2022-10-09 11:01:43
 * @LastEditTime: 2023-02-24 15:23:09
-->
<template>
	<div class="home">
		<page-header title="欢迎使用 Project-Admin">
			<template #content>
				<p>哈拉少</p>
			</template>
		</page-header>

		<page-main title="主页">
			<el-button type="primary" @click="add">Primary</el-button>
		</page-main>
	</div>
</template>

<script setup name="Home">
import { ElMessage } from 'element-plus'

const add = () => {
	ElMessage.warning('全局主题 primary 颜色值不能为空')
}
</script>

<style lang="scss" scoped></style>
