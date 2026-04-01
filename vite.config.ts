import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

const sourcemap = process.env.SOURCEMAP === "true";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    sourcemap,
  },
});
