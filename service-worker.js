// Der Service Worker speichert zentrale Dateien im Cache,
// damit die App auch offline eine Grundfunktion behält.
const CACHE_NAME = "reel-recipes-v8";
const APP_SHELL = [
  "./",
  "./index.html",
  "./rezepte.html",
  "./suche.html",
  "./hinzufuegen.html",
  "./rezept.html",
  "./imprint.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/pwa.js",
  "./js/db.js",
  "./js/sample-recipes.js",
  "./js/recipe-render.js",
  "./js/home.js",
  "./js/app.js",
  "./js/add-recipe.js",
  "./js/recipe-detail.js",
  "./js/recipes-page.js",
  "./data/Logo_Reel_Recipes.png",
  "./data/Logo_Reel_Recipes_transparent.png",
  "./data/icons/icon-192.png",
  "./data/icons/icon-512.png",
  "./data/icons/apple-touch-icon.png",
  "./data/recipe-images/avocado-sandwich.png",
  "./data/recipe-images/gemuesepfanne.png",
  "./data/recipe-images/hafer-bowl.png",
  "./data/recipe-images/matcha-latte.png",
  "./data/recipe-images/schoko-bananen-kuchen.png",
  "./data/recipe-images/tomatenpasta.png",
  "./data/recipe-images/Zimtschnecken.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  // Für ganze HTML-Seiten wird zuerst das Netzwerk versucht,
  // damit Änderungen möglichst schnell sichtbar werden.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  // Für Bilder, CSS und JavaScript wird zuerst der Cache geprüft.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        return response;
      });
    })
  );
});
