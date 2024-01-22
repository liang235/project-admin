<template>
	<page-main title="奥运五环">
		<div class="olympic_rings">
			<span class="item"></span>
			<span class="item"></span>
			<span class="item"></span>
			<span class="item"></span>
			<span class="item"></span>
		</div>
	</page-main>
</template>

<script setup></script>

<style lang="scss" scoped>
.olympic_rings {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 400px;
	transform-style: preserve-3d;
}

.item {
	width: 100px;
	height: 100px;
	margin: 0 5px;
	border: 10px solid #3884c2;
	border-radius: 50%;

	&:nth-child(2) {
		border-color: #000;
		transform: translateZ(-1px) rotateX(2deg);
	}

	&:nth-child(3) {
		border-color: #d83a31;
	}

	&:nth-child(4) {
		margin-top: -50px;
		border-color: #f9d549;
		transform: rotateX(1deg);
		transform-origin: center 25%;
	}

	&:nth-child(5) {
		margin-top: -50px;
		border-color: #55ac58;
		transform: translateZ(-1px) rotateX(-2deg);
	}
}
</style>
