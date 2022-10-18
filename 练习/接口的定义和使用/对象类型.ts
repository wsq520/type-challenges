interface InfoType {
  name: string,
  age: number,
  readonly sno: number
}

const stu: InfoType = {
  name: '李银河',
  age: 19,
  sno: 1
} 

// stu.sno = 2