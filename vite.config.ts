/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-24 16:30:41
 * @LastEditTime: 2023-08-28 17:06:51
 * @LastEditors: Do not edit
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
