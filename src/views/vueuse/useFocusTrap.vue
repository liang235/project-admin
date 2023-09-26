<template>
	<div class="useFocusTrap">
		<page-header title="欢迎使用 useFocusTrap">
			<template #content>
				<p></p>
			</template>
		</page-header>

		<page-main title="获取焦点">
			<el-button @click="activate()">激活</el-button>
			<div ref="target">
				<span>是否获取焦点: {{ hasFocus }}</span>
				<el-input type="text" />
				<el-button @click="deactivate()">禁用</el-button>
			</div>
		</page-main>
	</div>
</template>

<script setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })
</script>

<style lang="scss" scoped></style>
