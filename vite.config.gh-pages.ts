import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const GH_BASE = '/barran-dodger-archive/';

const rewritePublicPaths = {
  name: 'rewrite-public-paths-for-ghpages',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!id.match(/\.(tsx|jsx|ts|js)$/) || id.includes('node_modules')) return null;
    const ec = '(?:[^"\\\\]|\\\\.)';
    const knownDir = '(?:evidence|audio|video|images|documents|attached_assets)';
    const assetExt = '\\.(?:png|jpe?g|gif|svg|webp|mp4|mp3|m4a|pdf|ico|webm)';
    const assetPath = `(\\/${knownDir}\\/${ec}+|\\/(?!\\/)${ec}*${assetExt})`;
    const tpl = (raw: string) => {
      const clean = raw.replace(/\\"/g, '"').slice(1);
      return `\`\${import.meta.env.BASE_URL}${clean}\``;
    };
    let result = code;
    result = result.replace(
      new RegExp(`([\\w][\\w-]*)="${assetPath}"`, 'g'),
      (_m, attr, p) => `${attr}={${tpl(p)}}`
    );
    result = result.replace(
      new RegExp(`"${assetPath}"`, 'g'),
      (_m, p) => tpl(p)
    );
    return result !== code ? { code: result, map: null } : null;
  }
};

export default defineConfig({
  base: GH_BASE,
  plugins: [rewritePublicPaths, react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/ghpages"),
    emptyOutDir: true,
  },
  optimizeDeps: {
    entries: ["src/**/*.{ts,tsx}"],
  },
});
