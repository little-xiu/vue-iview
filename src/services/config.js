// 是否开发环境
const dev = process.env.NODE_ENV === 'development';
// 错误常量
const paramError = {
  msg: '参数错误'
}
const serviceError = {
  msg: '服务器错误'
}
const netError = {
  msg: '网络错误'
}
const unknowError = {
  msg: '未知错误'
}
// 服务器地址及接口地址
let hostServer = '';
if (dev) {
  // hostServer = 'http://IQSZ-D6698:8086/zztj-recruit-campus-web' // 开发联通环境
  // hostServer = 'https://ats-stg1.pingan.com:10650/zztj-recruit-campus-web' // 校招stg1环境
  // hostServer = 'http:10.118.117.33:8086/zztj-recruit-campus-web'  // 后台开发人员ip
} else {
  let host = window.location.host;
  // hostServer = '/zztj-recruit-campus-web'
}
export {
  hostServer,
  paramError,
  serviceError,
  netError,
  unknowError,
}