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

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-drive',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) {
    throw new Error('Google Drive not connected');
  }
  return accessToken;
}

async function scanDrive() {
  console.log('Connecting to Google Drive...');
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  console.log('Scanning Drive for files...');

  try {
    const res = await drive.files.list({
      pageSize: 100,
      fields: 'nextPageToken, files(id, name, mimeType, size, createdTime, modifiedTime, parents)',
      orderBy: 'modifiedTime desc',
      q: "trashed = false"
    });

    const files = res.data.files || [];
    console.log(`\nFound ${files.length} files:\n`);

    for (const file of files) {
      const sizeMB = file.size ? (parseInt(file.size) / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
      console.log(`- ${file.name}`);
      console.log(`  Type: ${file.mimeType} | Size: ${sizeMB} | Modified: ${file.modifiedTime}`);
      console.log(`  ID: ${file.id}`);
      console.log('');
    }

    if (files.length === 0) {
      console.log('No files accessible. The Drive integration may have limited permissions.');
      console.log('The "drive.file" scope only allows access to files created by this app.');
    }
  } catch (err: any) {
    console.error('Error scanning Drive:', err.message);
    if (err.code === 403) {
      console.log('\nInsufficient permissions. The Google Drive connection does not have full drive access.');
    }
  }
}

scanDrive();
