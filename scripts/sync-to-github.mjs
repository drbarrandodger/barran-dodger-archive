#!/usr/bin/env node
/**
 * Syncs key source files to GitHub via the GitHub Contents API.
 * 
 * TOKEN PRIORITY:
 *   1. GH_SYNC_TOKEN   (set by the Replit GitHub integration — recommended)
 *   2. GITHUB_TOKEN    (classic PAT — may expire or lose repo access)
 *
 * If the active token returns 404/403, the script exits with a clear message.
 * To refresh: set GH_SYNC_TOKEN to a valid PAT with repo write access.
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.GH_INTEGRATION_TOKEN || process.env.GH_SYNC_TOKEN || process.env.GITHUB_TOKEN;
const REPO = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'main';
const ROOT = new URL('..', import.meta.url).pathname;

if (!TOKEN) {
  console.error('No GitHub token found (GH_SYNC_TOKEN or GITHUB_TOKEN not set).');
  console.error('Set GH_SYNC_TOKEN to a PAT with repo write access to enable syncing.');
  process.exit(0);
}

const EXCLUDE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.cache', '.local',
  'attached_assets', '.agents', '.config', '.upm',
]);

const INCLUDE_ROOTS = [
  'client/src',
  'client/public',
  'server',
  'shared',
  'public',
  'scripts',
];

const INCLUDE_ROOT_FILES = [
  'replit.md',
  'package.json',
  'vite.config.ts',
  'tailwind.config.ts',
  'drizzle.config.ts',
  'tsconfig.json',
  '.gitignore',
];

function collect(dir, base = '') {
  let results = [];
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return results; }
  for (const e of entries) {
    if (EXCLUDE_DIRS.has(e.name)) continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      results = results.concat(collect(full, rel));
    } else {
      results.push(rel);
    }
  }
  return results;
}

async function getFileSha(path) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github+json' },
  });
  if (res.status === 200) return (await res.json()).sha;
  if (res.status === 401 || res.status === 403) {
    const d = await res.json();
    console.error(`\n⚠️  TOKEN ERROR (${res.status}): ${d.message}`);
    console.error('The active GitHub token does not have access to this repo.');
    console.error('Fix: set GH_SYNC_TOKEN to a valid PAT with Contents: write access.\n');
    process.exit(1);
  }
  return null;
}

async function pushFile(relPath) {
  const fullPath = join(ROOT, relPath);
  let buf;
  try { buf = readFileSync(fullPath); } catch { return `SKIP (missing): ${relPath}`; }
  const content = buf.toString('base64');
  const existingSha = await getFileSha(relPath);
  const body = { message: `Auto-sync: ${relPath}`, content, branch: BRANCH };
  if (existingSha) body.sha = existingSha;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${relPath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const d = await res.json();
  if (res.status === 401 || res.status === 403) {
    console.error(`\n⚠️  TOKEN ERROR (${res.status}): ${d.message}`);
    console.error('Fix: refresh GH_SYNC_TOKEN with a PAT that has Contents: write access.\n');
    process.exit(1);
  }
  if (res.status === 404) {
    console.error(`\n⚠️  REPO NOT FOUND or NO ACCESS (404): ${relPath}`);
    console.error(`Repo: ${REPO}  Branch: ${BRANCH}`);
    console.error('Check: (1) repo exists, (2) token has Contents: write access.\n');
    process.exit(1);
  }
  return res.status <= 201
    ? `OK: ${relPath}`
    : `ERR (${res.status}): ${relPath} — ${d.message}`;
}

// Collect all files under included roots + root-level files
const files = [
  ...INCLUDE_ROOT_FILES,
  ...INCLUDE_ROOTS.flatMap(r => collect(join(ROOT, r), r)),
];

console.log(`Syncing ${files.length} files to GitHub (${REPO})…\n`);

let ok = 0, skip = 0, err = 0;
for (const f of files) {
  const result = await pushFile(f);
  console.log(result);
  if (result.startsWith('OK')) ok++;
  else if (result.startsWith('SKIP')) skip++;
  else err++;
  await new Promise(r => setTimeout(r, 200));
}

console.log(`\nDone. ${ok} pushed, ${skip} skipped, ${err} errors.`);
