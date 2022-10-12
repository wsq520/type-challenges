let num: number = 123
// num = '11' 报错

let str: string = 'hhh'

let flag: boolean = true

const arr1: string[] = ["111", "222", "333"]
const arr2: number[] = [1, 2, 3, 4, 5]
const arr3: (string | number)[] = ["hhh", 123]

let n: null = null
let u: undefined = undefined

// 元组(多种元素组合)
const t1: [string, number, string] = ["123", 123, "666"]
const t2: [number, number, string] = [123, 234, "ppp"]

type Point = { x: number; y: number };
type P = keyof Point;

let obj:P = "x"
obj = "y"

export {}
