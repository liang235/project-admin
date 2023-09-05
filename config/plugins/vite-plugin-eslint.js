/*
 * @Description: 终端展示 eslint 报错信息
 */
import eslint from 'vite-plugin-eslint'

export default function createEslint() {
	return eslint({
		fix: true,
	})
}
