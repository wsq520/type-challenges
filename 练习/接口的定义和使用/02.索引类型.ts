interface IndexType {
  // key为number类型 value是string类型
  [index: number]: string
}

const books: IndexType = {
  1: 'js编程',
  2: 'java编程'
}

interface bookType {
  [num: string]: string
}

const books2 = {
  '1': 'js编程',
  '2': 'ts编程'
}