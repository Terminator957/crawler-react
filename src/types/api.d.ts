/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-30 10:53:59
 * @LastEditTime: 2023-08-30 11:07:17
 * @LastEditors: Do not edit
 */
export interface ApiResponse<T = any> {
    data: T
    msg?: string
    success?: boolean
}


export type RequestType = {
    data: any
    msg?: string
    success?: boolean
}