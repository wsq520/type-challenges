function sum(value: string | number) {
  // const res = value + 9 //报错
  const res = value as number + 9
}