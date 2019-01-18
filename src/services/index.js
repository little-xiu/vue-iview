import {
  hostServer,
  paramError,
  serviceError,
  netError,
  unknowError,
} from './config';
import axios from 'axios';
// 拦截器
axios.interceptors.request.use(config => {
  return {
    ...config,
    ...{
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json'
      },
      method: 'post'
    }
  }
}, () => {
  return Promise.reject(paramError);
})

axios.interceptors.response.use(response => {
  if (response && response.status >= 200 && response.status < 300) {
    return response;
  }
  return Promise.reject(serviceError);
}, error => {
  return Promise.reject(netError);
})

/**
 * 接口调用的基础方法
 * @param {string} url 请求地址
 * @param {object} data 参数，json格式
 * @param {function} callback 回调函数
 */

 export default function ajax ({
   url,
   data = {},
   callback
 }) {
   const newUrl = `${hostServer}${url}`;
   console.log(newUrl, 'newUrl2')
   return axios({
     url: newUrl,
     data
   }).then(res => {
     if (typeof callback === 'function') {
       callback && callback();
     }
     if (res.data.responseCode === '10001') {
       return Promise.resolve(res.data);
     } else {
       return Promise.reject(res.data)
     }
   }).catch(error => {
     if (typeof callback === 'function') {
       callback && callback();
     }
     return Promise.reject(error);
   })
 }