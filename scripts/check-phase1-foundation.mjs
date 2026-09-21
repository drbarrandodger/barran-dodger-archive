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
  'spec/BUILD_STATUS.md',
  'spec/inventory/repository-pre-phase1.json'
];
const htmlChecks = [
  ['index.html', ['assets/css/archive-foundation.css', 'assets/js/archive-foundation.js', 'Documents.html']],
  ['Documents.html', ['assets/css/archive-foundation.css', 'assets/js/archive-foundation.js', 'data/documents.json']],
  ['404.html', ['assets/css/archive-foundation.css', 'pages/documents.html']],
  ['pages/documents.html', ['../Documents.html']]
];

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

  await checkJson('public/data/documents.json');
  await checkJson('spec/inventory/repository-pre-phase1.json');

  for (const [htmlPath, expectedReferences] of htmlChecks) {
    const html = await fs.readFile(path.join(repoRoot, htmlPath), 'utf8');
    for (const ref of expectedReferences) {
      if (!html.includes(ref)) {
        throw new Error(`${htmlPath} is missing expected reference: ${ref}`);
      }
    }
  }

  const inventory = JSON.parse(await fs.readFile(path.join(repoRoot, 'spec/inventory/repository-pre-phase1.json'), 'utf8'));
  if (!inventory.summary || typeof inventory.summary.totalFiles !== 'number') {
    throw new Error('Inventory summary is missing totalFiles.');
  }

  console.log('Phase 1 foundation checks passed.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
