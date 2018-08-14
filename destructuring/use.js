// 解构赋值的应用
// 1.变量交换
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y)

// 2.解构函数返回的多个值
// 返回数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a, b, c)

// 返回对象
function example1() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example1();
console.log(foo, bar)

// 3.解构函数参数
function add ([x, y, z]) {
	return x + y + z
}
console.log(add([1, 2, 3]))

function move ({x, y, z}) {
	return [x, y, z]
}
console.log(move({x: 10, y: 20, z: 30}))

// 4.提取JSON数据
let obj = {
	id: 1,
	page: 1,
	pageSize: 20,
	roleCode: 'administrator',
	roleName: '超级管理员'
}
let {id, roleCode, roleName} = obj
console.log(id, roleCode, roleName)

// 5.函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

// 6. 输入模块的指定方法
let { mapGetters, mapMutations } = require('vuex')