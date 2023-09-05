/*
 * @Description: 封装接口
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
