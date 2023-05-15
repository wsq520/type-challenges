
//变量num被指定为number类型 后续修改它的值也只能赋予一个number类型的值给它 否则报错



let num: number = 123
console.log(typeof num) //number


let num2 = 123
console.log(typeof num2) //number




// num = '123'

// string类型
let str: string = 'hhh'

// boolean类型
let flag: boolean = true

// 字符串数组
const arr1: string[] = ["111", "222", "333"]
arr1.push("ggg")


const arr2: number[] = [1, 2, 3, 4, 5]
const arr3: (string | number)[] = ["hhh", 123]

// null类型
let n: null = null

// undefined类型
let u: undefined = undefined

// 元组(多种元素组合)
const t1: [string, number, string] = ["123", 123, "666"]
const t2: [number, number, string] = [123, 234, "ppp"]
console.log(typeof t1[0])//string
console.log(typeof t2[1])//number






type Point = { x: number; y: number };
type P = keyof Point;

let obj: P = "x"
obj = "y"


let a: any = 123
a = '123'
a = undefined
a = null


let temp: number = 123
let b: unknown = '1'
let B: any = '123'
b = 123
b = true
b = undefined
b = null
// temp = b
temp = B

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string处理方式处理message")
      break
    case 'number':
      console.log("number处理方式处理message")
      break
    case 'boolean':
      console.log("boolean处理方式处理message")
      break
    default:
      const check: never = message
      
  }
}

function foo():never {
  throw new Error('函数执行异常')
  console.log('1111');
}







function baz():never {
  while(true) {
    console.log('函数进入死循环啦')
  }
}

export { }
