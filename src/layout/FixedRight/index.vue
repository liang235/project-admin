<!--
 * @Description: 页面右侧固定
 * @Date: 2022-12-17 17:53:34
 * @LastEditTime: 2022-12-17 19:43:20
-->
<template>
	<div class="fixed-right" :class="{ actived: isActived }">
		<div class="item">
			<svg-icon name="fixed-right-buy" />
			<span class="title">购买<br />专业版</span>
		</div>
		<div class="item">
			<svg-icon name="fixed-right-code" />
			<span class="title">下载<br />基础版</span>
		</div>
		<div class="item">
			<svg-icon name="fixed-right-doc" />
			<span class="title">开发<br />文档</span>
		</div>
		<div class="item">
			<svg-icon name="fixed-right-chat" />
			<span class="title">技术<br />支持</span>
		</div>
	</div>
</template>

<script setup name="FixedRight">
const isActived = ref(true)
setTimeout(() => {
	isActived.value = false
}, 5000)
</script>

<style lang="scss" scoped>
.fixed-right {
	position: fixed;
	z-index: 10;
	right: -58px;
	top: 50%;
	transform: translateY(-50%);
	width: 70px;
	display: flex;
	flex-direction: column;
	transition: right 0.3s;

	&.actived,
	&:hover {
		right: 0;
	}

	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 70px;
		text-align: center;
		color: #fff;
		border-bottom: 1px solid #fff;
		transition: 0.3s;
		opacity: 0.7;
		cursor: pointer;

		&:hover {
			opacity: 1;
		}

		&:first-child {
			border-top-left-radius: 5px;
		}

		&:last-child {
			border-bottom-left-radius: 5px;
			border-bottom: 0;
		}

		&:nth-child(1) {
			background-color: #ff4200;
		}

		&:nth-child(2) {
			background-color: #409eff;
		}

		&:nth-child(3) {
			background-color: #0fcc1a;
		}

		&:nth-child(4) {
			background-color: #343b42;
		}

		.svg-icon {
			display: block;
			margin: 0 auto;
			font-size: 20px;
		}

		.title {
			display: inline-block;
			font-size: 12px;
		}
	}
}
</style>
