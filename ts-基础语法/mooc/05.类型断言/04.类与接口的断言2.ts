interface swim {
  name: string
  swim: () => void
}

class Person{
  name: string
  age: number
  constructor() {}

  swim() {}
}


// 如果A类没有实现B接口 断言规则和类与类没有继承关系一样 判断两者的公有属性和方法能否构成子集或完全相同
let p = new Person()
let s: swim = { name: 'hhh', swim: () => { } }

let res = p as swim
let res2 = s as Person

export { }