/* Offline support: caches the site on first visit, then serves from cache and refreshes in the background. */
const CACHE_VERSION = 'v6';
const CACHE = 'site-' + CACHE_VERSION;
importScripts('apps.js');

const CORE = ['./', 'index.html', 'apps.js', 'assets/site.css', 'assets/offline.js', 'assets/favicon.svg',
  'assets/fonts/fonts.css', 'assets/fonts/baloo2.woff2', 'assets/fonts/fredoka.woff2'];
const APP_FILES = self.APPS.flatMap(a => ['apps/' + a.slug + '/', 'apps/' + a.slug + '/index.html']
  .concat(a.icon ? ['apps/' + a.slug + '/' + a.icon] : []))
  .concat((self.PROJECTS || []).flatMap(p => (p.icon ? [p.icon] : []).concat((p.shots || []).map(s => s.src))
    .map(f => 'projects/' + p.slug + '/' + f)));

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.concat(APP_FILES).map(u => c.add(u).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('site-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; });
    if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
    return net.catch(() => cache.match('index.html'));
  }));
});
