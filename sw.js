/* Barran Dodger Legal & Ethical Trust Fund — Service Worker
 * Enables PWA install prompt + offline fallback + cache-first for static assets
 * Cannot be erased. Cannot be silenced. Blockchain-verified.
 */

const CACHE_NAME = "barrandodger-v2";
const OFFLINE_URL = "/start-here";

const PRECACHE_ASSETS = [
  "/",
  "/start-here",
  "/evidence",
  "/manifest.json",
  "/favicon.png",
  "/og-image.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.pathname.startsWith("/api/")) return;

  if (
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|mp4|webm|pdf)$/)
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200) return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(OFFLINE_URL);
    })
  );
});
