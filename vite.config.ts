import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/barran-dodger-archive/' : '/';

// Rewrites hardcoded absolute public-asset paths to use import.meta.env.BASE_URL
// so they resolve correctly on GitHub Pages sub-paths.
//
// Two-pass strategy:
//   Pass 1 — JSX attribute form:  attr="/path"  →  attr={`${BASE}path`}  (needs {} in JSX)
//   Pass 2 — All other forms:     "/path"        →  `${BASE}path`         (vars, obj props, arrays)
const rewritePublicPaths = {
  name: 'rewrite-public-paths-for-ghpages',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!isGitHubPages) return null;
    if (!id.match(/\.(tsx|jsx|ts|js)$/) || id.includes('node_modules')) return null;

    // ec = escape-aware char class inside a double-quoted string
    const ec = '(?:[^"\\\\]|\\\\.)';
    const knownDir = '(?:evidence|audio|video|images|documents|attached_assets)';
    const assetExt = '\\.(?:png|jpe?g|gif|svg|webp|mp4|mp3|m4a|pdf|ico|webm)';

    // Matches asset paths: either /knownDir/... or a root-level path with a known extension
    const assetPath = `(\\/${knownDir}\\/${ec}+|\\/(?!\\/)${ec}*${assetExt})`;

    const tpl = (raw: string) => {
      const clean = raw.replace(/\\"/g, '"').slice(1); // strip leading / and unescape \"
      return `\`\${import.meta.env.BASE_URL}${clean}\``;
    };

    let result = code;

    // Pass 1: JSX attribute form —  attr="/path"  →  attr={`${BASE}path`}
    // Captures the attribute name so we can re-emit with ={...} wrapping.
    result = result.replace(
      new RegExp(`([\\w][\\w-]*)="${assetPath}"`, 'g'),
      (_m, attr, path) => `${attr}={${tpl(path)}}`
    );

    // Pass 2: All remaining quoted asset paths (object props, variables, array items, etc.)
    // After Pass 1, JSX attrs are already gone, so these are safe to replace without {}.
    result = result.replace(
      new RegExp(`"${assetPath}"`, 'g'),
      (_m, path) => tpl(path)
    );

    return result !== code ? { code: result, map: null } : null;
  }
};

export default defineConfig({
  base,
  plugins: [
    rewritePublicPaths,
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  optimizeDeps: {
    entries: ["src/**/*.{ts,tsx}"],
  },
});
