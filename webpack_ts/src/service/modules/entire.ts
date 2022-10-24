import { myRequest2 } from '..'

myRequest2.request({
  url: '/entire/list',
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

interface IHomeData {
  data: any,
  returnCode: string,
  success: boolean
}

myRequest2.request<IHomeData>({
  url: '/home/highscore',
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
    responseSuccessFn(res) {
      return res
    }
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
