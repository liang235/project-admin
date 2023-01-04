/**
 * "off" 或 0 - 关闭该规则
 * "warn" 或 1 - 启用并警告（不影响现有代码）
 * "error" 或 2 - 启用并报错（错误代码 1）
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint-config-airbnb-base',
		// eslint-config-prettier 与 eslint-config-prettier 简写配置
		'plugin:prettier/recommended',
		'./.eslintrc-auto-import.json',
	],
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
		'import/no-unresolved': 0, // 确保导入指向可以解析的文件/模块
		'import/extensions': 0, // 确保在导入路径内一致使用文件扩展名
		'import/no-extraneous-dependencies': [1, { devDependencies: true }], // 禁止使用多余的包
		'import/prefer-default-export': 0, // 首选默认导出导入/首选默认导出
		'import/no-mutable-exports': 0, // 禁止使用 var 或 let 的可变导出

		'vue/no-unused-vars': [
			2,
			{
				// 已声明 'xxx'，但从未读取其值
				ignorePattern: '^_',
			},
		],
		'vue/require-prop-type-constructor': 0, // 要求道具类型为构造函数
		'vue/multi-word-component-names': 0, // 要求组件名称总是多字的
		'vue/no-mutating-props': 0, // 禁止组件道具的变异，如不准使用 form 当做对象名称
		'no-unused-vars': [
			// 禁止使用未使用的变量
			2,
			{
				// 变量添加一个前缀_，这样就不会再出现 eslint 错误了
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-undef': 2, // template 中禁止使用未声明的变量，除非在/*global */ comments中提到
		'no-prototype-builtins': 0, // 禁止调用某个对象。原型方法直接在对象上
		'no-useless-escape': 0, // 禁止使用不必要的转义字符
		'no-case-declarations': 0, // 禁止在 case 子句中使用词法声明
		'no-empty': 0, // 禁止使用空块语句
		'no-sparse-arrays': 0, // 禁止使用稀疏数组
		'no-console': 0, // 禁用 console
		'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
		'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
		'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
		'no-bitwise': 0, // 禁止使用位运算符
		'no-use-before-define': 0, // 禁止在变量定义之前使用它们
		'no-restricted-syntax': 0, // 禁用特定的语法
		'no-nested-ternary': 0, // 禁止嵌套三元表达式
		'no-return-assign': 0, // 禁止在 return 语句中使用赋值操作符

		'prefer-const': 0, // 对于声明后从未重赋值的变量，需要使用 const 声明
		'guard-for-in': 0, // 要求 for-in 循环包含 if 语句
		'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
		'default-case': 0, // 强制 switch 要有 default 分支
		'func-names': 0, // 要求或禁止指定函数表达式
		'prefer-destructuring': 0, // 强制使用解构
		'array-callback-return': 0, // 在数组方法的回调中执行 return 语句
	},
}
