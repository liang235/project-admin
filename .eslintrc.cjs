module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    overrides: [
        // 需要安装 vue-eslint-parser
        // {
        //     files: ['*.ts', '*.tsx', '*.vue'],
        //     rules: {
        //         'no-undef': 'off'
        //     }
        // }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // http://eslint.cn/docs/rules/
        // https://eslint.vuejs.org/rules/
        // https://typescript-eslint.io/rules/no-unused-vars/
        'vue/no-unused-vars': 'off', // 已声明 'xxx'，但从未读取其值
        'vue/require-prop-type-constructor': 'off',// 要求道具类型为构造函数
        'vue/multi-word-component-names': 'off', // 要求组件名称总是多字的
        'no-unused-vars': 'off', // 禁止使用未使用的变量
        'no-undef': 'off', // template 中禁止使用未声明的变量，除非在/*global */ comments中提到
        'no-prototype-builtins': 'off',// 禁止调用某个对象。原型方法直接在对象上
        'no-useless-escape': 'off', // 禁止使用不必要的转义字符
        'no-case-declarations': 'off', // 禁止在 case 子句中使用词法声明
        'no-empty': 'off', // 禁止使用空块语句
    }
}