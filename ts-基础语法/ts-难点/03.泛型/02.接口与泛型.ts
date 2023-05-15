// 可以给泛型设置默认值
interface StudentType<T = string, K = number> {
  name: T,
  age: K
}

const stu1: StudentType<number, number> = {
  name: 123,
  age: 19
}

const stu2: StudentType = {
  name: 'ppp',
  age: 18
}