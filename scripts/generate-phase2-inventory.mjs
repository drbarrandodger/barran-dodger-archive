import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const repoRoot = process.cwd();
const phase1InventoryPath = path.join(repoRoot, 'spec/inventory/repository-pre-phase1.json');
const documentsIndexPath = path.join(repoRoot, 'public/data/documents.json');
const internalInventoryOutputPath = path.join(repoRoot, 'spec/inventory/archive-records-phase2.json');
const publicationControlsOutputPath = path.join(repoRoot, 'spec/inventory/archive-publication-controls.json');
const publicCollectionsOutputPath = path.join(repoRoot, 'public/data/archive-collections.json');
const publicRecordsOutputPath = path.join(repoRoot, 'public/data/archive-records.json');

const collectionRules = [
  { prefix: 'attached_assets/', key: 'attached-assets', label: 'Attached assets', published: false },
  { prefix: 'client/public/documents/government-evidence/', key: 'government-evidence', label: 'Government evidence', published: true },
  { prefix: 'client/public/documents/forensic-analyses/', key: 'forensic-analyses', label: 'Forensic analyses', published: true },
  { prefix: 'client/public/documents/video-analyses/', key: 'video-analyses', label: 'Video analyses', published: true },
  { prefix: 'client/public/documents/', key: 'public-documents', label: 'Public documents', published: true },
  { prefix: 'client/public/evidence/', key: 'public-evidence', label: 'Public evidence', published: true },
  { prefix: 'client/public/audio/', key: 'public-audio', label: 'Public audio', published: true },
  { prefix: 'client/public/video/', key: 'public-video', label: 'Public video', published: true },
  { prefix: 'public/data/', key: 'public-metadata', label: 'Public metadata', published: true },
  { prefix: 'spec/', key: 'specification', label: 'Specification', published: false },
  { prefix: '.github/', key: 'workflow', label: 'Workflow', published: false },
  { prefix: 'scripts/', key: 'workflow-scripts', label: 'Workflow scripts', published: false },
  { prefix: 'assets/', key: 'presentation-assets', label: 'Presentation assets', published: true },
  { prefix: 'pages/', key: 'presentation-routes', label: 'Presentation routes', published: true }
];

const routeMappings = [
  { route: './Documents.html', title: 'Archive catalogue shell', collectionKeys: ['attached-assets', 'government-evidence', 'forensic-analyses', 'video-analyses', 'public-documents', 'public-evidence', 'public-audio', 'public-video'], genreFamilies: ['gospel', 'prophetic-writing', 'technology-targeting-essay', 'essay', 'official-record', 'media'] },
  { route: './Documents.html#family-gospels', title: 'Gospel writings', collectionKeys: ['public-documents', 'attached-assets'], genreFamilies: ['gospel'] },
  { route: './Documents.html#family-prophetic-writing', title: 'Prophetic writings', collectionKeys: ['public-documents', 'forensic-analyses', 'attached-assets'], genreFamilies: ['prophetic-writing'] },
  { route: './Documents.html#family-technology-targeting-essays', title: 'Technology and targeting essays', collectionKeys: ['public-documents', 'forensic-analyses', 'attached-assets'], genreFamilies: ['technology-targeting-essay'] },
  { route: './Documents.html#collection-government-evidence', title: 'Government evidence collection', collectionKeys: ['government-evidence'], genreFamilies: ['official-record'] },
  { route: './Documents.html#collection-attached-assets', title: 'Attached assets (metadata only)', collectionKeys: ['attached-assets'], genreFamilies: [] }
];

function stableId(input) {
  return `record:${createHash('sha1').update(input).digest('hex').slice(0, 12)}`;
}

function getCollectionInfo(recordPath) {
  for (const rule of collectionRules) {
    if (recordPath.startsWith(rule.prefix)) return rule;
  }
  return { key: 'unclassified', label: 'Unclassified', published: false };
}

function getSourceLayer(recordPath) {
  if (recordPath.startsWith('attached_assets/') || recordPath.startsWith('client/public/documents/') || recordPath.startsWith('client/public/evidence/') || recordPath.startsWith('client/public/audio/') || recordPath.startsWith('client/public/video/')) return 'primary';
  if (recordPath.startsWith('public/data/')) return 'metadata';
  if (recordPath.startsWith('spec/')) return 'specification';
  if (recordPath.startsWith('.github/') || recordPath.startsWith('scripts/') || recordPath === 'package.json') return 'workflow';
  if (recordPath.endsWith('.html') || recordPath.startsWith('assets/')) return 'presentation';
  return 'generated';
}

function getMediaType(recordPath) {
  const ext = path.extname(recordPath).toLowerCase();
  const mediaTypes = {
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.mp3': 'audio/mpeg',
    '.m4a': 'audio/mp4',
    '.mp4': 'video/mp4',
    '.html': 'text/html',
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.md': 'text/markdown'
  };
  return mediaTypes[ext] || 'application/octet-stream';
}

function inferGenreFamily(value, mediaType) {
  const text = value.toLowerCase();
  if (mediaType.startsWith('audio/') || mediaType.startsWith('video/') || mediaType.startsWith('image/')) return 'media';
  if (/(gospel|gospels|biblical|scripture)/.test(text)) return 'gospel';
  if (/(prophetic|prophecy|apotheosis|chosen[_ -]?one|tribunal of humanity)/.test(text)) return 'prophetic-writing';
  if (/(target|targeted|surveillance|digital[_ -]?oppression|technology|v2k|electronic|psyops|mkultra|pegasus|neuro)/.test(text)) return 'technology-targeting-essay';
  if (/(government evidence|ombudsman|official|court|tribunal|commission|federal|pid|oaic|notice|decision)/.test(text)) return 'official-record';
  if (/(essay|analysis|manifesto|statement|declaration|report|dossier)/.test(text)) return 'essay';
  return 'mixed';
}

function inferSensitivityFlags(value) {
  const text = value.toLowerCase();
  const flags = [];
  if (/(privacy|personal)/.test(text)) flags.push('personal-privacy-marker');
  if (/(sensitive|sec[_ -]?official|official)/.test(text)) flags.push('official-sensitivity-marker');
  if (/(health|psychiat|medical|hospital)/.test(text)) flags.push('health-marker');
  return flags;
}

function inferPublicationStatus(collectionKey, sensitivityFlags, isPublishedCollection, allowMetadataFallback = false) {
  if (collectionKey === 'attached-assets') return 'metadata-only';
  if (!isPublishedCollection) {
    if (!allowMetadataFallback) return 'internal-only';
    return sensitivityFlags.length ? 'public-metadata-sensitive' : 'metadata-only';
  }
  if (sensitivityFlags.length) return 'public-metadata-sensitive';
  return 'public-record';
}

function combinePublicationStatus(currentStatus, nextStatus) {
  const rank = {
    'internal-only': 4,
    'metadata-only': 3,
    'public-metadata-sensitive': 2,
    'public-record': 1
  };
  if (!currentStatus) return nextStatus;
  return (rank[nextStatus] || 0) > (rank[currentStatus] || 0) ? nextStatus : currentStatus;
}

function routeMatches(mapping, collectionKey, genreFamily) {
  const collectionMatches = !mapping.collectionKeys.length || mapping.collectionKeys.includes(collectionKey);
  const familyMatches = !mapping.genreFamilies.length || mapping.genreFamilies.includes(genreFamily);
  return collectionMatches && familyMatches;
}

function getMatchingRoutes(collectionKey, genreFamily) {
  return routeMappings.filter((mapping) => routeMatches(mapping, collectionKey, genreFamily)).map((mapping) => mapping.route);
}

function getCollectionRouteTargets(collectionKey, genreFamilies) {
  return [...new Set(routeMappings.filter((mapping) => {
    if (mapping.collectionKeys.length && !mapping.collectionKeys.includes(collectionKey)) return false;
    if (!mapping.genreFamilies.length) return true;
    return genreFamilies.some((genreFamily) => mapping.genreFamilies.includes(genreFamily));
  }).map((mapping) => mapping.route))];
}

function normaliseTitle(title, recordPath) {
  if (title && title.trim()) return title.trim();
  return path.basename(recordPath);
}

function summariseCollections(records) {
  const map = new Map();
  for (const record of records) {
    const key = record.collection_key;
    if (!map.has(key)) {
      map.set(key, {
        collection_key: key,
        collection_label: record.collection_label,
        publication_status: record.publication_status,
        record_count: 0,
        sensitive_record_count: 0,
        genre_families: new Set(),
        example_paths: []
      });
    }
    const entry = map.get(key);
    entry.record_count += 1;
    entry.publication_status = combinePublicationStatus(entry.publication_status, record.publication_status);
    if (record.sensitivity_flags.length) entry.sensitive_record_count += 1;
    entry.genre_families.add(record.genre_family);
    if (entry.example_paths.length < 3) entry.example_paths.push(record.original_path);
  }
  return [...map.values()].sort((a, b) => b.record_count - a.record_count || a.collection_label.localeCompare(b.collection_label)).map((entry) => ({
    collection_key: entry.collection_key,
    collection_label: entry.collection_label,
    publication_status: entry.publication_status,
    record_count: entry.record_count,
    sensitive_record_count: entry.sensitive_record_count,
    genre_families: [...entry.genre_families].sort(),
    example_paths: entry.example_paths
  }));
}

function summariseGenreFamilies(records) {
  const map = new Map();
  for (const record of records) {
    const key = record.genre_family;
    if (!map.has(key)) {
      map.set(key, { genre_family: key, record_count: 0, collection_keys: new Set() });
    }
    const entry = map.get(key);
    entry.record_count += 1;
    entry.collection_keys.add(record.collection_key);
  }
  return [...map.values()].sort((a, b) => b.record_count - a.record_count || a.genre_family.localeCompare(b.genre_family)).map((entry) => ({
    genre_family: entry.genre_family,
    record_count: entry.record_count,
    collection_keys: [...entry.collection_keys].sort()
  }));
}

async function main() {
  const phase1Inventory = JSON.parse(await fs.readFile(phase1InventoryPath, 'utf8'));
  const documentsIndex = JSON.parse(await fs.readFile(documentsIndexPath, 'utf8'));
  const fileEntries = phase1Inventory.files || [];
  const localFileSet = new Set(fileEntries.map((entry) => entry.path));

  const internalRecords = fileEntries.map((entry) => {
    const collection = getCollectionInfo(entry.path);
    const mediaType = getMediaType(entry.path);
    const title = normaliseTitle('', entry.path);
    const genreFamily = inferGenreFamily(`${entry.path} ${title}`, mediaType);
    const sensitivityFlags = inferSensitivityFlags(entry.path);
    return {
      record_id: stableId(entry.path),
      original_path: entry.path,
      title,
      source_layer: getSourceLayer(entry.path),
      collection_key: collection.key,
      collection_label: collection.label,
      media_type: mediaType,
      size_bytes: entry.size,
      provenance_status: 'preserved-path',
      genre_family: genreFamily,
      sensitivity_flags: sensitivityFlags,
      publication_status: inferPublicationStatus(collection.key, sensitivityFlags, collection.published)
    };
  });

  const publicRecords = (documentsIndex.documents || []).map((document) => {
    const recordPath = document.path || document.title || `${document.owner}/${document.repository}`;
    const collection = getCollectionInfo(recordPath);
    const mediaType = getMediaType(recordPath);
    const title = normaliseTitle(document.title, recordPath);
    const genreFamily = inferGenreFamily(`${title} ${recordPath}`, mediaType);
    const sensitivityFlags = inferSensitivityFlags(`${title} ${recordPath}`);
    const publicationStatus = inferPublicationStatus(collection.key, sensitivityFlags, collection.published, true);
    return {
      record_id: stableId(`${document.source}:${recordPath}`),
      title,
      original_path: recordPath,
      source: document.source,
      repository_owner: document.owner,
      repository_name: document.repository,
      repository_branch: document.branch,
      collection_key: collection.key,
      collection_label: collection.label,
      media_type: mediaType,
      genre_family: genreFamily,
      sensitivity_flags: sensitivityFlags,
      publication_status: publicationStatus,
      source_verified: false,
      local_repository_match: localFileSet.has(recordPath),
      public_urls: {
        github_blob_url: document.url,
        raw_url: document.raw_url
      },
      route_mappings: getMatchingRoutes(collection.key, genreFamily)
    };
  });

  const collectionSummaries = summariseCollections(publicRecords);
  const genreSummaries = summariseGenreFamilies(publicRecords);
  const generatedAt = new Date().toISOString();

  const publicationControls = {
    generated_at: generatedAt,
    policy: {
      preservation_rule: 'Original evidence stays preserved in place; derived inventory and presentation layers must reference original paths rather than rewrite source artefacts.',
      public_rule: 'Only already surfaced metadata and curated shell outputs are published by default. Internal inventories remain under spec/.',
      sensitive_rule: 'Records with sensitivity flags may appear as metadata-only or public-metadata-sensitive and require later review before expanded public presentation.'
    },
    collections: collectionSummaries.map((collection) => ({
      collection_key: collection.collection_key,
      collection_label: collection.collection_label,
      publication_status: collection.publication_status,
      sensitive_record_count: collection.sensitive_record_count,
      route_targets: getCollectionRouteTargets(collection.collection_key, collection.genre_families)
    }))
  };

  const internalInventory = {
    generated_at: generatedAt,
    based_on_snapshot: phase1Inventory.summary?.generatedAt || null,
    summary: {
      total_records: internalRecords.length,
      primary_records: internalRecords.filter((record) => record.source_layer === 'primary').length,
      collection_count: [...new Set(internalRecords.map((record) => record.collection_key))].length,
      genre_family_count: [...new Set(internalRecords.map((record) => record.genre_family))].length
    },
    collection_summaries: summariseCollections(internalRecords),
    genre_family_summaries: summariseGenreFamilies(internalRecords),
    records: internalRecords
  };

  const publicCollections = {
    generated_at: generatedAt,
    summary: {
      total_catalogue_records: publicRecords.length,
      collection_count: collectionSummaries.length,
      genre_family_count: genreSummaries.length,
      default_load_mode: 'summary-only'
    },
    collection_summaries: collectionSummaries,
    genre_family_summaries: genreSummaries,
    route_mappings: routeMappings,
    publication_controls: publicationControls.collections
  };

  const publicRecordInventory = {
    generated_at: generatedAt,
    summary: {
      total_records: publicRecords.length,
      local_repository_matches: publicRecords.filter((record) => record.local_repository_match).length,
      metadata_only_records: publicRecords.filter((record) => record.publication_status === 'metadata-only').length,
      sensitive_metadata_records: publicRecords.filter((record) => record.publication_status === 'public-metadata-sensitive').length
    },
    records: publicRecords
  };

  await fs.mkdir(path.dirname(internalInventoryOutputPath), { recursive: true });
  await fs.mkdir(path.dirname(publicCollectionsOutputPath), { recursive: true });
  await fs.writeFile(internalInventoryOutputPath, JSON.stringify(internalInventory, null, 2));
  await fs.writeFile(publicationControlsOutputPath, JSON.stringify(publicationControls, null, 2));
  await fs.writeFile(publicCollectionsOutputPath, JSON.stringify(publicCollections, null, 2));
  await fs.writeFile(publicRecordsOutputPath, JSON.stringify(publicRecordInventory, null, 2));

  console.log(`Wrote ${internalInventoryOutputPath}`);
  console.log(`Wrote ${publicationControlsOutputPath}`);
  console.log(`Wrote ${publicCollectionsOutputPath}`);
  console.log(`Wrote ${publicRecordsOutputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
