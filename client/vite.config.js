import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { DB_PORT = 3000 } = process.env;

export default defineConfig({
    plugins: [react()],
    server: {
        port: 10000,
        proxy: {
            '/api': {
                target: `http://localhost:${DB_PORT}`,
                changeOrigin: true,
            },
            '/auth': {
                target: `http://localhost:${DB_PORT}`,
                changeOrigin: true,
            },
        },
    },

    build: {
        manifest: true,
        rollupOptions: {
            input: "./src/main.jsx",
        },
    },
});
