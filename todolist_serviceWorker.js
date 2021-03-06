const cacheName = "pwa-todo-v1";
const staticAssets = [
  "./",
  "./index.html",
  "./script/app.js",
  "./css/style.css",
  "./image/eco-green-beetle-icon/favicon.ico",
];

// Start the service worker and cache all of the app's content
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(staticAssets);
    })
  );
});

// Serve cached content when offline
// https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          throw error;
        });
    })
  );
});