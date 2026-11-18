import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base ensures asset URLs resolve properly on both root domains and subpath GitHub Pages (e.g. /Portfolio/)
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
