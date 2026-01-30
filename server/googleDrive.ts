// Google Drive Integration - Barran Dodger Evidence Archive
// Uses Replit's Google Drive connector for authentication

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

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
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

async function getUncachableGoogleDriveClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.drive({ version: 'v3', auth: oauth2Client });
}

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  createdTime?: string;
  modifiedTime?: string;
  webViewLink?: string;
}

export async function listDriveFiles(query?: string, pageSize: number = 100): Promise<DriveFile[]> {
  const drive = await getUncachableGoogleDriveClient();
  
  // Search for PDFs, images, and documents
  let q = "trashed = false and (mimeType = 'application/pdf' or mimeType contains 'image/' or mimeType = 'application/vnd.google-apps.document')";
  
  if (query) {
    q = `${q} and name contains '${query}'`;
  }

  const response = await drive.files.list({
    q,
    pageSize,
    fields: 'files(id, name, mimeType, size, createdTime, modifiedTime, webViewLink)',
    orderBy: 'modifiedTime desc'
  });

  return (response.data.files || []) as DriveFile[];
}

export async function downloadDriveFile(fileId: string, fileName: string): Promise<string> {
  const drive = await getUncachableGoogleDriveClient();
  
  // Get file metadata first
  const fileMetadata = await drive.files.get({
    fileId,
    fields: 'mimeType, name'
  });
  
  const mimeType = fileMetadata.data.mimeType;
  const originalName = fileMetadata.data.name || fileName;
  
  // Determine output path and extension
  const timestamp = Date.now();
  let outputFileName: string;
  let exportMimeType: string | undefined;
  
  // Use provided fileName if available, otherwise use original
  const baseName = fileName || originalName;
  
  if (mimeType === 'application/vnd.google-apps.document') {
    // Export Google Docs as PDF
    exportMimeType = 'application/pdf';
    outputFileName = `${baseName.replace(/\.[^/.]+$/, '')}_${timestamp}.pdf`;
  } else {
    // For binary files (PDFs, images), download directly
    const ext = baseName.split('.').pop() || 'pdf';
    outputFileName = `${baseName.replace(/\.[^/.]+$/, '')}_${timestamp}.${ext}`;
  }
  
  // Truncate filename if too long (max 200 chars before extension)
  const sanitized = outputFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
  const maxLen = 200;
  const outputPath = path.join('attached_assets', sanitized.length > maxLen ? sanitized.substring(0, maxLen) : sanitized);
  
  // Create attached_assets directory if it doesn't exist
  if (!fs.existsSync('attached_assets')) {
    fs.mkdirSync('attached_assets', { recursive: true });
  }
  
  let response;
  if (exportMimeType) {
    // Export Google Docs format
    response = await drive.files.export(
      { fileId, mimeType: exportMimeType },
      { responseType: 'stream' }
    );
  } else {
    // Download binary file
    response = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    );
  }
  
  // Write file to disk
  const dest = fs.createWriteStream(outputPath);
  
  await new Promise<void>((resolve, reject) => {
    (response.data as NodeJS.ReadableStream)
      .pipe(dest)
      .on('finish', resolve)
      .on('error', reject);
  });
  
  // Set proper permissions
  fs.chmodSync(outputPath, 0o644);
  
  return '/' + outputPath;
}

export async function searchDriveForEvidence(): Promise<DriveFile[]> {
  const drive = await getUncachableGoogleDriveClient();
  
  // Search for evidence-related keywords
  const keywords = [
    'affidavit', 'legal', 'court', 'evidence', 'tribunal', 
    'complaint', 'NDIS', 'ASIO', 'persecution', 'whistleblower',
    'McLean', 'Barran', 'testimony', 'statement', 'report',
    'ICC', 'human rights', 'ombudsman', 'attorney'
  ];
  
  const allFiles: DriveFile[] = [];
  const seenIds = new Set<string>();
  
  for (const keyword of keywords) {
    try {
      const files = await listDriveFiles(keyword, 50);
      for (const file of files) {
        if (!seenIds.has(file.id)) {
          seenIds.add(file.id);
          allFiles.push(file);
        }
      }
    } catch (error) {
      console.error(`Error searching for keyword "${keyword}":`, error);
    }
  }
  
  return allFiles;
}
