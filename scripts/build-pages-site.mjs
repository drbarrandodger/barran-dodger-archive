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
  ['assets/css/archive-foundation.css', 'assets/css/archive-foundation.css'],
  ['assets/js/archive-foundation.js', 'assets/js/archive-foundation.js'],
  ['public/data/documents.json', 'data/documents.json'],
  ['public/favicon.svg', 'favicon.svg'],
  ['public/icons.svg', 'icons.svg']
];

async function copyFileRelative(fromRelative, toRelative) {
  const from = path.join(repoRoot, fromRelative);
  const to = path.join(buildRoot, toRelative);
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
}

async function main() {
  await fs.rm(buildRoot, { recursive: true, force: true });
  await fs.mkdir(buildRoot, { recursive: true });
  for (const [from, to] of filesToCopy) {
    await copyFileRelative(from, to);
  }
  console.log(`Built static Pages site in ${buildRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
