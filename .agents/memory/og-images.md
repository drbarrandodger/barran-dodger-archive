---
name: OG images — page-specific
description: Page-specific OG images exist for 5 key pages; SEO image prop needs absolute URL
---

# OG Images

**Main OG image:** `client/public/og-image.png` — used by default in SEO component and index.html

**Page-specific OG images** (all in `client/public/`):
- `og-admin-annihilation.png` → AdminAnnihilation.tsx SEO
- `og-retrospective.png` → RetrospectiveStatement.tsx SEO
- `og-evidence.png` → Evidence.tsx SEO
- `og-verdict.png` → VerdictBeforeTheCourt.tsx SEO
- `og-publications.png` → Publications.tsx SEO
- `church-of-barran-cover.png` → ChurchOfBarranResonanceDodger.tsx SEO

**Why:** SEO component's `image` prop must be an absolute URL (`https://barrandodger.com/og-*.png`), not a relative path (`/og-*.png`). Relative paths don't work for OG scraping by social media bots.

**How to apply:** When adding new page OG images, always use `image="https://barrandodger.com/FILENAME.png"` in the SEO component, never just `/FILENAME.png`.
