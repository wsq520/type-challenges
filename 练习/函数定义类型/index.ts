function sum1(num1: number, num2: number): number {
  return num1 + num2
}
sum1(1, 2)

function sum2(num1: number, num2: number, z?: number): void {
  console.log(num1)
  console.log(num2)
  // z不传就是undefined
  console.log(z)
}
sum2(1, 2)
sum2(1, 2, 3)

// 联合类型
function foo(value: number | string | boolean) {
  if(typeof value === 'number') {
    console.log("我是number类型", value)
  } else if(typeof value === 'string') {
    console.log("变成大写", value.toUpperCase())
  } else {
    console.log(value)
  }
}
foo(123)
foo("ggg")
foo(true)


export {}