import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

// 对AxiosRequestConfig进行拓展 使得可以给每个axios实例自定义配置属于自己的拦截器
export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYInterceptors<T>
}