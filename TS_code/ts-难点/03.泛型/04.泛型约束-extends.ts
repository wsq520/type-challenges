interface ILength {
  length: number
}

// 传入的内容必须具备lenght属性
// T可以理解成它是一个变量 在整个函数生命周期中记录了本次调用函数时参数的类型
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

// res123可以拿到正确的类型
const res1 = getLength("aaa")
const res2 = getLength([1, 2, 3])
// getLength({}) //报错 因为{}不具有length属性
const res3 = getLength({ length: 100, name: "pp" })

function getLength2(arg: ILength) {
  return arg
}
// res4 res5都丢失了类型
const res4 = getLength2("111")
const res5 = getLength2({ length: 100 })