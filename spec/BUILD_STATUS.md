# Build status

## Completed work

- inspected repository architecture, existing GitHub Pages workflows, route surfaces, metadata outputs, and recent Actions logs
- created a machine-readable pre-restructure repository inventory at `spec/inventory/repository-pre-phase1.json`
- established Phase 1 specification documents under `spec/`
- rebuilt the published shell as a restrained static Phase 1 foundation (`index.html`, `Documents.html`, `404.html`) with:
  - preservation-first homepage shell
  - initial navigation model
  - evidence-status badge system
  - reusable card/search shell patterns via shared CSS and JavaScript assets
  - legacy catalogue alias handling at `pages/documents.html`
- added curated GitHub Pages build scaffolding that publishes only the approved shell assets and metadata output into `.site-build/`
- added local validation scripts for the Phase 1 foundation and curated Pages build

## Files created

- `assets/css/archive-foundation.css`
- `assets/js/archive-foundation.js`
- `scripts/generate-phase1-inventory.mjs`
- `scripts/check-phase1-foundation.mjs`
- `scripts/build-pages-site.mjs`
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

## Files modified

- `.github/workflows/pages.yml`
- `index.html`
- `Documents.html`
- `404.html`
- `Index.html`
- `pages/documents.html`
- `package.json`
- `spec/BUILD_STATUS.md`

## Checks run

### Passing

- `node scripts/check-phase1-foundation.mjs` — passed
- `node scripts/build-pages-site.mjs` — passed
- `npm run check:phase1` — passed
- `npm run build:pages:static` — passed

### Existing repository failures observed

- `npm run build` — failed before bundling due to pre-existing TypeScript configuration issue:
  - `tsconfig.json`: `Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.`
- `npm run lint` — failed with many pre-existing lint errors in legacy application/server code (1,038 problems reported); the inspected lint output did not reference the newly added Phase 1 files

## Preservation and privacy findings

- original evidence directories were left intact and unmodified
- the pre-restructure inventory snapshot recorded:
  - `totalFiles`: 2212
  - `duplicateCandidateCount`: 27
  - `brokenLocalReferenceCount`: 20
  - `sensitivePathCandidateCount`: 113
  - `blockchainOrHashCandidateCount`: 21
- no plaintext credentials or `.env` files were identified during repository inspection, but repository filenames include sensitive and official classifications that should not be expanded into new public browse surfaces without review
- the curated Pages build now publishes only the Phase 1 shell assets and the preserved `documents.json` metadata file, rather than the broader repository tree

## Unresolved items

- pre-existing TypeScript build configuration deprecation blocks the repository's existing `npm run build`
- pre-existing lint debt in legacy code remains unresolved
- full record-level archive indexing, provenance mapping, and forensic modules are intentionally deferred

## Next recommended phase

**Phase 2 — Archive Inventory**

Focus next on stable record-level inventory modelling, duplicate resolution policy, route-to-record mapping, and collection-level publication controls built on the preserved Phase 1 identifiers and inventory snapshot.
