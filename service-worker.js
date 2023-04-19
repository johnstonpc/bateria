const CACHE_NAME = "meu-pwa-cache-v1";
const urlsToCache = [
  "/",
  '/index.html',
  '/logica1.js',
  'img/bateriaimg.png',
  "https://johnstonpc.github.io/bateria/",
  '/alarme.mp3',
   
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');

  // Solicita permissão para continuar executando em segundo plano
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker ativado');
});

self.addEventListener('fetch', function(event) {
  console.log('Requisição interceptada pelo Service Worker');
  event.respondWith(fetch(event.request));
});
