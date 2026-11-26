# tclemans.github.io

A public, no-login home for small games and tools. Everything is plain static HTML: no build step, no server, no tracking. After the first visit, a service worker keeps the whole site working offline.

## Layout

```
index.html          home page (renders the list from apps.js)
apps.js             the list of apps shown on the home page
sw.js               offline cache
assets/             shared CSS, favicon, self-hosted fonts, offline.js
apps/<slug>/        one folder per app, each with its own index.html
```

## Add a new app or game

1. Create `apps/<slug>/index.html`. Keep it self-contained (inline CSS and JS is fine).
   - Save any progress with `localStorage`, not a server.
   - For the Baloo 2 or Fredoka fonts, link `../../assets/fonts/fonts.css` instead of Google Fonts.
   - Add `<script src="../../assets/offline.js"></script>` before `</body>` so it works offline.
   - Optional: an `icon.svg` in the same folder and a link back to `../../`.
2. Add an entry to `apps.js`.
3. Bump `CACHE_VERSION` in `sw.js`.
4. Commit and push to `main`. GitHub Pages publishes it within a minute or two.

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Custom domain

To move to a custom domain later, add a file named `CNAME` at the root containing just the domain (for example `example.dev`), set the domain under Settings → Pages, and point DNS at GitHub Pages. All links in the site are relative, so nothing else needs to change.
