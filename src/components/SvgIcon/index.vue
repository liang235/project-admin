<!--
 * @Description: svg 图标使用
 * @Date: 2022-10-27 10:55:55
 * @LastEditTime: 2022-12-30 16:24:35
-->
<template>
	<component v-if="name.startsWith('ele-')" :is="name" :style="transformStyle" class="svg-icon" />

	<svg v-else :style="transformStyle" aria-hidden="true" class="svg-icon">
		<use :xlink:href="`#icon-${name}`" />
	</svg>
</template>

<script setup name="SvgIcon">
// 定义父组件传过来的值 传参
const props = defineProps({
	// 图标名称
	name: {
		type: String,
		required: true,
	},
	/**
	 * horizontal: 水平翻转
	 * vertical: 垂直翻转
	 * both: 水平垂直翻转
	 * @return {*}
	 */
	flip: {
		type: String,
		validator(value) {
			return ['', 'horizontal', 'vertical', 'both'].includes(value)
		},
		default: '',
	},
	// 图标旋转
	rotate: {
		type: Number,
		validator(value) {
			return value >= 0 && value <= 360
		},
		default: 0,
	},
})

const transformStyle = computed(() => {
	const style = []
	if (props.flip !== '') {
		switch (props.flip) {
			case 'horizontal':
				style.push('rotateY(180deg)')
				break
			case 'vertical':
				style.push('rotateX(180deg)')
				break
			case 'both':
				style.push('rotateX(180deg)')
				style.push('rotateY(180deg)')
				break
		}
	}
	if (props.rotate !== 0) {
		style.push(`rotate(${props.rotate}deg)`)
	}
	return `transform: ${style.join(' ')};`
})
</script>

<style lang="scss" scoped>
.svg-icon {
	display: inline-block;
	overflow: hidden;
	width: 1em;
	height: 1em;
	fill: currentcolor;
	vertical-align: -0.15em;
}
</style>
