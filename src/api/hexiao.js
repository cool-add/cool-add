import request from '@/utils/request'

// 获取申请人核销信息
export const getHexiaoAPI = () => {
  return request({
    url: '/writeoff/findAllWO',
    method: 'GET'
  })
}

// // 获取用户的核销历史
// export const getHistoryAPI = () => {
//   return request({
//     url: `/writeoff/history/{userId}/{verificationType}`,
//     method: 'GET'
//   })
// }
