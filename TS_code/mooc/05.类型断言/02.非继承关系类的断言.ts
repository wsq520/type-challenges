class Person {
  public name: string
  public age: number
  public height: number

  constructor() {

  }

  public eat() {

  }
}

class Stu {
  public name: string
  public age: number

  constructor() {

  }

  // 当实现run方法时 该类不再属于Person类公有属性和方法的子集 所有报错
  // public run() {

  // }

  // 静态方法不影响！
  static run() {

  }
}

// 类之间不存在继承关系时能够相互断言的条件：
// 两个类之间任意一个类的所有的公有的属性和公有方法(不包含类的静态方法)是另外一个类所有的公有的属性和公有方法
// 的子集或两者完全相同 此时两个类之间可以相互断言

let s = new Stu()
let p = new Person()
let res = s as Person
let res2 = p as Stu

export {}