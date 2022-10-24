type Person = {
  name: string,
  age: number,
  eat:() => void
}

class Stu implements Person{
  name: string
  age: number

  constructor() {

  }

  eat() {}

  run() {}
}

// 如果A类包含了type B里的所有属性和方法 那么两者之间可以相互断言
let p:Person = {name: 'ppp', age: 19, eat:() => {}}
let s = new Stu()

let res = p as Stu
let res2 = s as Person

export {}