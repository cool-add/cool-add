import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = ''

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token

    const useStore = useUserStore()
    if (useStore.token) {
      config.headers = useStore.tonken
    }

    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    // 如果返回的code等于0说明成功了
    if (res.data.data === 0) {
      return res
    }

    // 处理业务失败,给错误提示,抛出错误
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 错误的特殊情况 =>401 权限不足 或 token 过期 => 拦截到 登录
    if (err.response.state === 401) {
      router.push('/login')
    }

    // 错误的默认情况
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
