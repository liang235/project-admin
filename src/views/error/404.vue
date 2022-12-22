<template>
	<div class="notfound">
		<svg-icon name="404" class="icon" />
		<div class="content">
			<h1>404</h1>
			<div class="desc">抱歉，你访问的页面不存在</div>
			<el-button type="primary" @click="goBack">{{ state.countdown }} 秒后，返回首页</el-button>
		</div>
	</div>
</template>

<script setup name="404">
const router = useRouter() // 路由实例

// 定义响应式数据
const state = reactive({
	inter: null, // 定时器
	countdown: 5, // 倒计时
})

// 组件将要离开时触发
onBeforeRouteLeave(() => {
	clearInterval(state.inter)
})

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	state.inter = setInterval(() => {
		state.countdown--
		if (state.countdown == 0) {
			clearInterval(state.inter)
			goBack()
		}
	}, 1000)
})

function goBack() {
	router.push('/')
}
</script>

<style lang="scss" scoped>
.notfound {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 700px;

	@include position-center(xy);

	.icon {
		font-size: 400px;
	}

	.content {
		h1 {
			margin: 0;
			font-size: 72px;
			color: var(--el-text-color-primary);
		}

		.desc {
			margin: 20px 0 30px;
			font-size: 20px;
			color: var(--el-text-color-secondary);
		}
	}
}
</style>
