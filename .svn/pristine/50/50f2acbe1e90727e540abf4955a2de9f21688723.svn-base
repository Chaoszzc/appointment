import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from '../src/util/http/index'
import store from './store/index.js'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = '/api'  //关键代码
// const store = new Vuex.Store();
Vue.prototype.$http = http
Vue.prototype.$store = store

Vue.prototype.$store = store
Vue.config.productionTip = false

import '../src/assets/font/iconfont.css'
//vant引入
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';//本地
import {
  Icon , Button
} from 'vant';

Vue.use(Icon).use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
