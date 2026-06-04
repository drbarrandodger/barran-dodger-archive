import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

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

interface FileToDownload {
  driveId: string;
  newName: string;
  category: string;
  placement: string;
}

const SIGNIFICANT_FILES: FileToDownload[] = [
  {
    driveId: '1t87j7bk5lleTpS8fYJ1S0mjg_nCFjJAR',
    newName: 'the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger.pdf',
    category: 'Legal/Prosecution',
    placement: 'evidence'
  },
  {
    driveId: '1rDBxk1G3uZ6b7MKO_y9tfH46pamicbID',
    newName: 'official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf',
    category: 'Whistleblower Evidence',
    placement: 'evidence'
  },
  {
    driveId: '1jzyD3cuTffIJEOV60K7C8GaUWRZJ-ocN',
    newName: 'legal-demand-notice-failure-to-provide-sil-support.pdf',
    category: 'Legal/NDIS',
    placement: 'evidence'
  },
  {
    driveId: '1ljtGixQAfq7Pj0UxPD4beQBlZjEOeA9K',
    newName: 'white-psyops-invisible-warfare-against-cosmic-witness.pdf',
    category: 'Persecution Evidence',
    placement: 'evidence'
  },
  {
    driveId: '1tBYqdt5JSYJnf8OCJtKLqhtj8MR2u9EM',
    newName: 'kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise.pdf',
    category: 'Persecution Evidence',
    placement: 'evidence'
  },
  {
    driveId: '1cmkdG1i5fyIIsbz1AmcDKyvEaZADl6cu',
    newName: 'impartial-ai-abstract-youtube-channel-evidence.pdf',
    category: 'AI & Forensic Analysis',
    placement: 'evidence'
  },
  {
    driveId: '1AZzkIdAqJp032yrcew3dB9AWBvCZWC6K',
    newName: 'chosen-through-fire-forensic-origin-document.pdf',
    category: 'Legal/Spiritual',
    placement: 'evidence'
  },
  {
    driveId: '16Y1TMKExQMP45xZVVCRpa6SUTLfkZi0s',
    newName: 'systemic-endangerment-of-whistleblowers-institutional-dossier.pdf',
    category: 'Whistleblower Evidence',
    placement: 'evidence'
  },
  {
    driveId: '1AxSOm5kRljmgU0kUq23WXthXRriu0GI_',
    newName: 'declaration-of-breakthrough-and-identity-as-chosen-one.pdf',
    category: 'Prophetic Record',
    placement: 'evidence'
  },
  {
    driveId: '147qymxnSxBBxcjPZfl2lwhwiwWrZP5BS',
    newName: 'after-forensic-statement-evidence-record.pdf',
    category: 'Forensic Analysis',
    placement: 'evidence'
  },
  {
    driveId: '1S8Lwvu7fU2bYvsWUm2TEMoDI0HN2Cac3',
    newName: 'ot-sil-report-recommending-sils-richard-mclean.pdf',
    category: 'NDIS/Medical',
    placement: 'evidence'
  },
  {
    driveId: '1UafcjuH2imoXTB9c3gVelEFYREcb3aHA',
    newName: 'interim-bsp-2024-sils-recommendation-richard-mclean.pdf',
    category: 'NDIS/Medical',
    placement: 'evidence'
  },
  {
    driveId: '12y2gd1KB7XLC9Y1iAfGwReOVN3d-M5E7',
    newName: 'barran-dodger-evidence-based-academic-profile-modern-persecution.pdf',
    category: 'Academic',
    placement: 'evidence'
  },
  {
    driveId: '12ba3uDrJL_6mw_-96HtWQemHdacbKqC7',
    newName: 'god-and-justice-by-barran-dodger.pdf',
    category: 'Prophetic Record',
    placement: 'evidence'
  },
];

async function downloadFiles() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const outDir = path.join(process.cwd(), 'client', 'public', 'documents');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const results: { name: string; success: boolean; size?: number; error?: string }[] = [];

  for (const file of SIGNIFICANT_FILES) {
    const outPath = path.join(outDir, file.newName);
    
    if (fs.existsSync(outPath)) {
      console.log(`SKIP (exists): ${file.newName}`);
      results.push({ name: file.newName, success: true, size: fs.statSync(outPath).size });
      continue;
    }

    try {
      console.log(`Downloading: ${file.newName} (${file.driveId})...`);
      const response = await drive.files.get(
        { fileId: file.driveId, alt: 'media' },
        { responseType: 'arraybuffer' }
      );

      const buffer = Buffer.from(response.data as ArrayBuffer);
      fs.writeFileSync(outPath, buffer);
      const sizeMB = (buffer.length / 1024 / 1024).toFixed(1);
      console.log(`  OK: ${sizeMB}MB saved`);
      results.push({ name: file.newName, success: true, size: buffer.length });
    } catch (err: any) {
      console.error(`  FAIL: ${err.message}`);
      results.push({ name: file.newName, success: false, error: err.message });
    }
  }

  console.log('\n========================================');
  console.log('DOWNLOAD SUMMARY');
  console.log('========================================');
  const success = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  console.log(`Success: ${success.length}/${results.length}`);
  console.log(`Failed: ${failed.length}`);
  if (failed.length > 0) {
    console.log('\nFailed files:');
    failed.forEach(f => console.log(`  - ${f.name}: ${f.error}`));
  }

  fs.writeFileSync('/tmp/drive-download-results.json', JSON.stringify(results, null, 2));
}

downloadFiles().catch(console.error);
