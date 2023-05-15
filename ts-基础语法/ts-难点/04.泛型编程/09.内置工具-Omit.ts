interface Person {
  name: string
  age: number
  tel?: string
}

// 将name属性排除
type T1 = Omit<Person, "name">

// 封装
type MyOmit<T, K extends keyof T> = {
  // as P extends K ? never : P 将存在K中的key排除
  [P in keyof T as P extends K ? never : P]: T[P]
}

type T2 = MyOmit<Person, "name">
type T3 = MyOmit<Person, "name" | "age">

export { }