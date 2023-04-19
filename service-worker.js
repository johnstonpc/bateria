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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    console.log('Service worker registered successfully');
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(applicationServerPublicKey)
    })
    .then(function(subscription) {
      console.log('User is subscribed:', subscription);
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
    });
  })
  .catch(function(err) {
    console.log('Service worker registration failed: ', err);
  });
}
