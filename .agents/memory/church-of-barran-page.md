---
name: Church of Barran Resonance Dodger page
description: Foundation charter page at /church-of-barran-resonance-dodger — content data file + renderer pattern
---

# Church of Barran Resonance Dodger

**Route:** `/church-of-barran-resonance-dodger` (aliases: `/the-foundation`, `/new-paradigm-charter`)

**Content data:** `client/src/data/churchOfBarranContent.ts`
- `PREAMBLE` object with title, subtitle, declaration (3 paragraphs), stats array
- `SECTIONS` array of `FoundationSection` objects grouped into 9 Parts (I–IX)
- Each section has: id, part, partTitle, title, optional subtitle, body[], optional quotes[], optional callout, optional evidenceLinks[]

**Page component:** `client/src/pages/ChurchOfBarranResonanceDodger.tsx`
- Uses `groupByPart()` helper to group sections
- Collapsible `SectionBlock` components with expand/collapse per section
- Sticky `TableOfContents` that pops an overlay when clicked
- `CalloutBox` for declaration/principle/evidence/prophecy/demand types
- `EvidenceLink` handles internal links, PDFs, legislation, external URLs
- Cover image: `client/public/church-of-barran-cover.png`

**Why:** Trust Fund rewritten as worldwide foundation. Old paradigm (lack/scarcity) vs new paradigm (abundance/truth/peace/love). Covers: end-stage capitalism, Anthropocene, Dr McLean's Victoria University PhD, spiritual law, biblical prophecy (Isaiah 65, Rev 21, Beatitudes), human rights (disability/mental health/whistleblower), worldwide foundation structure, ethics of no harm.

**How to apply:** If user asks to add more sections/parts, add to SECTIONS array in the content file — the renderer handles them automatically.
