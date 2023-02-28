<template>
	<page-main title="Skeleton 骨架屏">Skeleton 骨架屏</page-main>
</template>

<script setup name="ElementPlusSkeleton">
import { getTestData } from '@/api/index.js' // api

const onGetData = async () => {
	const res = await getTestData('http://jsonplaceholder.typicode.com/users')
	console.log(res)
}

onMounted(() => {
	onGetData()
})
</script>

<style lang="scss" scoped></style>
