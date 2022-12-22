import { useClipboard, usePermission } from '@vueuse/core' // vue 工具库

// 获取读写权限，导出复制粘贴方法
const { copied, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')

// 复制函数
export const handleClipboard = async (text) => {
    if (isSupported.value) {
        if (permissionRead.value === 'prompt' && permissionWrite.value === 'granted') {
            copy(text)
        } else {
            ElMessage({
                showClose: true,
                message: '当前无法获取读写权限',
                type: 'warning',
            })
        }
    } else {
        ElMessage({
            showClose: true,
            message: '您的浏览器不支持剪贴板 API',
            type: 'warning',
        })
    }
}

// 监听复制操作是否成功
watch(copied, (val) => {
    if (val) {
        ElMessage({
            showClose: true,
            message: '复制成功',
            type: 'success',
        })
    }
})