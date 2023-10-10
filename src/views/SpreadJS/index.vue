<template>
	<page-main title="SpreadJS">
		<div id="spread-host">
			<gc-spread-sheets hostClass="spreadHost" @workbookInitialized="initWorkbook"> </gc-spread-sheets>
		</div>
	</page-main>
</template>

<script setup>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import * as GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-vue'

function initWorkbook(spread) {
	let sheet = spread.getActiveSheet()
	sheet.getCell(0, 0).vAlign(GC.Spread.Sheets.VerticalAlign.center).value('Hello SpreadJS')
}
</script>

<style lang="scss" scoped>
.spreadHost {
	width: 800px;
	height: 800px;
}
</style>
