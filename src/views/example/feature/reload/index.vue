<!--
 * @Description: 主页面刷新
-->
<template>
	<div>
		<page-header title="主页面刷新">
			<template #content>
				<p>重新渲染当前页面</p>
			</template>
		</page-header>

		<page-main>
			<p class="mb-4">该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态</p>
			<el-input class="mb-4" v-model="value"></el-input>
			<el-button type="primary" @click="reload()">刷新</el-button>
		</page-main>
	</div>
</template>

<script setup name="FeatureReload">
const value = ref('')

// 页面刷新
const { reload } = useMainPage()
</script>

<style lang="scss" scoped></style>
