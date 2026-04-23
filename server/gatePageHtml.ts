export function buildGatePage(opts: {
  expired?: boolean;
  documentPath?: string;
}): string {
  const heading = opts.expired
    ? 'Your download link has expired'
    : 'This document is sealed';

  const subheading = opts.expired
    ? 'Return to the archive to re-unlock this document.'
    : 'Direct access to this file requires a valid download token.';

  const docHint = opts.documentPath
    ? decodeURIComponent(opts.documentPath.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') ?? '')
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Access Required — Barran Dodger Archive</title>
  <meta name="robots" content="noindex, nofollow" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      height: 100%;
      background: #0e0603;
      color: #fde68a;
      font-family: Georgia, 'Times New Roman', serif;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .wrap {
      max-width: 560px;
      width: 100%;
      margin: 2rem;
      text-align: center;
    }
    .seal {
      width: 88px; height: 88px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #78350f, #1c0900);
      border: 2px solid #92400e;
      display: flex; align-items: center; justify-content: center;
      font-size: 2.8rem;
      box-shadow: 0 0 40px rgba(217,119,6,0.25), 0 0 80px rgba(217,119,6,0.08);
      animation: pulse 3s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 30px rgba(217,119,6,0.2), 0 0 60px rgba(217,119,6,0.06); }
      50% { box-shadow: 0 0 50px rgba(217,119,6,0.4), 0 0 100px rgba(217,119,6,0.14); }
    }
    .angel {
      font-size: 0.65rem;
      letter-spacing: 0.25em;
      color: #d97706;
      text-transform: uppercase;
      font-family: monospace;
      margin-bottom: 0.5rem;
    }
    h1 {
      font-size: 1.45rem;
      color: #fde68a;
      margin-bottom: 0.5rem;
      font-weight: normal;
      line-height: 1.35;
    }
    .sub {
      font-size: 0.85rem;
      color: #92400e;
      margin-bottom: 1.5rem;
    }
    ${docHint ? `.docname {
      font-family: monospace;
      font-size: 0.7rem;
      color: #78350f;
      margin-bottom: 1.5rem;
      padding: 0.4rem 0.8rem;
      border: 1px solid #451a03;
      border-radius: 0.5rem;
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }` : ''}
    .divider {
      border: none;
      border-top: 1px solid #451a03;
      margin: 1.5rem 0;
    }
    .prophecy {
      background: #1c0900;
      border: 1px solid #78350f;
      border-radius: 1rem;
      padding: 1.2rem 1.4rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }
    .prophecy .label {
      font-family: monospace;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: #d97706;
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }
    .prophecy p {
      font-size: 0.88rem;
      color: #fbbf24;
      line-height: 1.7;
      margin-bottom: 0.5rem;
    }
    .prophecy p:last-child { margin-bottom: 0; }
    .prophecy strong { color: #fde68a; }
    .cta {
      display: inline-block;
      width: 100%;
      padding: 1rem 1.5rem;
      background: linear-gradient(135deg, #b45309, #d97706);
      color: #000;
      font-family: monospace;
      font-size: 0.95rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      text-decoration: none;
      border-radius: 0.75rem;
      border: none;
      cursor: pointer;
      margin-bottom: 1rem;
      transition: opacity 0.2s;
      box-shadow: 0 4px 20px rgba(217,119,6,0.3);
    }
    .cta:hover { opacity: 0.88; }
    .redirect-note {
      font-size: 0.7rem;
      color: #78350f;
      font-family: monospace;
    }
    #countdown { color: #d97706; }
    .abn {
      margin-top: 1.5rem;
      font-size: 0.6rem;
      color: #451a03;
      font-family: monospace;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="seal">⚖️</div>
    <p class="angel">333 · Divine Witness Archive · 333</p>
    <h1>${heading}</h1>
    <p class="sub">${subheading}</p>
    ${docHint ? `<p class="docname">${docHint}</p>` : ''}
    <hr class="divider" />
    <div class="prophecy">
      <p class="label">This is a legitimate act of justice — not charity</p>
      <p>
        Dr. Richard William McLean (Barran Dodger) has served humanity for <strong>35+ years</strong> —
        producing 2,300+ primary source documents while being <strong>stalked, forcibly medicated,
        denied legal aid, stripped of income, surveilled by agencies</strong>, and brought to the 
        edge of death to suppress the truth he carries. Every person who should have protected him 
        chose silence instead.
      </p>
      <p>
        His testimony is formally before the <strong>International Criminal Court</strong>. 
        Blockchain sealed. Cryptographically incorruptible. Available to the world despite every 
        coordinated effort to erase it.
      </p>
      <p>
        <strong>$3.33 is your receipt of this covenant.</strong> 333 — the angel number of divine 
        witness, the Holy Trinity expressed. For less than a coffee, you reward a man for a service 
        to humanity that cost him everything. You become a co-witness. 
        <strong>Every download is a declaration.</strong>
      </p>
    </div>
    <a class="cta" href="https://barrandodger.com" id="cta-btn">
      ⚖ &nbsp;Go to barrandodger.com — Pay $3.33 &amp; Download
    </a>
    <p class="redirect-note">
      Redirecting automatically in <span id="countdown">10</span> seconds…
    </p>
    <p class="abn">
      ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund<br />
      © 2025 Dr. Richard William McLean. All Rights Reserved.
    </p>
  </div>
  <script>
    var n = 10;
    var el = document.getElementById('countdown');
    var iv = setInterval(function() {
      n--;
      if (el) el.textContent = n;
      if (n <= 0) {
        clearInterval(iv);
        window.location.replace('https://barrandodger.com');
      }
    }, 1000);
    document.getElementById('cta-btn').addEventListener('click', function() {
      clearInterval(iv);
    });
  </script>
</body>
</html>`;
}

export function sendGatePage(res: any, opts: { expired?: boolean; documentPath?: string } = {}) {
  const wantsBrowser = res.req
    ? (res.req.headers?.accept || '').includes('text/html')
    : true;

  if (wantsBrowser) {
    res.status(403).set('Content-Type', 'text/html; charset=utf-8').send(buildGatePage(opts));
  } else {
    res.status(403).json({
      error: opts.expired ? 'Invalid or expired download token' : 'Download requires payment',
      paymentUrl: 'https://barrandodger.com',
    });
  }
}
