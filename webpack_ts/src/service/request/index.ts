import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestConfig } from './type'

class MyRequest {
  instacne: AxiosInstance

  constructor(config: MYRequestConfig) {
    this.instacne = axios.create(config)

    // 添加请求拦截器(全局的)
    this.instacne.interceptors.request.use(config => {
      // 全局请求成功的拦截
      return config
    }, err => {
      // 全局请求失败的拦截
      return err
    })

    // 添加响应拦截器(全局的)
    this.instacne.interceptors.response.use(res => {
      return res
    }, err => {
      return err
    })

    // 针对特定的实例添加拦截器
    if (config.interceptors) {
      this.instacne.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn
      )
      this.instacne.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }
  }

  request<T = any>(config: MYRequestConfig<T>) {
    // 针对单次请求的成功拦截处理
    if (config?.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // 针对单次请求的响应拦截处理
    return new Promise<T>((reslove, reject) => {
      this.instacne.request<any, T>(config).then(res => {
        if (config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        reslove(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: "GET" })
  }

  post<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: "POST" })
  }
}

export default MyRequest