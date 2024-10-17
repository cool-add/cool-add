import request from '@/utils/request'

// 查询未通过的人员名单
export const getNotAPI = () => {
  return request({
    url: '/applicant/refuse',
    method: 'GET'
  })
}

//导出申请人信息为Excel文件
export const getExcelAPI = () => {
  return request({
    url: '/applicant/export',
    method: 'GET',
    responseType: 'blob' // 关键，告诉 后端 这是一个二进制流
  })
}

// 通过ID查询申请人信息
export const getSearchAPI = (userId) => {
  return request({
    url: '/applicant/getById',
    method: 'GET',
    data: {
      userId
    }
  })
}

// 导入申请人信息
export const getApplicantAPI = (applicant) => {
  request.post('/applicant/add', {
    applicants: applicant.value
  })
}

// 分页查询所有申请人信息
// export const artList = (params) => {
//   request.get('/applicant/findAll', {
//     params
//   })
// }

// 分页查询所有申请人信息
export const artList = (params) => {
  return request({
    url: '/applicant/findAllList',
    method: 'GET',
    data: {
      params
    }
  })
}

//申请人信息
export const applicantAPI = () => {
  return request({
    url: '/applicant/findAllList',
    method: 'GET'
  })
}
