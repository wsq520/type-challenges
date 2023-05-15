// 映射类型：可以理解成就是个函数 将类型复制一遍

interface Person {
  name: string
  age: number
}

// 映射类型不能使用interface来定义
type MappedType<T> = {
  [K in keyof T]: T[K]
}

const obj: MappedType<Person> = {
  name: 'obj',
  age: 19
}

export { }