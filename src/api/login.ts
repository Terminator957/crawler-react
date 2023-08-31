/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-29 11:21:51
 * @LastEditTime: 2023-08-30 09:50:23
 * @LastEditors: Do not edit
 */
import { baseUrl } from "@/request/baseUrl";
import { get, post } from "@/request/index";

const url = {
    isLogin: baseUrl + '/isLogin',
    login: baseUrl + '/login',
    logout: baseUrl + '/logout'
}

export const isLogin = () => get(url.isLogin)

export const login = (data: Object) => post(url.login, data)

export const logout = () => get(url.logout)