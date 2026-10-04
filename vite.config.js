import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import customMedia from 'postcss-custom-media';

// Breakpoints vivem em src/styles/breakpoints.css (@custom-media).
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [customMedia()] } },
});
