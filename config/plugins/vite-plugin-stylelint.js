/*
 * @Description: 终端展示 stylelint 报错信息
 * @Date: 2022-12-27 09:19:02
 * @LastEditTime: 2022-12-27 10:38:22
 */
import stylelint from 'vite-plugin-stylelint'

export default function createStylelint() {
	return stylelint({
		fix: true,
	})
}
