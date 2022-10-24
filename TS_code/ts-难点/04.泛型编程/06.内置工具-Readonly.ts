interface Person {
  name: string
  age: number
  tel?: string
}

type T1 = Readonly<Person>

// 封装
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

type T2 = MyReadonly<Person>

export { }