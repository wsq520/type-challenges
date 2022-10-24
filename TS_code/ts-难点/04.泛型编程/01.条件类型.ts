// T extends number ? number : string 类似于三元运算符
function sum<T extends number | string>(num1: T, num2: T): T extends number ? number : string
function sum(num1, num2) {
  return num1 + num2
}

// res1 res2都是确定类型
const res1 = sum(20, 80)
const res2 = sum("aaa", "bbb")

export { }