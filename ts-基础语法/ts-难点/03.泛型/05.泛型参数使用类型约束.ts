interface MyType {
  name: string
  age: number
}

type KeysType = keyof MyType // => type KeysType = "name" | "age"

function getObjProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const obj = {
  name: 'kkk',
  age: 19,
  tel: 123456
}

getObjProperty(obj, "name")
// getObjProperty(obj, "kk") //报错

export { }