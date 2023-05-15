function foo<T>(arg1: T) {
  return arg1
}

function baz<T, K>(arg1: T, arg2: K) {
  console.log(arg1, arg2)
}

foo<number>(60)
// 可以自动进行类型推导
foo(60)

// 封装一个useState(返回值为元组类型)
function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState
  function setState(newState: T) {
    state = newState
  }
  return [state, setState]
}

const [count, setCount] = useState<number>(0)
const [msg, serMsg] = useState<string>("hhh")


export { }
