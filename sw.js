importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/264db9f94c851defc79d.js",
    "revision": "add43ff06e82f7a84d986c1706294bcd"
  },
  {
    "url": "/_nuxt/336e593833eb64bcfb8f.js",
    "revision": "47c4b6fd03170a07695f509eddfa63f3"
  },
  {
    "url": "/_nuxt/38de2eba48db98c521f1.js",
    "revision": "31caba65e46ccb9e052335c8eb96b978"
  },
  {
    "url": "/_nuxt/51666aa33d7ce9833e33.js",
    "revision": "084a1b7aa57f8468b6737d3f21dc51f6"
  },
  {
    "url": "/_nuxt/5a6f10b4f220d3091e64.js",
    "revision": "e5de182ad0eacdd938c1e88a01a92202"
  },
  {
    "url": "/_nuxt/5fbbca549a452502288e.js",
    "revision": "3272790faac8340d8274a9edb5a7b502"
  },
  {
    "url": "/_nuxt/62599ade34c3c1d1a4e7.js",
    "revision": "9b27ae12a749d8407b1a9f901d0f16dd"
  },
  {
    "url": "/_nuxt/6d03aa68bf26f2397137.js",
    "revision": "ac33904e10d7ba3d77abe54db499c142"
  },
  {
    "url": "/_nuxt/c699f844971f10416c3f.js",
    "revision": "8740b98f3ba1fb852c3ce50a0deeb91d"
  },
  {
    "url": "/_nuxt/dc119460fe2ef28a4648.js",
    "revision": "0e08a923fb2094cdbca887fedbfb7d4d"
  },
  {
    "url": "/_nuxt/dd05b8887a319eead9c3.js",
    "revision": "1e4360550aa08467f16543e3f8c397ae"
  },
  {
    "url": "/_nuxt/df44a0a5df5cf3e807d1.js",
    "revision": "3cbe6633da02060bc607598ec35ac7d9"
  },
  {
    "url": "/_nuxt/e987b60e3b38a7a6b50d.js",
    "revision": "e361283ffbae9bd032ddbca3abfd9d0a"
  },
  {
    "url": "/_nuxt/eb74fe71755f33becf2a.js",
    "revision": "95260367c06dbf6ac36afde07e43a711"
  },
  {
    "url": "/_nuxt/fd78852560b32e149e1b.js",
    "revision": "6b9fd2a087647ad666859b59092f0136"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
