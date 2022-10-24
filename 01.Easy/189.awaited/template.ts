// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? (R extends Promise<unknown> 
//   ? MyAwaited<R> : R) : T;

// 
type MyAwaited<T extends Promise<any>> = T extends Promise<infer K> ?
  (K extends Promise<any> ? MyAwaited<K> : K) : never;