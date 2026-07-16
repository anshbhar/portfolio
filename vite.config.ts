import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: './',
>>>>>>> 7e2d0c5 (Update portfolio website files)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
