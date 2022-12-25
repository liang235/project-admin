<!--
 * @Description: logo/标题
 * @Date: 2022-11-09 09:46:03
 * @LastEditTime: 2022-12-25 16:09:25
-->
<template>
	<router-link :to="to" class="title" :class="{ 'is-link': settingsStore.home.enable }" :title="title">
		<img v-if="showLogo" :src="logo" class="logo" />
		<span v-if="showTitle">{{ title }}</span>
	</router-link>
</template>

<script setup name="Logo">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import imgLogo from '@/assets/icons/vue.svg' // logo 图片

const settingsStore = useSettingsStore()

// 定义父组件传过来的值
defineProps({
	// 是否显示 logo 图片
	showLogo: {
		type: Boolean,
		default: true,
	},
	// 是否显示 标题
	showTitle: {
		type: Boolean,
		default: true,
	},
})

const title = ref(import.meta.env.VITE_APP_TITLE) // 标题
const logo = ref(imgLogo) // logo 图片

// 点击跳转的路径
const to = computed(() => {
	let rtn = {}
	if (settingsStore.home.enable) {
		rtn.name = 'home'
	}
	return rtn
})
</script>

<style lang="scss" scoped>
.title {
	position: fixed;
	top: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 10px;
	width: inherit;
	height: var(--g-sidebar-logo-height);
	text-align: center;
	text-decoration: none;

	&.is-link {
		cursor: pointer;
	}

	.logo {
		width: 30px;
		height: 30px;
		object-fit: contain;

		& + span {
			margin-left: 10px;
		}
	}

	span {
		display: block;
		font-weight: bold;
		color: #fff;

		@include text-overflow;
	}
}
</style>
