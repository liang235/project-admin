<!--
 * @Description: 页面离开提醒
-->
<template>
	<div>
		<page-header title="页面离开提醒">
			<template #content>
				<p>在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空</p>
			</template>
		</page-header>

		<page-main>
			<el-switch v-model="isLeave" active-text="开启提醒" inactive-text="关闭提醒" />
		</page-main>
	</div>
</template>

<script setup name="FeatureLeavetips">
import { ElMessageBox } from 'element-plus'

// 是否开启提醒
const isLeave = ref(true)

// 在组件将要离开时触发
onBeforeRouteLeave((to, from, next) => {
	if (isLeave.value) {
		ElMessageBox.confirm('当前页面还没有保存，是否确定要离开？', '温馨提醒', {
			confirmButtonText: '确认',
			cancelButtonText: '取消',
			type: 'warning',
		})
			.then(() => {
				next()
			})
			.catch(() => {})
	} else {
		next()
	}
})
</script>

<style lang="scss" scoped></style>
