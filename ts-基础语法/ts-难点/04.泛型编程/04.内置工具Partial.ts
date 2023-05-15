interface Person {
  name: string
  age: number
  tel?: string
}

// Partial<T>就是将T类型中的内容全部变成可选的
type T1 = Partial<Person>

// 封装一个Partial
type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type T2 = MyPartial<Person>
export { }