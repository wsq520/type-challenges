interface IndexType {
  // key为number类型  value是string类型
  [index: number]: string
}

const demo1: IndexType = {
  1: '你快乐吗',
  2: '你难过吗'
}

interface bookType {
  [num: string]: string
}

const demo2 = {
  '1': 'js编程',
  '2': 'ts编程'
}