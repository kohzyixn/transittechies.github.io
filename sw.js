importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute([
      { url: '/img/star.svg', revision: '1' },
      { url: '/img/icon_train.svg', revision: '1' },
      { url: '/img/ttnyc.jpg', revision: '1' },
  ]);

  workbox.routing.registerRoute(
    new RegExp('/'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'ttnyc',
    })
  );

  workbox.routing.registerRoute(
    /.*(?:ampproject)\.org.*\.(?:js)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'amp-project',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts',
    })
  );

} else {
  console.log(`Workbox didn't load`);
}