/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-30 15:39:56
 * @LastEditTime: 2023-08-30 15:43:20
 * @LastEditors: Do not edit
 */
import { baseUrl } from "@/request/baseUrl";
import { get } from "@/request/index";

const url = {
    getData: baseUrl + '/getData',
    showData: baseUrl + '/showData'
}

export const getData = () => get(url.getData)

export const showData = () => get(url.showData)