<!--
 * @Description: 立体文字
-->
<template>
	<page-main title="立体文字">
		<h1>立体文字</h1>
	</page-main>
</template>

<script setup></script>

<style lang="scss" scoped>
h1 {
	font-size: 5em;
	text-align: center;
	text-shadow:
		-1px 1px #bbb,
		-2px 2px #bbb,
		-3px 3px #bbb,
		-4px 4px #bbb,
		-10px 10px 3px #0008;
}
</style>
