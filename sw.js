importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3c4aba3cf6ae4d075bf6.js",
    "revision": "87424bf7c7fed5f7df9524d7f59645c5"
  },
  {
    "url": "/_nuxt/79ad42dcbb3c63081859.js",
    "revision": "b7de520ef169605b768ecb478316c212"
  },
  {
    "url": "/_nuxt/c3c449f9d7bca61b94de.js",
    "revision": "bf42a1997ce00b7297eda20ba48cf585"
  },
  {
    "url": "/_nuxt/d435f8410e0ba3e8f454.js",
    "revision": "60899015bdc79541fcbcaf2009ba821a"
  }
], {
  "cacheId": "portofoliu",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
