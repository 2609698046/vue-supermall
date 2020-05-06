import axios from 'axios'
export function request(config) {

  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  /*  请求拦截的作用
  * 1、比如config中的一些信息不符合服务器的要求
  * 2、比如每次发送网络请求时，都希望在页面上展示一个loadding的加载动画，等结束了，在取消动画
  * 3、某些网络请求（比如token），必须携带一些特殊的信息
  */
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  },error => {
    // console.log(error);
  });
  /*
   *响应拦截
   *
   *
   */
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data;
  },error => {
    // console.log(error);
  })

  return instance(config); //这个返回值本身就是一个promise
}
