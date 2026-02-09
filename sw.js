const CACHE_NAME = 'kenya-quick-prices-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './manifest.json',
  './icon.svg',
  './privacy-policy.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
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
