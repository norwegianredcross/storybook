import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/storybook/' : '/',
  plugins: [react()],
  server: {
    fs: {
      allow: [
        path.resolve('/Users/riccardomarini/Dropbox/Lavori/RedCross/DesignSystem'),
        path.join(__dirname, 'node_modules')
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'design-tokens': path.resolve('/Users/riccardomarini/Dropbox/Lavori/RedCross/DesignSystem/design-tokens-build')
    }
  }
})
