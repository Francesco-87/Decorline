import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',    
  publicDir: '../public',       // serve/build from src/
  build: {
    outDir: '../docs',   // emit into docs/
    emptyOutDir: true,   // clear docs/ first
    assetsDir: 'resources' // put JS/CSS/IMG under docs/resources/
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
