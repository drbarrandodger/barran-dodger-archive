import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const buildRoot = path.join(repoRoot, '.site-build');
const filesToCopy = [
  ['index.html', 'index.html'],
  ['404.html', '404.html'],
  ['Documents.html', 'Documents.html'],
  ['Index.html', 'Index.html'],
  ['pages/documents.html', 'pages/documents.html'],
  ['pages/collections/public-documents.html', 'pages/collections/public-documents.html'],
  ['pages/collections/government-evidence.html', 'pages/collections/government-evidence.html'],
  ['pages/collections/forensic-analyses.html', 'pages/collections/forensic-analyses.html'],
  ['pages/collections/video-analyses.html', 'pages/collections/video-analyses.html'],
  ['pages/collections/attached-assets.html', 'pages/collections/attached-assets.html'],
  ['pages/collections/unclassified.html', 'pages/collections/unclassified.html'],
  ['pages/families/gospels.html', 'pages/families/gospels.html'],
  ['pages/families/prophetic-writing.html', 'pages/families/prophetic-writing.html'],
  ['pages/families/technology-targeting-essays.html', 'pages/families/technology-targeting-essays.html'],
  ['assets/css/archive-foundation.css', 'assets/css/archive-foundation.css'],
  ['assets/js/archive-foundation.js', 'assets/js/archive-foundation.js'],
  ['assets/js/archive-route-page.js', 'assets/js/archive-route-page.js'],
  ['public/data/documents.json', 'data/documents.json'],
  ['public/data/archive-collections.json', 'data/archive-collections.json'],
  ['public/data/archive-records.json', 'data/archive-records.json'],
  ['public/data/archive-routes.json', 'data/archive-routes.json'],
  ['public/favicon.svg', 'favicon.svg'],
  ['public/icons.svg', 'icons.svg']
];

async function listFiles(directory, base = directory, results = []) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await listFiles(absolute, base, results);
    } else {
      results.push(path.relative(base, absolute).split(path.sep).join('/'));
    }
  }
  return results;
}

async function copyFileRelative(fromRelative, toRelative) {
  const from = path.join(repoRoot, fromRelative);
  const to = path.join(buildRoot, toRelative);
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
}

async function main() {
  for (const [from] of filesToCopy) {
    try {
      await fs.access(path.join(repoRoot, from));
    } catch {
      throw new Error(`Required Pages input missing: ${from}`);
    }
  }

  await fs.rm(buildRoot, { recursive: true, force: true });
  await fs.mkdir(buildRoot, { recursive: true });
  for (const [from, to] of filesToCopy) {
    await copyFileRelative(from, to);
  }

  const actualFiles = (await listFiles(buildRoot)).sort();
  const expectedFiles = filesToCopy.map(([, to]) => to).sort();
  if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
    throw new Error(`Built output does not match allowlist. Expected ${expectedFiles.join(', ')} but found ${actualFiles.join(', ')}`);
  }

  console.log(`Built static Pages site in ${buildRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
