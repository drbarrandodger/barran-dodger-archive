# Architecture

## Existing repository architecture

The repository contains mixed architecture layers:

1. a static GitHub Pages surface rooted in `index.html`, `404.html`, and `Documents.html`
2. an existing Vite/React application and related server code retained elsewhere in the repository
3. preserved archive and evidence directories such as `attached_assets/` and `client/public/documents/`
4. generated metadata such as `public/data/documents.json`

Phase 1 uses the smallest stable published surface already compatible with the repository's current Pages deployment: a curated static shell backed by preserved machine-readable metadata.

## Phase 1 public shell

Published pages:

- `index.html` — architecture / preservation homepage shell
- `Documents.html` — catalogue shell
- `404.html` — path recovery / restricted publication notice
- `pages/documents.html` — legacy alias route

Shared foundation assets:

- `assets/css/archive-foundation.css`
- `assets/js/archive-foundation.js`

## Deployment boundary

GitHub Pages should publish only the curated shell and approved metadata files copied into `.site-build/`.

Included in `.site-build/`:

- the three public shell pages and legacy alias
- shared CSS/JS assets
- `public/data/documents.json` copied to `data/documents.json`
- favicon / icon assets

Explicitly not published by this Phase 1 shell:

- `spec/` documents
- `spec/inventory/repository-pre-phase1.json`
- broad directory exports of `attached_assets/`
- any newly discovered sensitive materials not already intentionally surfaced elsewhere

## Routing and path stability

- homepage remains `index.html`
- catalogue remains available at `Documents.html`
- legacy references to `pages/documents.html` are preserved through redirect aliasing
- the published shell uses relative links to avoid GitHub Pages base-path breakage
