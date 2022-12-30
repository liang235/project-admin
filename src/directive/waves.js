/*
 * @Description: 水波纹指令
 * @directive 默认方式：v-waves，如 `<div v-waves></div>`
 * @directive 参数方式：v-waves=" |light|red|orange|purple|green|teal"，如 `<div v-waves="'light'"></div>`
 * @Date: 2022-12-12 16:23:50
 * @LastEditTime: 2022-12-30 16:26:43
 */
export function wavesDirective(app) {
	app.directive('waves', {
		mounted(el, binding) {
			el.classList.add('waves-effect')
			if (binding.value) el.classList.add(`waves-${binding.value}`)
			function setConvertStyle(obj) {
				let style = ''
				for (const i in obj) {
					if (obj.hasOwnProperty(i)) style += `${i}:${obj[i]};`
				}
				return style
			}
			function onCurrentClick(e) {
				const elDiv = document.createElement('div')
				elDiv.classList.add('waves-ripple')
				el.appendChild(elDiv)
				const styles = {
					left: `${e.layerX}px`,
					top: `${e.layerY}px`,
					opacity: 1,
					transform: `scale(${(el.clientWidth / 100) * 10})`,
					'transition-duration': `750ms`,
					'transition-timing-function': `cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
				}
				elDiv.setAttribute('style', setConvertStyle(styles))
				setTimeout(() => {
					elDiv.setAttribute(
						'style',
						setConvertStyle({
							opacity: 0,
							transform: styles.transform,
							left: styles.left,
							top: styles.top,
						})
					)
					setTimeout(() => {
						if (elDiv) el.removeChild(elDiv)
					}, 750)
				}, 450)
			}
			el.addEventListener('mousedown', onCurrentClick, false)
		},
		unmounted(el) {
			el.addEventListener('mousedown', () => {})
		},
	})
}
