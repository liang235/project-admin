<template>
	<page-main title="重复渐变的边框">
		<div class="card">
			<div class="container">
				昔人已乘黄鹤去，此地空余黄鹤楼。 黄鹤一去不复返，白云千载空悠悠。 晴川历历汉阳树，芳草萋萋鹦鹉洲。 日暮乡关何处是？烟波江上使人愁。
			</div>
		</div>
	</page-main>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
	width: 300px;
	padding: 5px;
	margin: 50px auto;
	font-family: 'Courier New', Courier, monospace;
	font-style: italic;
	line-height: 1.8;
	color: #333;
	/* stylelint-disable-next-line scss/operator-no-unspaced */
	background: repeating-linear-gradient(-45deg, #e8544d 0 10px, #fff 10px 20px, #75adf8 20px 30px, #fff 30px 40px) -20px -20px/200% 200%;
	border-radius: 10px;
	transition: 0.5s;

	&:hover {
		background-position: 0 0;
	}
}

.container {
	padding: 10px;
	text-align: center;
	background-color: #fff;
}
</style>
