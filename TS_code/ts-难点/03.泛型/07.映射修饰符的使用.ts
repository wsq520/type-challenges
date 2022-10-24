interface Person {
  name: string
  age: number
  readonly tel: string
  address?: string
}

// -: 删除 
// +：添加
type MappedType<T> = {
 -readonly [K in keyof T]-?: T[K]
}

type ResType = MappedType<Person>

export { }