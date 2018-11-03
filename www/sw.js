/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/stencil-ssr.js",
    "revision": "ba95a0eb17a179fb6ea1a0575b28321c"
  },
  {
    "url": "build/stencil-ssr/array.es5.js",
    "revision": "35b8129c2d7fe9e4cfd4dd7c66869787"
  },
  {
    "url": "build/stencil-ssr/array.js",
    "revision": "7e7e8bf7e2a8adf7a575ee1f86c460fa"
  },
  {
    "url": "build/stencil-ssr/dom.es5.js",
    "revision": "2d26117554d01967c5a716506d8fdfe6"
  },
  {
    "url": "build/stencil-ssr/dom.js",
    "revision": "b1b9d397eed6a57dcc06506c2d79265d"
  },
  {
    "url": "build/stencil-ssr/fetch.es5.js",
    "revision": "7b8cb435f0697f35c21de717c87de049"
  },
  {
    "url": "build/stencil-ssr/fetch.js",
    "revision": "c49b556c95c92047dc673fd31efff379"
  },
  {
    "url": "build/stencil-ssr/home-page.entry.js",
    "revision": "776a04f4d9abcd38bf3c606b043993f6"
  },
  {
    "url": "build/stencil-ssr/home-page.sc.entry.js",
    "revision": "776a04f4d9abcd38bf3c606b043993f6"
  },
  {
    "url": "build/stencil-ssr/my-app.entry.js",
    "revision": "e3476c122b5dc434d2b41c01ae1f9e87"
  },
  {
    "url": "build/stencil-ssr/my-app.sc.entry.js",
    "revision": "e3476c122b5dc434d2b41c01ae1f9e87"
  },
  {
    "url": "build/stencil-ssr/object.es5.js",
    "revision": "dd135a873eccbda57324ac3fbc0c0982"
  },
  {
    "url": "build/stencil-ssr/object.js",
    "revision": "69b36257f76f6a2f8c9bf1396ef97cc3"
  },
  {
    "url": "build/stencil-ssr/page-1.entry.js",
    "revision": "4dad49cfed763f6e8a49fdca0e2e95bb"
  },
  {
    "url": "build/stencil-ssr/page-1.sc.entry.js",
    "revision": "4dad49cfed763f6e8a49fdca0e2e95bb"
  },
  {
    "url": "build/stencil-ssr/page-2.entry.js",
    "revision": "4689e5228627c4f832711ecb41951b36"
  },
  {
    "url": "build/stencil-ssr/page-2.sc.entry.js",
    "revision": "4689e5228627c4f832711ecb41951b36"
  },
  {
    "url": "build/stencil-ssr/stencil-ssr.core.js",
    "revision": "07bc9e29a2f8e72aac2f9e5acb49647b"
  },
  {
    "url": "build/stencil-ssr/stencil-ssr.core.pf.js",
    "revision": "77fb14aa43e96531c872bdab639ef459"
  },
  {
    "url": "build/stencil-ssr/string.es5.js",
    "revision": "6d5f1bbb99af797cd14ae9003b93b0dd"
  },
  {
    "url": "build/stencil-ssr/string.js",
    "revision": "5a02b05443b35c93f10ab6ae9eb6e701"
  },
  {
    "url": "build/stencil-ssr/url.es5.js",
    "revision": "9457ad38878459275f2e49557baee617"
  },
  {
    "url": "build/stencil-ssr/url.js",
    "revision": "95200528e8041373d00f94abd5c06f51"
  },
  {
    "url": "index.html",
    "revision": "4a24cc2a0c24003621e93069f6a0b2ee"
  },
  {
    "url": "manifest.json",
    "revision": "efb1570971d90f5e01df27f0e1a34df5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
