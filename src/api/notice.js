import request from '@/utils/request'

// 查询所有公告列表
export const getNoticeAPI = () => {
  return request({
    url: '/article/findAllArticle',
    method: 'GET'
  })
}

// 删除公告
export const DeleteNoticeAPI = (id) =>
  request.delete(`/article/delArticle/${id}`, {
    params: { id }
  })

// 撤销公告
export const RevokeAPI = (id) =>
  request.put('/article/revoke', {
    params: { id }
  })
