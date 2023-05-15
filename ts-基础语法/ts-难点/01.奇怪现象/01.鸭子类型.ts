class Person {
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eat() {}
}

class Dog {
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  run() {}

  eat() {}
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}

// 明明函数printPerson要求传入一个Person类对象 但是传入一个Dog类型也不会报错
// 原因： Ts对于类型检测的时候使用的是鸭子类型
// 鸭子类型：只关心属性和行为 不关系具体是不是对应的类型
// 如以上案例：只要Dog类包含了Person类里所有的属性和方法 那么就不会报错
printPerson(new Person("ppp", 18))
printPerson(new Dog("ggg", 5))

export { }