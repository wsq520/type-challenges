type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in keyof T]: T[Key]
} & {
  [Key in Exclude<keyof T, K>]: T[Key]
}