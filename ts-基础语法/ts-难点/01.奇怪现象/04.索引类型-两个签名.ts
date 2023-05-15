interface IndexType {
  // 1.索引类型只能为number或者string其中一种 不能是其他类型或者是 number | string 类型
  // 2.number类型索引对应的返回类型必须是string类型索引对应的返回类型的子类型(子集)

  // 第一种
  [index: number]: string
  [k: string]: any
  
}

const names:IndexType = ["aa", "kkk"]

export {}