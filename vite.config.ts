import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // .tsx を .jsx より先に解決する
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  server: {
    port: 5173,
    open: true,
  },
});
