class Person { }
class Dog { }

type T1 = InstanceType<typeof Person>

// 封装
type MyInstanceType<T extends new (...args: any) => any> = 
T extends new (...args: any) => infer R ? R : never

function factory<T extends new (...args: any[]) => any>(ctor: T): MyInstanceType<T> {
  return new ctor()
}

const p = factory(Person)
const d = factory(Dog)

export { }