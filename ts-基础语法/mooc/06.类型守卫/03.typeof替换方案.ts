let arr = [1, 2, 3]
let n = null
let set = new Set([1, 2, 3])

// 使用以下方法可以获取具体类型
// 但是该方法依然有个缺点就是无法判断自定义类型
class Person {

}

console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(new Array()))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(set))
console.log(Object.prototype.toString.call(new Map()))
console.log(Object.prototype.toString.call(new Person()))


export { }

