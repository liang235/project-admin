/*
 * @Description: 用户部分接口文档
 * @Date: 2022-10-28 17:01:08
 * @LastEditTime: 2022-12-19 21:14:35
 */
import request from '@/plugins/axios.js' // axios

/**
 * @description: 用户登录
 * data.account === 'admin' ? '/login_admin' : '/login_test' 做演示用，正式环境请换接口
 * @param {*} data
 * @return {*}
 */
export const login = (data) => {
    return request({
        url: data.account === 'admin' ? '/login_admin' : '/login_test',
        method: 'post',
        params: data,
    })
}

/**
 * @description: 获取权限
 * data.account === 'admin' ? '/permission_admin' : '/permission_test' 做演示用，正式环境请换接口
 * @param {*} data
 * @return {*}
 */
export const getPermission = (data) => {
    return request({
        url: data.account === 'admin' ? '/permission_admin' : '/permission_test',
        method: 'post',
        params: data,
    })
}

/**
 * @description: 获取路由菜单
 * url: data.account === 'admin' ? '/route/list_admin' : '/route/list_test' 做演示用，正式环境请换接口
 * @return {*}
 */
export const getRouteList = (data) => {
    return request({
        url: data.account === 'admin' ? '/route/list_admin' : '/route/list_test',
        method: 'post',
        params: data,
    })
}