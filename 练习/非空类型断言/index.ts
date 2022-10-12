function foo(message?: string) {
  // 编译不通过 因为检测出message可能为undefined
  // console.log(message.toUpperCase())

  // ! 帮助通过检测
  console.log(message!.toUpperCase())
}

foo("gggg")
// foo() //运行时报错