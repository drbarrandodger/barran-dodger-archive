# Build status

## Completed work

- inspected repository architecture, existing GitHub Pages workflows, route surfaces, metadata outputs, and recent Actions logs
- created a machine-readable pre-restructure repository inventory at `spec/inventory/repository-pre-phase1.json`
- established Phase 1 specification documents under `spec/`
- rebuilt the published shell as a restrained static foundation (`index.html`, `Documents.html`, `404.html`) with:
  - preservation-first homepage shell
  - initial navigation model
  - evidence-status badge system
  - reusable card/search shell patterns via shared CSS and JavaScript assets
  - legacy catalogue alias handling at `pages/documents.html`
- documented preserved writing families for gospels, prophetic writing, essays on technology and targeting, and other documentary statements
- added curated GitHub Pages build scaffolding that publishes only the approved shell assets and metadata output into `.site-build/`
- added local validation scripts for the Phase 1 foundation and curated Pages build
- implemented Phase 2 archive inventory outputs with stable record IDs, collection summaries, publication controls, and route mappings:
  - `spec/inventory/archive-records-phase2.json`
  - `spec/inventory/archive-publication-controls.json`
  - `public/data/archive-collections.json`
  - `public/data/archive-records.json`
- updated `Documents.html` to load collection summaries and an initial empty-state shell immediately, while deferring the full record-level inventory fetch until explicit load/search actions
- extended validation and Pages publishing allowlists for the Phase 2 public inventory files
- implemented Phase 3 provenance, taxonomy, and route review outputs:
  - `spec/inventory/archive-provenance-phase3.json`
  - `public/data/archive-routes.json`
- refined Phase 2 classification and review metadata for Phase 3 by:
  - reducing `unclassified` public records through path-based reclassification of official-drive items into `government-evidence`
  - adding `provenance_status`, `source_review_status`, and `review_flags` to the public record inventory
  - adding primary route metadata to collection and family summaries
- added route-level Pages shells for collections and preserved-writing families under `pages/collections/` and `pages/families/`
- updated the catalogue shell so collection and family cards can open Phase 3 route pages without broadening publication scope

## Files created

- `assets/css/archive-foundation.css`
- `assets/js/archive-foundation.js`
- `assets/js/archive-route-page.js`
- `scripts/generate-phase1-inventory.mjs`
- `scripts/check-phase1-foundation.mjs`
- `scripts/build-pages-site.mjs`
- `scripts/generate-phase2-inventory.mjs`
- `scripts/check-phase2-inventory.mjs`
- `scripts/generate-phase3-review.mjs`
- `scripts/check-phase3-routes.mjs`
- `spec/MASTER.md`
- `spec/ARCHITECTURE.md`
- `spec/DATA-MODEL.md`
- `spec/EVIDENCE-STANDARDS.md`
- `spec/RESEARCH-METHODOLOGY.md`
- `spec/LEGAL-CAUTION.md`
- `spec/FORENSIC-METHODOLOGY.md`
- `spec/IMPORT-PROTOCOL.md`
- `spec/ARCHIVE-PROTOCOL.md`
- `spec/SEO.md`
- `spec/ACCESSIBILITY.md`
- `spec/PRIVACY.md`
- `spec/DESIGN-SYSTEM.md`
- `spec/inventory/repository-pre-phase1.json`
- `spec/inventory/archive-records-phase2.json`
- `spec/inventory/archive-publication-controls.json`
- `spec/inventory/archive-provenance-phase3.json`
- `public/data/archive-collections.json`
- `public/data/archive-records.json`
- `public/data/archive-routes.json`
- `pages/collections/public-documents.html`
- `pages/collections/government-evidence.html`
- `pages/collections/forensic-analyses.html`
- `pages/collections/video-analyses.html`
- `pages/collections/attached-assets.html`
- `pages/collections/unclassified.html`
- `pages/families/gospels.html`
- `pages/families/prophetic-writing.html`
- `pages/families/technology-targeting-essays.html`

## Files modified

- `.github/workflows/pages.yml`
- `index.html`
- `Documents.html`
- `404.html`
- `Index.html`
- `pages/documents.html`
- `package.json`
- `scripts/build-pages-site.mjs`
- `scripts/check-phase1-foundation.mjs`
- `spec/ARCHITECTURE.md`
- `spec/ARCHIVE-PROTOCOL.md`
- `spec/DATA-MODEL.md`
- `spec/BUILD_STATUS.md`

## Checks run

### Passing

- `node scripts/check-phase1-foundation.mjs` — passed
- `node scripts/check-phase2-inventory.mjs` — passed
- `node scripts/check-phase3-routes.mjs` — passed
- `node scripts/build-pages-site.mjs` — passed
- `node scripts/generate-phase2-inventory.mjs` — passed
- `node scripts/generate-phase3-review.mjs` — passed
- `npm run check:phase1` — passed
- `npm run check:phase2` — passed
- `npm run check:phase3` — passed
- `npm run inventory:phase2` — passed
- `npm run inventory:phase3` — passed
- `npm run build:pages:static` — passed

### Existing repository failures observed

- `npm run build` — failed before bundling due to pre-existing TypeScript configuration issue:
  - `tsconfig.json`: `Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.`
- `npm run lint` — failed with many pre-existing lint errors in legacy application/server code (1,038 problems reported); the inspected lint output did not reference the newly added archive shell and inventory files

## Preservation and privacy findings

- original evidence directories were left intact and unmodified
- original repository-relative paths remain the preserved reference layer for all derived inventory outputs
- the pre-restructure inventory snapshot recorded:
  - `totalFiles`: 2212
  - `duplicateCandidateCount`: 2
  - `brokenLocalReferenceCount`: 20
  - `sensitivePathCandidateCount`: 108
  - `blockchainOrHashCandidateCount`: 21
- Phase 2 and Phase 3 separate public publication scope from internal review scope:
  - `public/data/archive-collections.json` provides summary-first catalogue loading with primary collection/family routes
  - `public/data/archive-records.json` remains public metadata but is fetched only on demand by the catalogue shell and route pages
  - `public/data/archive-routes.json` publishes route summaries only for approved collection/family pages
  - `spec/inventory/archive-records-phase2.json`, `spec/inventory/archive-publication-controls.json`, and `spec/inventory/archive-provenance-phase3.json` remain internal-only working artefacts under `spec/`
- no plaintext credentials or `.env` files were identified during repository inspection; however, repository filenames include sensitive and official classifications that should remain subject to later review before any broader public presentation

## Unresolved items

- pre-existing TypeScript build configuration deprecation blocks the repository's existing `npm run build`
- pre-existing lint debt in legacy code remains unresolved
- some remote-only testimony records remain `unclassified` and require later manual provenance review before any broader publication treatment
- `archive-records.json` is still a large public metadata file and may need later segmentation or pagination if the catalogue expands further
- full forensic modules remain intentionally deferred

## Next recommended phase

**Phase 4 — Manual provenance adjudication and dossier assembly**

Focus next on manual provenance adjudication for remaining unclassified remote-only records, issue/dossier grouping on top of stable record IDs, and later forensic modules that remain layered on preserved source paths.
