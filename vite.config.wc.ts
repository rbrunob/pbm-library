import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'), // ✅ obrigatório
        'process.env': {}, // ✅ garante fallback mínimo
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/web-components.ts'),
            name: 'PBMComponent',
            fileName: () => 'pbm-wc.js',
            formats: ['iife'],
        },
        outDir: 'dist-wc',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
