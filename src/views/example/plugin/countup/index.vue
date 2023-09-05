<!--
 * @Description: 数字滚动
-->
<template>
	<div>
		<page-header title="数字滚动">
			<template #content>
				<p class="mb-2.5">安装命令：<el-tag>pnpm i vue3-count-to</el-tag></p>
			</template>
			<el-button type="primary" @click="open">
				<template #icon>
					<svg-icon name="ele-link" />
				</template>
				访问 vue-count-to
			</el-button>
		</page-header>

		<page-main>
			<count-to
				ref="countRef"
				:autoplay="form.autoplay"
				:startVal="form.startVal"
				:endVal="form.endVal"
				:duration="form.duration"
				:separator="form.separator"
				:prefix="form.prefix"
				:suffix="form.suffix"
				class="count-to"
			/>
			<el-form :model="form" label-width="80px" class="w-80">
				<el-form-item label="autoplay">
					<el-switch v-model="form.autoplay" />
				</el-form-item>
				<el-form-item label="startVal">
					<el-input-number v-model="form.startVal" />
				</el-form-item>
				<el-form-item label="endVal">
					<el-input-number v-model="form.endVal" />
				</el-form-item>
				<el-form-item label="duration">
					<el-input-number v-model="form.duration" />
				</el-form-item>
				<el-form-item label="decimals">
					<el-input-number v-model="form.decimals" :min="0" />
				</el-form-item>
				<el-form-item label="separator">
					<el-input v-model="form.separator" />
				</el-form-item>
				<el-form-item label="prefix">
					<el-input v-model="form.prefix" />
				</el-form-item>
				<el-form-item label="suffix">
					<el-input v-model="form.suffix" />
				</el-form-item>
			</el-form>
			<el-button type="primary" @click="start">开始</el-button>
			<el-button @click="pause">暂停</el-button>
			<el-button @click="pauseResume">暂停/继续</el-button>
			<el-button @click="reset">重置</el-button>
		</page-main>
	</div>
</template>

<script setup name="PluginCountup">
import { useThrottleFn } from '@vueuse/core' // vue 工具库
import { CountTo } from 'vue3-count-to' // 数字滚动插件

// 跳转链接
const open = () => {
	window.open('https://github.com/xiaofan9/vue-count-to', '_blank')
}

// CountTo 配置列表
const form = ref({
	autoplay: false, // 自动播放
	startVal: 0, // 开始的值
	endVal: 3000, // 结束的值
	duration: 3000, // 持续时间(毫秒)
	decimals: 0, // 显示的小数点后数位
	separator: ',', // 分隔符
	prefix: '¥ ', // 前缀
	suffix: ' 元', // 后缀
})

// 开始
const countRef = ref()
const start = useThrottleFn(() => {
	countRef.value.start()
}, 1000)

// 暂停
const pause = useThrottleFn(() => {
	countRef.value.pause()
}, 1000)

// 暂停/继续
const pauseResume = useThrottleFn(() => {
	countRef.value.pauseResume()
}, 1000)

// 重置
const reset = useThrottleFn(() => {
	countRef.value.reset()
}, 1000)
</script>

<style lang="scss" scoped>
.count-to {
	display: inline-block;
	margin-bottom: 20px;
	color: #f6416c;
	font-size: 60px;
}
</style>
