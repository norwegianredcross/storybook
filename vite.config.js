import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.STORYBOOK_BASE_URL || '/DesignSystem/storybook/',
    server: {
        fs: {
            allow: ['..'] // Allow access to parent directories
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: 'storybook-static',
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js'
            }
        }
    }
});
