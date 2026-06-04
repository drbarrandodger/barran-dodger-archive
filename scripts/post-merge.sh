#!/bin/bash
set -e
npm install
npm run db:push
node scripts/sync-to-github.mjs || echo "Warning: GitHub sync failed (non-fatal)"
