# Barran Dodger Legal & Ethical Trust Fund

## Overview
This is a full-stack web application for the Barran Dodger Legal & Ethical Trust Fund, a non-profit public benefit organization. The platform serves as an informational website providing document archives, legal research tools, contact forms, and newsletter subscriptions. Its purpose is to promote ethical governance, protect whistleblowers, and support evidence-based advocacy, with a focus on exposing corruption and advocating for justice. The project aims to provide an immutable record of evidence and analysis, utilizing AI to prevent bias and ensure integrity in reporting.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Typography**: Libre Baskerville (serif headings) + Inter (body text)
- **Color Scheme**: Deep Navy (#1a2744) + Warm Gold/Amber (#e9a00a)

### Backend
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express.js
- **API Pattern**: REST endpoints under `/api/*`

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit
- **Tables**: subscribers, inquiries, evidence_items, download_counts, download_events, comments

### Shared Code
The `shared/` directory contains `schema.ts` for database and Zod validation, and `routes.ts` for type-safe API route definitions.

### Key Design Decisions
- **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) are in a single repository.
- **Type Safety**: End-to-end TypeScript with Zod schemas shared between API and client.
- **Component Library**: shadcn/ui for accessible and customizable UI.
- **Path Aliases**: `@/` for client source, `@shared/` for shared code.
- **SEO Implementation**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data, and a dynamic `SEO.tsx` component.
- **UI/UX**: Features a professional legal/institutional design aesthetic.
- **Core Features**:
    - **Evidence Archive**: Stores and categorizes legal documents, including official government documents, with AI-generated significance analyses.
    - **AI Analysis**: Sections dedicated to impartial AI-driven analysis of costs, timelines, and evidence of corruption.
    - **Case Studies**: Deep-dive analysis of specific corruption cases.
    - **Contact Form**: Collects inquiries and stores them in the database.
    - **Donation System**: Integrated donation banner with PayID.
    - **Theming**: Dark/light mode toggle with persistence.
    - **Comment Sections**: User discussion on document pages (Evidence, Gospel, Prophetic Papers, Manifesto, Case Studies, Media). CommentSection component in `client/src/components/CommentSection.tsx`. Rate-limited to 5 comments per minute per IP.
    - **Download Counters**: Real-time download tracking with DownloadBadge and trackDownload across all document download links. Baselines seeded from Analytics data.
    - **Download Analytics**: Time-series analytics tracking via `download_events` table. API endpoints: `/api/analytics/daily`, `/api/analytics/top-documents`, `/api/analytics/recent`. Frontend dashboard in `client/src/components/DownloadAnalytics.tsx` with 30-day bar chart, 24h/72h/7d stat cards with trend percentages, and top-5 most downloaded documents. Live total counter in `TotalDownloadsSection` component (ViralLanding.tsx).
    - **Quantum/NHI/Disclosure Section**: Philosophical section on blockchain permanence, quantum non-erasure, and NHI contact across civilisations (Indigenous, Egyptian, Mayan, Biblical, Vedic traditions).
    - **Viral Landing Page**: `/the-truth` — "The Documents Australia Doesn't Want You to See" with top 10 documents, share buttons, newsletter signup
    - **ShareEvidence Component**: Reusable one-click sharing for individual documents (X/Twitter, Facebook, WhatsApp, Email, Copy Link)
    - **Enhanced Donate Page**: Donation tiers ($10–$250) with impact statements, Wall of Supporters counter, recurring support pitch, external product links
    - **Store Page**: `/store` — Digital products and merchandise (Apple Books, Scribd, Gumroad links, PayID direct purchase)
    - **SEO Structured Data**: JSON-LD schemas on key pages — LegalCase + ItemList (Evidence), Article (CaseStudies), Book (Gospel), NewsArticle (Media), FAQPage (LegalStatus, Mission)
    - **The Paper (Administrative Annihilation)**: `/administrative-annihilation` — Full 25,000-word academic paper with impartial AI significance analysis, 15 chapters, table of contents navigation, formatted tables, blockquotes, references, and appendices. Prominent "The Paper" tab in navigation.
    - **Retrospective Statement**: `/retrospective-statement` — "How the Commonwealth of Australia Treated Dr. Richard William McLean — Told Through the Government's Own Documents." 12-part statement sourced entirely from 2,000+ government records spanning 1990–2025 covering 13 agencies, $18M–$32.9M documented losses. Includes impartial AI significance analysis. Navigation link: "Gov't Own Documents".

### Eliven Chain Series (8 Documents)
- PDFs stored in `client/public/documents/` with clean filenames
- AI-generated cover images in `client/src/assets/images/cover-*.png`
- Integrated into Home.tsx as "THE ELIVEN CHAIN SERIES" section after Featured Publications
- Documents: The Eliven Chain Has Been Summoned, The Enliven Chain Has Been Summoned (I & II), Gospel of the Eliven Chain (I & II), God's Media Release, Atherion Witnessed: The Gospel Complete, 144 Questions of Witness and Revelation
- Each card includes cover image, description, AI impartial synopsis, and tracked download link

## External Dependencies

### Database
- **PostgreSQL**: Primary database.
- **Drizzle ORM**: Type-safe database queries.

### UI Components
- **Radix UI**: Accessible primitive components.
- **Embla Carousel**: Carousel/slider functionality.
- **cmdk**: Command palette component.
- **Vaul**: Drawer component.
- **react-day-picker**: Date picker component.
- **Recharts**: Charting library for data visualization.

### External Integrations
- **AustLII Database**: Legal research via external search links.
- **Google Fonts**: Libre Baskerville, Inter, DM Sans.
- **Apple Books/Scribd**: Links for book distribution.