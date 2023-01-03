/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'el-base': 'var(--el-box-shadow)',
				'el-light': 'var(--el-box-shadow-light)',
				'el-lighter': 'var(--el-box-shadow-lighter)',
				'el-dark': 'var(--el-box-shadow-dark)',
			},
			colors: {
				// 设置主题颜色
				theme: {
					primary: {
						default: 'var(--el-color-primary)',
						light: {
							3: 'var(--el-color-primary-light-3)',
							5: 'var(--el-color-primary-light-5)',
							7: 'var(--el-color-primary-light-7)',
							9: 'var(--el-color-primary-light-9)',
						},
						'dark-2': 'var(--el-color-primary-dark-2)',
					},
					text: {
						primary: 'var(--el-text-color-primary)',
						regular: 'var(--el-text-color-regular)',
						secondary: 'var(--el-text-color-secondary)',
						placeholder: 'var(--el-text-color-placeholder)',
						disabled: 'var(--el-text-color-disabled)',
					},
					border: {
						darker: 'var(--el-border-color-darker)',
						dark: 'var(--el-border-color-dark)',
						base: 'var(--el-border-color-base)',
						light: 'var(--el-border-color-light)',
						lighter: 'var(--el-border-color-lighter)',
						'extra-light': 'var(--el-border-color-extra-light)',
					},
					fill: {
						darker: 'var(--el-fill-color-darker)',
						dark: 'var(--el-fill-color-dark)',
						base: 'var(--el-fill-color-base)',
						light: 'var(--el-fill-color-light)',
						lighter: 'var(--el-fill-color-lighter)',
						'extra-light': 'var(--el-fill-color-extra-light)',
						blank: 'var(--el-fill-color-blank)',
					},
					background: {
						base: 'var(--el-bg-color)',
						page: 'var(--el-bg-color-page)',
						overlay: 'var(--el-bg-color-overlay)',
					},
				},
			},
		},
	},
	plugins: [],
}
