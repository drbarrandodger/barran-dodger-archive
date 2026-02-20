// GitHub deployment script - pushes site to GitHub Pages
// Uses the Replit GitHub connector for authentication
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
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

function getAllFiles(dir: string, base: string = dir): { path: string; content: string }[] {
  const results: { path: string; content: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(base, fullPath);

    if (entry.isDirectory()) {
      results.push(...getAllFiles(fullPath, base));
    } else {
      const content = fs.readFileSync(fullPath);
      results.push({
        path: relativePath,
        content: content.toString('base64')
      });
    }
  }
  return results;
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
  console.log(`Reading files from ${deployDir}...`);
  const files = getAllFiles(deployDir);
  console.log(`Found ${files.length} files to upload`);

  console.log('Creating git tree...');

  const blobs = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (i % 10 === 0) {
      console.log(`   Uploading file ${i + 1}/${files.length}...`);
    }
    const { data: blob } = await octokit.git.createBlob({
      owner: user.login,
      repo: repoName,
      content: file.content,
      encoding: 'base64',
    });
    blobs.push({
      path: file.path,
      mode: '100644' as const,
      type: 'blob' as const,
      sha: blob.sha,
    });
  }

  console.log('Building tree from blobs...');
  const { data: tree } = await octokit.git.createTree({
    owner: user.login,
    repo: repoName,
    tree: blobs,
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

deploy().catch(err => {
  console.error('Deployment failed:', err.message);
  process.exit(1);
});
