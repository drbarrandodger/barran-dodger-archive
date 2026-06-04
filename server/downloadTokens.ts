import { createHmac } from 'crypto';

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getSecret(): string {
  return (process.env.STRIPE_SECRET_KEY || 'barrandodger-dl-fallback') + '-dl-v1';
}

function normalizeUrl(url: string): string {
  return url.split('?')[0].toLowerCase().replace(/\/+/g, '/').replace(/^\//, '');
}

export function issueDownloadToken(documentUrl: string): string {
  const payload = JSON.stringify({
    u: normalizeUrl(documentUrl),
    e: Date.now() + TOKEN_TTL_MS,
  });
  const b64 = Buffer.from(payload).toString('base64url');
  const sig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
  return `${b64}.${sig}`;
}

export function isValidDownloadToken(token: string, requestPath?: string): boolean {
  try {
    const dotIdx = token.lastIndexOf('.');
    if (dotIdx === -1) return false;
    const b64 = token.substring(0, dotIdx);
    const sig = token.substring(dotIdx + 1);
    const expectedSig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
    if (sig !== expectedSig) return false;
    const { u, e } = JSON.parse(Buffer.from(b64, 'base64url').toString());
    if (Date.now() > e) return false;
    if (requestPath) {
      return normalizeUrl(requestPath) === u;
    }
    return true;
  } catch {
    return false;
  }
}
