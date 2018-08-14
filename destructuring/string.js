// 字符串作为类数组对象，同时具备了数组和对象的特性，因此可以用两种方式进行解构赋值
let [a, b, c, d, e] = 'hello'
console.log(a, b, c, d, e)

let {length: len} = 'hello'
console.log(len)