function sum(num1: number, num2: number) {//ts不仅对参数类型进行限制而且参数个数也必须对应
  return num1 + num2
}
sum(123, 321)

function sum2(num1:number, num2:number, z?:number): void {
  console.log(num1)
  console.log(num2)
  // z不传就是undefined
  console.log(z)
}
sum2(1, 2)
sum2(1, 2, 3)

// 联合类型
type IDType = string | number | boolean
function foo(value: IDType) {
  if(typeof value === 'number') {
    console.log("我是number类型", value)
  } else if(typeof value === 'string') {
    console.log("变成大写", value.toUpperCase())
  } else {
    console.log('我是布尔类型',value)
  }
}
// foo(123)
// foo("ggg")
// foo(true)


function sum3(firstNum: number = 100, ...nums: number[]) {
  let total =firstNum
  for (const num of nums) {
    total += num
  }
  return total
}
console.log(sum3(20, 30, 40, 50))

function func(first: string, ...args: any[]) {
  console.log(first)//hhh
  console.log(args)//['pppp', 123]
}
func("hhh", "pppp", 123)




const arr = ["aaa", "bbb", "ccc"]
arr.forEach((item, index, arr) => {
  return 123
})




export {}