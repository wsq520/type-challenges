type Person = {
  name: string,
  age: number,
  eat:() => void
}

class Stu{
  name: string
  // age: number

  constructor(name:string, age: number) {

  }

  eat() {}
}

// 如果A类没有实现type B 那么如果两者之间的公有属性和方法构成子集关系或完全相同 那么也可以相互断言
let p:Person = {name: 'ppp', age: 19, eat:() => {}}
let s = new Stu("sss", 19)

let res = p as Stu
let res2 = s as Person

export {}