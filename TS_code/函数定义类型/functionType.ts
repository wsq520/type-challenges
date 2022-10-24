type FooType = () => void

function foo() { }
function bar(fn: FooType) {
  fn()
}

bar(foo)

type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (n1: number, n2: number) => n1 + n2

export {}