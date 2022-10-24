interface Person {
  name: string
  age: number
  tel?: string
}

// Required<T>就是将T类型中的内容全部变成必选的
type T1 = Required<Person>

// 封装一个Required
type MyRequired<T> = {
  [K in keyof T]-?: T[K]
}

type T2 = Required<Person>
export { }