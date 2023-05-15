interface Person {
  name: string
  age: number
  tel?: string
}

type CityType = "广州" | "深圳" | "北京"

type T1 = Record<CityType, Person>

// 封装
// 注意：必须保证K是一个可以作为key的联合类型
type res = keyof any //(string | number | symbol) 只有这三个组合的联合类型可以作为key
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type T2 = MyRecord<CityType, Person>

export { }