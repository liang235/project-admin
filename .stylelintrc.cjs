module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-standard-vue/scss",
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'no-empty-source': null, // 禁止 style 标签内容为空
        'no-descending-specificity': null, // 禁止低特异性选择符出现在覆盖高特异性选择符之后
        'max-line-length': null, // 限制一行的长度
        'selector-class-pattern': null, // 为类选择器指定一个模式
        'value-no-vendor-prefix': null, // 禁止在值中使用供应商前缀
        "indentation": null, // 禁止格式化缩进
        'number-max-precision': null, // 限制数字中允许的小数点后数位
        'keyframes-name-pattern': null, // 期望关键帧名称为串格式 .foo-bar
        'block-no-empty': null, // 禁止使用空样式
        "no-duplicate-selectors": null, // 禁止重复选择器
        "at-rule-no-unknown": null, // 禁止使用未知at规则
        "property-no-unknown": null, // 禁止使用未知属性
        "font-family-no-missing-generic-family-keyword": null, // 禁止字体族中缺少通用族关键字
        "scss/double-slash-comment-empty-line-before": null,
        "scss/no-global-function-names": null,
        "scss/at-rule-no-unknown": null,

        // 指定样式的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition'
        ]
    }
}