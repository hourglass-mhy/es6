// 对象的解构赋值 对象的解构根据属性名进行映射,与顺序无关
let { bar, foo } = { foo: "aaa", bar: "bbb" }    // foo:"aaa", bar:"bbb"

// let { bar: bar, foo: foo } = {foo: "aaa", bar: "bbb" } // 完整写法

let { baz }      = { foo: "aaa", bar: "bbb" }    // baz:undefined
console.log(bar, foo, baz)

// 嵌套
let obj = {
	p: [
		'Hello',
		{y: 'World'}
	]
}
let { p:[x, { y }] } = obj
console.log(x, y)

// 默认值 默认值仅当右边找不到同名属性，或同名属性值为undefined时起效
let {x1, y1 = 5} = {x1: 1};        // x:1, y:5
let {x2 = 3} = {x2: null};        // x:null
let {x3 = 3} = {x3: undefined};   // x:3
console.log(x1,y1)
console.log(x2)
console.log(x3)

// 如果要将一个已经声明的变量用于解构赋值，必须用括号包裹,成为一个表达式
let x4;
// {x4} = {x4: 1};     // 语法错误  js会认为{x4} 为一段代码 不能使用=进行赋值
({x4} = {x4: 1});    // 正确的写法
console.log(x4);

// 利用对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
let { log, sin, floor } = Math;
console.log(floor(10.6))