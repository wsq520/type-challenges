type MyReadonly<T> = {
  readonly [P in keyof T]:T[P]
}

// key od f T： 拿到类型 T 的所有key
// T[k]实际上就是拿到在类型T中 k对应的类型
