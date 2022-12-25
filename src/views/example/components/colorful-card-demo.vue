<!--
 * @Description: 多彩渐变卡片
 * @Date: 2022-12-14 14:56:44
 * @LastEditTime: 2022-12-25 16:09:55
-->
<template>
	<div>
		<page-header title="多彩渐变卡片">
			<template #content>
				<p>ColorfulCard</p>
			</template>
		</page-header>

		<page-main>
			<el-row :gutter="20">
				<el-col :xs="24" :md="6">
					<colorful-card header="header" :num="520" tip="较上周上升50%"></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#f9a8d4"
						colorTo="#be185d"
						:num="520"
						tip="较上周上升50%"
						icon="ele-link"
					></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#5eead4"
						colorTo="#0f766e"
						:num="520"
						tip="较上周上升50%"
						icon="ele-baseball"
					></colorful-card>
				</el-col>

				<el-col :xs="24" :md="6">
					<colorful-card
						header="header"
						colorFrom="#f9a8d4"
						colorTo="#881337"
						:num="520"
						tip="较上周上升50%"
						icon="ele-flag"
					></colorful-card>
				</el-col>
			</el-row>
		</page-main>
	</div>
</template>

<script setup name="ComponentColorfulCard"></script>

<style lang="scss" scoped></style>
