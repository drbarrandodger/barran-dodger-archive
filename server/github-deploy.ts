// GitHub deployment script - pushes site to GitHub Pages
// Uses the Replit GitHub connector for authentication
// Supports resumable uploads via progress file
import { Octokit } from '@octokit/rest';
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
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X-Replit-Token': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

const MAX_FILE_SIZE = 90 * 1024 * 1024;
const PROGRESS_FILE = path.join(process.cwd(), 'deploy-progress.json');

interface FileMeta { relativePath: string; fullPath: string; size: number }
interface BlobEntry { path: string; mode: '100644'; type: 'blob'; sha: string }
interface Progress { blobs: BlobEntry[]; uploadedPaths: string[]; phase: string }

function loadProgress(): Progress {
  try {
    if (fs.existsSync(PROGRESS_FILE)) {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
    }
  } catch {}
  return { blobs: [], uploadedPaths: [], phase: 'upload' };
}

function saveProgress(progress: Progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress));
}

function listAllFiles(dir: string, base: string = dir): FileMeta[] {
  const results: FileMeta[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(base, fullPath);
    if (entry.isDirectory()) {
      results.push(...listAllFiles(fullPath, base));
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size > MAX_FILE_SIZE) {
        console.log(`   Skipping large file (${(stats.size / 1024 / 1024).toFixed(1)}MB): ${relativePath}`);
      } else {
        results.push({ relativePath, fullPath, size: stats.size });
      }
    }
  }
  return results;
}

function readFileBase64(filePath: string): string {
  return fs.readFileSync(filePath).toString('base64');
}

async function deploy() {
  console.log('Getting GitHub access token...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });

  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`Authenticated as: ${user.login}`);

  const repoName = 'barran-dodger-archive';

  let repoEmpty = false;
  try {
    await octokit.repos.get({ owner: user.login, repo: repoName });
    console.log(`Repository ${repoName} exists.`);
    try {
      await octokit.repos.getContent({ owner: user.login, repo: repoName, path: '' });
    } catch {
      repoEmpty = true;
      console.log('Repository is empty, will initialize it.');
    }
  } catch {
    console.log(`Creating new public repository: ${repoName}...`);
    await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Barran Dodger Legal & Ethical Trust Fund — Immutable Public Archive of 2,077+ blockchain-verified documents. Download, fork, share freely.',
      homepage: `https://${user.login}.github.io/${repoName}/`,
      auto_init: true,
      visibility: 'public',
    });
    console.log(`Repository created: https://github.com/${user.login}/${repoName}`);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  if (repoEmpty) {
    console.log('Initializing empty repo with a README via Contents API...');
    const readmePath = path.join(process.cwd(), 'github-pages-deploy', 'README.md');
    const readmeContent = fs.readFileSync(readmePath).toString('base64');
    await octokit.repos.createOrUpdateFileContents({
      owner: user.login,
      repo: repoName,
      path: 'README.md',
      message: 'Initial commit',
      content: readmeContent,
    });
    console.log('Repository initialized.');
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  const deployDir = path.join(process.cwd(), 'github-pages-deploy');
  console.log(`Scanning files from ${deployDir}...`);
  const fileMetas = listAllFiles(deployDir);
  console.log(`Found ${fileMetas.length} files to upload`);
  const totalSize = fileMetas.reduce((s, f) => s + f.size, 0);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(1)}MB`);

  const progress = loadProgress();

  if (progress.phase === 'done') {
    console.log('Previous deployment completed. Clearing progress for fresh deploy...');
    progress.blobs = [];
    progress.uploadedPaths = [];
    progress.phase = 'upload';
  }

  if (progress.phase === 'upload') {
    const uploadedSet = new Set(progress.uploadedPaths);
    const remaining = fileMetas.filter(m => !uploadedSet.has(m.relativePath));

    if (remaining.length < fileMetas.length) {
      console.log(`Resuming upload: ${progress.uploadedPaths.length} already uploaded, ${remaining.length} remaining`);
    }

    console.log('Uploading blobs sequentially...');
    let skipped = 0;

    for (let i = 0; i < remaining.length; i++) {
      const meta = remaining[i];
      const globalIdx = progress.uploadedPaths.length + i + 1;
      if (i % 10 === 0 || meta.size > 5 * 1024 * 1024) {
        console.log(`   [${globalIdx}/${fileMetas.length}] ${meta.relativePath} (${(meta.size / 1024 / 1024).toFixed(1)}MB)`);
      }
      try {
        const content = readFileBase64(meta.fullPath);
        const { data: blob } = await octokit.git.createBlob({
          owner: user.login,
          repo: repoName,
          content,
          encoding: 'base64',
        });
        progress.blobs.push({
          path: meta.relativePath,
          mode: '100644',
          type: 'blob',
          sha: blob.sha,
        });
        progress.uploadedPaths.push(meta.relativePath);

        if (i % 20 === 19) {
          saveProgress(progress);
        }
      } catch (err: any) {
        console.log(`   FAILED [${globalIdx}/${fileMetas.length}]: ${meta.relativePath} — ${err.message?.substring(0, 100)}`);
        skipped++;
        if (err.status === 422 || err.status === 413) {
          console.log(`   File too large for API, skipping.`);
          progress.uploadedPaths.push(meta.relativePath);
        }
      }
    }

    saveProgress(progress);
    if (skipped > 0) {
      console.log(`   Skipped ${skipped} files due to upload errors.`);
    }
    console.log(`Upload phase complete: ${progress.blobs.length} blobs ready.`);
    progress.phase = 'commit';
    saveProgress(progress);
  }

  if (progress.phase === 'commit') {
    console.log(`Building tree from ${progress.blobs.length} blobs...`);
    const { data: tree } = await octokit.git.createTree({
      owner: user.login,
      repo: repoName,
      tree: progress.blobs,
    });

    let parentSha: string | undefined;
    try {
      const { data: ref } = await octokit.git.getRef({
        owner: user.login,
        repo: repoName,
        ref: 'heads/main',
      });
      parentSha = ref.object.sha;
    } catch {}

    console.log('Creating commit...');
    const { data: commit } = await octokit.git.createCommit({
      owner: user.login,
      repo: repoName,
      message: 'Deploy Barran Dodger Legal & Ethical Trust Fund — Complete Public Archive\n\nThis archive contains 2,077+ blockchain-verified documents.\nFork it. Download it. Share it. The truth cannot be erased.',
      tree: tree.sha,
      parents: parentSha ? [parentSha] : [],
    });

    console.log('Setting main branch...');
    try {
      await octokit.git.updateRef({
        owner: user.login,
        repo: repoName,
        ref: 'heads/main',
        sha: commit.sha,
        force: true,
      });
    } catch {
      await octokit.git.createRef({
        owner: user.login,
        repo: repoName,
        ref: 'refs/heads/main',
        sha: commit.sha,
      });
    }

    console.log('Enabling GitHub Pages...');
    try {
      await octokit.repos.createPagesSite({
        owner: user.login,
        repo: repoName,
        source: {
          branch: 'main',
          path: '/',
        },
      });
      console.log('GitHub Pages enabled!');
    } catch (e: any) {
      if (e.status === 409) {
        console.log('GitHub Pages already enabled.');
      } else {
        console.log('Could not auto-enable GitHub Pages. You can enable it manually in Settings > Pages.');
        console.log('Error:', e.message);
      }
    }

    progress.phase = 'done';
    saveProgress(progress);

    console.log('\n========================================');
    console.log('DEPLOYMENT COMPLETE!');
    console.log('========================================');
    console.log(`Repository: https://github.com/${user.login}/${repoName}`);
    console.log(`Website: https://${user.login}.github.io/${repoName}/`);
    console.log(`Download ZIP: https://github.com/${user.login}/${repoName}/archive/refs/heads/main.zip`);
    console.log('========================================');
    console.log('Anyone can now:');
    console.log('  - Visit the website for free');
    console.log('  - Fork the repository to make their own permanent copy');
    console.log('  - Download the entire archive as a ZIP file');
    console.log('  - Share it with the world');
    console.log('========================================\n');
  }
}

deploy().catch(err => {
  console.error('Deployment failed:', err.message);
  process.exit(1);
});
