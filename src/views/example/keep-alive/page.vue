<!--
 * @Description: 页面缓存
 * @Date: 2022-11-27 22:24:42
 * @LastEditTime: 2022-11-27 22:43:29
-->
<template>
	<page-main title="除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现">
		<div class="block">
			<el-switch v-model="openKeepAlive" active-text="开启缓存" inactive-text="关闭缓存" />
		</div>
		<div class="block">
			<el-input-number v-model="num" />
		</div>
		<div class="block">
			<el-button @click="go(1)"> 进入同级路由页面 </el-button>
			<el-button @click="go(2)"> 进入下级路由页面 </el-button>
		</div>
	</page-main>
</template>

<script setup name="KeepAlivePage">
import useKeepAliveStore from '@/store/modules/keepAlive.js' // 页面缓存数据

// 定义 pinia
const keepAliveStore = useKeepAliveStore()

// 路由实例
const router = useRouter()

// 定义响应式数据
const openKeepAlive = ref(false) // 开启/关闭缓存
const num = ref(1) // 测试数字

/**
 * @description: 跳转页面
 * @param {*} type
 * @return {*}
 */
const go = (type) => {
	let routerName
	switch (type) {
		case 1:
			routerName = 'keepAlivePageDetail'
			break
		case 2:
			routerName = 'keepAliveNestedDetail'
			break
	}
	router.push({
		name: routerName,
	})
}

// 在当前位置的组件将要离开时触发
onBeforeRouteLeave((to, from) => {
	const componentName = from.matched.at(-1)?.components?.default.name
	if (openKeepAlive.value) {
		// 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存
		// 所以下面的代码意思就是，如果目标路由的 name 是 keepAlivePageDetail 或者 keepAliveNestedDetail ，则将当前页面组件的 name 添加进 keep-alive 中，否则则删除
		if (['keepAlivePageDetail', 'keepAliveNestedDetail'].includes(to.name)) {
			componentName && keepAliveStore.add(componentName)
		} else {
			componentName && keepAliveStore.remove(componentName)
		}
	} else {
		componentName && keepAliveStore.remove(componentName)
	}
})
</script>

<style lang="scss" scoped>
.block {
	margin-bottom: 10px;
}
</style>
