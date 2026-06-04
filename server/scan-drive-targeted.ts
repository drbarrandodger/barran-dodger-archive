import { google } from 'googleapis';
import * as fs from 'fs';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-drive',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) throw new Error('Google Drive not connected');
  return accessToken;
}

async function searchDrive(drive: any, query: string): Promise<any[]> {
  try {
    const res = await drive.files.list({
      pageSize: 50,
      fields: 'files(id, name, mimeType, size, createdTime, modifiedTime)',
      orderBy: 'modifiedTime desc',
      q: query
    });
    return res.data.files || [];
  } catch (e: any) {
    console.error(`Query failed: ${query} - ${e.message}`);
    return [];
  }
}

async function scanTargeted() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const searches = [
    { label: 'Whistleblower/Torture docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'whistleblower' or name contains 'torture' or name contains 'dossier')" },
    { label: 'Legal demands/notices', q: "mimeType='application/pdf' and trashed=false and (name contains 'legal demand' or name contains 'notice' or name contains 'affidavit')" },
    { label: 'Evidence/forensic docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'evidence' or name contains 'forensic' or name contains 'statement')" },
    { label: 'Trial/prosecution docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'trial' or name contains 'prosecution' or name contains 'questions')" },
    { label: 'Corruption/government docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'corruption' or name contains 'government' or name contains 'institutional')" },
    { label: 'McLean/Barran docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'McLean' or name contains 'Barran' or name contains 'barran')" },
    { label: 'Medical/hospital docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'hospital' or name contains 'medical' or name contains 'psychiatric')" },
    { label: 'NDIS/SIL/disability docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'NDIS' or name contains 'SIL' or name contains 'disability')" },
    { label: 'Police/assault docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'police' or name contains 'assault' or name contains 'kill')" },
    { label: 'White ops/surveillance', q: "mimeType='application/pdf' and trashed=false and (name contains 'white' or name contains 'ops' or name contains 'surveillance' or name contains 'V2K')" },
    { label: 'Academic/profile docs', q: "mimeType='application/pdf' and trashed=false and (name contains 'academic' or name contains 'profile' or name contains 'abstract')" },
    { label: 'SIL reports', q: "mimeType='application/pdf' and trashed=false and (name contains 'report' or name contains 'recommending')" },
    { label: 'Chosen/God/prophetic', q: "mimeType='application/pdf' and trashed=false and (name contains 'chosen' or name contains 'God' or name contains 'prophetic')" },
    { label: 'Mercy/Werribee', q: "mimeType='application/pdf' and trashed=false and (name contains 'Mercy' or name contains 'Werribee' or name contains 'murder' or name contains 'resurrection')" },
    { label: 'Port Macquarie/assassination', q: "mimeType='application/pdf' and trashed=false and (name contains 'Port Macquarie' or name contains 'assassination' or name contains 'attempt')" },
    { label: 'Cost/taxpayer/financial', q: "mimeType='application/pdf' and trashed=false and (name contains 'cost' or name contains 'taxpayer' or name contains 'financial' or name contains 'million')" },
    { label: 'Declaration/breakthrough', q: "mimeType='application/pdf' and trashed=false and (name contains 'declaration' or name contains 'breakthrough' or name contains 'identity')" },
    { label: 'Pages documents', q: "mimeType='application/x-iwork-pages-sffpages' and trashed=false" },
    { label: 'Audio recordings', q: "trashed=false and (mimeType contains 'audio')" },
  ];

  const allFiles = new Map<string, any>();

  for (const search of searches) {
    console.log(`\nSearching: ${search.label}...`);
    const files = await searchDrive(drive, search.q);
    console.log(`  Found ${files.length} files`);
    for (const f of files) {
      if (!allFiles.has(f.id!)) {
        allFiles.set(f.id!, { ...f, category: search.label });
      }
    }
  }

  const uniqueByName = new Map<string, any>();
  for (const [id, file] of allFiles) {
    const key = file.name.toLowerCase().trim();
    if (!uniqueByName.has(key) || parseInt(file.size || '0') > parseInt(uniqueByName.get(key).size || '0')) {
      uniqueByName.set(key, file);
    }
  }

  const sorted = [...uniqueByName.values()].sort((a, b) =>
    new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime()
  );

  console.log(`\n====================================`);
  console.log(`TOTAL UNIQUE FILES FOUND: ${sorted.length}`);
  console.log(`====================================\n`);

  for (const f of sorted) {
    const sizeMB = f.size ? (parseInt(f.size) / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
    console.log(`[${sizeMB}] ${f.name}`);
    console.log(`  ID: ${f.id} | Category: ${f.category} | Modified: ${f.modifiedTime}`);
  }

  fs.writeFileSync('/tmp/drive-targeted.json', JSON.stringify(sorted, null, 2));
  console.log('\nSaved to /tmp/drive-targeted.json');
}

scanTargeted().catch(console.error);
