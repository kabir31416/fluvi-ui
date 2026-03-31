import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
  lib: {
    entry: resolve(__dirname, 'src/index.ts'),
    name: 'FluviUI',
    formats: ['es'],
    fileName: (format) => `fluvi-ui.js`,
  },
  rollupOptions: {
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: {
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  },
},
});