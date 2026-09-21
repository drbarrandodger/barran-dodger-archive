# Data model

## Core entities

### ArchiveRecord

Represents one preserved repository artefact.

Fields:

- `record_id` — stable identifier derived deterministically from preserved path/source metadata
- `original_path` — repository-relative path preserved verbatim
- `source_layer` — `primary`, `presentation`, `metadata`, `workflow`, `specification`, or `generated`
- `media_type`
- `size_bytes`
- `provenance_status`
- `collection_key` / `collection_label`
- `genre_family` — for example `gospel`, `prophetic-writing`, `technology-targeting-essay`, `essay`, `official-record`, or `mixed`
- `publication_status` — for example `public-record`, `metadata-only`, `public-metadata-sensitive`, or `internal-only`
- `sensitivity_flags[]`
- `route_mappings[]`
- `public_urls`

### PresentationNode

Represents a public-facing card, page, article, or collection shell.

Fields:

- `node_id` — stable presentation identifier, e.g. `node:home:catalogue-shell`
- `title`
- `route`
- `summary`
- `references[]` — links to `ArchiveRecord.original_path` values

### EvidenceStatus

Controlled vocabulary for record labels used later across the archive.

Fields:

- `status_code`
- `display_label`
- `definition`
- `confidence_level`
- `requires_attribution` (boolean)

### CollectionSummary

Represents the published summary layer that can load before full record inventory.

Fields:

- `collection_key`
- `collection_label`
- `record_count`
- `sensitive_record_count`
- `genre_families[]`
- `publication_status`
- `example_paths[]`

### PublicationControl

Represents the current publication boundary for a collection or route grouping.

Fields:

- `collection_key`
- `publication_status`
- `sensitive_record_count`
- `route_targets[]`

### InventorySnapshot

Represents a repository-level inventory taken at a known time.

Fields:

- `snapshot_id`
- `generated_at`
- `file_count`
- `duplicate_candidates[]`
- `broken_local_references[]`
- `sensitive_path_candidates[]`

## Stable ID principles

- IDs must survive presentation refactors.
- Original paths remain first-class references.
- Public collection summaries may derive from records, but record identifiers must remain stable across summary rebuilds.
- Presentation nodes reference records; records do not depend on presentation routes.
- Later forensic modules may add assertions and relationships, but must not mutate preserved source identifiers.
