---
name: GitHub Pages mirror deploy
description: How to deploy the barrandodger.com site to the GitHub Pages mirror at drbarrandodger.github.io/barran-dodger-archive
---

## The Setup
- Repo: `drbarrandodger/barran-dodger-archive` (GitHub remote named `github`)
- Pages serves from: `gh-pages` branch, `build_type: "legacy"` (branch-based, NOT workflow artifact)
- URL: https://drbarrandodger.github.io/barran-dodger-archive/
- Base path: `/barran-dodger-archive/` (set in `vite.config.gh-pages.ts`)

## The Reliable Deploy Method (Pre-built via Git Data API)

GitHub Actions build is BROKEN due to:
1. `@replit/vite-plugin-runtime-error-modal` — Replit-only package, not available on GitHub Actions
2. Stale npm cache on GitHub Actions resolves `@tailwindcss/vite` v4 into PostCSS, conflicting with Tailwind v3 `@tailwind` directives
3. Old `dist/` committed in GitHub repo — if `--emptyOutDir` silently fails, stale artifacts deploy

**Workaround**: Pre-build locally on Replit and push via GitHub Git Data API:

```python
# 1. Build locally with gh-pages config
NODE_ENV=production npx vite build --config vite.config.gh-pages.ts

# 2. Post-process JS bundle: replace /barran-dodger-archive/assets/HASH.ext
#    with https://www.barrandodger.com/assets/HASH.ext (428 hashed image refs)
#    and replace "/evidence/..." etc. with "https://www.barrandodger.com/evidence/..." (1558 refs)
# !! Do NOT use `npm run build` — it prunes the image dirs

# 3. Create blobs for each file (≤25MB per blob)
# POST /repos/{repo}/git/blobs  with base64 content

# 4. Create tree with all blob SHAs (orphan — no existing tree needed)
# POST /repos/{repo}/git/trees  with tree entries array

# 5. Create orphan commit (no parents)
# POST /repos/{repo}/git/commits  with tree SHA

# 6. Force-update gh-pages ref
# PATCH /repos/{repo}/git/refs/heads/gh-pages  with commit SHA + force: true
```

## Key Files
- `vite.config.gh-pages.ts` — Replit-free vite config (no @replit/* imports), base `/barran-dodger-archive/`, outDir `dist/ghpages`
- `.github/workflows/pages.yml` — GitHub Actions workflow (tries to build + deploy, but currently broken)
- `vite.config.ts` — local Replit vite config (has Replit plugins, CANNOT use on GitHub Actions)

## Image Solution (SOLVED)
- 428 hashed asset images in bundle (e.g. `cover-HASH.png`) are referenced as literal strings in the minified JS
- Python post-processing replaces all `/barran-dodger-archive/assets/HASH.ext` → `https://www.barrandodger.com/assets/HASH.ext`
- 1558 public path refs (`"/evidence/..."` etc.) → `https://www.barrandodger.com/evidence/...`
- Images load from barrandodger.com via cross-origin; works for `<img>` tags
- Hashes are content-based (same source → same hash) so gh-pages URLs match barrandodger.com exactly
- 533MB of images don't need to be hosted on gh-pages

## Deployed Bundle Files (7 files total)
- `index.html` — SPA shell with correct base paths
- `404.html` — same as index.html for SPA routing fallback
- `.nojekyll` — prevents Jekyll processing
- `assets/index-D-1lsIP9.js` — 18MB post-processed main bundle
- `assets/index-C6xkgsso.css` — Tailwind CSS bundle
- `assets/index.es-BwW5gT8W.js` — ES module helper
- `assets/purify.es-CovBOfck.js` — DOMPurify

## Workflow Fix (When GitHub Actions Is Repaired)
1. Remove `cache: 'npm'` from setup-node (stale cache causes Tailwind conflict)
2. Use `--config vite.config.gh-pages.ts` in vite build command
3. Explicitly `rm -rf dist && mkdir -p dist/ghpages` before building
4. Add Python post-processing step for image URL rewrites
5. The `peaceiris/actions-gh-pages@v3` with `force_orphan: true` deploys to gh-pages branch

**Why:** `@replit/vite-plugin-runtime-error-modal` static import at top of vite.config.ts crashes vite on non-Replit environments. The gh-pages config avoids all `@replit/*` imports.
