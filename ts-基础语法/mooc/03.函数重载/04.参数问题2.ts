type MessageType = "warning" | "danger" | "normal"

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
  { id: 5, type: "warning", content: "这是一条警告信息" },
  { id: 6, type: "warning", content: "这是一条警告信息" },
  { id: 7, type: "danger", content: "这是一条危险信息" },
  { id: 8, type: "normal", content: "这是一条普通信息" },
  { id: 9, type: "danger", content: "这是一条危险信息" },
  { id: 10, type: "warning", content: "这是一条警告信息" }
]

// 定义函数重载
function getMsg(value: number, arg: string): Message
function getMsg(value: MessageType): Message[]
function getMsg(value: MessageType, recordCount: number): Message[]
// 实现函数
function getMsg(value: number | MessageType, recordCount: number = 2) {
  if (typeof value === 'number') {
    return messages.find(item => item.id === value)
  } else {
    // 只返回前面recordCount条数据
    return messages.filter(item => item.type === value).splice(0, recordCount)
  }
}



export { }

