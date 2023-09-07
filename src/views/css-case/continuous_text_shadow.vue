<template>
	<page-main title="文字连续光影" height="300px">
		<span>C</span>
		<span>O</span>
		<span>L</span>
		<span>O</span>
		<span>R</span>
		<span>F</span>
		<span>U</span>
		<span>L</span>
	</page-main>
</template>

<script setup></script>

<style lang="scss" scoped>
:deep(.main-container) {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;
}

span {
	animation: spread 1s ease-in-out infinite alternate;
	color: #faebd7;
	letter-spacing: 10px;
}

@keyframes spread {
	to {
		color: #ff0226;
		text-shadow: 20px 0 70px #ff0226;
	}
}

@for $i from 1 through 8 {
	span:nth-child(#{$i}) {
		animation-delay: ($i - 1) * 0.1s;
	}
}
</style>
