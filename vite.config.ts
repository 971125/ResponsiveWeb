import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    hmr:{
      overlay:false
    }
  },
  resolve:{
    alias:{
      
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "./src/App.scss";'
      }
    }
  }
})
