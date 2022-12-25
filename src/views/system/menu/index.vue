<!--
 * @Description: 菜单管理
 * @Date: 2022-12-02 13:03:25
 * @LastEditTime: 2022-12-25 19:25:29
-->
<template>
	<page-main title="菜单管理" v-loading="loading">
		<template v-if="settingsStore.app.routeBaseOn === 'backend'">
			<search-bar>
				<el-row :gutter="20">
					<el-col :span="6">
						<el-input v-model="search.name" placeholder="请输入菜单名称" clearable />
					</el-col>
					<el-col :span="18">
						<el-button type="primary">
							<template #icon>
								<svg-icon name="ele-search" />
							</template>
							查询
						</el-button>
						<el-button type="success">
							<template #icon>
								<svg-icon name="ele-folder-add" />
							</template>
							新增
						</el-button>
					</el-col>
				</el-row>
			</search-bar>

			<ol>
				<li>演示和系统为主导航</li>
			</ol>

			<el-table
				:data="routeStore.routesNo"
				:border="true"
				size="large"
				row-key="path"
				:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				class="white-space-nowrap"
			>
				<el-table-column label="菜单名称">
					<template #default="scope">
						<svg-icon v-if="scope.row.meta?.icon" :name="scope.row.meta?.icon" />
						<span>{{ scope.row.meta?.title ?? '根路径为空' }}</span>
					</template>
				</el-table-column>

				<el-table-column label="路由路径" show-overflow-tooltip>
					<template #default="scope">
						<span>{{ typeof scope.row.path === 'number' ? '' : scope.row.path }}</span>
					</template>
				</el-table-column>

				<el-table-column label="组件路径" show-overflow-tooltip>
					<template #default="scope">
						<span>{{ scope.row.component }}</span>
					</template>
				</el-table-column>

				<el-table-column label="排序">
					<template #default="scope">
						<span>{{ scope.row.sort }}</span>
					</template>
				</el-table-column>

				<el-table-column label="操作" align="center">
					<template>
						<el-button size="small" type="primary">新增</el-button>
						<el-button size="small" type="success">编辑</el-button>
						<el-button size="small" type="danger">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>

		<template v-else>请开启 settingsStore.app.routeBaseOn === 'backend' 在来设置菜单列表</template>
	</page-main>
</template>

<script setup name="SystemMenu">
import useSettingsStore from '@/store/modules/settings.js' // 系统配置数据
import useRouteStore from '@/store/modules/route.js' // 路由数据

// 定义 pinia
const settingsStore = useSettingsStore()
const routeStore = useRouteStore()

// 加载状态
const loading = ref(false)

// 查询列表
const search = ref({
	name: '', // 菜单名称
	currentPage: 1, // 当前页
	pageSize: 10, // 每页条数
	total: 0, // 总条数
})
</script>

<style lang="scss" scoped>
.el-table {
	.svg-icon {
		margin-right: 10px;
		font-size: 16px;
		vertical-align: -0.15em;
	}
}

ol {
	padding-left: 20px;
}
</style>
