interface IState {
  name: string
  age: number
}

interface IStore {
  state: IState
  run: () => void
}

// ThisType： 用来绑定一个上下文this
const store: IStore & ThisType<IState> = {
  state: {
    name: 'hhh',
    age: 19
  },
  run() {
    console.log(this.name + '跑路了')
  }
}

// 给函数foo绑定this
function foo(this: { name: string }, arg: number) {

}

// 拿到函数foo的类型
type FooType = typeof foo

// 拿到函数foo的this的类型
type FooThisType = ThisParameterType<FooType>

// 删除this参数类型 保留剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// 拿到了foo函数原本this,剩余参数的类型
type MyType = ThisType<FooType>


export { }