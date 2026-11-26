/*
 * The list of everything on the home page.
 *
 * To add a new app or game:
 *   1. Make a folder under apps/ with an index.html (and an icon.svg if you like).
 *   2. Add an entry below. Newest first reads nicely, but any order works.
 *   3. Bump CACHE_VERSION in sw.js so phones pick up the change offline.
 *
 * Fields: slug (folder name), title, blurb (one sentence), kind ("Game" or "Tool"),
 * icon (optional, path inside the app folder), added (YYYY-MM-DD).
 */
self.APPS = [
  {
    slug: "dino-truck-smash",
    title: "Dino Truck Smash",
    blurb: "A toddler-proof monster truck driven by a dinosaur. Tap to jump, squash cars, pop balloons.",
    kind: "Game",
    icon: "icon.svg",
    added: "2026-11-19"
  },
  {
    slug: "kitten-rescue",
    title: "Kitten Rescue Math",
    blurb: "Adding and taking away for young kids. Every right answer brings a lost kitten home.",
    kind: "Game",
    icon: "icon.svg",
    added: "2026-11-19"
  }
];
