interface swim {
  name: string
  swim: () => void
}

class Person implements swim {
  name: string

  swim() {

  }
}


// 如果A类实现了B接口 那么A的对象变量和B的对象变量可以相互断言
let p = new Person()
let s: swim = { name: 'hhh', swim: () => { } }

let res = p as swim
let res2 = s as Person

export { }