// 扩展运算符（spread）是三个点（...）, 将一个数组展开为用逗号分隔的参数序列。
console.log(...[1, 2, 3])
console.log(1, 2, 3)

console.log(1, 2, ...[3, 4, 5], 6, 7)

// 应用 - 函数调用
function push(array, ...items) {
  array.push(...items);
  console.log(array)
}
push([], 10, 11, 12)

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
console.log(add(...numbers)) // 42