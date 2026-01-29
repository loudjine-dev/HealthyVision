import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',   // مهم جدًا لمسارات GitHub Pages
  plugins: [react()]  // لا تضع فاصلة إضافية هنا بعد القوس الأخير
});