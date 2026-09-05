import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'productsRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: { port: 5001 },
  preview: { port: 5001 },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});