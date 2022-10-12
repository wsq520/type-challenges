type Person = {
  name: string
  friend?: {
    name: string
    age?: number,
    girlFriend?: {
      name: string
    }
  }
}

const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
    girlFriend: {
      name: "lily"
    }
  }
}

// 另外一个文件中(在不看源代码情况下保证操作正常)
console.log(info.name)
// console.log(info.friend!.name)

//info.friend?. 表示info里面的friend如果有值才会继续把name取出，否则直接返回undefined
console.log(info.friend?.name) 

console.log(info.friend?.age)
console.log(info.friend?.girlFriend?.name)

//不能通过可选链方式直接赋值
// info.friend?.age = 10 //这是不允许的
//应该通过判断是否有值再去重新赋值
if(info.friend?.age) {
    info.friend.age = 10 
}

export {}