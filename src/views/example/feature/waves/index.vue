<!--
 * @Description: 水波纹
 * @Date: 2022-12-12 15:16:22
 * @LastEditTime: 2022-12-12 20:11:35
-->
<template>
    <div>
        <page-header title="水波纹"></page-header>

        <page-main title="指令效果（v-waves）">
            <el-button v-waves>默认效果</el-button>
            <el-button type="primary" v-waves="'light'">light 效果</el-button>
            <el-button type="success" v-waves="'red'">red 效果</el-button>
            <el-button type="info" v-waves="'orange'">orange 效果</el-button>
            <el-button type="warning" v-waves="'purple'">purple 效果</el-button>
            <el-button type="danger" v-waves="'green'">green 效果</el-button>
            <el-button type="primary" v-waves="'teal'">teal 效果</el-button>

            <div class="main">
                <div class="div flex-center" v-waves>作用于 div</div>

                <i v-waves>
                    <img :src="imgSrc" />
                </i>
            </div>
        </page-main>
    </div>
</template>

<script setup name="FeatureWaves">
import imgSrc from '@/assets/images/E0199E25.png'
</script>

<style lang="scss" scoped>
.main {
    margin-top: 20px;
    display: flex;

    .div {
        width: 250px;
        height: 250px;
        background: var(--el-color-primary);
        color: var(--el-color-white);
        transition: all 0.3s ease;
        margin-right: 20px;
    }

    img {
        width: 250px;
        height: 250px;
    }
}
</style>
