import { fileURLToPath, URL } from 'node:url'
import commonjs from 'vite-plugin-commonjs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs(),

  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/app.scss";`
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
