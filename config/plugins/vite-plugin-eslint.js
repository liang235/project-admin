/*
 * @Description: 终端展示 eslint 报错信息
 * @Date: 2022-12-27 09:18:52
 * @LastEditTime: 2022-12-27 10:39:48
 */
import eslint from 'vite-plugin-eslint'

export default function createEslint() {
	return eslint({
		fix: true,
	})
}
