import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     open: true
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: false,
//     minify: 'esbuild',
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'],
//           router: ['react-router-dom']
//         }
//       }
//     }
//   }
// })