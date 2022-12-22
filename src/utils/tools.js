/*
 * @Description: 自定义工具
 * @Date: 2022-11-01 22:10:33
 * @LastEditTime: 2022-12-16 19:41:38
 */
import path from 'path-browserify' // 来自 Node.js 的浏览器路径模块

/**
 * @description: 对象深克隆
 * @param {*} target
 * @return {*}
 */
export function deepClone(target) {
    // 定义一个变量
    let result
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = [] // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if (target.constructor === RegExp) {
            result = target
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {}
            for (let i in target) {
                result[i] = deepClone(target[i])
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target
    }
    // 返回最终结果
    return result
}

/**
 * @description: 处理路由路径
 * @param {*} basePath
 * @param {*} routePath
 * @return {*}
 */
export function resolveRoutePath(basePath, routePath) {
    return basePath ? path.resolve(basePath, routePath ?? '') : routePath ?? ''
}

/**
 * @description: 判断对象的所有属性都为空
 * @param {*} value 对象
 * @return {都为空返回 true}
 */
export function isObjEmpty(value) {
    return Object.values(value).every((v) => ['', null, undefined].includes(v))
}

/**
 * @description: 判断字符串是否为空
 * @param {*} val 字符串
 * @return {为空返回 true}
 */
export function isStrEmpty(val) {
    if (val === '' || val === null || val === undefined) {
        return true
    } else {
        return false
    }
}
