/*
 * @Description: 打包压缩
 * @Date: 2022-12-22 21:48:36
 * @LastEditTime: 2022-12-22 21:54:24
 */
import viteCompression from 'vite-plugin-compression'

export default function createCompression() {
    return viteCompression({
        ext: '.gz', // 生成的压缩包后缀
        deleteOriginFile: false // 压缩后是否删除源文件
    })
}
