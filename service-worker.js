// Agenda Financeira v3.0 - service worker conservador
// Não faz cache agressivo do index para evitar versões antigas no celular.
const CACHE_NAME = "agenda-financeira-v3-assets";
const ASSETS = [
  "./css/main.css",
  "./js/firebase-config.js",
  "./js/firebase-bridge.js",
  "./js/app.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => null));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
});
