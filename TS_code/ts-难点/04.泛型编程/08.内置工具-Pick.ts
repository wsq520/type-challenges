interface Person {
  name: string
  age: number
  tel?: string
}

type T1 = Pick<Person, "name" | "age">

// 封装
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type T2 = MyPick<Person, "name" | "age">

export { }