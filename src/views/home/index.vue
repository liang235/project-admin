<!--
 * @Description: 主页
 * @Date: 2022-10-09 11:01:43
 * @LastEditTime: 2022-12-30 17:32:57
-->
<template>
	<div class="home">
		<page-header title="欢迎使用 Project-Admin">
			<template #content>
				<p>哈拉少</p>
			</template>
		</page-header>

		<page-main title="主页"></page-main>
	</div>
</template>

<script setup name="Home"></script>

<style lang="scss" scoped>
.a {
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: $line;
}
</style>
