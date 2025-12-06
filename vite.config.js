import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
    minify: 'terser',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  css: {
    devSourcemap: true,
  },
});
