/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 09:18:26
 * @LastEditTime: 2023-08-30 11:00:00
 * @LastEditors: Do not edit
 */
import Http from './http';
import qs from 'qs';

const Request = new Http({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
})

export function get(url: string, data?: any) {
    return Request.get(url, data)
}

export function post(url: string, data?: Object) {
    return Request.post(url, qs.stringify(data))
}

export default Request