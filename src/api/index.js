/*
 * @Description: 封装接口
 * @Date: 2023-02-28 16:07:28
 * @LastEditTime: 2023-02-28 16:16:40
 */
import axios from 'axios'

// 封装测试数据
export const getTestData = (url, data, method = 'get') => {
	return axios({
		url,
		method,
		params: data,
	})
}
