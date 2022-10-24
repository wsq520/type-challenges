const message1 = "abcd"
const message2 = ""

// !! 就类似于使用Boolean()转换变量为布尔类型
let flag1 = !!message1
console.log(flag1)
console.log(!!message2)

// ？？类似于三元运算符 当？？左边值为null或者undefined时 返回右边的值
let message3: string | null | undefined = "你好"
// message3 = null
// message3 = undefined
const res = message3 ?? "哈哈哈"
console.log(res)

export {}

