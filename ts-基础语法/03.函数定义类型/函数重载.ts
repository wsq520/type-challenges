// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
// 1.声明重载函数
function foo(num1: number, num2: number): number; 
function foo(num1: string, num2: string): string;

// 2.函数的实现(编写函数体)
function foo(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return 'string类型拼接:' + num1 + num2
  }
  return num1 + num2
}

const result = foo(20, 30)
const result2 = foo("abc", "cba")
console.log(result)//50
console.log(result2)//string类型拼接:abccba

// 在函数的重载中, 实现函数是不能直接被调用的
// foo({name: "why"}, {age: 18})//报错

export { }