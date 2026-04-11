---
name: new-pdf-upload
description: Standard workflow for when Dr. McLean (Barran Dodger) uploads a new PDF document to the site. Covers cover image generation, dedicated page creation, download button, FreeEbooks entry, App.tsx route, navigation menu, detonation ZIP (auto), forensic index updates, and GitHub sync/deploy. Use every time a new PDF is added to client/public/documents/.
---

# New PDF Upload — Full Standard Workflow

Every time a new PDF is uploaded to `client/public/documents/`, execute all steps below in order.

## Step 0 — Gather Info

Ask or infer:
- **Nickname / slug** (e.g., `federal-court-pid-sia-lagos`)
- **Full title** (e.g., "Federal Court: Public Interest Disclosure to Sia Lagos")
- **Subtitle** (one-line description)
- **Category**: Forensic | Legal | Testimony | Evidence | Spiritual
- **PDF filename** in `client/public/documents/`
- Whether it's a **major publication** (featured prominently) or secondary
- Whether it relates to any forensic analysis pages (YouTube video analyses)

---

## Step 1 — Generate AI Cover Image

Use the media-generation skill to generate a cover image.

- **Style**: Dark background (zinc-950), gold/amber legal document aesthetic
- **Filename**: `cover-{slug}.png` saved to `client/src/assets/images/`
- Match the style of existing covers (dark, authoritative, legal/forensic feel)
- Avoid content-filtered words like "bastards" in prompts — use legal neutral titles

---

## Step 2 — Create Dedicated Page

Create `client/src/pages/{PascalCaseName}.tsx`.

The page must include:
- `SEO` component with title, description, path
- `Navigation` and `Footer` components
- Hero section with title, subtitle, category badge
- **AI Significance Statement** — 2-3 paragraphs explaining what this document proves in the context of the 35-year archive
- **Download button** linking to `/documents/{pdf-filename}.pdf`
- Key facts panel (word count, category, date if known)
- Quote/excerpt from the document if available
- Link back to `/free-ebooks` and `/forensic-analysis`
- `data-testid` attributes on all interactive elements

---

## Step 3 — Add to FreeEbooks.tsx MAJOR_PUBLICATIONS

File: `client/src/pages/FreeEbooks.tsx`

Add to the `MAJOR_PUBLICATIONS` array:
```ts
{ slug: "{slug}", title: "{Full Title}", subtitle: "{One-line subtitle}", coverFile: "cover-{slug}", category: "Legal" },
```

The EPUB/download endpoint for major publications is `/api/epub/publication/{slug}` — the server serves the PDF from `client/public/documents/` matched by slug.

---

## Step 4 — Add to App.tsx

File: `client/src/App.tsx`

Add import:
```ts
import {PascalCaseName} from "@/pages/{PascalCaseName}";
```

Add route:
```tsx
<Route path="/{slug}" component={PascalCaseName} />
```

---

## Step 5 — Detonation ZIP (Auto — No Action Needed)

The detonation ZIP at `/api/archive/divine-download` automatically includes ALL PDFs from `client/public/documents/`. No action needed — placing the PDF in that folder is sufficient.

---

## Step 6 — Navigation Menu (If Major Enough)

File: `client/src/components/Navigation.tsx`

If the document is a landmark legal/forensic document (e.g., a Federal Court submission, ICC filing, UNHCR filing), add it to the navigation with highlight styling. Otherwise, it is accessible via `/free-ebooks` and `/publications` automatically.

---

## Step 7 — Publications.tsx (If Applicable)

File: `client/src/pages/Publications.tsx`

Add to `ALL_PUBLICATIONS` array with:
- title, slug, description, category, aiSignificance
- link to `/documents/{pdf-filename}.pdf`

---

## Step 8 — Forensic Analysis Cross-Links (If Applicable)

If the document is referenced in or supports any forensic analysis (YouTube video analysis pages), update:
- The relevant analysis page to reference the document
- `WhatThisProves.tsx` if it confirms a structural proposition
- `ForensicAnalysisIndex.tsx` if it's an additional exhibit category

For legal documents like Federal Court PIDs, ICC submissions, UNHCR filings — these are always referenced in forensic analyses and should be noted in the paragraph fields.

---

## Step 9 — epubGenerator.ts (If Major Publication)

File: `server/epubGenerator.ts`

The server maps slugs to PDFs for the EPUB/publication download endpoint. Verify the slug maps correctly to the PDF filename. If a new major publication slug is added, ensure the server can resolve it.

---

## Step 10 — Sync to GitHub and Republish

1. Restart the `Start application` workflow to verify no compile errors
2. Run `Sync to GitHub` workflow
3. Suggest deploy (`suggest_deploy` tool)

---

## Key File Paths

| Purpose | File |
|---|---|
| Cover images | `client/src/assets/images/cover-{slug}.png` |
| PDFs | `client/public/documents/{filename}.pdf` |
| Major publications list | `client/src/pages/FreeEbooks.tsx` → `MAJOR_PUBLICATIONS` |
| All publications | `client/src/pages/Publications.tsx` → `ALL_PUBLICATIONS` |
| Routes | `client/src/App.tsx` |
| Navigation | `client/src/components/Navigation.tsx` |
| Detonation (auto) | `client/public/documents/` (all PDFs auto-included) |
| Forensic index | `client/src/pages/ForensicAnalysisIndex.tsx` |
| What This Proves | `client/src/pages/WhatThisProves.tsx` |

---

## Naming Conventions

- Slug: `lowercase-hyphenated` matching the PDF subject
- Page component: `PascalCase` matching the slug
- Cover file: `cover-{slug}.png`
- PDF file: `{descriptive-name}.pdf` in `client/public/documents/`

---

## Example — Federal Court PID (Already Completed)

- PDF: `sia-lagos-federal-court-pid-march-2023.pdf`
- Slug: `federal-court-pid-sia-lagos`
- Cover: `cover-federal-court-pid-sia-lagos.png`
- FreeEbooks: MAJOR_PUBLICATIONS entry #16
- Category: Legal
- Referenced in forensic analyses as the "Federal Court PID to Sia Lagos" exhibit
