// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   envDir: "./",
//   test: {
//     include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
//     environment: "jsdom",
//     globals: true,
//     setupFiles: ["src/__tests__/setup.ts"],
//   },
// });
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    envDir: "./",
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["src/__tests__/setup.ts"],
    },
});
