import { BASE_URL, TIME_OUT } from "./config"
import MyRequest from "./request"

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout:TIME_OUT
})

export const myRequest2 = new MyRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000,
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      return res
    },
    responseFailureFn(err) {
      return err
    }
  }
})

export default myRequest