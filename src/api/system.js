/*
 * @Description: 系统管理接口文档
 * @Date: 2022-12-03 15:48:45
 * @LastEditTime: 2022-12-19 21:14:27
 */

import request from '@/plugins/axios.js' // axios

/**
 * @description: 角色管理
 * @return {*}
 */
export const systemRoleList = (data) => {
    return request({
        url: '/system/role/list',
        method: 'post',
        params: data,
    })
}

/**
 * @description: 用户管理
 * @return {*}
 */
export const systemUserList = (data) => {
    return request({
        url: '/system/user/list',
        method: 'post',
        params: data,
    })
}