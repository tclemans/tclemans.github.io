/*
 * The list of everything on the home page.
 *
 * To add a new app or game:
 *   1. Make a folder under apps/ with an index.html (and an icon.svg if you like).
 *   2. Add an entry below. Newest first reads nicely, but any order works.
 *   3. Bump CACHE_VERSION in sw.js so phones pick up the change offline.
 *
 * Fields: slug (folder name), title, blurb (one sentence), category (an id from
 * CATEGORIES below), icon (optional, path inside the app folder), added (YYYY-MM-DD).
 *
 * The home page shows one section per category, in the order listed here, and skips
 * empty ones. To add a new section, add a line to CATEGORIES.
 */
self.CATEGORIES = [
  { id: "tools", title: "Tools", blurb: "Handy little utilities." },
  { id: "games", title: "Games", blurb: "Mostly for kids." }
];

self.APPS = [
  {
    slug: "skyjo-scorekeeper",
    title: "Skyjo Scorekeeper",
    blurb: "Keeps score for two-player Skyjo, including the doubling penalty. Saves as you go.",
    category: "tools",
    icon: "icon.svg",
    added: "2026-11-26"
  },
  {
    slug: "dino-truck-smash",
    title: "Dino Truck Smash",
    blurb: "A toddler-proof monster truck driven by a dinosaur. Tap to jump, squash cars, pop balloons.",
    category: "games",
    icon: "icon.svg",
    added: "2026-11-19"
  },
  {
    slug: "kitten-rescue",
    title: "Kitten Rescue Math",
    blurb: "Adding and taking away for young kids. Every right answer brings a lost kitten home.",
    category: "games",
    icon: "icon.svg",
    added: "2026-11-19"
  }
];
