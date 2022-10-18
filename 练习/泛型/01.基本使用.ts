function foo<T>(arg1: T) {
  return arg1
}

function baz<T, K>(arg1: T, arg2: K) {
  console.log(arg1, arg2)
}

foo<number>(60)
// 可以自动进行类型推导
foo(60)
