/*
 * @Description: 终端展示 stylelint 报错信息
 */
import stylelint from 'vite-plugin-stylelint'

export default function createStylelint() {
	return stylelint({
		fix: true,
	})
}
