<!--
 * @Description: 登录页面
 * @Date: 2022-10-09 10:47:36
 * @LastEditTime: 2023-02-24 15:28:12
-->
<template>
	<div class="login-wrap">
		<div class="login-box">
			<div class="login-banner">
				<img :src="banner" class="banner" />
			</div>

			<!-- 登录部分 -->
			<el-form v-show="formType === 'login'" ref="loginRef" :model="loginState.form" size="large" :rules="loginState.rules" class="login-form">
				<h3 class="title">欢迎来到 {{ title }} ! 👋🏻</h3>

				<el-form-item prop="account">
					<el-input v-model="loginState.form.account" placeholder="用户名">
						<template #prefix>
							<svg-icon name="user" />
						</template>
					</el-input>
				</el-form-item>

				<el-form-item prop="password">
					<el-input v-model="loginState.form.password" placeholder="密码" show-password @keyup.enter="handleLogin">
						<template #prefix>
							<svg-icon name="password" />
						</template>
					</el-input>
				</el-form-item>

				<div class="flex-bar">
					<el-checkbox v-model="loginState.form.remember">记住我</el-checkbox>
					<el-link type="primary" :underline="false">忘记密码了?</el-link>
				</div>

				<el-button :loading="loading" type="primary" @click.prevent="handleLogin">登录</el-button>

				<div style="margin-top: 20px; margin-bottom: -20px; text-align: center">
					<el-divider>演示账号一键登录</el-divider>
					<el-button type="primary" size="small" @click="testAccount('admin')">admin</el-button>
					<el-button type="success" size="small" @click="testAccount('test')">test</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script setup name="Login">
import { ElMessage } from 'element-plus'
import { useNow } from '@vueuse/core' // vue 工具库
import banner from '@/assets/images/qiaotun.jpeg' // 左侧图片
import useUserStore from '@/store/modules/user.js' // 用户数据
import { formatAxis } from '@/utils/formatTime.js' // 时间工具

// 路由实例
const route = useRoute()
const router = useRouter()

// 定义 pinia
const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE // 项目标题

// 表单类型，login 登录，reset 重置密码
const formType = ref('login')
const loading = ref(false) // 加载状态
const redirect = ref(null) // 重定向地址

// 登录部分
const loginRef = ref(null)
const loginState = reactive({
	// form 表单
	form: {
		account: localStorage.login_account || '', // 用户名
		password: '', // 密码
		remember: !!localStorage.login_account,
	},
	// 表单验证
	rules: {
		account: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
		password: [
			{ required: true, trigger: 'blur', message: '请输入密码' },
			{ min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
		],
	},
})

/**
 * @description: 登录
 * @return {*}
 */
const handleLogin = async () => {
	await loginRef.value.validate((valid, fields) => {
		if (valid) {
			loading.value = true
			userStore
				.login(loginState.form)
				.then(() => {
					loading.value = false
					if (loginState.form.remember) {
						localStorage.setItem('login_account', loginState.form.account)
					} else {
						localStorage.removeItem('login_account')
					}
					router.push(redirect.value)

					// 登录问候语
					const { account } = localStorage
					const signInText = formatAxis(useNow().value)
					ElMessage.success(`${account}, ${signInText}`)
				})
				.catch(() => {
					loading.value = false
				})
		} else {
			console.log('error submit!', fields)
		}
	})
}

/**
 * @description: 演示账号一键登录
 * @return {*}
 */
const testAccount = (account) => {
	loginState.form.account = account
	loginState.form.password = '123456'
	handleLogin()
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	// 设置重定向地址
	redirect.value = route.query.redirect ?? '/'
})
</script>

<style lang="scss" scoped>
.login-wrap {
	position: fixed;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle at center, var(--el-fill-color-lighter), var(--el-bg-color-page));

	.login-box {
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		overflow: hidden;
		height: 500px;
		justify-content: space-between;
		border-radius: 10px;
		background-color: var(--el-bg-color);
		box-shadow: var(--el-box-shadow);
		transform: translateX(-50%) translateY(-50%);

		// 左侧图片
		.login-banner {
			position: relative;
			overflow: hidden;
			width: 450px;
			background-color: var(--el-fill-color-light);

			.banner {
				width: 100%;
				height: 100%;
			}
		}

		// form 表单部分
		.login-form {
			display: flex;
			overflow: hidden;
			width: 500px;
			height: 500px;
			flex-direction: column;
			justify-content: center;
			padding: 50px;

			.title {
				margin: 0 auto 30px;
				color: var(--el-text-color-primary);
				font-size: 1.3em;
				font-weight: bold;
			}

			.flex-bar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20px;
			}
		}
	}
}
</style>
