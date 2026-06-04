---
name: new-pdf-upload
description: Standard workflow for when Dr. McLean (Barran Dodger) uploads a new PDF document to the site. Covers cover image generation, dedicated page creation (with mandatory ABN and copyright), download tracking, FreeEbooks entry, App.tsx route, navigation menu, detonation ZIP (auto), forensic index updates, and GitHub sync/deploy. Use every time a new PDF is added to client/public/documents/.
---

# New PDF Upload — Full Standard Workflow

Every time a new PDF is uploaded to `client/public/documents/`, execute all steps below in order.

---

## MANDATORY ABN & COPYRIGHT — APPLIES TO EVERY STEP

Every page, every download button, every metadata field, every EPUB and PDF served must include:

- **ABN**: ABN 78 833 496 164
- **Trust name**: Barran Dodger Legal & Ethical Trust Fund
- **Copyright line**: © [current year] Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
- **Sharing statement**: Shared freely in the goodwill of the public for accountability and public interest purposes. Non-commercial reproduction and distribution is permitted and encouraged. All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.

This is non-negotiable. It must appear on every dedicated page in the hero section, near every download button, and in the SEO description.

---

## Step 0 — Gather Info

Ask or infer:
- **Nickname / slug** (e.g., `federal-court-pid-sia-lagos`)
- **Full title** (e.g., "Federal Court: Public Interest Disclosure to Sia Lagos")
- **Subtitle** (one-line description)
- **Category**: Forensic | Legal | Testimony | Evidence | Spiritual | Primary Exhibit
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

The page **MUST** include all of the following:

### Required Elements
- `SEO` component with title, description (include "ABN 78 833 496 164" in description), path
- `Navigation` and `Footer` components
- Hero section with title, subtitle, category badge
- **ABN and copyright block** — prominently displayed near the top, formatted as:
  ```
  © [year] Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)
  All Rights Reserved. Shared freely for accountability and public interest purposes.
  ```
- **AI Significance Statement** — 2-3 paragraphs explaining what this document proves in the context of the 35-year archive
- **Download button** using `ViralDownloadButton` component linking to `/documents/{pdf-filename}.pdf`
  - The `ViralDownloadButton` automatically tracks per-document download count via `/api/downloads/{slug}/increment`
  - It shows the live download count on the button
  - Import from `@/components/ViralDownloadButton`
- **Detonation ZIP note** — state that this document is auto-included in the detonation ZIP archive at `/api/archive/divine-download`
- Key facts panel (word count, category, date if known)
- Quote/excerpt from the document if available
- Link back to `/free-ebooks` and `/forensic-analysis`
- `data-testid` attributes on all interactive elements

### ABN/Copyright Block Template
```tsx
<div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
  <p className="text-xs text-zinc-400 leading-relaxed">
    © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
    All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
    Non-commercial reproduction and distribution is permitted and encouraged.
  </p>
</div>
```

### ViralDownloadButton Import & Usage
```tsx
import { ViralDownloadButton } from "@/components/ViralDownloadButton";

<ViralDownloadButton
  url="/documents/{pdf-filename}.pdf"
  label="Download — {Document Title}"
  filename="{pdf-filename}.pdf"
  size="lg"
  className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
/>
```

---

## Step 3 — Add to FreeEbooks.tsx MAJOR_PUBLICATIONS

File: `client/src/pages/FreeEbooks.tsx`

Add to the `MAJOR_PUBLICATIONS` array:
```ts
{ slug: "{slug}", title: "{Full Title}", subtitle: "{One-line subtitle}", coverFile: "cover-{slug}", category: "Legal" },
```

The EPUB/download endpoint for major publications is `/api/epub/publication/{slug}` — the server serves the PDF from `client/public/documents/` matched by slug.

The `DownloadButton` in FreeEbooks now automatically:
- Tracks download counts via `/api/downloads/{slug}/increment`
- Shows the live per-document count on the button
- The `LiveDownloadTotal` banner at the top of FreeEbooks shows the combined real-time total across all publications

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

## Step 5 — Detonation ZIP (Automatic — Confirm)

The detonation ZIP at `/api/archive/divine-download` **automatically includes ALL PDFs** from `client/public/documents/`. No code changes are needed. Placing the PDF in that folder is sufficient.

**Confirm** after upload: check that the PDF is in `client/public/documents/` and the detonation ZIP endpoint will serve it. The ZIP is rebuilt dynamically on each request, so new PDFs are immediately available.

On every dedicated page, include this note near the download button:
```tsx
<p className="text-xs text-zinc-500 mt-2">
  Also included in the{" "}
  <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
  {" "}— downloaded {totalDownloads}+ times globally.
</p>
```

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

The EPUB generator automatically embeds:
- Title, subtitle, author (Dr. Richard William McLean / Barran Dodger)
- ABN 78 833 496 164 in the copyright page
- Barran Dodger Legal & Ethical Trust Fund copyright notice
- Cover image

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
| Download tracking | `/api/downloads/{slug}` (GET count), `/api/downloads/{slug}/increment` (POST) |
| Live total counter | `/api/downloads/total` (GET combined total) |

---

## Naming Conventions

- Slug: `lowercase-hyphenated` matching the PDF subject
- Page component: `PascalCase` matching the slug
- Cover file: `cover-{slug}.png`
- PDF file: `{descriptive-name}.pdf` in `client/public/documents/`

---

## Download Tracking System

The site has a full live download tracking system:

- **Per-document count**: Every `ViralDownloadButton` and `DownloadButton` calls `/api/downloads/{slug}/increment` on click
- **Live count display**: The button shows the actual download count from the DB
- **Combined total**: `LiveDownloadTotal` on FreeEbooks and `DownloadSocialProofBanner` show the combined real-time total from `/api/downloads/total`
- **Analytics dashboard**: Full analytics at `/api/analytics/top-documents`, `/api/analytics/daily`, `/api/analytics/top-all-time`

Every new PDF page should use `ViralDownloadButton` (not a plain `<a>` tag) to ensure downloads are tracked.

---

## Example — Federal Court PID (Already Completed)

- PDF: `sia-lagos-federal-court-pid-march-2023.pdf`
- Slug: `federal-court-pid-sia-lagos`
- Cover: `cover-federal-court-pid-sia-lagos.png`
- FreeEbooks: MAJOR_PUBLICATIONS entry
- Category: Legal
- Referenced in forensic analyses as the "Federal Court PID to Sia Lagos" exhibit
- ABN and copyright block: included on dedicated page
- Detonation ZIP: auto-included (PDF is in `client/public/documents/`)
