let id  = Symbol("id")

let obj = {
  [id]: 1,
  name: 'obj'
}

// let objId = obj[id]
let objId = obj[id as any]
let objname = obj["name"]
console.log(obj[id], objname)

// Symbol类型作为key的时候 可以使用类型断言将该类型的属性断言成any或者unknown
