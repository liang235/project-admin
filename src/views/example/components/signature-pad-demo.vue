<!--
 * @Description: 电子签名
 * @Date: 2022-12-14 20:02:28
 * @LastEditTime: 2022-12-15 18:44:57
-->
<template>
	<div class="components">
		<page-header title="电子签名">
			<template #content>
				<p class="mb-2.5">SignaturePad 三方组件</p>
				<p>安装命令：<el-tag>pnpm i vue-signature-pad</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 vue-signature-pad
			</el-button>
		</page-header>

		<page-main>
			<div class="flex">
				<signature-pad @save="handleSave" />
				<img v-if="src" :src="src" style="width: 500px; height: 300px" />
			</div>
		</page-main>
	</div>
</template>

<script setup name="ComponentSignCanvas">
// 跳转链接
const open = () => {
	window.open('https://github.com/szimek/signature_pad', '_blank')
}

// 回显图片展示地址
const src = ref('')

// SignaturePad 组件返回值
const handleSave = (val) => {
	src.value = val
}
</script>

<style lang="scss" scoped></style>
