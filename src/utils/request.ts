import axios from 'axios'
import { Toast } from 'vant';
// 服务根地址
export const baseURL = 'http://127.0.0.1:8888'
/**
 * 创建axios实例
 *   封装baseURL
 */
const axiosInstance = axios.create({
    baseURL, // 服务根地址
    timeout: 3000, // 超时时间
})


/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('TOKEN')
        if(token){
            config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        const { response } = error
        if (response) {
            const status = response.status
            switch (status) {
                case 404:
                    Toast('资源不存在 404')
                    break
                case 401:
                    Toast('Unauthorized 身份验证凭证缺失!')
                    break
                case 403:
                    Toast('403 Forbidden - 拒绝访问!')
                    break
                case 500:
                    Toast('服务器出错')
                    break
                default:
                    Toast('出现异想不到的错误！')
                    break
            }
        }else {
            // 说明服务器连结果都没有返回，可能的原因有两种：
            /**
             * 1. 服务器崩掉了
             * 2. 前端客户端断网状态
             */
            if (!window.navigator.onLine) {
                // 判断为断网，可以跳转到断网页面
                Toast('网络不可用,请检查您的网络连接!')
                return
            } else {
                Toast('连接服务端出错!' + error?.message)
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance

