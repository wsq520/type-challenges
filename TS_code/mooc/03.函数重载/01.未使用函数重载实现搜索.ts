type MessageType = "warning" | "danger" | string

type Message = {
  id: number,
  type: MessageType,
  content: string
}

const messages: Message[] = [
  { id: 1, type: "warning", content: "这是一条警告信息" },
  { id: 2, type: "danger", content: "这是一条危险信息" },
  { id: 3, type: "normal", content: "这是一条普通信息" },
  { id: 4, type: "danger", content: "这是一条危险信息" },
  { id: 5, type: "warning", content: "这是一条警告信息" }
]

// 返回类型可能是undefined是因为有可能找不到信息
function getMsg(value: number | MessageType): Message[] | Message | undefined {
  if (typeof value === 'number') {
    return messages.find(item => item.id === value)
  } else {
    return messages.filter(item => item.type === value)
  }
}

console.log(getMsg(2))
console.log(getMsg("warning"))

// 此时msg类型是函数getMsg的在定义时返回值类型 即是一个联合类型( Message[] | Message | undefined )
// ts在运行之前并不会根据函数内部具体逻辑自动确定最终返回值的类型是什么 
// 也就是说在未运行时msg无法被推导出是一个Message类型（如下面的案例）
let msg = getMsg(1)

// 可以强制转换类型
let msg2 = (<Message>getMsg(1)).content
console.log(msg2)

export { }

