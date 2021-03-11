self._precacheManifest = [].concat(self._precacheManifest || []);

workbox.setConfig({
    debug: (process.env.NODE_ENV !== 'production')
});

workbox.precaching.precacheAndRoute(self._precacheManifest, {});
