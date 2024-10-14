import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "index/route.tsx", {index: true});
        });
      },
    }),
  ],
  server: {
    port:4455
  }
});
