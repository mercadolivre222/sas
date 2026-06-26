import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8080,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // We can increase chunk size warning limit since this is a pre-compiled large bundle
    chunkSizeWarningLimit: 3000
  }
});
