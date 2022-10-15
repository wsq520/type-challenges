type First<T extends any[]> = T extends [] ? never : T[0]

// 如果T是一个空的数组 那么永远不会存在索引0的值 那么就是个never类型