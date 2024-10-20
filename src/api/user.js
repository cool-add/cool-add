import request from '@/utils/request'
// 登录接口-验证码
export const userCOdeService = ({ uesrname, Code }) =>
  request.post('/api/reg', { uesrname, Code })
// 登录接口-密码
export const userLoginService = ({ username, password }) =>
  request.post('/admin/login', { username, password })
// 获取用户信息
export const userGetInfoService = () => request.get('/my/userinfo')
