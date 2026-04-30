import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/barran-dodger-archive/' : '/';

// Rewrites hardcoded absolute public-asset paths (src="/evidence/...", src="/img-...", etc.)
// to use import.meta.env.BASE_URL so they resolve correctly on GitHub Pages sub-paths.
// Handles both JSX attribute form (src="...") and JS object property form (src: "...").
const rewritePublicPaths = {
  name: 'rewrite-public-paths-for-ghpages',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!isGitHubPages) return null;
    if (!id.match(/\.(tsx|jsx|ts|js)$/) || id.includes('node_modules')) return null;
    const assetPattern = /\.(png|jpe?g|gif|svg|webp|mp4|mp3|m4a|pdf|ico|webm)\b/;
    const knownDirs = /^\/(evidence|audio|video|images|documents|attached_assets)\//;

    const isAsset = (p: string) => assetPattern.test(p) || knownDirs.test(p);
    // Matches a double-quoted string that may contain escape sequences (e.g. \" in filenames)
    const quotedPath = '(\\/(?!\\/)(?:[^"\\\\]|\\\\.)+)';

    let result = code;

    // JSX attribute form: src="/path" or url="/path" → src={`${import.meta.env.BASE_URL}path`}
    result = result.replace(
      new RegExp(`(src|href|url)="${quotedPath}"`, 'g'),
      (match, attr, assetPath) => {
        if (!isAsset(assetPath)) return match;
        // Unescape \" → " for template literal (quotes don't need escaping in backtick strings)
        const cleanPath = assetPath.replace(/\\"/g, '"').slice(1);
        return `${attr}={\`\${import.meta.env.BASE_URL}${cleanPath}\`}`;
      }
    );

    // JS object property form: src: "/path" → src: `${import.meta.env.BASE_URL}path`
    result = result.replace(
      new RegExp(`(src|href|url):\\s*"${quotedPath}"`, 'g'),
      (match, attr, assetPath) => {
        if (!isAsset(assetPath)) return match;
        const cleanPath = assetPath.replace(/\\"/g, '"').slice(1);
        return `${attr}: \`\${import.meta.env.BASE_URL}${cleanPath}\``;
      }
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
