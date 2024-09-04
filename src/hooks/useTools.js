/**
 * 从对象中过滤出需要的属性
 * @param {object} obj - 当前对象
 * @param {array} str - 要保留的属性列表
 * @returns {object} - 过滤后的新对象
 */
export const useFilterObjKey = (obj, str) => {
	const newObj = {}
	Object.keys(obj).forEach((key) => {
		if (str.includes(key)) {
			newObj[key] = obj[key]
		}
	})
	return newObj
}

/**
 * 从对象中删除指定的属性
 * @param {object} obj - 当前对象
 * @param {array} str - 要删除的属性列表
 * @returns {object} - 删除属性后的新对象
 */
export const useDelObjKey = (obj, str) => {
	const newObj = { ...obj }
	str.forEach((key) => delete newObj[key])
	return newObj
}

/**
 * 获取地址栏的参数值
 * @param {string} paramName - 地址栏参数
 */
export const useGetUrlParam = (paramName, url = window.location.href) => {
	const safeParamName = paramName.replace(/[\[\]]/g, '\\$&')
	const regex = new RegExp(`[?&]${safeParamName}(=([^&#]*)|&|#|$)`)
	const results = regex.exec(url)

	if (!results) return null
	if (!results[2]) return ''

	return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 获取地址栏的所有的参数对象
 */
export const useGetUrlAllParam = (url) => {
	const queryString = url ? url.split('?')[1] : window.location.href.split('?')[1]
	const obj = {}

	if (queryString) {
		const params = new URLSearchParams(queryString)

		for (let [key, value] of params) {
			key = decodeURIComponent(key)
			value = decodeURIComponent(value)

			if (obj[key]) {
				obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [obj[key], value]
			} else {
				obj[key] = value
			}
		}
	}

	return obj
}

/**
 * 在数组对象中新增一个属性
 * @param {Array} array - 包含对象的数组
 * @param {Array} newAttr - 新增的属性
 * @param {Array} oldAttr - 旧的属性
 */
export const useArrayCopyAttr = (array, newAttr, oldAttr) => {
	return array.map((obj) => {
		return {
			...obj,
			[newAttr]: obj[oldAttr],
		}
	})
}

/**
 * 用于从对象数组中提取特定属性的值并将它们连接成字符串
 * @param {Array} arr - 数组对象
 * @param {String} attr - 属性名称
 * @param {Boolean} empty - 是否过滤为空的属性
 */
export const useExtractProps = (arr, attr = 'id', empty = false) => {
	const newArr = []
	arr.forEach((item) => {
		if (!empty ? item[attr] : true) {
			newArr.push(item[attr])
		}

		if (item.children && item.children.length > 0) {
			newArr.push(...useExtractProps(item.children, attr, empty))
		}
	})
	return newArr
}

/**
 * 提取第一个出现指定属性前后的字符串
 * @param {String} value - 要提取值的字符串
 * @param {String} attr - 指定的属性
 * @param {Boolean} isAttr - 是否保留 attr
 */
export const useExtractIndexOf = (value, attr, isAttr = false) => {
	if (!value) return
	const index = value.indexOf(attr)
	const left = value.substring(0, isAttr ? index + 1 : index)
	const right = value.substring(isAttr ? index : index + 1)
	return { left, right }
}

/**
 * 提取最后一个出现指定属性前后的字符串
 * @param {String} value - 要提取值的字符串
 * @param {String} attr - 指定的属性
 * @param {Boolean} isAttr - 是否保留 attr
 */
export const useExtractLastIndexOf = (value, attr, isAttr = false) => {
	if (!value) return
	const index = value.lastIndexOf(attr)
	const left = value.substring(0, isAttr ? index + 1 : index)
	const right = value.substring(isAttr ? index : index + 1)
	return { left, right }
}

/**
 * 数组对象根据一个或多个属性去重
	const arr = [
		{ MEET_ID: '1', dates: '2024-08-01', dot: 'blue' },
		{ MEET_ID: '2', dates: '2024-08-01', dot: 'blue' },
		{ MEET_ID: '3', dates: '2024-08-02', dot: 'blue' },
		{ MEET_ID: '4', dates: '2024-08-02', dot: 'red' },
		{ MEET_ID: '5', dates: '2024-08-02', dot: 'red' },
	]
 * useUniqByProperties(arr, ['dates', 'dot'])
 */
export const useUniqByProperties = (arr, props) => {
	const result = []
	const map = new Map()

	arr.forEach((item) => {
		const key = props.map((prop) => item[prop]).join('-')
		if (!map.has(key)) {
			map.set(key, true)
			result.push(item)
		}
	})

	return result
}

/**
 * 星期几转换成中文
 * useDaysInChinese(1)
 */
export const useDaysInChinese = (day) => {
	const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

	return arr[day]
}

/**
 * 获取 Tree 型数组最后一层的数据
 */
export const useGetLastLevelData = (data) => {
	const result = []
	function findLastLevel(children) {
		children.forEach((item) => {
			if (item.children && item.children.length > 0) {
				findLastLevel(item.children)
			} else {
				result.push(item)
			}
		})
	}
	findLastLevel(data)
	return result
}

/**
 * 判断 Tree 型数组最后一层是否只有一个
 */
export const useIsChildrenOne = (data) => {
	if (data.length !== 1) {
		return false
	}

	return data.every((item) => {
		if (item.children && item.children.length === 1) {
			return useIsChildrenOne(item.children)
		} else if (item.children && item.children.length === 0) {
			return true // 当没有子节点时返回true
		} else {
			return false
		}
	})
}

/**
 * Tree 型数据扁平化
 */
export const useFlattenTree = (data, childrenKey = 'children') => {
	const flatList = []

	data.forEach((group) => {
		const { [childrenKey]: children, ...groupProps } = group // 动态获取子节点数组
		if (children) {
			children.forEach((child) => {
				const flatItem = { ...groupProps } // 将组的属性复制到新对象中
				Object.keys(child).forEach((key) => {
					flatItem[key] = child[key] // 将子节点的每个属性添加到新对象中
				})
				flatList.push(flatItem)
			})
		}
	})

	return flatList
}
