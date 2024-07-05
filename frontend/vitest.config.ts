import { defineConfig } from "vitest/config";
import "@testing-library/jest-dom/vitest";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    globals: true,
    setupFiles: ["src/__tests__/setup.ts"],
  },
});
