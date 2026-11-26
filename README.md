# tclemans.github.io

A public, no-login home for small games and tools. Everything is plain static HTML: no build step, no server, no tracking. After the first visit, a service worker keeps the whole site working offline.

## Layout

```
index.html          home page (renders the list from apps.js)
about/              about page
apps.js             the list of apps shown on the home page
sw.js               offline cache
assets/             shared CSS, favicon, self-hosted fonts, offline.js
apps/<slug>/        one folder per app, each with its own index.html
skyjo/ dino/ kitten/  short links that redirect to the full app paths
CNAME               custom domain (timclemans.com)
```

## Add a new app or game

1. Create `apps/<slug>/index.html`. Keep it self-contained (inline CSS and JS is fine).
   - Save any progress with `localStorage`, not a server.
   - For the Baloo 2 or Fredoka fonts, link `../../assets/fonts/fonts.css` instead of Google Fonts.
   - Add `<script src="../../assets/offline.js"></script>` before `</body>` so it works offline.
   - Optional: an `icon.svg` in the same folder and a link back to `../../`.
2. Add an entry to `apps.js`.
3. Bump `CACHE_VERSION` in `sw.js`.
4. Optional short link: copy `skyjo/index.html` to `<short>/index.html` and change the three paths and the title.
5. Commit and push to `main`. GitHub Pages publishes it within a minute or two.

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Custom domain

The site is served at timclemans.com via the `CNAME` file. DNS (in Cloudflare) needs:

| Type | Name | Content |
|------|------|---------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | tclemans.github.io |

Set them to "DNS only" (grey cloud) so GitHub can issue the HTTPS certificate, then turn on Enforce HTTPS under Settings → Pages. To move to another domain, change the one line in `CNAME`. All links in the site are relative.
