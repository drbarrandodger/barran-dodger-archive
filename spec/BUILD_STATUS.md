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
- updated `Documents.html` to load collection summaries first and fetch the record-level inventory only on demand
- extended validation and Pages publishing allowlists for the Phase 2 public inventory files

## Files created

- `assets/css/archive-foundation.css`
- `assets/js/archive-foundation.js`
- `scripts/generate-phase1-inventory.mjs`
- `scripts/check-phase1-foundation.mjs`
- `scripts/build-pages-site.mjs`
- `scripts/generate-phase2-inventory.mjs`
- `scripts/check-phase2-inventory.mjs`
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
- `public/data/archive-collections.json`
- `public/data/archive-records.json`

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
- `node scripts/build-pages-site.mjs` — passed
- `node scripts/generate-phase2-inventory.mjs` — passed
- `npm run check:phase1` — passed
- `npm run check:phase2` — passed
- `npm run inventory:phase2` — passed
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
- Phase 2 now separates public publication scope from internal inventory scope:
  - `public/data/archive-collections.json` provides summary-only catalogue loading
  - `public/data/archive-records.json` remains public metadata but is fetched only on demand by the catalogue shell
  - `spec/inventory/archive-records-phase2.json` and `spec/inventory/archive-publication-controls.json` remain internal-only working artefacts under `spec/`
- no plaintext credentials or `.env` files were identified during repository inspection; however, repository filenames include sensitive and official classifications that should remain subject to later review before any broader public presentation

## Unresolved items

- pre-existing TypeScript build configuration deprecation blocks the repository's existing `npm run build`
- pre-existing lint debt in legacy code remains unresolved
- `archive-records.json` is still a large public metadata file and may need later segmentation or pagination if the catalogue expands further
- some public catalogue entries remain `unclassified` pending later provenance and taxonomy review
- full forensic modules remain intentionally deferred

## Next recommended phase

**Phase 3 — Provenance, taxonomy, and publication review**

Focus next on refining unclassified records, confirming provenance/source-verification states, reviewing metadata-only and public-metadata-sensitive publication boundaries, and preparing route-level collection pages without widening publication beyond the preserved evidence boundary.
