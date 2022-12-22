/*
 * @Description: 项目配置文件
 * @Date: 2022-12-22 19:32:44
 * @LastEditTime: 2022-12-22 21:07:28
 */
import { defineConfig, loadEnv } from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import createVitePlugins from './vite/plugins/index.js' // vite 使用插件集合
import path from 'node:path' // 主要用于 alias 文件路径别名

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, __dirname)

	return {
		// 开发或生产环境服务的公共基础路径
		base: './',

		// 插件
		plugins: [...createVitePlugins(env, command === 'build')],

		// 开发服务器选项 https://cn.vitejs.dev/config/#server-options
		server: {
			// 本地运行配置，及反向代理配置
			host: '0.0.0.0', // 主机名， 127.0.0.1，  真机 0.0.0.0
			port: env.VITE_PORT, // 服务器端口
			open: true, // 在服务器启动时自动在浏览器中打开应用程序
			https: false, // 协议
			proxy: {
				// 反向代理配置，注意 rewrite 写法，开始没看文档在这里踩了坑
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true, // 是否跨域
					ws: true, // proxy websockets
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
			watch: {
				usePolling: true,
			},
		},

		resolve: {
			alias: {
				// 配置文件别名
				'@': path.resolve(__dirname, 'src'), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
			},
		},

		// css: {
		// 	preprocessorOptions: {
		// 		scss: {
		// 			additionalData: scssResources.join('')
		// 		}
		// 	},
		// },

		// https://cn.vitejs.dev/config/shared-options.html#define
		// 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换
		// define: {
		// 	__SYSTEM_INFO__: JSON.stringify({
		// 		pkg: {
		// 			version: pkg.version,
		// 			dependencies: pkg.dependencies,
		// 			devDependencies: pkg.devDependencies,
		// 		},
		// 		lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
		// 	}),
		// },

		// 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
		build: {
			target: 'modules', // 浏览器兼容性 "esnext"|"modules"
			outDir: mode === 'production' ? 'dist' : `dist-${mode}`,
			assetsDir: 'assets', // 指定生成静态资源的存放路径
			minify: 'esbuild', //  默认为 esbuild 比 terser 快 20-40 倍，压缩率只差 1%-2%
			manifest: true, // 构建后将会生成 manifest.json 文件
			sourcemap: false, // 构建后是否生成 source map 文件
			chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
			rollupOptions: {
				// 自定义底层的 Rollup 打包配置
				output: {
					// 所以我们要对静态资源打包做处理,拆分不同种类文件文件夹
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
					compact: true,
					// manualChunks: {
					// 	vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
					// 	'element-plus': ['element-plus'],
					// },
				},
			},
			brotliSize: false, // 关闭 brotliSize 显示可以稍微减少包装时间
		},
	}
})
