type toArray<T> = T[]

type T1 = toArray<number>
type T2 = toArray<number | string>


// 获取umber[] | string[] 而不是 (number | string)[]
type toArray2<T> = T extends any ? T[] : never
type T3 = toArray2<number | string>

// 当将一个联合类型传入到toArray2<T>时 会遍历联合类型的每个成员
// 比如上面的例子 先用number extends any来比较 满足条件 返回number[] 
// 再用string extends any来比较 满足 返回string[]
// 最终结果就是 number[] | string[]
export { }