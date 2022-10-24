type City = "上海" | "北京" | "广州"

// Exclude：从一个联合类型中删除指定类型
// 原理就是条件判断里的分发
type T1 = Exclude<City, "上海">

type MyExclude<T, E> = T extends E ? never : T

type T2 = MyExclude<City, "上海">

export { }