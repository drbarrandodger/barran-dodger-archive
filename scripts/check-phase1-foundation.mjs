import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const requiredSpecFiles = [
  'spec/MASTER.md',
  'spec/ARCHITECTURE.md',
  'spec/DATA-MODEL.md',
  'spec/EVIDENCE-STANDARDS.md',
  'spec/RESEARCH-METHODOLOGY.md',
  'spec/LEGAL-CAUTION.md',
  'spec/FORENSIC-METHODOLOGY.md',
  'spec/IMPORT-PROTOCOL.md',
  'spec/ARCHIVE-PROTOCOL.md',
  'spec/SEO.md',
  'spec/ACCESSIBILITY.md',
  'spec/PRIVACY.md',
  'spec/DESIGN-SYSTEM.md',
  'spec/BUILD_STATUS.md'
];
const htmlChecks = [
  ['index.html', ['./assets/css/archive-foundation.css', './assets/js/archive-foundation.js', './Documents.html']],
  ['Documents.html', ['./assets/css/archive-foundation.css', './assets/js/archive-foundation.js', './data/documents.json']],
  ['404.html', ['./assets/css/archive-foundation.css', './pages/documents.html']],
  ['Index.html', ['./index.html']],
  ['pages/documents.html', ['../Documents.html']]
];

function extractHtmlTargets(html) {
  const targets = new Set();

  for (const match of html.matchAll(/(?:href|src)=['"]([^'"]+)['"]/g)) {
    targets.add(match[1]);
  }

  for (const match of html.matchAll(/<meta[^>]+http-equiv=['"]refresh['"][^>]+content=['"][^'"]*url=([^'";]+)['"]/gi)) {
    targets.add(match[1]);
  }

  return targets;
}

async function ensureExists(relativePath) {
  await fs.access(path.join(repoRoot, relativePath));
}

async function checkJson(relativePath) {
  const raw = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
  JSON.parse(raw);
}

async function main() {
  for (const file of requiredSpecFiles) {
    await ensureExists(file);
  }

  const documentsMetadataPath = path.join(repoRoot, 'public/data/documents.json');
  try {
    await fs.access(documentsMetadataPath);
    await checkJson('public/data/documents.json');
  } catch (error) {
    if ((error && error.code) === 'ENOENT') {
      console.warn('Catalogue metadata not found at public/data/documents.json; shell validation will continue, but the Pages build requires this file.');
    } else {
      throw error;
    }
  }

  const inventoryPath = path.join(repoRoot, 'spec/inventory/repository-pre-phase1.json');
  try {
    await fs.access(inventoryPath);
    await checkJson('spec/inventory/repository-pre-phase1.json');
  } catch (error) {
    if ((error && error.code) === 'ENOENT') {
      console.warn('Inventory snapshot not found at spec/inventory/repository-pre-phase1.json; skipping snapshot validation.');
    } else {
      throw error;
    }
  }

  for (const [htmlPath, expectedTargets] of htmlChecks) {
    const html = await fs.readFile(path.join(repoRoot, htmlPath), 'utf8');
    const targets = extractHtmlTargets(html);
    for (const target of expectedTargets) {
      if (!targets.has(target)) {
        throw new Error(`${htmlPath} is missing expected target: ${target}`);
      }
    }
  }

  try {
    const inventory = JSON.parse(await fs.readFile(path.join(repoRoot, 'spec/inventory/repository-pre-phase1.json'), 'utf8'));
    if (!inventory.summary || typeof inventory.summary.totalFiles !== 'number') {
      throw new Error('Inventory summary is missing totalFiles.');
    }
  } catch (error) {
    if ((error && error.code) !== 'ENOENT') throw error;
  }

  console.log('Phase 1 foundation checks passed.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
