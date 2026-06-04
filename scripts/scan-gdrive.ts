import { google } from 'googleapis';

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

async function scan() {
  console.log('Connecting to Google Drive...');
  const drive = await getClient();

  // Focus on PDFs and documents only - most relevant
  const queries = [
    { label: 'PDFs', q: "mimeType='application/pdf'" },
    { label: 'Google Docs', q: "mimeType='application/vnd.google-apps.document'" },
    { label: 'Word Docs', q: "mimeType='application/msword' or mimeType='application/vnd.openxmlformats-officedocument.wordprocessingml.document'" },
  ];

  const allResults: any = {};

  for (const { label, q } of queries) {
    console.log(`\nScanning: ${label}...`);
    try {
      const response = await drive.files.list({
        q,
        pageSize: 50,
        fields: 'files(id, name, mimeType, size, modifiedTime, webViewLink)',
        orderBy: 'modifiedTime desc',
      });
      const files = response.data.files || [];
      allResults[label] = files;
      console.log(`  Found ${files.length} files:`);
      files.forEach((f: any, i: number) => {
        const size = f.size ? `${(parseInt(f.size)/1024).toFixed(0)}KB` : 'N/A';
        console.log(`  ${i+1}. "${f.name}" [${size}] ${f.modifiedTime?.substring(0,10)}`);
        console.log(`     ID: ${f.id}`);
      });
    } catch (err: any) {
      console.log(`  Error: ${err.message}`);
    }
  }

  const fs = await import('fs');
  fs.writeFileSync('/tmp/gdrive-scan-results.json', JSON.stringify(allResults, null, 2));
  console.log('\nResults saved to /tmp/gdrive-scan-results.json');
}

scan().catch(err => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
