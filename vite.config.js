import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,   // ?? 這行是關鍵
    open: true    // 可選：啟動時自動打開瀏覽器
  }
})
