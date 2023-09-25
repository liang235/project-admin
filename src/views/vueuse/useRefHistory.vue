<template>
	<div class="useRefHistory">
		<page-header title="欢迎使用 useRefHistory">
			<template #content>
				<p>useRefHistory 跟踪对 ref 所做的每一个改变，并将其存储在一个数组中。这样我们能够轻松为应用程序提供撤销和重做功能</p>
			</template>
		</page-header>

		<page-main title="跟踪响应式数据的变化">
			<div>
				<el-button type="primary" @click="undo">撤销</el-button>
				<el-button type="primary" @click="redo">重做</el-button>
			</div>
			<el-input v-model="text" />
			<ul>
				<li v-for="entry in history" :key="entry.timestamp">
					{{ entry }}
				</li>
			</ul>
		</page-main>
	</div>
</template>

<script setup>
import { useRefHistory } from '@vueuse/core'

const text = ref('')

const { history, undo, redo } = useRefHistory(text)
</script>

<style lang="scss" scoped></style>
