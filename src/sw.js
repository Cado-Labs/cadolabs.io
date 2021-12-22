const CACHE = 'cache-only-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                '/images'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) =>
    event.respondWith(fromCache(event.request))
);

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request)
            .then((matching) => matching || Promise.reject('no-match'))
    );
}
