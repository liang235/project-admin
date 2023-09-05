<!--
 * @Description: 页面底部版权
-->
<template>
	<footer v-if="route.meta.copyright ?? settingsStore.copyright.enable" class="copyright">
		<span>Copyright</span>
		<span class="icon">©</span>

		<span v-if="settingsStore.copyright.dates">{{ settingsStore.copyright.dates }}</span>

		<template v-if="settingsStore.copyright.company">
			<a v-if="settingsStore.copyright.website" :href="settingsStore.copyright.website" target="_blank" rel="noopener">{{
				settingsStore.copyright.company
			}}</a>
			<span v-else>{{ settingsStore.copyright.company }}</span>
		</template>

		<a v-if="settingsStore.copyright.beian" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{
			settingsStore.copyright.beian
		}}</a>
	</footer>
</template>

<script setup name="PageFooter">
import useSettingsStore from '@/store/modules/settings.js'
// 系统配置数据
const settingsStore = useSettingsStore()
const route = useRoute() // 路由参数
</script>

<style lang="scss" scoped>
footer {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 40px 0;
	color: var(--el-text-color-secondary);
	font-size: 14px;

	span,
	a {
		padding: 0 5px;
	}

	a {
		color: var(--el-text-color-secondary);
		text-decoration: none;
		transition: var(--el-transition-color);

		&:hover {
			color: var(--el-text-color-primary);
		}
	}

	.icon {
		padding: 0;
		font-size: 18px;
	}
}
</style>
