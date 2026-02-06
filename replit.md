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
- **Tables**: subscribers, inquiries, evidence_items

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