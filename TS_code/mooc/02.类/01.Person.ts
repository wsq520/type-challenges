class Person {
  // 成员属性必须在类中声明 不能直接在构造器添加(js就允许)
  public name: string
  public age: number
  hobbies:string[] = ["打球", "看球赛"]

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public eat(): string {
    return "吃饱了"
  }
}

const p = new Person("哈哈先生", 19)

export { }