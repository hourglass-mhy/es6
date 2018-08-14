// 数组的解构赋值
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) // 1, 2, 3

// 它会根据索引顺序进行模式匹配 只要等号两边的模式相同，左边的变量就会被赋予对应的值
let [x, y, [z]] = [10, 11, ['a']]
console.log(x, y, z) // 10, 11, 'a'

// 解构不成功
let [bar, foo] = [1];
console.log(bar, foo) // 1,undefined

// 不完全解构
let [d, e] = [1, 2, 3];
console.log(d, e) // 1, 2

// 报错 如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。
// let [f] = 1;

// 解构时赋予默认值 仅当等号右边的元素是undefined时，默认值才起效
let [x1, y1 = 100] = [200, undefined]
console.log(x1, y1) // 200, 100

let [x2 = 1] = [null]
console.log(x2) // null

// 引用其他解构赋值变量的值
let [x3 = 1, y3 = x3] = [2]
console.log(x3, y3)

let [x4 = y4, y4 = 1] = []
// ReferenceError: y4 is not defined