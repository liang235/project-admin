module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	globals: {
		ElMessage: true,
		ElMessageBox: true,
		ElNotification: true,
		ElLoading: true,
	},
	rules: {
		// http://eslint.cn/docs/rules/
		// https://eslint.vuejs.org/rules/
		// https://typescript-eslint.io/rules/no-unused-vars/
		'vue/no-unused-vars': [
			'error',
			{
				// 已声明 'xxx'，但从未读取其值
				ignorePattern: '^_',
			},
		],
		'vue/require-prop-type-constructor': 'off', // 要求道具类型为构造函数
		'vue/multi-word-component-names': 'off', // 要求组件名称总是多字的
		'vue/no-mutating-props': 'off', // 禁止组件道具的变异，如不准使用 form 当做对象名称
		'no-unused-vars': [
			// 禁止使用未使用的变量
			'error',
			{
				// 变量添加一个前缀_，这样就不会再出现 eslint 错误了
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-undef': 'error', // template 中禁止使用未声明的变量，除非在/*global */ comments中提到
		'no-prototype-builtins': 'off', // 禁止调用某个对象。原型方法直接在对象上
		'no-useless-escape': 'off', // 禁止使用不必要的转义字符
		'no-case-declarations': 'off', // 禁止在 case 子句中使用词法声明
		'no-empty': 'off', // 禁止使用空块语句
		'no-sparse-arrays': 'off', // 禁止使用稀疏数组
	},
}
