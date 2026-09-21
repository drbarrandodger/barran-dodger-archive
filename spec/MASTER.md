# Phase 1 master specification

This repository is the source of truth for the archive. Phase 1 establishes the architectural foundation only: preservation rules, inventory, navigation shell, evidence-status language, deployment boundaries, and minimal public presentation scaffolding.

## Preservation principle

Original evidence, documentary artefacts, filenames, repository paths, and primary-source records remain preserved. This includes preserved writing families such as gospels, prophetic writing, and essays concerning technology and targeting. Presentation structure may change, but the underlying record layer must not be silently altered, overwritten, normalised, or renamed.

## Phase 1 outputs

- `spec/inventory/repository-pre-phase1.json` — machine-readable pre-restructure repository snapshot
- `spec/ARCHITECTURE.md` — public shell and deployment architecture
- `spec/DATA-MODEL.md` — stable-ID and entity relationship model for later phases
- `spec/EVIDENCE-STANDARDS.md` — evidence-status vocabulary
- `spec/BUILD_STATUS.md` — implementation log, checks, findings, and next-step recommendation

## Out of scope for Phase 1

- full forensic modules
- record-level corpus ingestion and tagging
- broad public indexing of sensitive materials
- legal conclusions beyond cautious architectural placeholders
