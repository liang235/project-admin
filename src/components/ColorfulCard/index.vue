<!--
 * @Description: 多彩渐变卡片
 * @Date: 2022-12-14 14:51:35
 * @LastEditTime: 2022-12-25 16:08:51
-->
<template>
	<el-card shadow="never" class="mini-card" :style="`background: linear-gradient(50deg, ${colorFrom}, ${colorTo});`">
		<template #header>{{ header }}</template>
		<div class="num">{{ num }}</div>
		<div class="tip">{{ tip }}</div>
		<svg-icon :name="icon" />
	</el-card>
</template>

<script setup name="ColorfulCard">
// 定义父组件传过来的值
defineProps({
	// 开始颜色
	colorFrom: {
		type: String,
		default: () => '#843cf6',
	},
	// 终止颜色
	colorTo: {
		type: String,
		default: () => '#759bff',
	},
	// 头部标题
	header: {
		type: String,
		default: () => '',
	},
	// 数字标记
	num: {
		type: Number,
		default: () => 0,
	},
	// 底行提示文字
	tip: {
		type: String,
		default: () => '',
	},
	// 图标，使用 SvgIcon 组件，与该组件 name 参数相同
	icon: {
		type: String,
		default: () => '',
	},
})
</script>

<style lang="scss" scoped>
.mini-card {
	position: relative;
	color: #fff;
	text-shadow: 0 0 2px #000;
	cursor: pointer;

	&:hover .svg-icon {
		top: 0;
		right: 0;
	}

	:deep(.el-card__header) {
		position: relative;
		z-index: 1;
		border-bottom: 0;
		font-size: 18px;
	}

	.el-card__body {
		padding-top: 0;

		.num {
			position: relative;
			z-index: 1;
			font-size: 36px;
		}

		.tip {
			margin-top: 10px;
			font-size: 14px;
			color: #eee;
		}
	}

	.svg-icon {
		position: absolute;
		top: -10px;
		right: -30px;
		font-size: 120px;
		transition: 0.3s;
	}
}
</style>
