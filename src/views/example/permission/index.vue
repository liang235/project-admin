<!--
 * @Description: 权限验证
 * @Date: 2022-11-29 18:39:13
 * @LastEditTime: 2022-12-07 19:18:10
-->
<template>
    <div class="permission">
        <page-header title="权限验证" />

        <page-main title="切换用户演示，控制不同用户显示不同页面、按钮权限">
            <div v-if="!settingsStore.app.enablePermission || settingsStore.app.routeBaseOn !== 'backend'" class="mb-20">
                请到 src/settings.custom.js 里打开 app.enablePermission 权限功能和 app.routeBaseOn === 'backend' 路由数据来源，再进入该页面查看演示
            </div>

            <div v-else>
                <h3>切换帐号 - 注意左侧菜单列表显示效果</h3>
                <el-radio-group v-model="userStore.account" @change="accountChange" class="my-10">
                    <el-radio-button label="admin"></el-radio-button>
                    <el-radio-button label="test"></el-radio-button>
                </el-radio-group>
                <h3>当前组件权限：{{ userStore.permissions }}</h3>
            </div>
        </page-main>

        <page-main v-if="settingsStore.app.enablePermission && settingsStore.app.routeBaseOn === 'backend'" title="演示1：组件方式">
            <div class="my-10">单个权限验证 :value="xxx"</div>
            <div class="flex">
                <Auth value="btn.add">
                    <el-button type="primary">
                        <template #icon>
                            <svg-icon name="ele-document-add" />
                        </template>
                        新增
                    </el-button>
                </Auth>

                <Auth value="btn.edit">
                    <el-button type="success">
                        <template #icon>
                            <svg-icon name="ele-edit" />
                        </template>
                        编辑
                    </el-button>
                </Auth>

                <Auth value="btn.delete">
                    <el-button type="danger">
                        <template #icon>
                            <svg-icon name="ele-delete" />
                        </template>
                        删除
                    </el-button>
                </Auth>

                <Auth value="btn.link">
                    <el-button type="info">
                        <template #icon>
                            <svg-icon name="ele-link" />
                        </template>
                        跳转
                    </el-button>
                </Auth>
            </div>

            <div class="my-10">多个权限验证，满足一个则显示 :value="[xxx,xxx]"</div>
            <div class="flex">
                <Auth :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="primary">
                        <template #icon>
                            <svg-icon name="ele-document-add" />
                        </template>
                        新增
                    </el-button>
                </Auth>

                <Auth :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="success">
                        <template #icon>
                            <svg-icon name="ele-edit" />
                        </template>
                        编辑
                    </el-button>
                </Auth>

                <Auth :value="['btn.delete', 'btn.link']">
                    <el-button type="danger">
                        <template #icon>
                            <svg-icon name="ele-delete" />
                        </template>
                        删除
                    </el-button>
                </Auth>

                <Auth :value="['btn.delete', 'btn.link']">
                    <el-button type="info">
                        <template #icon>
                            <svg-icon name="ele-link" />
                        </template>
                        跳转
                    </el-button>
                </Auth>
            </div>

            <div class="my-10">多个权限验证，全部满足则显示 :value="[xxx,xxx]"</div>
            <div class="flex">
                <AuthAll :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="primary">
                        <template #icon>
                            <svg-icon name="ele-document-add" />
                        </template>
                        新增
                    </el-button>
                </AuthAll>

                <AuthAll :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="success">
                        <template #icon>
                            <svg-icon name="ele-edit" />
                        </template>
                        编辑
                    </el-button>
                </AuthAll>

                <AuthAll :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="danger">
                        <template #icon>
                            <svg-icon name="ele-delete" />
                        </template>
                        删除
                    </el-button>
                </AuthAll>

                <AuthAll :value="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <el-button type="info">
                        <template #icon>
                            <svg-icon name="ele-link" />
                        </template>
                        跳转
                    </el-button>
                </AuthAll>
            </div>
        </page-main>

        <page-main
            v-if="settingsStore.app.enablePermission && settingsStore.app.routeBaseOn === 'backend'"
            title="演示2：指令方式（页面初始化时执行）"
        >
            <div class="my-10">单个权限验证 v-auth="xxx"</div>
            <div class="flex">
                <el-button type="primary" v-auth="'btn.add'">
                    <template #icon>
                        <svg-icon name="ele-document-add" />
                    </template>
                    新增
                </el-button>

                <el-button type="success" v-auth="'btn.edit'">
                    <template #icon>
                        <svg-icon name="ele-edit" />
                    </template>
                    编辑
                </el-button>

                <el-button type="danger" v-auth="'btn.delete'">
                    <template #icon>
                        <svg-icon name="ele-delete" />
                    </template>
                    删除
                </el-button>

                <el-button type="info" v-auth="'btn.link'">
                    <template #icon>
                        <svg-icon name="ele-link" />
                    </template>
                    跳转
                </el-button>
            </div>

            <div class="my-10">多个权限验证，满足一个则显示 v-auth="[xxx, xxx]"</div>
            <div class="flex">
                <el-button type="primary" v-auth="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-document-add" />
                    </template>
                    新增
                </el-button>

                <el-button type="success" v-auth="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-edit" />
                    </template>
                    编辑
                </el-button>

                <el-button type="danger" v-auth="['btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-delete" />
                    </template>
                    删除
                </el-button>

                <el-button type="info" v-auth="['btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-link" />
                    </template>
                    跳转
                </el-button>
            </div>

            <div class="my-10">多个权限验证，全部满足则显示 v-auth-all="[xxx, xxx]"</div>
            <div class="flex">
                <el-button type="primary" v-auth-all="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-document-add" />
                    </template>
                    新增
                </el-button>

                <el-button type="success" v-auth-all="['btn.add', 'btn.edit', 'btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-edit" />
                    </template>
                    编辑
                </el-button>

                <el-button type="danger" v-auth-all="['btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-delete" />
                    </template>
                    删除
                </el-button>

                <el-button type="info" v-auth-all="['btn.delete', 'btn.link']">
                    <template #icon>
                        <svg-icon name="ele-link" />
                    </template>
                    跳转
                </el-button>
            </div>
        </page-main>

        <page-main
            v-if="settingsStore.app.enablePermission && settingsStore.app.routeBaseOn === 'backend'"
            title="演示3：函数方式（点击按钮查看有无权限，用于判断）"
        >
            <div class="my-10">auth('xxx')、auth(['xxx','xxx'])、authAll(['xxx','xxx'])：</div>
            <div class="flex">
                <el-button type="primary" @click="onAuthClick">
                    <template #icon>
                        <svg-icon name="ele-document-add" />
                    </template>
                    新增
                </el-button>

                <el-button type="success" @click="onAuthsClick">
                    <template #icon>
                        <svg-icon name="ele-edit" />
                    </template>
                    编辑
                </el-button>

                <el-button type="danger" @click="onAuthAllClick">
                    <template #icon>
                        <svg-icon name="ele-delete" />
                    </template>
                    删除
                </el-button>
            </div>
        </page-main>
    </div>
</template>

<script setup name="PermissionPage">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useUserStore from '@/store/modules/user.js' // 用户数据

// 定义 pinia
const settingsStore = useSettingsStore()
const userStore = useUserStore()

/**
 * @description: 账号切换
 * @return {*}
 */
const accountChange = (val) => {
    ElLoading.service({
        lock: true,
        text: '帐号切换中',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    userStore.login({ account: val, password: '123456' }).then(() => {
        setTimeout(() => {
            location.reload()
        }, 1000)
    })
}

// 单个权限验证
const onAuthClick = () => {
    if (!useAuth().auth('btn.add')) ElMessage.error('抱歉，您没有权限！')
    else ElMessage.success('恭喜，您有权限！')
}

// 多个权限验证，满足一个则为 true
const onAuthsClick = () => {
    if (!useAuth().auth(['btn.add', 'btn.edit', 'btn.delete', 'btn.link'])) ElMessage.error('抱歉，您没有权限！')
    else ElMessage.success('恭喜，您有权限！')
}

// 多个权限验证，全部满足则为 true
const onAuthAllClick = () => {
    if (!useAuth().authAll(['btn.add', 'btn.edit', 'btn.delete', 'btn.link'])) ElMessage.error('抱歉，您没有权限！')
    else ElMessage.success('恭喜，您有权限！')
}
</script>

<style lang="scss" scoped>
.flex {
    .auth,
    .authAll {
        margin-right: 12px;
    }
}
</style>
