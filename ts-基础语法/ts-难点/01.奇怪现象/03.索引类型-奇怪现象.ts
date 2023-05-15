interface IndexType {
  // [index: number]: string //第一种 正确
  // [index:string]:string //第二种 此时names数组报错
  [index: string]: any //第三种 正确
}

const names:IndexType = ["aaa", "bbb"]
// 在数组中使用数字当作索引取值时 实际上会将数字装换成字符串的
console.log(names[0], names["0"])

// 为什么[index:string]:string会报错？
// 对于数组来讲 除了元素之外 数组还有其他类型的属性 比如forEach\filter等内置函数 names.forEach <=> names["forEach"]
// 而[index:string]:string返回类型固定为string 那必然是报错的

export {}