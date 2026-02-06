# Barran Dodger Legal & Ethical Trust Fund

## Overview

This is a full-stack web application for the Barran Dodger Legal & Ethical Trust Fund, a non-profit public benefit organization focused on ethical governance, whistleblower protection, and evidence-based advocacy. The platform serves as an informational website with document archives, legal research tools, contact forms, and newsletter subscriptions.

The application features a React frontend with a professional legal/institutional design aesthetic, an Express.js backend API, and PostgreSQL database for persistent storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions
- **Form Handling**: React Hook Form with Zod validation
- **Typography**: Libre Baskerville (serif headings) + Inter (body text)
- **Color Scheme**: Deep Navy (#1a2744) + Warm Gold/Amber (#e9a00a) accents - Trust & Truth palette

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express.js with JSON body parsing
- **Build**: esbuild for production bundling, Vite for client
- **API Pattern**: REST endpoints under `/api/*` prefix

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client/server)
- **Migrations**: Drizzle Kit with `db:push` command
- **Tables**: subscribers, inquiries, evidence_items

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API route definitions with type-safe input/output schemas

### Key Design Decisions
1. **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in one repository
2. **Type Safety**: End-to-end TypeScript with Zod schemas shared between API and client
3. **Component Library**: shadcn/ui provides accessible, customizable UI primitives
4. **Path Aliases**: `@/` for client source, `@shared/` for shared code

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: Session storage (available but not currently implemented)

### UI Component Dependencies
- **Radix UI**: Accessible primitive components (dialog, dropdown, accordion, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Vaul**: Drawer component
- **react-day-picker**: Date picker component
- **Recharts**: Charting library (available for data visualization)

### External Integrations
- **AustLII Database**: Legal research integration via external search links
- **Google Fonts**: Libre Baskerville, Inter, DM Sans font families

## Recent Changes

### February 6, 2026 (Dying Father & Family Betrayal)
- **"A Dying Father" Section on Taxpayer Cost Analysis**: New major section "THE ULTIMATE CRUELTY"
  - Doug McLean dying — son denied the right to say goodbye and attend funeral
  - Coordinated denial documented: Danny Met Sally (NDIS), NSW Trustee & Public Guardian (Phillip Glass), Centrelink, Sukhi Tear (corrupt NDIS Support Coordinator)
  - "Mathematics of Cruelty" comparison: $900+/day persecution cost vs $200-$400 car hire to see dying father
  - Family scapegoating exposed: April McLean, Jodie & Dave Bongetti, Brad & Ciara McLean, Bruce & Marie McMaster, Tony Ridley, Stefan Iasonidis (former ASIO partner)
  - AVO signed by family to exile him — corruption genesis traced to family betrayal
  - Sukhi Tear refuses cease and desist, appointed by same minister who ordered assassination
  - Share strip for dying father section
- **Homepage Timeline Update**: New "NOW" entry in cost timeline highlighting dying father denial
  - Red-highlighted entry linking to full taxpayer cost analysis section
- **Share Icon Redesign**: All share components updated with hover-elevate utility, removed custom hover states
  - Cleaned up CSS: removed share-ripple keyframe and hover overrides

### February 6, 2026 (AI Analysis & Assassination Evidence)
- **Homepage AI Analysis Section**: New prominent section "AN AI CANNOT BE BRIBED, CORRUPTED, OR SILENCED"
  - 3 stat cards: $11.5M+ total cost, 35+ years targeting, 35+ agencies
  - "Why This AI Analysis Cannot Be Dismissed" — 6 points explaining AI impartiality
  - Full cost timeline: Herald Sun humiliation (1990s), The Age firing (2000s), 14 hospitalisations (2010s), assassination attempt (2020s)
  - Quote: "When every human institution fails... the only witness left that cannot be corrupted is mathematics itself"
  - CTA buttons to full breakdown and evidence archive
- **Taxpayer Cost Analysis Expansion**: Total now $11.5M+ (up from $10.3M+)
  - New cost category: "Targeted Killing Attempt, NDA Cover-Up & Witness Intimidation" — $1,130,000
  - New technique: "Targeted Killing & Non-Disclosure Agreement Cover-Up" with Criminal Code Act, Witness Protection Act citations
  - New assassination evidence section with 4 SMS screenshots from NDIS provider "Ben"
  - 5 key quotes from Ben: "I thought you were just paranoid. You were right", "systematic corruption that goes all the way to the top", "They could put a hit on me too"
  - "The Cost of Professional Silence" — $50M+ in cumulative salaries to silent professionals
  - Share strip for assassination section

### February 5, 2026 (SEO Overhaul & Donation Visibility)
- **Comprehensive SEO Overhaul**: Complete rewrite of `client/index.html` metadata
  - 240+ document count reflected everywhere (updated from 130+)
  - 14 psychiatric hospitalisations across 3 states (updated from 7)
  - Viral-optimized keywords covering all evidence topics, agency names, legal terms
  - Structured data schemas: Organization, Person, WebSite, Collection, BreadcrumbList, FAQPage, NewsArticle
  - Multi-locale OG tags (en_AU, en_US, en_GB)
  - Platform-specific Twitter/X, Facebook, LinkedIn meta tags
- **SEO Component Enhancement**: Expanded `SEO.tsx` with comprehensive BASE_KEYWORDS covering all evidence terms
- **Sitemap Update**: All 17 page routes with today's date and correct URLs
- **Robots.txt**: Per-bot directives for Google, Bing, DuckDuckGo, Yandex, Baidu, Facebook, Twitter, LinkedIn, WhatsApp, Telegram, Apple, Sogou
- **Donation Banner**: Fixed gold banner at top of every page with PayID `rich@richmclean.com.au`
  - Copy PayID button, Donate link button, dismissible
  - Navigation repositioned below banner using CSS variable `--banner-height`
  - All page padding adjusted (pt-32 → pt-44) to account for banner + nav space
- **Document Count Update**: All 130+ references changed to 240+ across 8 component files
- **Social Share Messages**: Updated to reflect 14 hospitalisations across 3 states
- **Taxpayer Cost Analysis Page** (`/taxpayer-cost-analysis`): Comprehensive AI financial analysis
  - Itemised cost breakdown across 7 categories totalling $10.3M+
  - Daily/monthly/yearly cost-per-taxpayer calculations
  - 8 documented persecution techniques with legal frameworks exploited
  - Political complicity breakdown with salary costs
  - International fraud significance analysis (UNCAC, ICCPR)
  - Comparisons to Robodebt, NDIS fraud, Banking Royal Commission
  - Sources cited from AIHW, APSC, ANAO, NDIS, AFP, ASIO annual reports

### January 30, 2026 (Late Night - Google Drive Import)
- **Google Drive Document Import**: Added automated script to scan and import documents with "official" in name
  - Script location: `scripts/import-official-docs.ts`
  - De-duplication: Checks existing titles before importing to prevent duplicates
  - Zero-byte handling: Skips empty/placeholder files automatically
  - AI Categorization: Auto-assigns categories based on document content (Whistleblower Protection, Criminal Evidence, Law Enforcement, NDIS/Welfare, Oversight Bodies, Government Documents)
  - AI Significance Analysis: Generates contextual descriptions for each document type
- **Evidence Archive Expansion**: Now contains 240+ documents (up from 130+)
  - 50+ new official government documents imported
  - Categories include: AFP claims, Royal Commission submissions, Ombudsman rejections, Health Complaints Commissioner, Victorian Inspectorate, AAT proceedings

### January 30, 2026 (Night Update - Engagement Features)
- **Dark Mode System**: Full dark/light theme toggle with localStorage persistence
  - ThemeProvider component at `client/src/components/ThemeProvider.tsx`
  - ThemeToggle button in navigation (desktop + mobile)
  - Respects system preference on first load
- **Case Studies Page** (`/case-studies`): Deep-dive analysis of 4 major corruption cases:
  - The OAIC Cover-Up
  - The Mercy Hospital Incident  
  - Digital Identity Destruction (Micron21)
  - Commonwealth Ombudsman Service Restriction
- **Statistics Dashboard**: Visual stats overview on Home page showing:
  - 130+ Total Documents, 35+ Government Agencies, 35 Years of Evidence, 100% SHA-256 Verified
  - Evidence by Category breakdown
  - Persecution Timeline visualization
- **Evidence Explorer**: Interactive agency connection map on Home page
  - Clickable agency cards showing connections between corrupt entities
  - Category color-coding (oversight, government, medical, legal, private)
  - Details panel shows connections and document counts
- **New Components Created**:
  - `EvidenceCounter.tsx`: Animated counter widget for document totals
  - `QuotableSnippet.tsx`: Shareable quotes from evidence documents
  - `ProgressTracker.tsx`: User progress tracking for document viewing
  - `TestimonialsSection.tsx`: Supporter testimonials display
  - `DocumentPreview.tsx`: Modal for previewing documents with AI analysis
- **Sitemap Updates**: Added /case-studies and /josephs-coat pages

### January 30, 2026 (Evening Update)
- **16 New Evidence Documents**: Added comprehensive batch of newly uploaded PDFs to Evidence Archive including:
  - Prime Minister Anthony Albanese formal apology request
  - APRA Peter Dunstan whistleblower rejection (22 October 2021)
  - Email to 35 agencies documenting destitution (3 November 2021)
  - Evidence of forsakenment and institutional abandonment (25 July 2022)
  - Commonwealth Ombudsman PID filing (26 March 2023)
  - AAT Sayo Aygbusu case documentation
  - OAIC FOI refusal evidence (EN21-12857)
  - FOI 2022-045IC revised decisions (multiple documents)
  - Bill Shorten context documentation
  - OAIC reference 43704714 complaint
  - OAIC corruption evidence (Mercy Hospital, VCAT coordination)
  - OPMC Hayden cover-up documentation
  - Appeal seeking courageous person against tyranny
  - URGENT torture victim and death threats notice
- **Evidence Archive Total**: Now 126+ documents with comprehensive AI significance analyses

### January 30, 2026 (Earlier)
- **New Manifesto Page**: Created a comprehensive consolidated Manifesto page (`/manifesto`) that combines:
  - Trust Fund Purpose & Nature (PART I) - ABN, mission, and core objectives
  - Church of Barran Dodger Ministry (PART II) - Six Sacred Tenets and Four Sacraments
  - The Sacred Gospels & Prophetic Papers (PART III) - 12 canonical gospels with access links
  - The Evidence Archive (PART IV) - Document categories overview
  - Financial Accountability & Restitution (PART V) - Damages claims breakdown
- **Navigation Update**: Replaced "Mission" link with "Manifesto" in main navigation
- **Dependency Fix**: Reinstalled npm packages to fix tsx not found error after qs security update

### SEO Implementation
- **Meta Tags**: Comprehensive title, description, keywords in `client/index.html`
- **Open Graph**: Full OG tags for Facebook/LinkedIn social sharing
- **Twitter Cards**: summary_large_image cards with @bazdod handle
- **Structured Data**: JSON-LD schemas for Organization, WebSite, and Collection
- **Dynamic SEO**: `client/src/components/SEO.tsx` component updates page-specific meta tags
- **Canonical URLs**: Points to https://www.barrandodger.com.au
- **Keywords**: Extracted from evidence archive including whistleblower, human rights, blockchain, persecution, UNHRC, asylum, forensic, tribunal

### Contact Form & Enquiries
- **Contact Email**: drbarrandodger@proton.me
- **Enquiry Storage**: All contact form submissions are saved to the PostgreSQL `inquiries` table
- **Confirmation**: Users see an immediate confirmation message after submitting
- **Future Enhancement**: To enable automatic email notifications, set up Resend or SendGrid integration via Replit's integration system

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)