<!--
 * @Description: 电子签名
 * @Date: 2022-12-14 21:21:00
 * @LastEditTime: 2022-12-15 22:24:00
-->
<template>
    <div class="signature-pad-wrap">
        <canvas class="canvas" :style="{ customStyle }" />

        <div class="btn">
            <el-button @click="undo">撤销</el-button>
            <el-button @click="clear">清除</el-button>
            <el-button @click="save">保存</el-button>
            <el-button @click="downPng">下载 png 格式</el-button>
            <el-button @click="downJpeg">下载 jpeg 格式</el-button>
            <el-button @click="downSvg">下载 svg 格式</el-button>
            <el-button @click="downSvgBgColor">下载带有背景的 svg 格式</el-button>
        </div>
    </div>
</template>

<script setup name="SignaturePad">
import SignaturePad from 'signature_pad' // 画板插件

// 定义父组件传过来的值
const props = defineProps({
    // 宽度
    width: {
        type: Number,
        default: () => 500
    },
    // 高度
    height: {
        type: Number,
        default: () => 300
    },
    // 自定义 canvas 样式
    customStyle: {
        type: Object,
        default: () => {}
    },
    // 背景色
    backgroundColor: {
        type: String,
        default: () => 'rgb(240, 240, 240)'
    },
    // 画线的颜色
    penColor: {
        type: String,
        default: () => '#000'
    }
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['save'])

// 画板实例
const signaturePadRef = ref()

// 初始化画板
const init = () => {
    const canvas = document.querySelector('.canvas')
    canvas.width = props.width
    canvas.height = props.height

    signaturePadRef.value = new SignaturePad(canvas, {
        minWidth: 2, // 画线最小宽度
        maxWidth: 2, // 画线最大宽度
        penColor: props.penColor,
        backgroundColor: props.backgroundColor // 画板背景色
    })
}

// 撤销
const undo = () => {
    const data = signaturePadRef.value.toData()

    if (data) {
        data.pop() // 删除最后一个点或行
        signaturePadRef.value.fromData(data)
    }
}

// 清除
const clear = () => {
    signaturePadRef.value.clear()
}

// 保存图片
const save = () => {
    const signaturePadRef64 = signaturePadRef.value.toDataURL() // 图片地址
    emit('save', signaturePadRef64)
}

// 下载 png 格式
const downPng = () => {
    if (signaturePadRef.value.isEmpty()) {
        ElMessage.warning('请先提供签名')
    } else {
        const dataURL = signaturePadRef.value.toDataURL()
        download(dataURL, 'signature.png')
    }
}

// 下载 jpeg 格式，需要 backgroundColor 色为 rgb(255,255,255)
const downJpeg = () => {
    if (signaturePadRef.value.isEmpty()) {
        ElMessage.warning('请先提供签名')
    } else {
        const dataURL = signaturePadRef.value.toDataURL('image/jpeg')
        download(dataURL, 'signature.jpg')
    }
}

// 下载 svg 格式
const downSvg = () => {
    if (signaturePadRef.value.isEmpty()) {
        ElMessage.warning('请先提供签名')
    } else {
        const dataURL = signaturePadRef.value.toDataURL('image/svg+xml')
        download(dataURL, 'signature.svg')
    }
}

// 下载 带有背景的SVG
const downSvgBgColor = () => {
    if (signaturePadRef.value.isEmpty()) {
        ElMessage.warning('请先提供签名')
    } else {
        const dataURL = signaturePadRef.value.toDataURL('image/svg+xml', { includeBackgroundColor: true })
        download(dataURL, 'signature.svg')
    }
}

// 下载签名图片
const download = (dataURL, filename) => {
    let blob = dataURLToBlob(dataURL)
    let url = window.URL.createObjectURL(blob)

    let a = document.createElement('a')
    a.style = 'display: none'
    a.href = url
    a.download = filename

    document.body.appendChild(a)
    a.click()

    window.URL.revokeObjectURL(url)
}

// 一个可以简单地使用Canvas#toBlob方法代替，但它只是为了显示
// 可以使用SignaturePad#toDataURL的结果
const dataURLToBlob = (dataURL) => {
    // Code taken from https://github.com/ebidel/filer.js
    let parts = dataURL.split(';base64,')
    let contentType = parts[0].split(':')[1]
    let raw = window.atob(parts[1])
    let rawLength = raw.length
    let uInt8Array = new Uint8Array(rawLength)

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], { type: contentType })
}

onMounted(() => {
    init()
})
</script>

<style lang="scss" scoped>
.signature-pad-wrap {
    .btn {
        margin-top: 20px;
    }
}
</style>
