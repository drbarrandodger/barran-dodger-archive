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


## Phase 2 inventory layer

Phase 2 keeps the same curated Pages shell and adds a summary-first inventory layer:

- `public/data/archive-collections.json` — public collection summaries, route mappings, and publication controls
- `public/data/archive-records.json` — public record inventory with stable IDs, loaded only on demand by `Documents.html`
- `spec/inventory/archive-records-phase2.json` — internal full inventory for repository work
- `spec/inventory/archive-publication-controls.json` — internal publication-boundary summary

The catalogue page must load only collection summaries by default and fetch record-level inventory lazily so the archive shell does not eagerly load the full corpus into the browser.


## Phase 3 provenance and route review

Phase 3 builds on the Phase 2 inventory by adding:

- route-level collection pages under `pages/collections/`
- route-level preserved writing pages under `pages/families/`
- `public/data/archive-routes.json` for published route summaries
- `spec/inventory/archive-provenance-phase3.json` for internal provenance and review queues

These routes organise already-published metadata only. They do not publish new evidence files or broaden collection scope beyond the approved Pages boundary.

## Deployment boundary

GitHub Pages should publish only the curated shell and approved metadata files copied into `.site-build/`.

Included in `.site-build/`:

- the three public shell pages and legacy alias
- shared CSS/JS assets
- `public/data/documents.json` copied to `data/documents.json`
- `public/data/archive-collections.json` copied to `data/archive-collections.json`
- `public/data/archive-records.json` copied to `data/archive-records.json`
- `public/data/archive-routes.json` copied to `data/archive-routes.json`
- route pages under `pages/collections/` and `pages/families/`
- favicon / icon assets

Explicitly not published by this curated shell:

- `spec/` documents
- `spec/inventory/repository-pre-phase1.json`
- broad directory exports of `attached_assets/`
- any newly discovered sensitive materials not already intentionally surfaced elsewhere

## Routing and path stability

- homepage remains `index.html`
- catalogue remains available at `Documents.html`
- legacy references to `pages/documents.html` are preserved through redirect aliasing
- the published shell uses relative links to avoid GitHub Pages base-path breakage

## Preserved writing families

Phase 1 explicitly recognises preserved literary / documentary families that later phases may model separately without relocating their source files:

- gospels
- prophetic writing
- essays on technology and targeting
- other essays and documentary statements
