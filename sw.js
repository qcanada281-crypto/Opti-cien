const CACHE_NAME = 'optilook-v1.0';
const DYNAMIC_CACHE_NAME = 'optilook-dynamic-v1.0';

// Core assets to pre-cache immediately upon install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './admin.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/offline-manager.js',
  './js/admin/admin.js',
  './js/data/i18n.js',
  './js/data/products.js',
  './js/components/AnimatedMarquee.js',
  './js/components/BrandStory.js',
  './js/components/DigitalEyeCare.js',
  './js/components/EyewearVisual.js',
  './js/components/FeaturedCollection.js',
  './js/components/FinalCTA.js',
  './js/components/Footer.js',
  './js/components/Hero.js',
  './js/components/Modals.js',
  './js/components/Navbar.js',
  './js/components/ProductCard.js',
  './js/components/TrustStrip.js',
  './images/hero_glasses_black-transparent.png.png',
  './images/a-bold-photorealistic-poster-featuring-a_y4zxDC4FT0G6eYHe3aINAQ_EbAVtaf8SJah62cbAFuK3A.png',
  './images/a-close-up-photograph-of-elegant-eyeglas_iL8JZtXgRIiLhdcGUL2Odw_-uOlvARWST-hSO0OCTlfKg.png',
  './images/a-high-resolution-photorealistic-close-u_8ff1ZL8LRcyzKIvI18CUFA_MlqbwsMOSJCkWsXX_AvdLg.png',
  './images/a-premium-product-photography-shot-of-sl_VjaK7SnIRSCJTCAs9QL4TQ_B6nUmgWrT1KGnJLc0u2Xmg.png',
  './images/a-premium-studio-photograph-of-a-single-_A3bOFMviSFi-iUeXuGWMbw_sIs-Ee9lRg64aoxh2mDTrA_cover.png',
  './images/a-professional-product-photograph-of-cut_1M2leC5GRRi7A0fF9AJIgg_mbRDH2Q4RB-KK3mOXHlZaA_cover.png',
  './images/a-professional-product-photograph-of-ele___DMXV_JSUqWn__VJYGvAw_FXrY7i_gSi-HZNP2t0H1IQ_cover.png',
  './images/a-stunning-close-up-photograph-of-a-blue_tLF999gyWWyo2COTfZad3g_TCHAV1B9RCWjXbzzod0WMw_cover.png',
  './images/futuristic-comfortable-eyeglasses-made-w_CEMXKU9oQfCrWQFda_Ar8Q_jB7k2ykqQTOBPUAVuHh0Qg_cover.png',
  './images/heres-a-clean-and-professional-ai-image-_Q8rdzcapRvKB6OYHRNysJQ_FMOMY0wJRFSTfs5tbhGBgg.png',
  './images/mache-das-bild-minimalistisch-aus-andere_kH_q2m9yV2qDVOgKe_Nv8g_9ku7m0AWTZWWK6K8DUxyOw_cover.png',
  './images/studio-product-photography-of-clip-on-gl_Pa0qWyFZS9-tNwdOEjdqVA_nErwYRL2QsOc7X7q3YITvQ.png',
  './images/ultra-realistic-product-photography-of-a_plYHg6psRNq3z9kDH9sfCQ_HLF_68MgQQiepoIfrlKEow.png'
];

// External CDN dependencies to cache
const CDN_URLS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;600;700;800;900&family=Cairo:wght@400;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap'
];

// Install Event: pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache local assets
      const localPromises = cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[ServiceWorker] Some local assets failed to precache:', err);
      });

      // Fetch and cache external CDNs
      const cdnPromises = Promise.all(
        CDN_URLS.map((url) =>
          fetch(url, { mode: 'cors' })
            .then((response) => {
              if (response && response.ok) {
                return cache.put(url, response);
              }
            })
            .catch((err) => {
              console.warn('[ServiceWorker] Pre-caching CDN resource failed:', url, err);
            })
        )
      );

      return Promise.all([localPromises, cdnPromises]);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: clean up obsolete cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name !== DYNAMIC_CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache First for assets, Network Fallback with Dynamic Cache
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests and browser extensions
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Strategy: Stale-While-Revalidate or Cache-First
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Fetch in background to update cache or serve network if not cached
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and request is an HTML page, fallback to cached index.html
          if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });

      // Return cached response immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
