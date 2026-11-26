/* Registers the service worker so the site keeps working with no internet. */
(function () {
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  var s = document.currentScript, root = new URL('../', s.src);
  navigator.serviceWorker.register(new URL('sw.js', root), { scope: root.pathname }).catch(function () {});
})();
