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
  { id: 5, type: "warning", content: "这是一条警告信息" }
]

// 定义函数重载
function getMsg(value: number): Message
function getMsg(value: MessageType): Message[]

// 实现函数
function getMsg(value: number | MessageType): Message[] | Message | undefined {
  if (typeof value === 'number') {
    return messages.find(item => item.id === value)
  } else {
    return messages.filter(item => item.type === value)
  }
}

// msg是Message类型
let msg = getMsg(1)
console.log(msg.content)

// msg2是Message[] 类型
let msg2 = getMsg("danger")
msg2.map(msg => {
  console.log(msg)
})

/*
  函数重载的作用:
  1.使得函数结构更加分明,代码可读性更强
  2.各司其职,自动提示方法和属性,不再需要通过强制转换类型才能看到提示
  3.便于功能拓展
*/

export { }

