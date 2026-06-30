#!/usr/bin/env node
/**
 * Pushes all visual assets (images + fonts) from dist/public/assets/
 * to the gh-pages branch, preserving the HTML/JS/CSS already there.
 * Uses parallel batches of 8 concurrent blob uploads for speed.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const TOKEN  = process.env.GH_INTEGRATION_TOKEN;
const REPO   = 'drbarrandodger/barran-dodger-archive';
const BRANCH = 'gh-pages';
const DIST   = '/home/runner/workspace/dist/public';
const BATCH  = 15;          // concurrent API calls
const MAX_MB = 49;          // skip individual files over 49MB (GitHub API hard limit)

if (!TOKEN) { console.error('No GH_INTEGRATION_TOKEN'); process.exit(1); }

async function gh(path, opts = {}) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept:        'application/vnd.github+json',
      'Content-Type':'application/json',
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data; try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw new Error(`GitHub ${res.status} ${path}: ${typeof data==='object' ? data.message : data}`);
  return data;
}

async function createBlob(b64) {
  const d = await gh(`/repos/${REPO}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({ content: b64, encoding: 'base64' }),
  });
  return d.sha;
}

async function processBatch(batch) {
  return Promise.all(batch.map(async ({ dest, src }) => {
    const buf  = readFileSync(src);
    const b64  = buf.toString('base64');
    const sha  = await createBlob(b64);
    process.stdout.write('.');
    return { path: dest, mode: '100644', type: 'blob', sha };
  }));
}

async function run() {
  // Collect image/font/misc assets (not JS/CSS — already pushed)
  const assetsDir = join(DIST, 'assets');
  const allFiles  = readdirSync(assetsDir);
  const images    = allFiles
    .filter(f => /\.(png|jpg|jpeg|gif|webp|svg|woff2?|ttf|otf|ico)$/i.test(f))
    .map(f => ({ dest: `assets/${f}`, src: join(assetsDir, f) }))
    .filter(({ src }) => statSync(src).size <= MAX_MB * 1024 * 1024);

  console.log(`Uploading ${images.length} image/font files in parallel batches of ${BATCH}...`);

  // Get current gh-pages tree SHA (so we can build on top of it)
  const ref      = await gh(`/repos/${REPO}/git/ref/heads/${BRANCH}`);
  const headSha  = ref.object.sha;
  const headCommit = await gh(`/repos/${REPO}/git/commits/${headSha}`);
  const baseSha  = headCommit.tree.sha;
  console.log(`Base tree: ${baseSha.slice(0,7)} (gh-pages @ ${headSha.slice(0,7)})`);

  // Upload in batches
  const treeItems = [];
  for (let i = 0; i < images.length; i += BATCH) {
    const batch = images.slice(i, i + BATCH);
    try {
      const results = await processBatch(batch);
      treeItems.push(...results);
    } catch (e) {
      console.error(`\nBatch ${i/BATCH+1} error: ${e.message} — skipping batch`);
    }
  }
  console.log(`\nUploaded ${treeItems.length} blobs.`);

  // Create new tree building on existing gh-pages tree
  console.log('Creating tree...');
  const tree = await gh(`/repos/${REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ base_tree: baseSha, tree: treeItems }),
  });

  // Commit
  console.log('Creating commit...');
  const commit = await gh(`/repos/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message: `Deploy: add visual assets to GitHub Pages (${new Date().toISOString().slice(0,10)})`,
      tree:    tree.sha,
      parents: [headSha],
    }),
  });

  // Update branch
  await gh(`/repos/${REPO}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha, force: true }),
  });

  console.log(`✅ Done! Commit ${commit.sha.slice(0,7)}`);
  console.log(`   https://drbarrandodger.github.io/barran-dodger-archive/`);
}

run().catch(e => { console.error('\nFatal:', e.message); process.exit(1); });
