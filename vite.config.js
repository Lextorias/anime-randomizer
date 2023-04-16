import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

module: {
  loaders: [
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
  ]
}