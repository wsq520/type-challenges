type City = "上海" | "北京" | "广州"

// Extract：从联合类型中取出指定类型
type T1 = Extract<City, "上海">

type MyExtract<T, E> = T extends E ? T : never

type T2 = MyExtract<City, "上海">

export { }