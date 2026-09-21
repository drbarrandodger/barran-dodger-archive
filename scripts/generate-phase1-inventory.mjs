import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const outputPath = path.join(repoRoot, 'spec', 'inventory', 'repository-pre-phase1.json');
const excludePrefixes = [
  '.git/',
  '.agents/',
  'node_modules/',
  'dist/',
  'github-pages-deploy/',
  'client/client/',
  'client/dist-gh-pages/',
  'client/dist-github/',
  'client/github-pages-build/',
  'client/github-pages-deploy-build/',
  'client/github-pages-deploy/',
  '.site-build/'
];
const sensitiveRegex = /(secret|token|password|credential|private[-_ ]?key|personal|privacy|sec|official|sensitive|access[-_ ]?(?:token|key))/i;
const blockchainRegex = /(hash|sha256|timestamp|blockchain|ots|bitcoin)/i;
const buildConfigs = [
  'package.json',
  'package-lock.json',
  'vite.config.ts',
  'vite.config.gh-pages.ts',
  '.github/workflows/pages.yml',
  '.github/workflows/build-pdf-index.yml'
];

function isExcluded(relativePath) {
  return excludePrefixes.some((prefix) => relativePath === prefix.slice(0, -1) || relativePath.startsWith(prefix));
}

async function walk(directory, fileEntries = [], htmlFiles = []) {
  const names = await fs.readdir(directory, { withFileTypes: true });
  for (const name of names) {
    const absolutePath = path.join(directory, name.name);
    const relativePath = path.relative(repoRoot, absolutePath).split(path.sep).join('/');
    if (isExcluded(relativePath)) continue;
    if (name.isDirectory()) {
      await walk(absolutePath, fileEntries, htmlFiles);
      continue;
    }
    const stats = await fs.stat(absolutePath);
    const ext = path.extname(relativePath).toLowerCase() || '<none>';
    fileEntries.push({
      path: relativePath,
      size: stats.size,
      mtimeMs: stats.mtimeMs,
      topLevel: relativePath.split('/')[0] || '.',
      sensitivePathCandidate: sensitiveRegex.test(relativePath),
      blockchainOrHashCandidate: blockchainRegex.test(relativePath)
    });
    if (ext === '.html' && stats.size < 1_000_000) {
      htmlFiles.push(relativePath);
    }
  }
  return { fileEntries, htmlFiles };
}

function resolveRootRelativeCandidates(target) {
  const clean = target.replace(/^\//, '');
  const candidates = [
    path.join(repoRoot, clean),
    path.join(repoRoot, 'public', clean),
    path.join(repoRoot, 'pages', clean)
  ];

  if (clean.startsWith('data/')) {
    candidates.push(path.join(repoRoot, 'public', clean));
  }

  if (clean === 'favicon.svg' || clean === 'icons.svg') {
    candidates.push(path.join(repoRoot, 'public', clean));
  }

  return candidates;
}

function collectBrokenLocalReferences(htmlPath, sourceText) {
  const matches = [...sourceText.matchAll(/(?:href|src)=['\"]([^'\"]+)['\"]/g)];
  const results = [];
  for (const match of matches) {
    const target = match[1].trim();
    if (!target || target.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(target)) continue;
    const absoluteCandidates = target.startsWith('/')
      ? resolveRootRelativeCandidates(target)
      : [path.resolve(path.dirname(path.join(repoRoot, htmlPath)), target)];
    if (!absoluteCandidates.some((candidate) => requireExists(candidate))) {
      results.push({ source: htmlPath, target });
    }
  }
  return results;
}

function requireExists(candidate) {
  return !!candidate && existsSync(candidate);
}

function summariseDuplicates(entries) {
  const byCandidateKey = new Map();
  for (const entry of entries) {
    const basename = path.basename(entry.path);
    const key = `${basename}::${entry.size}`;
    if (!byCandidateKey.has(key)) {
      byCandidateKey.set(key, { basename, size: entry.size, paths: [] });
    }
    byCandidateKey.get(key).paths.push(entry.path);
  }
  return [...byCandidateKey.values()]
    .filter((candidate) => candidate.paths.length > 1)
    .sort((a, b) => b.paths.length - a.paths.length || a.basename.localeCompare(b.basename))
    .slice(0, 200);
}

async function main() {
  if (existsSync(outputPath) && !process.argv.includes('--overwrite')) {
    throw new Error(`Refusing to overwrite existing inventory snapshot: ${outputPath}. Use --overwrite only when intentionally replacing the snapshot.`);
  }
  const { fileEntries, htmlFiles } = await walk(repoRoot);
  const topLevelCounts = {};
  const extensionCounts = {};
  for (const entry of fileEntries) {
    topLevelCounts[entry.topLevel] = (topLevelCounts[entry.topLevel] || 0) + 1;
    const ext = path.extname(entry.path).toLowerCase() || '<none>';
    extensionCounts[ext] = (extensionCounts[ext] || 0) + 1;
  }
  const brokenLocalReferences = [];
  for (const htmlPath of htmlFiles) {
    const text = await fs.readFile(path.join(repoRoot, htmlPath), 'utf8');
    brokenLocalReferences.push(...collectBrokenLocalReferences(htmlPath, text));
  }
  const duplicateCandidates = summariseDuplicates(fileEntries);
  const report = {
    summary: {
      generatedAt: new Date().toISOString(),
      repositoryRoot: repoRoot,
      totalFiles: fileEntries.length,
      topLevelCounts,
      extensionCounts: Object.fromEntries(
        Object.entries(extensionCounts)
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
          .slice(0, 30)
      ),
      evidenceDirectories: [
        'attached_assets',
        'client/public/documents',
        'client/public/evidence',
        'client/public/audio',
        'client/public/video',
        'public/data'
      ],
      buildConfigs,
      duplicateCandidateCount: duplicateCandidates.length,
      brokenLocalReferenceCount: brokenLocalReferences.length,
      sensitivePathCandidateCount: fileEntries.filter((entry) => entry.sensitivePathCandidate).length,
      blockchainOrHashCandidateCount: fileEntries.filter((entry) => entry.blockchainOrHashCandidate).length
    },
    brokenLocalReferences: brokenLocalReferences.slice(0, 200),
    duplicateCandidates,
    sensitivePathCandidates: fileEntries.filter((entry) => entry.sensitivePathCandidate).map((entry) => entry.path).slice(0, 200),
    blockchainOrHashCandidates: fileEntries.filter((entry) => entry.blockchainOrHashCandidate).map((entry) => entry.path).slice(0, 200),
    files: fileEntries
  };
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(report, null, 2));
  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
