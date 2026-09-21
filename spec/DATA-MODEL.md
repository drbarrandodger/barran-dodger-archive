# Data model

## Core entities

### ArchiveRecord

Represents one preserved repository artefact.

Fields:

- `record_id` — stable identifier, e.g. `record:relative-path:<path>`
- `original_path` — repository-relative path preserved verbatim
- `source_layer` — `primary`, `presentation`, `metadata`, `workflow`, `specification`, or `generated`
- `media_type`
- `size_bytes`
- `provenance_status`
- `sensitivity_flags[]`

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
- Presentation nodes reference records; records do not depend on presentation routes.
- Later forensic modules may add assertions and relationships, but must not mutate preserved source identifiers.
