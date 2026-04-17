#!/usr/bin/env node
/**
 * Syncs key source files to GitHub via the GitHub Contents API.
 *
 * Uses GitHub's Git Trees API to pre-fetch all current SHAs in one request,
 * then computes local git blob SHAs to skip unchanged files entirely.
 * Only changed files consume write API quota.
 *
 * TOKEN PRIORITY:
 *   1. GH_INTEGRATION_TOKEN (set by the Replit GitHub integration — recommended)
 *   2. GH_SYNC_TOKEN        (custom secret)
 *   3. GITHUB_TOKEN         (classic PAT — may expire or lose repo access)
 *
 * 409 conflicts are resolved by parsing the "is at {SHA}" from GitHub's error
 * message and retrying once with the correct SHA.
 */

import { readFileSync, readdirSync, writeFileSync, unlinkSync, existsSync, statSync } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const TOKEN = process.env.GH_INTEGRATION_TOKEN || process.env.GH_SYNC_TOKEN || process.env.GITHUB_TOKEN;
const REPO = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'main';
const ROOT = new URL('..', import.meta.url).pathname;
const FILE_DELAY_MS = 150;

// ── Concurrency + rate guards ─────────────────────────────────────────────────
const LOCK_FILE = '/tmp/gh-sync.lock';
const LAST_FILE = '/tmp/gh-sync-last';
const MIN_INTERVAL_MS = 2 * 60 * 1000;   // 2 minutes between syncs
const LOCK_MAX_AGE_MS = 10 * 60 * 1000;  // consider lock stale after 10 minutes

function lockIsHeld() {
  if (!existsSync(LOCK_FILE)) return false;
  try {
    const age = Date.now() - statSync(LOCK_FILE).mtimeMs;
    if (age > LOCK_MAX_AGE_MS) {
      unlinkSync(LOCK_FILE); // stale lock — remove and proceed
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function tooSoon() {
  if (!existsSync(LAST_FILE)) return false;
  try {
    const last = parseInt(readFileSync(LAST_FILE, 'utf8').trim(), 10);
    return (Date.now() - last) < MIN_INTERVAL_MS;
  } catch {
    return false;
  }
}

if (lockIsHeld()) {
  console.log('Another sync is already running — skipping this run to prevent conflicts.');
  process.exit(0);
}

if (tooSoon()) {
  console.log('Last sync was less than 2 minutes ago — skipping to avoid rate-limit exhaustion.');
  process.exit(0);
}

// Acquire lock
writeFileSync(LOCK_FILE, String(process.pid), 'utf8');
function releaseLock() {
  try { unlinkSync(LOCK_FILE); } catch {}
  try { writeFileSync(LAST_FILE, String(Date.now()), 'utf8'); } catch {}
}
process.on('exit', releaseLock);
process.on('SIGINT', () => { releaseLock(); process.exit(130); });
process.on('SIGTERM', () => { releaseLock(); process.exit(143); });
// ─────────────────────────────────────────────────────────────────────────────

if (!TOKEN) {
  console.error('No GitHub token found. Set GH_INTEGRATION_TOKEN or GH_SYNC_TOKEN.');
  process.exit(0);
}

async function ghFetch(url, opts = {}) {
  return fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Cache-Control': 'no-cache',
      ...(opts.headers || {}),
    },
  });
}

// ── Auth check ──────────────────────────────────────────────────────────────
async function checkAuth() {
  const res = await ghFetch(`https://api.github.com/repos/${REPO}`);
  if (res.status === 401 || res.status === 403) {
    const d = await res.json();
    console.error(`\n⚠️  TOKEN ERROR (${res.status}): ${d.message}`);
    console.error('Fix: refresh GH_INTEGRATION_TOKEN / GH_SYNC_TOKEN with repo write access.\n');
    process.exit(1);
  }
  if (res.status === 404) {
    console.error(`\n⚠️  REPO NOT FOUND: ${REPO}`);
    process.exit(1);
  }
}

// ── Rate limit pre-check ─────────────────────────────────────────────────────
const RATE_LIMIT_MIN_REMAINING = 200;
const RATE_LIMIT_MIN_RESET_SECS = 5 * 60; // 5 minutes

async function checkRateLimit() {
  let res;
  try {
    res = await ghFetch('https://api.github.com/rate_limit');
  } catch (e) {
    console.warn(`⚠️  Could not fetch rate limit (${e.message}) — proceeding anyway.`);
    return;
  }

  if (!res.ok) {
    console.warn(`⚠️  Rate limit check returned HTTP ${res.status} — proceeding anyway.`);
    return;
  }

  const data = await res.json();
  const core = data?.resources?.core;
  if (!core) {
    console.warn('⚠️  Unexpected rate_limit response shape — proceeding anyway.');
    return;
  }

  const { remaining, reset, limit } = core;
  const resetInSecs = reset - Math.floor(Date.now() / 1000);
  const resetAt = new Date(reset * 1000).toLocaleTimeString();

  console.log(`GitHub API quota: ${remaining}/${limit} remaining (resets at ${resetAt})`);

  if (remaining < RATE_LIMIT_MIN_REMAINING) {
    console.error(
      `\n⚠️  QUOTA TOO LOW: Only ${remaining} API requests remain (minimum required: ${RATE_LIMIT_MIN_REMAINING}).`
    );
    console.error(`    Quota resets at ${resetAt} (in ~${Math.max(0, Math.ceil(resetInSecs / 60))} minute(s)).`);
    console.error('    Aborting sync to prevent a partial update. Please retry after the quota resets.\n');
    process.exit(0);
  }

  if (resetInSecs > 0 && resetInSecs <= RATE_LIMIT_MIN_RESET_SECS) {
    console.error(
      `\n⚠️  QUOTA RESET IMMINENT: Quota resets in ~${Math.ceil(resetInSecs / 60)} minute(s) (${remaining} requests remaining).`
    );
    console.error('    Aborting sync to prevent a partial update mid-reset. Please retry after the quota resets.\n');
    process.exit(0);
  }
}

// ── Fetch all current SHAs via Git Trees API (2 calls total) ────────────────
async function fetchAllShas() {
  const branchRes = await ghFetch(`https://api.github.com/repos/${REPO}/branches/${BRANCH}`);
  if (!branchRes.ok) {
    const d = await branchRes.json();
    console.error(`⚠️  Failed to get branch: ${d.message}`);
    process.exit(1);
  }
  const branchData = await branchRes.json();
  const treeSha = branchData.commit.commit.tree.sha;

  const treeRes = await ghFetch(
    `https://api.github.com/repos/${REPO}/git/trees/${treeSha}?recursive=1`
  );
  if (!treeRes.ok) {
    const d = await treeRes.json();
    console.error(`⚠️  Failed to get tree: ${d.message}`);
    process.exit(1);
  }
  const treeData = await treeRes.json();

  const shaMap = {};
  for (const item of treeData.tree) {
    if (item.type === 'blob') shaMap[item.path] = item.sha;
  }
  if (treeData.truncated) {
    console.warn('⚠️  Tree response was truncated — some SHAs may be missing, retry will handle them.');
  }
  return shaMap;
}

// ── Compute git blob SHA locally (no API call needed) ────────────────────────
function computeBlobSha(buf) {
  const header = `blob ${buf.length}\0`;
  const hash = createHash('sha1');
  hash.update(header, 'binary');
  hash.update(buf);
  return hash.digest('hex');
}

// ── File collection ──────────────────────────────────────────────────────────
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

const MAX_FILE_BYTES = 50 * 1024 * 1024;

// ── Push a single file ────────────────────────────────────────────────────────
async function pushFile(relPath, shaMap) {
  const fullPath = join(ROOT, relPath);
  let buf;
  try { buf = readFileSync(fullPath); } catch { return `SKIP (missing): ${relPath}`; }
  if (buf.length > MAX_FILE_BYTES) return `SKIP (too large ${(buf.length / 1024 / 1024).toFixed(1)}MB): ${relPath}`;

  const localSha = computeBlobSha(buf);
  const existingSha = shaMap[relPath] || null;

  if (existingSha && existingSha === localSha) {
    return `SKIP (unchanged): ${relPath}`;
  }

  const content = buf.toString('base64');
  const body = { message: `Auto-sync: ${relPath}`, content, branch: BRANCH };
  if (existingSha) body.sha = existingSha;

  const res = await ghFetch(`https://api.github.com/repos/${REPO}/contents/${relPath}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  let d;
  try { d = await res.json(); } catch { return `ERR (${res.status}, bad JSON): ${relPath}`; }

  if (res.status === 401 || res.status === 403) {
    console.error(`\n⚠️  TOKEN ERROR (${res.status}): ${d.message}`);
    console.error('Fix: refresh GH_INTEGRATION_TOKEN with Contents write access.\n');
    process.exit(1);
  }

  if (res.status === 409) {
    const msg = d.message || '';
    const isAtMatch = msg.match(/is at\s+([a-f0-9]{40})/i);
    if (isAtMatch) {
      const correctSha = isAtMatch[1];
      shaMap[relPath] = correctSha;
      const retryBody = { message: `Auto-sync: ${relPath}`, content, branch: BRANCH, sha: correctSha };
      const retryRes = await ghFetch(`https://api.github.com/repos/${REPO}/contents/${relPath}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(retryBody),
      });
      let rd;
      try { rd = await retryRes.json(); } catch { return `ERR (${retryRes.status}, bad JSON retry): ${relPath}`; }
      return retryRes.status <= 201
        ? `OK (retry): ${relPath}`
        : `ERR (${retryRes.status}): ${relPath} — ${rd.message}`;
    }
    return `ERR (409): ${relPath} — ${msg}`;
  }

  return res.status <= 201
    ? `OK: ${relPath}`
    : `ERR (${res.status}): ${relPath} — ${d.message}`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
await checkAuth();
await checkRateLimit();
console.log('Fetching current file SHAs from GitHub...');
const shaMap = await fetchAllShas();
console.log(`Loaded ${Object.keys(shaMap).length} existing file SHAs.`);
console.log('(Unchanged files will be skipped — only changed content is pushed)\n');

const files = [
  ...INCLUDE_ROOT_FILES,
  ...INCLUDE_ROOTS.flatMap(r => collect(join(ROOT, r), r)),
];

console.log(`Syncing ${files.length} files to GitHub (${REPO})…\n`);

let ok = 0, skip = 0, err = 0;
for (const f of files) {
  const result = await pushFile(f, shaMap);
  console.log(result);
  if (result.startsWith('OK')) ok++;
  else if (result.startsWith('SKIP')) skip++;
  else err++;
  if (!result.startsWith('SKIP')) {
    await new Promise(r => setTimeout(r, FILE_DELAY_MS));
  }
}

console.log(`\nDone. ${ok} pushed, ${skip} skipped (unchanged), ${err} errors.`);
