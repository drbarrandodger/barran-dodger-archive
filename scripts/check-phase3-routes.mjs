import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const requiredPaths = [
  'public/data/archive-routes.json',
  'spec/inventory/archive-provenance-phase3.json',
  'assets/js/archive-route-page.js',
  'pages/collections/public-documents.html',
  'pages/collections/government-evidence.html',
  'pages/collections/forensic-analyses.html',
  'pages/collections/video-analyses.html',
  'pages/collections/attached-assets.html',
  'pages/collections/unclassified.html',
  'pages/families/gospels.html',
  'pages/families/prophetic-writing.html',
  'pages/families/technology-targeting-essays.html'
];

function extractHtmlTargets(html) {
  const targets = new Set();
  for (const match of html.matchAll(/(?:href|src)=['"]([^'"]+)['"]/g)) {
    targets.add(match[1]);
  }
  return targets;
}

async function readJson(relativePath) {
  return JSON.parse(await fs.readFile(path.join(repoRoot, relativePath), 'utf8'));
}

async function main() {
  for (const relativePath of requiredPaths) {
    await fs.access(path.join(repoRoot, relativePath));
  }

  const routeInventory = await readJson('public/data/archive-routes.json');
  const provenanceReview = await readJson('spec/inventory/archive-provenance-phase3.json');
  const collections = await readJson('public/data/archive-collections.json');

  if (!Array.isArray(routeInventory.routes) || routeInventory.routes.length === 0) {
    throw new Error('Phase 3 route inventory is missing routes.');
  }

  if (!provenanceReview.summary || typeof provenanceReview.summary.unclassified_records !== 'number') {
    throw new Error('Phase 3 provenance review summary is incomplete.');
  }

  const collectionRoutes = routeInventory.routes.filter((route) => route.route_type === 'collection');
  const expectedCollectionKeys = new Set((collections.collection_summaries || []).map((entry) => entry.collection_key));
  const actualCollectionKeys = new Set(collectionRoutes.map((route) => route.collection_keys[0]));
  if (expectedCollectionKeys.size !== actualCollectionKeys.size || [...expectedCollectionKeys].some((key) => !actualCollectionKeys.has(key))) {
    throw new Error('Phase 3 collection routes do not match collection summary keys.');
  }

  for (const route of routeInventory.routes) {
    const pagePath = route.route.replace(/^\.\//, '');
    const html = await fs.readFile(path.join(repoRoot, pagePath), 'utf8');
    const targets = extractHtmlTargets(html);
    if (!targets.has('../../assets/js/archive-route-page.js')) {
      throw new Error(`${pagePath} is missing archive-route-page.js`);
    }
    if (!html.includes(route.route_key)) {
      throw new Error(`${pagePath} is missing its route key declaration.`);
    }
  }

  console.log('Phase 3 route checks passed.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
