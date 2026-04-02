#!/usr/bin/env node
// GitHub Pages Deployment Script for barran-dodger-archive
// Uses GitHub API to push github-pages-deploy/ contents to gh-pages branch

import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';

const OWNER = 'drbarrandodger';
const REPO = 'barran-dodger-archive';
const BRANCH = 'gh-pages';
const DEPLOY_DIR = path.resolve('./github-pages-deploy');
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error('ERROR: GITHUB_TOKEN env var not set');
  process.exit(1);
}

const headers = {
  'Authorization': `token ${TOKEN}`,
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json',
  'User-Agent': 'barrandodger-deploy'
};

async function ghApi(path, method = 'GET', body = null) {
  const url = `https://api.github.com${path}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(url, opts);
  const text = await r.text();
  if (!r.ok) throw new Error(`GitHub API ${method} ${path} => ${r.status}: ${text.slice(0,200)}`);
  return text ? JSON.parse(text) : null;
}

async function getFileSha(filePath) {
  try {
    const data = await ghApi(`/repos/${OWNER}/${REPO}/contents/${filePath}?ref=${BRANCH}`);
    return data.sha;
  } catch {
    return null;
  }
}

function getAllFiles(dir, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllFiles(full, base));
    } else {
      results.push(path.relative(base, full));
    }
  }
  return results;
}

// Files to skip (too large or not needed)
const SKIP_PATTERNS = ['.pdf'];

async function main() {
  console.log(`Deploying ${DEPLOY_DIR} to ${OWNER}/${REPO}@${BRANCH}`);
  
  const files = getAllFiles(DEPLOY_DIR).filter(f => 
    !SKIP_PATTERNS.some(ext => f.endsWith(ext))
  );
  
  console.log(`Found ${files.length} files to deploy`);
  
  let updated = 0, skipped = 0, errors = 0;
  
  for (const relPath of files) {
    const fullPath = path.join(DEPLOY_DIR, relPath);
    const content = fs.readFileSync(fullPath);
    const b64 = content.toString('base64');
    const ghPath = relPath.replace(/\\/g, '/');
    
    // Check if file exists and get sha
    const existingSha = await getFileSha(ghPath);
    
    // Check if content changed by comparing hashes
    const contentHash = createHash('sha256').update(content).digest('hex');
    
    try {
      await ghApi(`/repos/${OWNER}/${REPO}/contents/${ghPath}`, 'PUT', {
        message: `Deploy: update ${ghPath}`,
        content: b64,
        branch: BRANCH,
        ...(existingSha ? { sha: existingSha } : {})
      });
      updated++;
      if (updated % 10 === 0) console.log(`  Uploaded ${updated}/${files.length}...`);
    } catch (e) {
      console.error(`  ERROR ${ghPath}: ${e.message}`);
      errors++;
    }
  }
  
  console.log(`\nDone: ${updated} uploaded, ${skipped} skipped, ${errors} errors`);
}

main().catch(e => { console.error(e); process.exit(1); });
