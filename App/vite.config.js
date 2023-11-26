import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ReactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Especifique a porta desejada aqui
  },
  plugins: [react(),ReactRefresh()],
});
