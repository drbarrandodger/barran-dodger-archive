# Barran Dodger Justice Portal

![Barran Dodger Justice Portal Banner](./public/brand/banner.png)

<p align="center">
  <img src="./public/brand/icon.png" alt="Barran Dodger Justice Portal Icon" width="100" />
</p>

## Architecture

The Barran Dodger Justice Portal is a web application designed to productize Dr. McLean's forensic archive.

### Frontend
- **Framework:** Vite + React (TypeScript)
- **State Management:** React Context / Hooks
- **Styling:** CSS Modules / Tailwind (to be added)
- **Deployment:** Vercel Sandbox (local development)

### Backend / Persistence
- **Database:** Turso (via `team-db` CLI)
- **Schema:**
  - `memberships`: Tracks user subscription tiers and status.
  - `documents`: Stores metadata for the 788+ blockchain-verified forensic documents.
  - `dossiers`: Tracks AI-generated forensic reports requested by users.
  - `tasks`: (Inherited) Team coordination and task management.

### Key Features
- **Forensic Archive Browser:** Searchable interface for blockchain-verified evidence.
- **AI Forensic Dossiers:** On-demand synthesis of evidence for specific inquiries.
- **Justice Memberships:** Tiered access to exclusive updates and advocacy tools.
- **Automated Advocacy:** Tools for supporters to trigger evidence transmissions to stakeholders.

## Getting Started

### Development
1. Navigate to `/home/team/shared/portal`
2. Run `npm install`
3. Run `npm run dev`

The dev server is configured to bind to `0.0.0.0` on port `5173`.
