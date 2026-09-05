import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cartRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './CartBadge': './src/CartBadge.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: { port: 5002 },
  preview: { port: 5002 },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});