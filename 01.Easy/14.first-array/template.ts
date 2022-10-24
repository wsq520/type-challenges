type First<T extends any[]> = T extends [] ? never : T[0]

// 如果T是一个空的数组 那么永远不会存在索引0的值 那么就是个never类型

type T1 = []
type T2 = any[]

// T1就是一个空的数组(不能存储元素)
const arr1:T1 = []

// T2就是一个元素为any类型的数组(可以存储任意个元素)
const arr2:T2 = []
const arr3:T2 = ["aa", "aaaa"]