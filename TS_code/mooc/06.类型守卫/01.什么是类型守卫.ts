function foo(arg: any) {
  if(typeof arg === 'string') {
    // 通过typeof判断传入的参数类型 那么在对应的块级作用域下参数类型是确定的
    // 而参数类型从不确定到确定就是类型守卫 又叫类型缩小
    console.log(arg.toLocaleUpperCase)
  } else if(typeof arg === 'number') {
    console.log(arg + 99)
  } else {
    console.log(arg)
  }
}

foo("ggg")
foo(1)

export {}