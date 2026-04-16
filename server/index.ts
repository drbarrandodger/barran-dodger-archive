import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

const app = express();

// Redirect every www.barrandodger.com request to barrandodger.com permanently
app.use((req, res, next) => {
  const host = req.hostname || req.headers.host || '';
  if (host.startsWith('www.')) {
    const bare = host.replace(/^www\./, '');
    return res.redirect(301, `https://${bare}${req.url}`);
  }
  next();
});

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Applebot
Allow: /

Sitemap: https://www.barrandodger.com/sitemap.xml
`);
});

app.use((_req, res, next) => {
  res.setHeader('X-Robots-Tag', 'index, follow');
  next();
});

// Serve attached_assets as static files with correct MIME types
app.use('/attached_assets', express.static(path.resolve(process.cwd(), 'attached_assets'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.jpeg') || filePath.endsWith('.jpg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    } else if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    }
  }
}));

// Serve all documents with server-side download tracking
// Checks github-pages-deploy/documents first, then client/public/documents as fallback
const deployDir = path.resolve(process.cwd(), 'github-pages-deploy');
const documentsDir = path.join(deployDir, 'documents');
const publicDocumentsDir = path.resolve(process.cwd(), 'client/public/documents');

const TRACKED_EXTENSIONS: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
};

app.use('/documents', (req: Request, res: Response, next: NextFunction) => {
  const lowerPath = req.path.toLowerCase();
  const ext = Object.keys(TRACKED_EXTENSIONS).find(e => lowerPath.endsWith(e));
  if (!ext) return next();

  const basename = path.basename(req.path);

  // Derive slug from filename (strip extension, normalise to hyphens)
  const slug = path.basename(req.path, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // Find the file — check both document directories
  const primaryPath = path.join(documentsDir, basename);
  const fallbackPath = path.join(publicDocumentsDir, basename);
  const filePath = fs.existsSync(primaryPath) ? primaryPath : fs.existsSync(fallbackPath) ? fallbackPath : null;

  if (!filePath) return next();

  // Fire-and-forget: track the download without blocking the response
  storage.incrementDownloadCount(slug).catch(() => {});

  res.setHeader('Content-Type', TRACKED_EXTENSIONS[ext]);
  res.setHeader('Content-Disposition', ['.pdf', '.mp3', '.mp4', '.jpeg', '.jpg', '.png'].includes(ext) ? 'inline' : 'attachment');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(filePath, (err) => {
    if (err) next();
  });
});
// Fallback static for any untracked file type in documents folder
app.use('/documents', express.static(documentsDir));
app.use('/documents', express.static(publicDocumentsDir));
app.use('/assets', express.static(path.join(deployDir, 'assets'), {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
}));
app.use('/images', express.static(path.join(deployDir, 'images'), {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
}));
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
