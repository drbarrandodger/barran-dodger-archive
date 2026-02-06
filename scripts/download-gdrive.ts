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

async function getClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.drive({ version: 'v3', auth: oauth2Client });
}

const filesToDownload = [
  { id: '16Y1TMKExQMP45xZVVCRpa6SUTLfkZi0s', name: 'Systemic_Endangerment_of_Whistleblowers_Integrated_Dossier.pdf' },
  { id: '1S8Lwvu7fU2bYvsWUm2TEMoDI0HN2Cac3', name: 'OT_SIL_Report_R_McLean_AH2U.pdf' },
  { id: '1UafcjuH2imoXTB9c3gVelEFYREcb3aHA', name: 'Richard_McLean_Interim_BSP_2024.pdf' },
  { id: '1BbL9_0ovCuZ9ocaULXFZO-dtWeaDgX85', name: 'Protocol_3.pdf' },
  { id: '1mqBqgwuBhZ2GdHhw5teB0qLye-Ed2UrG', name: 'Undoing_the_Humiliation_Machine_Apotheosis_Barran_Dodger.pdf' },
  { id: '1dGnnhyq0Mv6Yv652vslK_5Dyb65FLBI8', name: 'Immortal_Testimony_McLean_2025.pdf' },
  { id: '1ddGtFmwTJDpPGcSjeyyyEkpQvPSb7gSO', name: 'Barran_and_the_Bible.pdf' },
  { id: '1tHiFkAetAUTxkOmfQBnJ5iQE7q5ljwp7', name: 'Video_Significance_Confirmation.pdf' },
  { id: '1bdydknCQKoMAzpG42j6G_gwqX3xwsG2E', name: 'Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf' },
  { id: '1ZlsICKSTNOVG3du4wAC0Hcsrv0y9hXdE', name: 'UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf' },
  { id: '1uxlWoWyhPNcsthyJyzeIUpVjGZFidprM', name: 'Systematic_Persecution_State_Enabled_Erasure_Dr_McLean.pdf' },
  { id: '1Pflf7NoIcjDd-1XC94VdgfnJbi96N2AQ', name: 'Public_Statement_Dr_Richard_McLean_Barran_Dodger.pdf' },
  { id: '14WUrK98UfDOfduxs__oP_eJ7C92KbK_x', name: 'Can_You_Be_Bribed_Bought_or_Corrupted.pdf' },
];

async function downloadFile(drive: any, fileId: string, destPath: string) {
  try {
    const response = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'arraybuffer' }
    );
    fs.writeFileSync(destPath, Buffer.from(response.data));
    const size = fs.statSync(destPath).size;
    return size;
  } catch (err: any) {
    console.error(`  Failed: ${err.message}`);
    return 0;
  }
}

async function main() {
  console.log('Connecting to Google Drive...');
  const drive = await getClient();
  
  const destDir = 'attached_assets';
  
  let downloaded = 0;
  let failed = 0;
  
  for (const file of filesToDownload) {
    const destPath = path.join(destDir, file.name);
    if (fs.existsSync(destPath)) {
      console.log(`SKIP: ${file.name} (already exists)`);
      continue;
    }
    console.log(`Downloading: ${file.name}...`);
    const size = await downloadFile(drive, file.id, destPath);
    if (size > 0) {
      console.log(`  OK: ${(size/1024).toFixed(1)} KB`);
      downloaded++;
    } else {
      failed++;
    }
  }
  
  console.log(`\nDone: ${downloaded} downloaded, ${failed} failed, ${filesToDownload.length - downloaded - failed} skipped`);
}

main().catch(err => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
