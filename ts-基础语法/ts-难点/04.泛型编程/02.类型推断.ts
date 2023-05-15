type CalFnType = (num1: number, num2: number) => number

function foo() {
  return "aaa"
}

// 使用内置工具获取函数返回值类型
type CalReturnType = ReturnType<CalFnType>
type FooReturnType = ReturnType<typeof foo>

// 封装一个ReturnType
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

// 拿到参数类型
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never

type P1Type = MyParameterType<CalFnType>
type P2Type = MyParameterType<typeof foo>

export { }