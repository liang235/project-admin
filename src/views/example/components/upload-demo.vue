<!--
 * @Description: 上传案例演示
-->
<template>
	<div class="components">
		<page-header title="单图上传/多图上传/文件上传">
			<template #content>
				<p>ImageUpload / ImagesUpload / FileUpload</p>
			</template>
		</page-header>

		<page-main title="单图上传">
			<image-upload
				v-model:url="image"
				action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/image"
				name="image"
				:width="250"
				:height="150"
				@on-success="handleSuccess1"
			/>
		</page-main>

		<page-main title="多图上传（默认最多3张）">
			<images-upload
				v-model:url="images"
				action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/image"
				name="image"
				@on-success="handleSuccess2"
			/>
		</page-main>

		<page-main title="文件上传（默认最多3个）">
			<file-upload
				:files="files"
				action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/file"
				@on-success="handleSuccess3"
			/>
		</page-main>
	</div>
</template>

<script setup name="ComponentUpload">
import { ElMessage } from 'element-plus'

// 单图上传
const image = ref('https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582')

// 多图上传
const images = ref([
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
	'https://img2.baidu.com/it/u=3851318936,3356716855&fm=253&fmt=auto&app=138&f=PNG?w=500&h=582',
])

// 文件上传
const files = ref([
	{
		name: '测试文件.zip',
		url: 'http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip',
	},
])

/**
 * @description: 单图上传成功回调
 * @param {*} res
 * @return {*}
 */
const handleSuccess1 = (res) => {
	if (res.error === '') {
		image.value = res.data.path
	} else {
		ElMessage.warning(res.error)
	}
}

/**
 * @description: 多图上传成功回调
 * @param {*} res
 * @return {*}
 */
const handleSuccess2 = (res) => {
	if (res.error === '') {
		images.value.push(res.data.path)
	} else {
		ElMessage.warning(res.error)
	}
}

/**
 * @description: 文件上传成功回调
 * @param {*} res
 * @return {*}
 */
const handleSuccess3 = (res, file, fileList) => {
	if (res.error === '') {
		files.value.push({
			name: file.name,
			url: res.error === '' ? res.data.path : '',
		})
	} else {
		fileList.pop()
		ElMessage.warning(res.error)
	}
}
</script>

<style lang="scss" scoped></style>
