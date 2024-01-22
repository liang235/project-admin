<!--
 * @Description: 全局应用配置
-->
<template>
	<el-drawer v-model="isShow" title="应用配置" direction="rtl" :size="400">
		<el-alert
			title="应用配置可实时预览效果，但只是临时生效，要想真正作用于项目，可以点击下方的“复制配置”按钮，并将配置粘贴到 src/settings.custom.js 文件中。同时建议在生产环境隐藏应用配置功能。"
			type="error"
			:closable="false"
		/>
		<el-divider>应用程序</el-divider>
		<div class="setting-item">
			<div class="label">高亮/暗黑</div>
			<div
				class="switch"
				:class="settingsStore.app.colorScheme"
				@click="settingsStore.app.colorScheme = settingsStore.app.colorScheme === 'dark' ? 'light' : 'dark'"
			>
				<svg-icon :name="settingsStore.app.colorScheme === 'dark' ? 'ele-moon' : 'ele-sunny'" class="icon" />
			</div>
		</div>

		<div class="setting-item">
			<div class="label">颜色主题</div>
			<el-color-picker v-model="settingsStore.app.elePrimaryColor" :predefine="predefineColors" />
		</div>

		<div class="setting-item">
			<div class="label">
				组件尺寸
				<el-tooltip content="全局设置 Element Plus 组件的默认尺寸大小" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-radio-group v-model="settingsStore.app.elementSize" size="small">
				<el-radio-button label="large">较大</el-radio-button>
				<el-radio-button label="default">默认</el-radio-button>
				<el-radio-button label="small">稍小</el-radio-button>
			</el-radio-group>
		</div>

		<div class="setting-item">
			<div class="label">路由数据来源</div>
			<el-radio-group v-model="settingsStore.app.routeBaseOn" size="small">
				<el-radio-button label="frontend">前端</el-radio-button>
				<el-radio-button label="backend">后端</el-radio-button>
			</el-radio-group>
		</div>

		<div class="setting-item">
			<div class="label">是否开启权限验证功能</div>
			<el-switch v-model="settingsStore.app.enablePermission" />
		</div>

		<div class="setting-item">
			<div class="label">
				载入进度条
				<el-tooltip content="该功能开启时，跳转路由会看到页面顶部有进度条" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.app.enableProgress" />
		</div>

		<div class="setting-item">
			<div class="label">
				动态标题
				<el-tooltip
					content="该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置"
					placement="top"
				>
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.app.enableDynamicTitle" />
		</div>

		<div class="setting-item">
			<div class="label">灰色色调</div>
			<el-switch v-model="settingsStore.app.grayscale" />
		</div>

		<div class="setting-item">
			<div class="label">主页面最大化</div>
			<el-switch v-model="settingsStore.app.mainPageMax" />
		</div>

		<div class="setting-item">
			<div class="label">页面水印</div>
			<el-switch v-model="settingsStore.app.watermark" />
		</div>

		<div class="setting-item">
			<div class="label">水印文案</div>
			<el-input v-model="settingsStore.app.wartermarkText" size="small" :disabled="!settingsStore.app.watermark" />
		</div>

		<el-divider v-if="settingsStore.mode === 'pc'">导航栏模式</el-divider>
		<div class="menu-mode" v-if="settingsStore.mode === 'pc'">
			<el-tooltip content="侧边栏模式（含主导航）" placement="top" :show-after="500">
				<div class="mode mode-side" :class="{ active: settingsStore.menu.menuMode === 'side' }" @click="settingsStore.menu.menuMode = 'side'">
					<div class="mode-container" />
					<svg-icon name="ele-check" />
				</div>
			</el-tooltip>

			<el-tooltip content="顶部模式" placement="top" :show-after="500">
				<div class="mode mode-head" :class="{ active: settingsStore.menu.menuMode === 'head' }" @click="settingsStore.menu.menuMode = 'head'">
					<div class="mode-container" />
					<svg-icon name="ele-check" />
				</div>
			</el-tooltip>

			<el-tooltip content="侧边栏模式（不含主导航）" placement="top" :show-after="500">
				<div
					class="mode mode-single"
					:class="{ active: settingsStore.menu.menuMode === 'single' }"
					@click="settingsStore.menu.menuMode = 'single'"
				>
					<div class="mode-container" />
					<svg-icon name="ele-check" />
				</div>
			</el-tooltip>
		</div>

		<el-divider>页宽模式</el-divider>
		<div class="app-width-mode">
			<el-tooltip effect="dark" content="自适应" placement="top">
				<div
					class="mode mode-adaption"
					:class="{ active: settingsStore.layout.appWidthMode === 'adaption' }"
					@click="setDataAppWidthMode('adaption')"
				>
					<svg-icon class="left" name="ele-back" />
					<svg-icon class="right" name="ele-right" />
					<svg-icon class="active-icon" name="ele-circle-check-filled" />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="自适应（有最小宽度）" placement="top">
				<div
					class="mode mode-adaption-min-width"
					:class="{ active: settingsStore.layout.appWidthMode === 'adaption-min-width' }"
					@click="setDataAppWidthMode('adaption-min-width')"
				>
					<svg-icon class="left" name="ele-back" />
					<svg-icon class="right" name="ele-right" />
					<svg-icon class="active-icon" name="ele-circle-check-filled" />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="定宽居中" placement="top">
				<div
					class="mode mode-center"
					:class="{ active: settingsStore.layout.appWidthMode === 'center' }"
					@click="setDataAppWidthMode('center')"
				>
					<svg-icon class="active-icon" name="ele-circle-check-filled" />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="定宽居中（有最大宽度）" placement="top">
				<div
					class="mode mode-center-max-width"
					:class="{ active: settingsStore.layout.appWidthMode === 'center-max-width' }"
					@click="setDataAppWidthMode('center-max-width')"
				>
					<svg-icon class="left" name="ele-back" />
					<svg-icon class="right" name="ele-right" />
					<svg-icon class="active-icon" name="ele-circle-check-filled" />
				</div>
			</el-tooltip>
		</div>

		<el-divider>导航栏</el-divider>
		<div class="setting-item">
			<div class="label">导航栏填充风格</div>
			<el-radio-group v-model="settingsStore.menu.menuStyle" size="small">
				<el-radio-button label="">
					<el-tooltip effect="dark" content="默认" placement="top">
						<svg-icon name="stop" />
					</el-tooltip>
				</el-radio-button>
				<el-radio-button label="nav-fill-radius">
					<el-tooltip effect="dark" content="圆角" placement="top">
						<svg-icon name="border-radius" />
					</el-tooltip>
				</el-radio-button>
			</el-radio-group>
		</div>

		<div class="setting-item">
			<div class="label">导航栏激活风格</div>
			<el-radio-group v-model="settingsStore.menu.menuActiveStyle" size="small">
				<el-radio-button label="">
					<el-tooltip effect="dark" content="默认" placement="top">
						<svg-icon name="stop" />
					</el-tooltip>
				</el-radio-button>
				<el-radio-button label="nav-active-arrow">
					<el-tooltip effect="dark" content="箭头" placement="top">
						<svg-icon name="ele-caret-left" />
					</el-tooltip>
				</el-radio-button>
				<el-radio-button label="nav-active-line">
					<el-tooltip effect="dark" content="线条" placement="top">
						<svg-icon name="ele-semi-select" :rotate="90" />
					</el-tooltip>
				</el-radio-button>
				<el-radio-button label="nav-active-dot">
					<el-tooltip effect="dark" content="点" placement="top">
						<svg-icon name="dot" />
					</el-tooltip>
				</el-radio-button>
			</el-radio-group>
		</div>

		<div class="setting-item">
			<div class="label">
				主导航切换跳转
				<el-tooltip content="开启该功能后，切换主导航时，页面自动跳转至该主导航下，次导航里第一个导航" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.menu.switchMainMenuAndPageJump" :disabled="['single'].includes(settingsStore.menu.menuMode)" />
		</div>

		<div class="setting-item">
			<div class="label">
				次导航保持展开一个
				<el-tooltip content="开启该功能后，次导航只保持单个菜单的展开" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.menu.subMenuUniqueOpened" />
		</div>

		<div class="setting-item">
			<div class="label">次导航是否折叠</div>
			<el-switch v-model="settingsStore.menu.subMenuCollapse" />
		</div>

		<div v-if="settingsStore.mode === 'pc'" class="setting-item">
			<div class="label">显示次导航折叠按钮</div>
			<el-switch v-model="settingsStore.menu.enableSubMenuCollapseButton" />
		</div>

		<div class="setting-item">
			<div class="label">是否开启主导航切换快捷键</div>
			<el-switch v-model="settingsStore.menu.enableHotkeys" :disabled="['single'].includes(settingsStore.menu.menuMode)" />
		</div>

		<el-divider>顶栏</el-divider>
		<div class="setting-item">
			<div class="label">模式</div>
			<el-radio-group v-model="settingsStore.topbar.mode" size="small">
				<el-radio-button label="static">静止</el-radio-button>
				<el-radio-button label="fixed">固定</el-radio-button>
				<el-radio-button label="sticky">粘性</el-radio-button>
			</el-radio-group>
		</div>

		<el-divider>标签栏</el-divider>
		<div class="setting-item">
			<div class="label">是否启用</div>
			<el-switch v-model="settingsStore.tabbar.enable" />
		</div>

		<div class="setting-item">
			<div class="label">风格</div>
			<el-radio-group v-model="settingsStore.tabbar.mode" size="small">
				<el-radio-button label="fashion">时尚</el-radio-button>
				<el-radio-button label="card">卡片</el-radio-button>
				<el-radio-button label="square">方块</el-radio-button>
			</el-radio-group>
		</div>

		<div class="setting-item">
			<div class="label">是否显示图标</div>
			<el-switch v-model="settingsStore.tabbar.enableIcon" />
		</div>

		<div class="setting-item">
			<div class="label">标签页合并规则</div>
			<el-select v-model="settingsStore.tabbar.enableMerge" size="small">
				<el-option label="不合并" value="1" />
				<el-option label="根据 activeMenu 合并" value="2" />
				<el-option label="根据路由名称合并" value="3" />
			</el-select>
		</div>

		<div class="setting-item">
			<div class="label">是否启用快捷键</div>
			<el-switch v-model="settingsStore.tabbar.enableHotkeys" />
		</div>

		<el-divider>工具栏</el-divider>
		<div class="setting-item">
			<div class="label">消息通知</div>
			<el-switch v-model="settingsStore.toolbar.enableNotice" />
		</div>

		<div v-if="settingsStore.mode === 'pc'" class="setting-item">
			<div class="label">
				全屏
				<el-tooltip
					content="该功能使用场景极少，用户习惯于通过窗口“最大化”功能来扩大显示区域，以显示更多内容，并且使用 F11 键也可以进入全屏效果"
					placement="top"
				>
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.toolbar.enableFullscreen" />
		</div>

		<div class="setting-item">
			<div class="label">
				页面刷新
				<el-tooltip content="开启时会阻止原生 F5 键刷新功能，并采用框架提供的刷新模式进行页面刷新" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.toolbar.enablePageReload" />
		</div>

		<div class="setting-item">
			<div class="label">
				高亮/黑暗
				<el-tooltip content="开启后可在明亮/暗黑模式中切换" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.toolbar.enableColorScheme" />
		</div>

		<el-divider v-if="settingsStore.mode === 'pc'"> 面包屑导航 </el-divider>
		<div v-if="settingsStore.mode === 'pc'" class="setting-item">
			<div class="label">是否启用</div>
			<el-switch v-model="settingsStore.breadcrumb.enable" />
		</div>

		<div class="setting-item">
			<div class="label">风格</div>
			<el-radio-group v-model="settingsStore.breadcrumb.mode" size="small">
				<el-radio-button label="default">默认</el-radio-button>
				<el-radio-button label="modern">现代</el-radio-button>
			</el-radio-group>
		</div>

		<el-divider>导航搜索</el-divider>
		<div class="setting-item">
			<div class="label">
				是否启用
				<el-tooltip content="对导航进行快捷搜索" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.navSearch.enable" />
		</div>

		<div class="setting-item">
			<div class="label">是否开启导航搜索快捷键</div>
			<el-switch v-model="settingsStore.navSearch.enableHotkeys" :disabled="!settingsStore.navSearch.enable" />
		</div>

		<el-divider>主页</el-divider>
		<div class="setting-item">
			<div class="label">
				是否开启
				<el-tooltip content="该功能开启时，登录成功默认进入主页，反之则默认进入导航栏里第一个导航页面" placement="top">
					<svg-icon name="ele-question-filled" />
				</el-tooltip>
			</div>
			<el-switch v-model="settingsStore.home.enable" />
		</div>

		<div class="setting-item">
			<div class="label">主页名称</div>
			<el-input v-model="settingsStore.home.title" size="small" :disabled="!settingsStore.home.enable" />
		</div>

		<el-divider>底部版权</el-divider>
		<div class="setting-item">
			<div class="label">是否启用</div>
			<el-switch v-model="settingsStore.copyright.enable" />
		</div>

		<div class="setting-item">
			<div class="label">日期</div>
			<el-input v-model="settingsStore.copyright.dates" size="small" :disabled="!settingsStore.copyright.enable" />
		</div>

		<div class="setting-item">
			<div class="label">公司</div>
			<el-input v-model="settingsStore.copyright.company" size="small" :disabled="!settingsStore.copyright.enable" />
		</div>

		<div class="setting-item">
			<div class="label">网址</div>
			<el-input v-model="settingsStore.copyright.website" size="small" :disabled="!settingsStore.copyright.enable" />
		</div>

		<div class="setting-item">
			<div class="label">备案</div>
			<el-input v-model="settingsStore.copyright.beian" size="small" :disabled="!settingsStore.copyright.enable" />
		</div>

		<template v-if="isSupported" #footer>
			<el-button type="primary" @click="handleCopy" class="w-full">
				<template #icon>
					<svg-icon name="ele-document-copy" />
				</template>
				复制配置
			</el-button>
		</template>
	</el-drawer>
</template>

<script setup name="AppSetting">
import { ElMessage } from 'element-plus'
import { useEventBus, useClipboard } from '@vueuse/core' // vue 工具库
import { cloneDeep } from 'lodash-es' // js 工具库
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据

// 定义 pinia
const settingsStore = useSettingsStore()

// vue 工具库
const bus = useEventBus()
const { copy, copied, isSupported } = useClipboard()

// 是否显示应用配置
const isShow = ref(false)
// 更改主题预定义颜色
const predefineColors = ref(['#409eff', '#FF4073', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585'])

/**
 * @description: 设置页宽模式
 * @return {*}
 */
const setDataAppWidthMode = (mode) => {
	settingsStore.layout.appWidthMode = mode
}

/**
 * @description: 复制配置项
 * @return {*}
 */
const handleCopy = () => {
	const settings = cloneDeep(settingsStore.$state)
	delete settings.mode
	delete settings.subMenuCollapseLastStatus
	delete settings.mainPageMax
	copy(JSON.stringify(settings, null, 4))
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	bus.on((event) => {
		if (event === 'global-theme-toggle') isShow.value = !isShow.value
	})
})

// 监听复制状态
watch(copied, (val) => {
	if (val) {
		ElMessage.success('复制成功，请粘贴到 src/settings.custom.js 文件中！')
	}
})
</script>

<style lang="scss" scoped>
// Divider 分割线
.el-divider {
	margin: 36px 0 24px;
}

// 应用配置单行样式
.setting-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 10px;
	margin: 5px 0;
	border-radius: 5px;
	transition: all 0.3s;

	// 高亮/暗黑
	.switch {
		$width: 40px;

		display: flex;
		align-items: center;
		width: $width;
		height: 20px;
		cursor: pointer;
		background-color: var(--el-fill-color-darker);
		border-radius: 15px;
		transition: background-color 0.3s;

		.icon {
			padding: 3px;
			margin-left: 2px;
			font-size: 16px;
			background-color: var(--el-fill-color-lighter);
			border-radius: 50%;
			transition:
				margin-left 0.3s,
				background-color 0.3s;
		}

		&.dark {
			background-color: var(--el-color-primary);

			.icon {
				margin-left: calc($width - 17px);
			}
		}
	}

	&:hover {
		background: var(--el-fill-color);
	}

	// 左侧描述文字
	.label {
		display: flex;
		align-items: center;
		font-size: 14px;
		color: var(--el-text-color-regular);

		.svg-icon {
			margin-left: 4px;
			font-size: 17px;
			color: var(--el-color-warning);
			cursor: help;
		}
	}

	.el-switch {
		height: auto;
	}

	.el-input {
		width: 150px;
	}

	.el-radio-group {
		.el-radio-button__inner .svg-icon {
			font-size: 16px;
		}
	}
}

// 导航栏模式
.menu-mode {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;

	.mode {
		position: relative;
		width: 80px;
		height: 55px;
		margin: 10px;
		overflow: hidden;
		cursor: pointer;
		background-color: var(--g-app-bg);
		border-radius: 5px;
		box-shadow: 0 0 5px 1px var(--el-border-color-lighter);
		transition: 0.2s;

		&:hover {
			box-shadow: 0 0 5px 1px var(--el-border-color-darker);
		}

		&.active {
			box-shadow: 0 0 0 2px var(--el-color-primary);
		}

		&::before,
		&::after,
		.mode-container {
			position: absolute;
			pointer-events: none;
			border-radius: 3px;
		}

		.mode-container::before {
			position: absolute;
			width: 100%;
			height: 100%;
			content: '';
			background-color: var(--g-sub-sidebar-menu-active-bg);
			opacity: 0.2;
		}

		&-side {
			&::before {
				top: 5px;
				bottom: 5px;
				left: 5px;
				width: 10px;
				content: '';
				background-color: var(--g-sub-sidebar-menu-active-bg);
			}

			&::after {
				top: 5px;
				bottom: 5px;
				left: 20px;
				width: 15px;
				content: '';
				background-color: var(--g-sub-sidebar-menu-active-bg);
				opacity: 0.5;
			}

			.mode-container {
				top: 5px;
				right: 5px;
				bottom: 5px;
				left: 40px;
				border: 1px dashed var(--g-sub-sidebar-menu-active-bg);
			}
		}

		&-head {
			&::before {
				top: 5px;
				right: 5px;
				left: 5px;
				height: 10px;
				content: '';
				background-color: var(--g-sub-sidebar-menu-active-bg);
			}

			&::after {
				top: 20px;
				bottom: 5px;
				left: 5px;
				width: 15px;
				content: '';
				background-color: var(--g-sub-sidebar-menu-active-bg);
				opacity: 0.5;
			}

			.mode-container {
				top: 20px;
				right: 5px;
				bottom: 5px;
				left: 25px;
				border: 1px dashed var(--g-sub-sidebar-menu-active-bg);
			}
		}

		&-single {
			&::before {
				position: absolute;
				top: 5px;
				bottom: 5px;
				left: 5px;
				width: 15px;
				content: '';
				background-color: var(--g-sub-sidebar-menu-active-bg);
				opacity: 0.5;
			}

			.mode-container {
				top: 5px;
				right: 5px;
				bottom: 5px;
				left: 25px;
				border: 1px dashed var(--g-sub-sidebar-menu-active-bg);
			}
		}

		.svg-icon {
			position: absolute;
			right: 10px;
			bottom: 10px;
			display: none;
		}

		&.active i {
			display: block;
			color: var(--el-color-primary);
		}
	}
}

// 页宽模式
.app-width-mode {
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding-bottom: 10px;

	.mode {
		position: relative;
		width: 65px;
		height: 50px;
		overflow: hidden;
		color: var(--el-text-color-primary);
		cursor: pointer;
		background-color: var(--el-fill-color-darker);
		border-radius: 4px;
		box-shadow: 0 0 5px 1px var(--el-border-color-lighter);
		transition:
			background-color 0.3s,
			var(--el-transition-color),
			var(--el-transition-box-shadow);

		&:hover {
			box-shadow: 0 0 5px 1px var(--el-border-color-darker);
		}

		&.active {
			box-shadow: 0 0 0 2px var(--el-color-primary);

			.active-icon {
				display: block;
				color: var(--el-color-primary);
			}
		}

		.active-icon {
			position: absolute;
			right: 2px;
			bottom: 2px;
			display: none;
		}
	}

	.mode-adaption {
		.left,
		.right {
			position: absolute;
			top: 50%;
			margin-top: -8px;
		}

		.left {
			left: 5px;
		}

		.right {
			right: 5px;
		}
	}

	.mode-adaption-min-width {
		background: var(--el-bg-color);

		&::before {
			position: absolute;
			left: 50%;
			width: 30px;
			height: 100%;
			margin-left: -15px;
			content: '';
			background-color: var(--el-fill-color-darker);
			transition: background-color 0.3s;
		}

		.left,
		.right {
			position: absolute;
			top: 50%;
			margin-top: -8px;
		}

		.left {
			left: 0;
		}

		.right {
			right: 0;
		}
	}

	.mode-center {
		background: var(--el-bg-color);

		&::before {
			position: absolute;
			left: 50%;
			width: 40px;
			height: 100%;
			margin-left: -20px;
			content: '';
			background-color: var(--el-fill-color-darker);
			transition: background-color 0.3s;
		}
	}

	.mode-center-max-width {
		background: var(--el-bg-color);

		&::before {
			position: absolute;
			left: 50%;
			width: 40px;
			height: 100%;
			margin-left: -20px;
			content: '';
			background-color: var(--el-fill-color-darker);
			transition: background-color 0.3s;
		}

		.left,
		.right {
			position: absolute;
			top: 50%;
			margin-top: -8px;
		}

		.left {
			left: 13px;
		}

		.right {
			right: 13px;
		}
	}
}
</style>
