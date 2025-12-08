import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rfid: resolve(__dirname, 'rfid-products.html'),
        pcb: resolve(__dirname, 'pcb-design.html'),
        simulations: resolve(__dirname, 'si-pi-em-simulations.html'),
        silicon: resolve(__dirname, 'silicon-services.html'),
        brady: resolve(__dirname, 'brady-products.html'),
        av: resolve(__dirname, 'professional-av.html'),
        trainings: resolve(__dirname, 'trainings.html'),
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
