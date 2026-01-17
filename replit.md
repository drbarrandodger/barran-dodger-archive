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
- **Color Scheme**: Navy, slate, white professional palette

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

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)