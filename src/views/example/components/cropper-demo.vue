<!--
 * @Description: 图片裁剪
 * @Date: 2022-12-11 16:00:04
 * @LastEditTime: 2022-12-14 20:43:34
-->
<template>
    <div class="components">
        <page-header title="图片裁剪">
            <template #content>
                <p>Copper</p>
            </template>
        </page-header>

        <page-main>
            <div class="cropper-img-warp">
                <div class="mb-5">
                    <img class="cropper-img" :src="src" />
                </div>
                <el-button type="primary" icon="ele-crop" @click="openCropper">更换头像</el-button>
            </div>
        </page-main>

        <!-- 图片裁剪组件 -->
        <cropper ref="cropperRef" :src="src" @onSubmit="handleCrop" />
    </div>
</template>

<script setup name="ComponentCopper">
// 默认裁剪的图片
import imgSrc from '@/assets/images/E0199E25.png'
const src = ref(imgSrc)

// 图片裁剪配置
const cropperRef = ref()
const openCropper = () => {
    cropperRef.value.openDialog()
}

// 裁剪事件
const handleCrop = (res) => {
    src.value = res
}
</script>

<style lang="scss" scoped>
.cropper-img-warp {
    text-align: center;

    .cropper-img {
        margin: auto;
        width: 200px;
        height: 200px;
        border-radius: 100%;
    }
}
</style>
