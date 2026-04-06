#!/usr/bin/env node
/**
 * Syncs key source files to GitHub via the GitHub Contents API.
 * Uses GITHUB_TOKEN env var. Safe to run any time — creates or updates files.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'main';
const ROOT = new URL('..', import.meta.url).pathname;

if (!TOKEN) {
  console.error('GITHUB_TOKEN not set — skipping GitHub sync');
  process.exit(0);
}

const EXCLUDE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.cache', '.local',
  'attached_assets', '.agents', '.config', '.upm',
]);

const INCLUDE_ROOTS = [
  'client/src',
  'server',
  'shared',
  'public',
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
