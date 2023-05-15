type City = "上海" | "北京" | "广州" | undefined | null

// NonNullable: 将联合类型中的undefined和Null排除
type T1 = NonNullable<City>

type MyNonNullable<T> = T extends null | undefined ? never : T

type T2 = MyNonNullable<City>

export {}