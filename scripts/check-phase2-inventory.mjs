import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const repoRoot = process.cwd();
const requiredJsonFiles = [
  'public/data/archive-collections.json',
  'public/data/archive-records.json',
  'spec/inventory/archive-records-phase2.json',
  'spec/inventory/archive-publication-controls.json'
];

async function readJson(relativePath) {
  const raw = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
  return JSON.parse(raw);
}

function stableId(input) {
  return `record:${createHash('sha1').update(input).digest('hex').slice(0, 12)}`;
}

function extractHtmlTargets(html) {
  const targets = new Set();
  for (const match of html.matchAll(/(?:href|src)=['"]([^'"]+)['"]/g)) {
    targets.add(match[1]);
  }
  return targets;
}

function extractHtmlIds(html) {
  const ids = new Set();
  for (const match of html.matchAll(/ id=['"]([^'"]+)['"]/g)) {
    ids.add(match[1]);
  }
  return ids;
}

function extractScriptStrings(html) {
  const strings = new Set();
  for (const match of html.matchAll(/['"](\.\/data\/[^'"]+)['"]/g)) {
    strings.add(match[1]);
  }
  return strings;
}

async function main() {
  for (const relativePath of requiredJsonFiles) {
    await fs.access(path.join(repoRoot, relativePath));
  }

  const documentsIndex = await readJson('public/data/documents.json');
  const collectionSummary = await readJson('public/data/archive-collections.json');
  const publicRecordInventory = await readJson('public/data/archive-records.json');
  const internalInventory = await readJson('spec/inventory/archive-records-phase2.json');
  const publicationControls = await readJson('spec/inventory/archive-publication-controls.json');
  const documentsHtml = await fs.readFile(path.join(repoRoot, 'Documents.html'), 'utf8');

  if (collectionSummary.summary.total_catalogue_records !== publicRecordInventory.summary.total_records) {
    throw new Error('Phase 2 collection summary and public record inventory disagree on total record count.');
  }

  const expectedDocumentCount = documentsIndex.total_pdfs ?? documentsIndex.summary?.total_pdfs ?? documentsIndex.summary?.total_records;
  if (typeof expectedDocumentCount !== 'number') {
    throw new Error('public/data/documents.json is missing a recognised total count field.');
  }

  if (expectedDocumentCount !== publicRecordInventory.summary.total_records) {
    throw new Error('Phase 2 public record inventory does not match public/data/documents.json total_pdfs.');
  }

  const expectedIds = new Set((documentsIndex.documents || []).map((document) => stableId(`${document.source}:${document.path || document.title || `${document.owner}/${document.repository}`}`)));
  const actualIds = new Set((publicRecordInventory.records || []).map((record) => record.record_id));
  if (expectedIds.size !== actualIds.size || [...expectedIds].some((recordId) => !actualIds.has(recordId))) {
    throw new Error('Phase 2 public record inventory is inconsistent with public/data/documents.json record identities.');
  }

  if (!Array.isArray(internalInventory.records) || internalInventory.records.length === 0) {
    throw new Error('Internal Phase 2 inventory is missing records.');
  }

  if (!Array.isArray(publicationControls.collections) || publicationControls.collections.length === 0) {
    throw new Error('Publication controls are missing collection entries.');
  }

  const htmlTargets = extractHtmlTargets(documentsHtml);
  const htmlIds = extractHtmlIds(documentsHtml);
  const scriptStrings = extractScriptStrings(documentsHtml);
  for (const target of ['./data/archive-collections.json', './data/archive-records.json']) {
    if (!htmlTargets.has(target) && !scriptStrings.has(target)) {
      throw new Error(`Documents.html is missing required Phase 2 target: ${target}`);
    }
  }
  for (const id of ['button-search-inventory', 'button-load-inventory', 'catalogue-publication']) {
    if (!htmlIds.has(id)) {
      throw new Error(`Documents.html is missing required Phase 2 control: ${id}`);
    }
  }

  console.log('Phase 2 inventory checks passed.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
