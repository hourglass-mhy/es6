// add()的参数不是数组，而是[x,y] = [1,2]的解构，在函数内部，x和y可以直接访问
function add([x, y]){
  return x + y;
}

console.log(add([1, 2])); // 3

// 函数参数的解构也可以使用默认值
function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3});       // [3, 0]，y使用默认值
move({});           // [0, 0]，空对象，x、y均使用默认值
move();             // [0, 0]，无参调用，x、y均使用默认值

// 下面的写法不是解构赋值，而是给函数的参数设定默认值，只有在无参调用时默认值才起效。
function move1({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move1({x: 3, y: 8}); // [        3,         8]
move1({x: 3});       // [        3, undefined]，x正常赋值，默认值无效，y属性不存在，因此是undefined
move1({});           // [undefined, undefined]，空对象也是实参，默认值无效，x、y属性都不存在，都是undefined
move1();             // [        0,         0]，无参调用，默认值起效

// 函数的length属性
// 将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
let len1 = (function (a=1, b) {}).length
console.log(len1)

// rest参数 获取函数的形参
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add1(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}
console.log(add1(2, 5, 3)) // 10

// rest参数和arguments对象的区别
// rguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。
// arguments变量的写法
// function sortNumbers() {
//   return Array.prototype.slice.call(arguments).sort();
// }
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(1,5,3,6,7))


function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

let a = [];
push(a, 1, 2, 3)