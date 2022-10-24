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
function getMsg(value: number): Message
// function getMsg(value: MessageType): Message[]
function getMsg(value: MessageType, recordCount: number): Message[]
// 实现函数
function getMsg(value: number | MessageType, recordCount: number = 2): Message[] | Message | undefined {
  if (typeof value === 'number') {
    return messages.find(item => item.id === value)
  } else {
    return messages.filter(item => item.type === value).splice(0, recordCount)
  }
}

// 提出一个需求：只需要查找某类信息前面count条即可
// 1. 可以给添加一个默认参数count 但是该默认参数应该加在实现函数上
console.log(getMsg(1))//查找Id为1的信息
console.log(getMsg("warning", 2))//返回类型为warning的信息前面两条即可


export { }

