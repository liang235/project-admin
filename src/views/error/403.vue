<template>
	<div class="notallowed">
		<svg-icon name="403" class="icon" />
		<div class="content">
			<h1>403</h1>
			<div class="desc">抱歉，你无权访问该页面</div>
			<el-button type="primary" @click="goBack"> {{ data.countdown }} 秒后，返回首页 </el-button>
		</div>
	</div>
</template>

<script setup>
const router = useRouter()

const data = ref({
	inter: NaN,
	countdown: 5,
})

onBeforeRouteLeave(() => {
	data.value.inter && clearInterval(data.value.inter)
})

onMounted(() => {
	data.value.inter = setInterval(() => {
		data.value.countdown--
		if (data.value.countdown === 0) {
			data.value.inter && clearInterval(data.value.inter)
			goBack()
		}
	}, 1000)
})

function goBack() {
	router.push('/')
}
</script>

<style lang="scss" scoped>
.notallowed {
	display: flex;
	width: 700px;
	align-items: center;
	justify-content: space-between;

	@include position-center(xy);

	.icon {
		width: 400px;
		height: 400px;
	}

	.content {
		h1 {
			margin: 0;
			color: var(--el-text-color-primary);
			font-size: 72px;
		}

		.desc {
			margin: 20px 0 30px;
			color: var(--el-text-color-secondary);
			font-size: 20px;
		}
	}
}
</style>
