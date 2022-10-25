type MyOmit<T, E extends keyof T> = {
  [P in keyof T as P extends E ? never : P]: T[P]
}

type T1 = {
  title: string,
  age: number
}

type T2 = keyof T1

// obj = "title" 或者 "age"
const obj: T2 = "title"
