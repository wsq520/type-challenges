class ArrayList {
  // 存储某类元素的数组
  elements: object[]
  constructor(elements: object[]) {
    this.elements = elements
  }

  get(index: number) {
    return this.elements[index]
  }

  show() {
    this.elements.forEach(item => {
      console.log(item)
    })
  }

  remove(value: number): number
  remove(value: object): object
  remove(value: number | object): number | object {
    if (typeof value === 'number') {
      this.elements = this.elements.filter((item, index) => index !== value)
      return value
    } else {
      this.elements = this.elements.filter(item => item !== value)
      return value
    }
  }
}

let list = new ArrayList([{ name: 'hhh', age: 19 }, { name: 'ppp', age: 18 }, { name: 'kkk', age: 20 }])
list.show()
console.log(list.get(1))
console.log('被删除的元素：',list.remove(0))
list.show()
