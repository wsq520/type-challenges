type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

// as const: 字面量类型
const a = "aaa" as const
const b = "aaa"

const arr = ["aaa", "aaaa"]
// 加上as const 会变成只读类型
const arr2 = ["aaa", "aaaa"] as const

const obj = {
  name: 'hhh',
  age: 19
}
// 加上as const 每个属性都变成只读的
const obj2 = {
  name: 'hhh',
  age: 19
} as const