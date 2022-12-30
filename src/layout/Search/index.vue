<!--
 * @Description: 导航搜索
 * @Date: 2022-11-25 21:00:24
 * @LastEditTime: 2022-12-30 16:58:29
-->
<template>
	<div class="search" :class="{ searching: isShow }" @click="isShow && bus.emit('global-search-toggle')">
		<div class="container">
			<!-- 搜索框部分 -->
			<div class="search-box" @click.stop>
				<el-input
					ref="searchInputRef"
					v-model="searchInput"
					placeholder="搜索页面，支持标题、URL模糊查询"
					:clearable="true"
					@keydown.esc="bus.emit('global-search-toggle')"
					@keydown.up.prevent="keyUp"
					@keydown.down.prevent="keyDown"
					@keydown.enter.prevent="keyEnter"
					prefix-icon="ele-search"
				/>

				<!-- 快捷键提示 -->
				<div class="tips">
					<div class="tip">
						<el-tag type="info" size="large">Alt + S</el-tag>
						<el-tag type="info" size="large">唤醒搜索面板</el-tag>
					</div>
					<div class="tip">
						<el-tag type="info" size="large">
							<svg-icon name="search-up" />
						</el-tag>
						<el-tag type="info" size="large">
							<svg-icon name="search-down" />
						</el-tag>
						<el-tag type="info" size="large">切换搜索结果</el-tag>
					</div>
					<div class="tip">
						<el-tag type="info" size="large">
							<svg-icon name="search-enter" />
						</el-tag>
						<el-tag type="info" size="large">访问页面</el-tag>
					</div>
					<div class="tip">
						<el-tag type="info" size="large">ESC</el-tag>
						<el-tag type="info" size="large">退出</el-tag>
					</div>
				</div>
			</div>

			<!-- 路由展示列表 -->
			<div ref="searchResultRef" class="result">
				<a
					v-for="(item, index) in resultList"
					:key="item.path"
					:ref="setSearchResultItemRef"
					class="item"
					:class="{ actived: index === actived }"
					@click="pageJump(item.path, item.link)"
					@mouseover="actived = index"
				>
					<svg-icon v-if="item.icon" :name="item.icon" class="icon" />
					<div class="info">
						<div class="title">
							{{ item.title ?? '[ 无标题 ]' }}
						</div>
						<div class="breadcrumb">
							<span v-for="(bc, bcIndex) in item.breadcrumb" :key="bcIndex">
								{{ bc ?? '[ 无标题 ]' }}
								<svg-icon name="ele-arrow-right" />
							</span>
						</div>
						<div class="path">{{ item.path }}</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup name="Search">
import { useEventBus } from '@vueuse/core' // vue 工具库
import { cloneDeep } from 'lodash-es' // js 工具库
import hotkeys from 'hotkeys-js' // 键盘快捷键
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useRouteStore from '@/store/modules/route.js' // 路由数据

// 路由实例
const router = useRouter()

// vue 工具库
const bus = useEventBus()

// 定义 pinia
const settingsStore = useSettingsStore()
const routeStore = useRouteStore()

// 定义响应式数据
const isShow = ref(false) // 是否显示搜索导航
const searchInput = ref('') // 搜索框内容
const sourceList = ref([]) // 所有路由列表
const actived = ref(-1) // 主导航

// refs
const searchInputRef = ref() // 查询搜索框
const searchResultRef = ref() // 路由展示列表
const searchResultItemRef = ref([]) // 路由列表项 ref 集合

// 设置路由列表的每一项 ref
const setSearchResultItemRef = (el) => searchResultItemRef.value.push(el)

/**
 * @description: 判断路由是否有子级
 * @param {*} item
 * @return {*}
 */
const hasChildren = (item) => {
	let flag = true
	if (item.children?.every((i) => i.meta?.sidebar === false)) {
		flag = false
	}
	return flag
}

/**
 * @description: 获取所有动态生成后的路由
 * @param {*} arr
 * @param {*} basePath
 * @param {*} icon
 * @param {*} breadcrumb
 * @return {*}
 */
function getSourceList(arr, basePath, icon, breadcrumb) {
	arr.forEach((item) => {
		if (item.meta?.sidebar !== false) {
			const breadcrumbTemp = cloneDeep(breadcrumb) || []
			if (item.children && hasChildren(item)) {
				breadcrumbTemp.push(item.meta?.title)
				getSourceList(item.children, basePath ? [basePath, item.path].join('/') : item.path, item.meta?.icon ?? icon, breadcrumbTemp)
			} else {
				breadcrumbTemp.push(item.meta?.title)
				sourceList.value.push({
					path: basePath ? [basePath, item.path].join('/') : item.path,
					icon: item.meta?.icon ?? icon,
					title: item.meta?.title,
					link: item.meta?.link,
					breadcrumb: breadcrumbTemp,
				})
			}
		}
	})
}

/**
 * @description: 搜索查询现在有的结果列表
 * @param {*} computed
 * @return {*}
 */
const resultList = computed(() => {
	let result = []
	result = sourceList.value.filter((item) => {
		let flag = false
		if (item.title) {
			if (typeof item.title === 'function') {
				if (item.title().includes(searchInput.value)) {
					flag = true
				}
			} else if (item.title.includes(searchInput.value)) {
				flag = true
			}
		}
		if (item.path.includes(searchInput.value)) {
			flag = true
		}
		if (
			item.breadcrumb.some((b) => {
				let flag = false
				if (b) {
					if (typeof b === 'function') {
						if (b().includes(searchInput.value)) {
							flag = true
						}
					} else if (b.includes(searchInput.value)) {
						flag = true
					}
				}
				return flag
			})
		) {
			flag = true
		}
		return flag
	})
	return result
})

/**
 * @description: 键盘上箭头
 * @return {*}
 */
const keyUp = () => {
	if (resultList.value.length) {
		actived.value -= 1
		if (actived.value < 0) {
			actived.value = resultList.value.length - 1
		}
		handleScroll()
	}
}

/**
 * @description: 键盘下箭头
 * @return {*}
 */
const keyDown = () => {
	if (resultList.value.length) {
		actived.value += 1
		if (actived.value > resultList.value.length - 1) {
			actived.value = 0
		}
		handleScroll()
	}
}

/**
 * @description: 键盘 Enter 回车键
 * @return {*}
 */
const keyEnter = () => {
	if (actived.value !== -1) {
		searchResultItemRef.value[actived.value].click()
	}
}

/**
 * @description: 上下箭头滚动事件
 * @return {*}
 */
const handleScroll = () => {
	let scrollTo = 0
	if (actived.value !== -1) {
		scrollTo = searchResultRef.value.scrollTop
		const activedOffsetTop = searchResultItemRef.value[actived.value].offsetTop
		const activedClientHeight = searchResultItemRef.value[actived.value].clientHeight
		const searchScrollTop = searchResultRef.value.scrollTop
		const searchClientHeight = searchResultRef.value.clientHeight
		if (activedOffsetTop + activedClientHeight > searchScrollTop + searchClientHeight) {
			scrollTo = activedOffsetTop + activedClientHeight - searchClientHeight
		} else if (activedOffsetTop <= searchScrollTop) {
			scrollTo = activedOffsetTop
		}
	}
	searchResultRef.value.scrollTo({
		top: scrollTo,
	})
}

/**
 * @description: 页面跳转
 * @param {*} path
 * @param {*} link
 * @return {*}
 */
const pageJump = (path, link) => {
	if (link) {
		window.open(link, '_blank')
	} else {
		router.push(path)
	}
}

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	bus.on((event) => {
		if (event === 'global-search-toggle') isShow.value = !isShow.value
	})

	// 绑定键盘快捷键
	hotkeys('alt+s', (e) => {
		if (settingsStore.navSearch.enable && settingsStore.navSearch.enableHotkeys) {
			e.preventDefault()
			isShow.value = true
		}
	})

	hotkeys('esc', (e) => {
		if (settingsStore.navSearch.enable && settingsStore.navSearch.enableHotkeys) {
			e.preventDefault()
			isShow.value = false
		}
	})

	// 获取所有动态生成后的路由
	routeStore.routes.forEach((item) => {
		if (item.children) getSourceList(item.children)
	})
})

// 在组件即将因为响应式状态变更而更新其 DOM 树之前调用
onBeforeUpdate(() => {
	searchResultItemRef.value = []
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
	hotkeys.unbind('alt+s')
	hotkeys.unbind('esc')
})

// 监听搜索查询现在有的结果列表
watch(
	() => resultList.value,
	() => {
		actived.value = -1
		searchResultItemRef.value = []
		handleScroll()
	}
)

// 监听搜索页面状态
watch(
	() => isShow.value,
	(val) => {
		if (val) {
			document.body.classList.add('overflow-hidden')
			searchResultRef.value.scrollTop = 0
			// 当搜索页面显示的时候绑定上、下、回车快捷键，隐藏的时候再解绑。另外当 input 处于 focus 状态时，采用 vue 来绑定键盘事件
			hotkeys('up', keyUp)
			hotkeys('down', keyDown)
			hotkeys('enter', keyEnter)
			setTimeout(() => {
				searchInputRef.value.focus()
			}, 500)
		} else {
			document.body.classList.remove('overflow-hidden')
			hotkeys.unbind('up', keyUp)
			hotkeys.unbind('down', keyDown)
			hotkeys.unbind('enter', keyEnter)
			setTimeout(() => {
				searchInput.value = ''
				actived.value = -1
			}, 500)
		}
	}
)
</script>

<style lang="scss" scoped>
.search {
	position: fixed;
	z-index: 2000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: saturate(50%) blur(4px);
	background-image: radial-gradient(transparent 1px, rgb(0 0 0 / 30%) 1px);
	background-size: 4px 4px;
	opacity: 0;

	// background-color: var(--el-overlay-color-lighter);
	// backdrop-filter: blur(10px);
	// transform: translateZ(0);

	transition: all 0.2s;
	visibility: hidden;

	&.searching {
		opacity: 1;
		visibility: visible;

		.container {
			filter: initial;
			transform: initial;
		}
	}

	.container {
		display: flex;
		max-width: 800px;
		height: 100%;
		flex-direction: column;
		margin: 0 auto;
		filter: blur(10px);
		transform: scale(1.1);
		transition: all 0.2s;

		.search-box {
			margin: 50px 20px 20px;

			:deep(.el-input__inner) {
				height: 52px;
				line-height: 52px;
			}

			:deep(.el-input__icon) {
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: center;
			}

			.tips {
				display: flex;
				justify-content: center;
				padding-top: 20px;
				font-weight: bold;

				.tip {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 0 20px;

					.el-tag {
						margin: 0 5px;

						&:first-child {
							margin-left: 0;
						}

						&:last-child {
							margin-right: 0;
						}
					}
				}
			}
		}

		.result {
			position: relative;
			overflow: auto;
			border-radius: 5px;
			margin: 0 20px 50px;
			background-color: var(--el-bg-color);
			box-shadow: 0 0 0 1px var(--el-border-color-darker);

			.item {
				display: flex;
				align-items: center;
				cursor: pointer;
				text-decoration: none;
				transition: all 0.3s;

				&.actived {
					background-color: var(--el-bg-color-page);

					.icon {
						color: var(--el-color-primary);
						transform: scale(1.2);
					}

					.info {
						border-left-color: var(--el-border-color);

						.title {
							color: var(--el-text-color-primary);
						}

						.breadcrumb,
						.path {
							color: var(--el-text-color-regular);
						}
					}
				}

				.icon {
					flex: 0 0 66px;
					color: var(--el-color-info);
					font-size: 20px;
					text-align: center;
					transition: all 0.3s;
				}

				.info {
					display: flex;
					height: 70px;
					flex: 1;
					flex-direction: column;
					justify-content: space-around;
					padding: 5px 10px 7px;
					border-left: 1px solid var(--el-border-color-lighter);
					transition: all 0.3s;

					@include text-overflow(1, true);

					.title {
						color: var(--el-text-color-regular);
						font-size: 18px;
						font-weight: bold;

						@include text-overflow(1, true);
					}

					.breadcrumb,
					.path {
						color: var(--el-text-color-secondary);
						font-size: 12px;
						transition: all 0.3s;

						@include text-overflow(1, true);
					}

					.breadcrumb {
						span {
							margin-right: 5px;

							&:last-child i {
								display: none;
							}
						}
					}
				}
			}
		}
	}
}
</style>
