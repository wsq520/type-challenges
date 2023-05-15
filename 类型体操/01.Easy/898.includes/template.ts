import { Equal } from '@type-challenges/utils'

type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
  ? true
  : Includes<R, U>
  : false
