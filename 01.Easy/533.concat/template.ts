type Concat<T extends any [], K extends any []> = [...T, ...K]

// 判断完传入的两个类型是否为数组 然后利用数组解构语法返回一个新的数组