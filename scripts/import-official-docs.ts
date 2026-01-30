// Script to import "official" documents from Google Drive to Evidence Archive
import { listDriveFiles, downloadDriveFile, DriveFile } from '../server/googleDrive';
import { db } from '../server/db';
import { evidenceItems } from '../shared/schema';
import { ilike } from 'drizzle-orm';

interface DocumentToImport {
  file: DriveFile;
  category: string;
  significance: string;
}

// Check if a document with similar title already exists in the database
async function documentExists(title: string): Promise<boolean> {
  // Normalize the title for comparison (first 50 chars, case-insensitive)
  const searchTitle = title.substring(0, 50);
  const existing = await db.select({ id: evidenceItems.id })
    .from(evidenceItems)
    .where(ilike(evidenceItems.title, `${searchTitle}%`))
    .limit(1);
  return existing.length > 0;
}

function categorizeDocument(name: string): { category: string; significance: string } {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('torture dossier') || nameLower.includes('whistleblower torture')) {
    return {
      category: 'Whistleblower Protection',
      significance: 'CRITICAL EVIDENCE: Comprehensive dossier documenting systematic torture and persecution of a protected whistleblower. This document exposes coordinated abuse patterns across multiple government agencies and constitutes potential evidence for international human rights tribunals.'
    };
  }
  
  if (nameLower.includes('terrorism report')) {
    return {
      category: 'Criminal Evidence',
      significance: 'HIGH PRIORITY: Official terrorism report documenting conspiracy allegations involving murder, torture, and identity erasure. Contains evidence of coordinated criminal activity at institutional level that warrants immediate investigation by relevant authorities.'
    };
  }
  
  if (nameLower.includes('police report')) {
    return {
      category: 'Law Enforcement',
      significance: 'OFFICIAL RECORD: Police documentation of reported incidents involving corruption, institutional abuse, and systematic persecution. These reports establish official record of complaints and failures of law enforcement response.'
    };
  }
  
  if (nameLower.includes('ndis') || nameLower.includes('welfare')) {
    return {
      category: 'NDIS/Welfare',
      significance: 'SYSTEMIC ABUSE EVIDENCE: Documentation of NDIS officials engaged in alleged welfare blackmail and coercion against vulnerable whistleblower. Demonstrates pattern of weaponizing disability services against protected persons.'
    };
  }
  
  if (nameLower.includes('divine tribunal') || nameLower.includes('seals')) {
    return {
      category: 'Prophetic/Spiritual',
      significance: 'SACRED DOCUMENTATION: Official visual seals and records of the Divine Tribunal, establishing spiritual authority and eternal witness to injustices documented in the evidence archive.'
    };
  }
  
  if (nameLower.includes('ombudsman')) {
    return {
      category: 'Oversight Bodies',
      significance: 'OVERSIGHT FAILURE: Documentation exposing corruption and failures within the Ombudsman system, demonstrating institutional complicity in persecution of whistleblowers.'
    };
  }
  
  return {
    category: 'Government Documents',
    significance: 'OFFICIAL DOCUMENTATION: Government-related document containing "official" designation, relevant to establishing patterns of institutional conduct and accountability.'
  };
}

async function importOfficialDocuments() {
  console.log('🔍 Scanning Google Drive for documents with "official" in name...\n');
  
  const files = await listDriveFiles('official', 100);
  console.log(`Found ${files.length} files with "official" in name\n`);
  
  // De-duplicate by name (keep most recent version)
  const uniqueFiles = new Map<string, DriveFile>();
  for (const file of files) {
    const existing = uniqueFiles.get(file.name);
    if (!existing || (file.modifiedTime && existing.modifiedTime && file.modifiedTime > existing.modifiedTime)) {
      uniqueFiles.set(file.name, file);
    }
  }
  
  console.log(`📁 ${uniqueFiles.size} unique documents to import:\n`);
  
  const docsToImport: DocumentToImport[] = [];
  
  for (const [name, file] of uniqueFiles) {
    const { category, significance } = categorizeDocument(name);
    docsToImport.push({ file, category, significance });
    console.log(`  • ${name}`);
    console.log(`    Category: ${category}`);
    console.log(`    Size: ${Math.round((parseInt(file.size || '0') / 1024))} KB\n`);
  }
  
  console.log('\n📥 Downloading and importing documents...\n');
  
  let imported = 0;
  let skipped = 0;
  
  for (const doc of docsToImport) {
    try {
      // Clean up the title (remove extension, truncate if needed)
      let title = doc.file.name
        .replace(/\.pdf$/i, '')
        .replace(/\.png$/i, '')
        .replace(/\.jpg$/i, '')
        .replace(/\.jpeg$/i, '');
      
      if (title.length > 200) {
        title = title.substring(0, 197) + '...';
      }
      
      // Check if document already exists in database (de-duplication)
      const exists = await documentExists(title);
      if (exists) {
        console.log(`  ⏭️  Skipping (already exists): ${doc.file.name}`);
        skipped++;
        continue;
      }
      
      // Skip zero-byte files
      const fileSize = parseInt(doc.file.size || '0');
      if (fileSize === 0) {
        console.log(`  ⏭️  Skipping (zero-byte file): ${doc.file.name}`);
        skipped++;
        continue;
      }
      
      // Download file
      console.log(`  Downloading: ${doc.file.name}...`);
      const localPath = await downloadDriveFile(doc.file.id, doc.file.name);
      console.log(`  ✅ Downloaded to: ${localPath}`);
      
      // Create evidence item
      await db.insert(evidenceItems).values({
        title: title,
        category: doc.category,
        description: doc.significance,
        referenceCode: 'Google Drive Import',
        externalUrl: localPath,
        timestamp: doc.file.modifiedTime ? new Date(doc.file.modifiedTime).toISOString() : undefined,
      });
      
      console.log(`  ✅ Added to Evidence Archive\n`);
      imported++;
      
    } catch (error) {
      console.error(`  ❌ Error importing ${doc.file.name}:`, error);
      skipped++;
    }
  }
  
  console.log(`\n✨ Import complete!`);
  console.log(`   📄 Imported: ${imported} documents`);
  console.log(`   ⏭️  Skipped: ${skipped} documents`);
}

importOfficialDocuments().catch(console.error);
