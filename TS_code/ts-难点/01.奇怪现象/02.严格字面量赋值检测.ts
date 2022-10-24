interface Person {
  name: string
  age: number
}

const obj = {
  name: "obj",
  age: 19,
  height: 1.88
}

// 这样子即使obj多了个属性 赋值给Person类的变量也不会报错
const info: Person = obj
// 但是 这里不能多出属性 否则就会报错
const info2: Person = {
  name: 'hhh',
  age: 19,
  // height: 1.99
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}

const info3 = { name: "jjj", age: 19, height: 1.99 }
printPerson(info3)
// printPerson({ name: 'ppp', age: 19, height: 1.99 }) //报错 不能多出属性

// 解释现象：
// 第一次常见的对象字面量 被认为是“fresh”(新鲜的)
// 对于新鲜的字面量 会进行严格的类型检测 必须完全满足类型的要求

// 对象a就是新鲜的
const a: Person = {
  name: 'aa',
  age: 19
}

const p = {
  name: 'ppp',
  age: 10,
  height: 199
}
// 在赋值的时候 p已经不是一个新鲜的变量了 所以不会进行严格的类型检测 所以多出来的属性也不会报错 但是Person类型
// 里面具有的属性还是得具备的
const b:Person = p
export { }