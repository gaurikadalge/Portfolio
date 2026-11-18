import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base URL: if deployed at gaurikadalge.github.io, base is '/'
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
