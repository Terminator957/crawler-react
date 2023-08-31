/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-29 09:36:02
 * @LastEditTime: 2023-08-29 09:44:42
 * @LastEditors: Do not edit
 */
const env = import.meta.env.DEV

export const baseUrl = env ? '/api' : ''