class Person<T, K> {
  name: T
  age: K

  constructor(name: T, age: K) {
    this.age = age
    this.name = name
  }
}

const p1 = new Person<string, number>('pppp', 19)