import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;
  if (!xReplitToken) throw new Error('No Replit token');
  const data = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-drive',
    { headers: { Accept: 'application/json', X_REPLIT_TOKEN: xReplitToken } }
  ).then(r => r.json());
  const conn = data.items?.[0];
  const token = conn?.settings?.access_token || conn?.settings?.oauth?.credentials?.access_token;
  if (!token) throw new Error('No Google Drive access token');
  return token;
}

async function uploadPdf() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const filePath = path.join(process.cwd(), 'client/public/documents/apotheosis.pdf');
  const fileSize = fs.statSync(filePath).size;

  const res = await drive.files.create({
    requestBody: {
      name: 'Apotheosis — A Creator Force Becomes Conscious Within His Own Creation (Barran Dodger, April 2026).pdf',
      mimeType: 'application/pdf',
      description: 'A self-reflexive philosophical acknowledgement of apotheosis by Dr. Richard McLean (Barran Dodger). Published at barrandodger.com/apotheosis. April 8, 2026.',
    },
    media: {
      mimeType: 'application/pdf',
      body: fs.createReadStream(filePath),
    },
    fields: 'id,name,webViewLink',
  });

  console.log('Uploaded to Google Drive:');
  console.log('File ID:', res.data.id);
  console.log('Name:', res.data.name);
  console.log('View Link:', res.data.webViewLink);

  // Make publicly viewable
  await drive.permissions.create({
    fileId: res.data.id!,
    requestBody: { role: 'reader', type: 'anyone' },
  });
  console.log('Set to public (anyone with link can view).');

  return res.data;
}

uploadPdf().then(d => {
  console.log('\nDone. Google Drive link:', d.webViewLink);
}).catch(err => {
  console.error('Upload failed:', err.message);
  process.exit(1);
});
