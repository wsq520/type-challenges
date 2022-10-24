class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  walk() {
    console.log("走路")
  }

  eat() {
    console.log('吃饭')
  }

  study() {

  }
}

class Student extends Person {
  sno: number

  constructor(sno: number, name: string, age: number) {
    super(name, age)
    this.sno = sno
  }

  study() {
    console.log(this.name + "在偷偷学习")
  }
}

let stu = new Student(1, "三好学生", 19)
stu.walk()
stu.study()

let p = new Person("人类", 100)
p.walk()//p只能访问Person里面定义的属性和方法

// 类型断言as: 大部分情况下都是把父类对象变量断言成子类
let res = p as Student
let res1 = <Student>p
// p原本属于类Person的实例对象 如果在Person里面并没有实现study方法 运行时会报错
res.study()

export { }