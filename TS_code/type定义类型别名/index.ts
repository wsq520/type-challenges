type Mytype = string | number

// a 只能是字符串或者是数字类型
let a: Mytype = "111"
a = 123

function foo(value: Mytype) {
  console.log(value)
}
foo("kkk")
foo(123)

class Person {

}

class Student extends Person {
  studying() {
    console.log("学习是一件快乐的事情")
  }
}

function foo1(p: Person) {
  // p.studying() 报错 因为Person类没有studying方法
  (p as Student).studying()
}

const stu = new Student()
foo1(stu)

export {}