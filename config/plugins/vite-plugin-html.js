/*
 * @Description: 一个针对 index.html，提供压缩和基于 ejs 模板等功能的 vite 插件
 * @Date: 2022-11-19 01:10:09
 * @LastEditTime: 2022-12-19 23:47:24
 */
import { createHtmlPlugin } from 'vite-plugin-html'

export default function createHtml(viteEnv, isBuild) {
	const { VITE_APP_TITLE } = viteEnv

	// 页面刷新加载状态
	const loadingScript = `
    <script>
    (function () {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
            document.getElementById('browser-upgrade').style.display = 'block'
        } else {
            var Loading = document.querySelector('.loading')
            Loading.classList.add('animate')
            Loading.addEventListener('animationend', function () {
                setTimeout(function () {
                    Loading.classList.remove('animate')
                }, 600)
                setTimeout(function () {
                    Loading.classList.add('animate')
                }, 1000)
            })
        }
    })()
    </script>
    `

	return createHtmlPlugin({
		// 注入 HTML 的数据
		inject: {
			// 注入的数据，data 可以在 html 中使用 ejs 模版语法获取
			data: {
				title: VITE_APP_TITLE,
				loadingScript,
			},
		},
		// 是否压缩 html
		minify: isBuild,
	})
}
