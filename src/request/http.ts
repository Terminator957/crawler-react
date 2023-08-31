/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 09:18:26
 * @LastEditTime: 2023-08-30 11:01:14
 * @LastEditors: Do not edit
 */
import Axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class Http {
    public instance: AxiosInstance;
    private requestLists: Set<string | undefined> = new Set();
    constructor(config: AxiosRequestConfig) {
        // 创建实例
        this.instance = Axios.create(config);
        // 请求拦截
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 利用cancelToken 取消当次请求
                config.cancelToken = new Axios.CancelToken(e => {
                    // 在这里阻止重复请求，上个请求未完成时，相同的请求不会再次执行
                    this.requestLists.has(config.url) ? e(`${location.host}${config.url}---重复请求被中断`) : this.requestLists.add(config.url)
                })
                return config
            }
        );
        // 响应拦截
        this.instance.interceptors.response.use(
            (res) => {
                try {
                    this.requestLists.delete(res.config.url)
                    if (res.status === 200) {
                        return res.data
                    }
                } catch (error) {
                    console.warn(error, '请求失败');
                }
            }
        );
    }
    get(url: string, params?: any): Promise<AxiosResponse> {
        return this.instance({
            method: 'get',
            url: url,
            params: params
        })
    }
    post(url: string, data?: Object): Promise<AxiosResponse> {
        // post请求传递参数
        return this.instance({
            method: 'post',
            url: url,
            data: data
        })
    }
}

export default Http