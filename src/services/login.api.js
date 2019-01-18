import ajax from './index'
export function evaLogin (data) {
  return ajax({
    url: '/tax/user/getUserInfo.do',
    data
  })
}

// 组件中使用
// import {evaLogin} from './login.api'
// login () {
//   evaLogin({
//     msgCode: '123'
//   }).then(res => {
//     this.$router.push('/home')
//   }).catch(err => {
//     if (err.responseMsg) {
//       this.loginError = err.responseMsg;
//     }
//   })
// }