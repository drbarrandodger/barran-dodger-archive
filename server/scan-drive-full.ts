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

async function scanAllFiles() {
  console.log('Connecting to Google Drive...');
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  let allFiles: any[] = [];
  let nextPageToken: string | undefined;

  do {
    const res = await drive.files.list({
      pageSize: 1000,
      fields: 'nextPageToken, files(id, name, mimeType, size, createdTime, modifiedTime, description)',
      orderBy: 'modifiedTime desc',
      q: "trashed = false",
      pageToken: nextPageToken
    });

    const files = res.data.files || [];
    allFiles = allFiles.concat(files);
    nextPageToken = res.data.nextPageToken || undefined;
    console.log(`Fetched ${allFiles.length} files so far...`);
  } while (nextPageToken);

  console.log(`\n=== TOTAL FILES FOUND: ${allFiles.length} ===\n`);

  const pdfs = allFiles.filter(f => f.mimeType === 'application/pdf');
  const audio = allFiles.filter(f => f.mimeType?.startsWith('audio/'));
  const pages = allFiles.filter(f => f.mimeType?.includes('pages'));
  const images = allFiles.filter(f => f.mimeType?.startsWith('image/'));
  const videos = allFiles.filter(f => f.mimeType?.startsWith('video/'));
  const other = allFiles.filter(f => 
    !f.mimeType?.startsWith('audio/') && 
    !f.mimeType?.startsWith('image/') && 
    !f.mimeType?.startsWith('video/') && 
    f.mimeType !== 'application/pdf' &&
    !f.mimeType?.includes('pages')
  );

  console.log(`PDFs: ${pdfs.length}`);
  console.log(`Audio: ${audio.length}`);
  console.log(`Pages docs: ${pages.length}`);
  console.log(`Images: ${images.length}`);
  console.log(`Videos: ${videos.length}`);
  console.log(`Other: ${other.length}`);

  console.log('\n=== ALL PDF FILES ===\n');
  const uniquePdfs = new Map<string, any>();
  for (const pdf of pdfs) {
    const key = pdf.name!.toLowerCase().trim();
    if (!uniquePdfs.has(key) || parseInt(pdf.size || '0') > parseInt(uniquePdfs.get(key).size || '0')) {
      uniquePdfs.set(key, pdf);
    }
  }

  console.log(`Unique PDFs: ${uniquePdfs.size} (from ${pdfs.length} total)\n`);

  const sortedPdfs = [...uniquePdfs.values()].sort((a, b) => {
    return new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime();
  });

  for (const pdf of sortedPdfs) {
    const sizeMB = pdf.size ? (parseInt(pdf.size) / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
    console.log(`[${sizeMB}] ${pdf.name}`);
    console.log(`  ID: ${pdf.id} | Modified: ${pdf.modifiedTime}`);
  }

  console.log('\n=== AUDIO FILES ===\n');
  for (const f of audio) {
    const sizeMB = f.size ? (parseInt(f.size) / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
    console.log(`[${sizeMB}] ${f.name} | ID: ${f.id}`);
  }

  console.log('\n=== OTHER FILES ===\n');
  for (const f of [...pages, ...images, ...videos, ...other]) {
    const sizeMB = f.size ? (parseInt(f.size) / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
    console.log(`[${sizeMB}] ${f.name} (${f.mimeType}) | ID: ${f.id}`);
  }

  const output = {
    total: allFiles.length,
    uniquePdfs: sortedPdfs.map(p => ({
      id: p.id,
      name: p.name,
      size: p.size,
      sizeMB: p.size ? (parseInt(p.size) / 1024 / 1024).toFixed(1) : 'N/A',
      modified: p.modifiedTime
    })),
    audio: audio.map(a => ({ id: a.id, name: a.name, size: a.size, modified: a.modifiedTime })),
    other: [...pages, ...images, ...videos, ...other].map(o => ({ id: o.id, name: o.name, mimeType: o.mimeType, size: o.size }))
  };

  const fs = await import('fs');
  fs.writeFileSync('/tmp/drive-inventory.json', JSON.stringify(output, null, 2));
  console.log('\nFull inventory saved to /tmp/drive-inventory.json');
}

scanAllFiles().catch(console.error);
