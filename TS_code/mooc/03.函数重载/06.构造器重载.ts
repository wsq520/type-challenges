type charType = {
  width?: number | undefined,
  height?: number,
}

class Chart {
  width: number
  height: number

  constructor(width: number, height: number)
  constructor(payload: charType)

  constructor(payload: any, height: number = 1) {
    if (typeof payload === 'object') {
      this.width = payload.width
      this.height = payload.height
    } else {
      this.width = payload
      this.height = height
    }
  }

  getArea(): number {
    return this.width * this.height
  }
}

let c1 = new Chart(100, 80)
console.log(c1)
console.log('c1面积:', c1.getArea())


let c2 = new Chart({ width: 90, height: 50 })
console.log(c2)
console.log('c2面积:', c2.getArea())

export { }