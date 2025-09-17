import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // allows access via LAN IP (0.0.0.0)
    port: 5173,       // default Vite port, you can change if needed
    strictPort: false, // if port is taken, Vite will try next one
    open: true,       // auto-open browser when dev server starts
  }
});

