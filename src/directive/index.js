import { authDirective } from './auth.js' // 用户权限
import { wavesDirective } from './waves.js' // 水波纹

export default function directive(app) {
    // 用户权限指令
    authDirective(app)

    // 水波纹指令
    wavesDirective(app)
}