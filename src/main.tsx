/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-24 16:30:41
 * @LastEditTime: 2023-09-21 10:03:29
 * @LastEditors: Do not edit
 */

import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/css/index.scss'
import 'animate.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> 开发环境下严格模式所有请求会调用两次，生产环境下无影响
  <App />
  // </React.StrictMode>
)
