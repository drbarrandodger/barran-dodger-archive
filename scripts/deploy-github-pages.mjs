#!/usr/bin/env node
/**
 * Deploys the core built frontend to github-pages-deploy branch.
 * Only pushes: index.html, 404.html, .nojekyll, JS bundle, CSS bundle.
 * Fast — ~6 API calls total.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.GH_INTEGRATION_TOKEN || process.env.GH_SYNC_TOKEN || process.env.GITHUB_TOKEN;
const REPO   = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'github-pages-deploy';
const DIST   = new URL('../dist/public', import.meta.url).pathname;

if (!TOKEN) { console.error('No GitHub token found.'); process.exit(1); }

async function gh(path, opts = {}) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw new Error(`GitHub ${res.status} ${path}: ${typeof data === 'object' ? data.message : data}`);
  return data;
}

async function createBlob(buf) {
  const data = await gh(`/repos/${REPO}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({ content: buf.toString('base64'), encoding: 'base64' }),
  });
  return data.sha;
}

// Find the built JS and CSS filenames
import { readdirSync } from 'fs';
const assetsDir = join(DIST, 'assets');
const assetFiles = readdirSync(assetsDir);
const jsMain  = assetFiles.find(f => f.startsWith('index-') && f.endsWith('.js'));
const cssMain = assetFiles.find(f => f.startsWith('index-') && f.endsWith('.css'));
const jsEs    = assetFiles.find(f => f.startsWith('index.es-') && f.endsWith('.js'));
const jsDom   = assetFiles.find(f => f.startsWith('purify') && f.endsWith('.js'));

const CORE_FILES = [
  { src: join(DIST, 'index.html'),       dest: 'index.html' },
  { src: join(DIST, '404.html'),         dest: '404.html' },
  { src: join(DIST, '.nojekyll'),        dest: '.nojekyll' },
];
if (cssMain) CORE_FILES.push({ src: join(assetsDir, cssMain), dest: `assets/${cssMain}` });
if (jsEs)    CORE_FILES.push({ src: join(assetsDir, jsEs),    dest: `assets/${jsEs}` });
if (jsDom)   CORE_FILES.push({ src: join(assetsDir, jsDom),   dest: `assets/${jsDom}` });
if (jsMain)  CORE_FILES.push({ src: join(assetsDir, jsMain),  dest: `assets/${jsMain}` });

async function run() {
  console.log('Files to push:');
  for (const f of CORE_FILES) {
    const size = readFileSync(f.src).length;
    console.log(`  ${f.dest} (${(size/1024).toFixed(0)}KB)`);
  }

  // Get parent SHA
  let parentSha;
  try {
    const ref = await gh(`/repos/${REPO}/git/ref/heads/${BRANCH}`);
    parentSha = ref.object.sha;
    console.log(`\nBranch exists at ${parentSha.slice(0,7)}`);
  } catch {
    const main = await gh(`/repos/${REPO}/git/ref/heads/main`);
    parentSha = main.object.sha;
    console.log(`\nWill create ${BRANCH} from main ${parentSha.slice(0,7)}`);
  }

  // Create blobs
  console.log('\nCreating blobs...');
  const treeItems = [];
  for (const f of CORE_FILES) {
    const buf = readFileSync(f.src);
    process.stdout.write(`  ${f.dest}... `);
    const sha = await createBlob(buf);
    treeItems.push({ path: f.dest, mode: '100644', type: 'blob', sha });
    console.log('✓');
  }

  // Create tree (no base_tree — fresh/clean gh-pages)
  console.log('\nCreating tree...');
  const tree = await gh(`/repos/${REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ tree: treeItems }),
  });

  // Create commit
  console.log('Creating commit...');
  const commit = await gh(`/repos/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message: `Deploy GitHub Pages — ${new Date().toISOString().slice(0,10)}`,
      tree: tree.sha,
      parents: [parentSha],
    }),
  });

  // Update branch ref
  console.log(`Updating ${BRANCH}...`);
  try {
    await gh(`/repos/${REPO}/git/refs/heads/${BRANCH}`, {
      method: 'PATCH',
      body: JSON.stringify({ sha: commit.sha, force: true }),
    });
  } catch {
    await gh(`/repos/${REPO}/git/refs`, {
      method: 'POST',
      body: JSON.stringify({ ref: `refs/heads/${BRANCH}`, sha: commit.sha }),
    });
  }

  console.log(`\n✅ Done! Commit: ${commit.sha.slice(0,7)}`);
  console.log(`   https://drbarrandodger.github.io/barran-dodger-archive/`);
  console.log(`\n   Note: GitHub Pages takes 1-3 minutes to go live after push.`);
}

run().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
