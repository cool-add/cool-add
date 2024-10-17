// import request from '@/utils/request'

// // 刷脸核销
// export const getFaceAPI = ({ userId }) => {
//   return request({
//     url: `/writeoff/face-scan/${userId}`,
//     method: 'POST',
//     data: {
//       userId
//     }
//   })
// }

// // 二维码核销
// export const getEwmAPI = ({ userId }) => {
//   return request({
//     url: `/writeoff/qr-code/${userId}`,
//     method: 'POST',
//     data: {
//       userId
//     }
//   })
// }

// // 获取用户的核销历史
// export const getHistoryAPI = () => {
//   return request({
//     url: `/writeoff/history/{userId}/{verificationType}`,
//     method: 'GET'
//   })
// }
