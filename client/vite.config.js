import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://teamwork-6aj1yi2df-md-shaheds-projects-6a84f6b9.vercel.app',
        changeOrigin: true,
        secure: true
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
