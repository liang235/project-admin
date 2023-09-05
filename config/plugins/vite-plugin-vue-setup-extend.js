/*
 * @Description: 让 vue 脚本设置语法支持 name 属性
 */
import setupExtend from 'vite-plugin-vue-setup-extend' // 让 vue 脚本设置语法支持 name 属性

export default function createSetupExtend() {
	return setupExtend()
}
