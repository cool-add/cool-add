import request from '@/utils/request'

// 车辆预约
export const getCarAPI = () => {
  return request({
    url: '/applicant/findAllCarList',
    method: 'GET'
  })
}
