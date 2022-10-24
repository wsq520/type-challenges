interface FnType {
  (num1: number, num2: number): number
}

const sum: FnType = (num1: number, num2: number) => {
  return num1 + num2
}

function calc(num1: number, num2: number, sumFn: FnType) {
  return sumFn(num1, num2)
}

// console.log(calc(1, 2, sum))

interface eatType {
  eat: (name: string) => string
}

interface runType {
  run: (name: string) => string
}

interface personType extends eatType, runType {

}

const p: personType = {
  eat: (name: string) => {
    return name + '上班吃东西'
  },
  run: (name: string) => {
    return name + '跑路了'
  }
}

console.log(p.eat('你'))//你上班吃东西
console.log(p.run('我'))//我跑路了

interface theType {
  age: number
}

interface theType {
  name: string
}

const obj: theType = {
  name: 'obj',
  age: 18
}

export { }