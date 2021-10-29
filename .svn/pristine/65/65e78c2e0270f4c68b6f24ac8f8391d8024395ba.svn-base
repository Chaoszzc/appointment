import axios from "axios";
import { METHOD } from "./config";
import config from '../../config/GlobalConfig.js'
//在vuex里面保存的服务器IP地址 store.state.serverPath
const instance = axios.create({
  baseURL: config.config.serverPath,
  timeout: 10000,
  headers:{'Content-Type':'application/json'}
});

// let loading = null;
// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
   
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
 
    return response;
  },
  function(error) {
    
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export function request(method, url, parmas) {
  switch (method) {
  case METHOD.GET:
    return GET(url, parmas);
  case METHOD.POST:
    return POST(url, parmas);
  case METHOD.PUT:
    return PUT(url, parmas)
  case METHOD.DELETE:
    return DELETE(url, parmas)
  }
}

function GET(url, params) {
  return instance.get(url, params);
}

function POST(url, params) {
  return instance.post(url, params);
}
function PUT(url, params) {
  return instance.put(url, params);
}
function DELETE(url, params) {
  return instance.delete(url, params);
}
