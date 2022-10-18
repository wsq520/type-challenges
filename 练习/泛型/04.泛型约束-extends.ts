interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength("aaa")
getLength([1, 2, 3])
// getLength({}) //报错 因为{}不具有length属性
getLength({ length: 100 })