import Vue from 'vue'
import axiosRequest from 'axios'


axiosRequest.create({
  timeout: 5000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'license': '4B4AFF736EF6913C7E1D49E4ACF61F44'
  }
})
Vue.prototype.$ajax = axiosRequest

// POST传参序列化(添加请求拦截器)
axiosRequest.interceptors.request.use(config => {
  config.method = 'post'
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  config.headers['license'] = '4B4AFF736EF6913C7E1D49E4ACF61F44'

  // 若是有做鉴权token , 就给头部带上token window.localStorage.getItem
  // if (localStorage.token) {
  //   config.headers.Authorization = localStorage.token;
  // }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
}
)

// 返回状态判断(添加响应拦截器)
axiosRequest.interceptors.response.use(
  res => {
    if (res.status === 200 && res.data.status === 200) {
      return res.data
    } else {
      var msg = ''
      if (res.data != null && res.data.msg != null) {
        msg = res.data.msg
      }
      let codeString = { // 所有错误
        '201': msg,
        '400': '参数错误，请联系管理员',
        '500': '服务器错误，请联系管理员'
      }
      let errorMsg = (res && codeString[String(res.data.status)])
      // Notify({
      //   message: errorMsg,
      //   duration: 1000
      //   // background: '#1989fa'
      // })
      console.log('message',errorMsg);
      return res.data
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
*/
export function get (url, data) {
  // alert(url);
  console.log(url,"url")
  return new Promise((resolve, reject) => {
    console.log('get调用接口地址====>', url)
    axiosRequest.get(url).then(response => {
      resolve(response)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data) {
  console.log('post调用接口地址====>', url)
  console.log('data', data)
  return new Promise((resolve, reject) => {
    axiosRequest.post(url, data).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
