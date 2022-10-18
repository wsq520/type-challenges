interface FnType {
  (num1: number, num2: number): number
}

const sum: FnType = (num1: number, num2: number) => {
  return num1 + num2
}

function calc(num1: number, num2: number, sumFn: FnType) {
  return sumFn(num1, num2)
}

console.log(calc(1, 2, sum))
