import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const collectionsPath = path.join(repoRoot, 'public/data/archive-collections.json');
const recordsPath = path.join(repoRoot, 'public/data/archive-records.json');
const publicationControlsPath = path.join(repoRoot, 'spec/inventory/archive-publication-controls.json');
const provenanceOutputPath = path.join(repoRoot, 'spec/inventory/archive-provenance-phase3.json');
const routesOutputPath = path.join(repoRoot, 'public/data/archive-routes.json');

const routeDefinitions = [
  { route_key: 'collection:public-documents', route_type: 'collection', slug: 'public-documents', title: 'Public documents', collection_key: 'public-documents' },
  { route_key: 'collection:government-evidence', route_type: 'collection', slug: 'government-evidence', title: 'Government evidence', collection_key: 'government-evidence' },
  { route_key: 'collection:forensic-analyses', route_type: 'collection', slug: 'forensic-analyses', title: 'Forensic analyses', collection_key: 'forensic-analyses' },
  { route_key: 'collection:video-analyses', route_type: 'collection', slug: 'video-analyses', title: 'Video analyses', collection_key: 'video-analyses' },
  { route_key: 'collection:attached-assets', route_type: 'collection', slug: 'attached-assets', title: 'Attached assets', collection_key: 'attached-assets' },
  { route_key: 'collection:unclassified', route_type: 'collection', slug: 'unclassified', title: 'Unclassified', collection_key: 'unclassified' },
  { route_key: 'family:gospel', route_type: 'family', slug: 'gospels', title: 'Gospel writings', genre_family: 'gospel' },
  { route_key: 'family:prophetic-writing', route_type: 'family', slug: 'prophetic-writing', title: 'Prophetic writings', genre_family: 'prophetic-writing' },
  { route_key: 'family:technology-targeting-essay', route_type: 'family', slug: 'technology-targeting-essays', title: 'Technology and targeting essays', genre_family: 'technology-targeting-essay' }
];

function groupCounts(items, key) {
  const counts = new Map();
  for (const item of items) {
    counts.set(item[key], (counts.get(item[key]) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count }));
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function main() {
  const collections = await readJson(collectionsPath);
  const recordInventory = await readJson(recordsPath);
  const publicationControls = await readJson(publicationControlsPath);
  const records = recordInventory.records || [];
  const generatedAt = new Date().toISOString();

  const controlMap = new Map((publicationControls.collections || []).map((entry) => [entry.collection_key, entry]));
  const routePages = routeDefinitions.map((definition) => {
    const matchingRecords = records.filter((record) => {
      if (definition.route_type === 'collection') return record.collection_key === definition.collection_key;
      return record.genre_family === definition.genre_family && ['public-record', 'public-metadata-sensitive'].includes(record.publication_status);
    });
    const collectionKeys = [...new Set(matchingRecords.map((record) => record.collection_key))].sort();
    const genreFamilies = [...new Set(matchingRecords.map((record) => record.genre_family))].sort();
    const publicationStatuses = [...new Set(matchingRecords.map((record) => record.publication_status))].sort();
    const control = definition.collection_key ? controlMap.get(definition.collection_key) : null;
    return {
      route_key: definition.route_key,
      route_type: definition.route_type,
      title: definition.title,
      route: definition.route_type === 'collection'
        ? `./pages/collections/${definition.slug}.html`
        : `./pages/families/${definition.slug}.html`,
      collection_keys: collectionKeys,
      genre_families: genreFamilies,
      publication_statuses: publicationStatuses,
      collection_publication_status: control?.publication_status || null,
      route_targets: control?.route_targets || [],
      record_count: matchingRecords.length,
      sensitive_record_count: matchingRecords.filter((record) => record.sensitivity_flags.length).length,
      sample_record_ids: matchingRecords.slice(0, 5).map((record) => record.record_id),
      sample_titles: matchingRecords.slice(0, 5).map((record) => record.title),
      note: definition.route_type === 'collection'
        ? 'Collection route uses existing public metadata only and does not publish new source files.'
        : 'Family route includes only public-record and public-metadata-sensitive entries from approved collections.'
    };
  });

  const provenanceReview = {
    generated_at: generatedAt,
    summary: {
      total_records: records.length,
      collection_count: collections.summary?.collection_count || 0,
      route_page_count: routePages.length,
      provenance_status_count: groupCounts(records, 'provenance_status').length,
      review_flag_count: [...new Set(records.flatMap((record) => record.review_flags || []))].length,
      unclassified_records: records.filter((record) => record.collection_key === 'unclassified').length
    },
    provenance_statuses: groupCounts(records, 'provenance_status'),
    publication_statuses: groupCounts(records, 'publication_status'),
    source_repositories: groupCounts(records.map((record) => ({ source_repo: `${record.repository_owner || 'unknown'}/${record.repository_name || 'unknown'}` })), 'source_repo'),
    review_queues: {
      unclassified_records: records.filter((record) => record.collection_key === 'unclassified').map((record) => ({
        record_id: record.record_id,
        title: record.title,
        original_path: record.original_path,
        publication_status: record.publication_status,
        provenance_status: record.provenance_status,
        review_flags: record.review_flags
      })),
      sensitive_public_metadata: records.filter((record) => record.publication_status === 'public-metadata-sensitive').map((record) => ({
        record_id: record.record_id,
        title: record.title,
        collection_key: record.collection_key,
        original_path: record.original_path,
        sensitivity_flags: record.sensitivity_flags
      })),
      metadata_only_publication: records.filter((record) => record.publication_status === 'metadata-only').map((record) => ({
        record_id: record.record_id,
        title: record.title,
        collection_key: record.collection_key,
        original_path: record.original_path,
        review_flags: record.review_flags
      }))
    }
  };

  const routeInventory = {
    generated_at: generatedAt,
    summary: {
      total_routes: routePages.length,
      collection_routes: routePages.filter((page) => page.route_type === 'collection').length,
      family_routes: routePages.filter((page) => page.route_type === 'family').length
    },
    routes: routePages
  };

  await fs.mkdir(path.dirname(provenanceOutputPath), { recursive: true });
  await fs.mkdir(path.dirname(routesOutputPath), { recursive: true });
  await fs.writeFile(provenanceOutputPath, JSON.stringify(provenanceReview, null, 2));
  await fs.writeFile(routesOutputPath, JSON.stringify(routeInventory, null, 2));

  console.log(`Wrote ${provenanceOutputPath}`);
  console.log(`Wrote ${routesOutputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
