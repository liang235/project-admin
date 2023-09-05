/*
 * @Description: 用户权限指令
 */
export function authDirective(app) {
	/**
	 * @description: 单权限验证
	 * @description: <button v-auth="'department.create'">新增部门</button>
	 * @description: 多权限验证，用户只要具备其中任何一个权限，则验证通过
	 * @description: <button v-auth="['department.create', 'department.edit']">新增部门</button>
	 */
	app.directive('auth', {
		mounted: (el, binding) => {
			if (!useAuth().auth(binding.value)) {
				el.remove()
			}
		},
	})

	/**
	 * @description: 多权限验证，用户必须具备全部权限，才验证通过
	 * @description: <button v-auth-all="['department.create', 'department.edit']">新增部门</button>
	 */
	app.directive('auth-all', {
		mounted: (el, binding) => {
			if (!useAuth().authAll(binding.value)) {
				el.remove()
			}
		},
	})
}
