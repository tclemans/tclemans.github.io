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

/*
 * Bigger projects, shown in their own section above the apps.
 * Screenshots live in projects/<slug>/. labels are short status chips.
 * link is optional (for example a public repo or a live demo).
 */
self.PROJECTS = [
  {
    slug: "riparr",
    title: "Riparr",
    icon: "icon.png",
    labels: ["In progress", "Private"],
    blurb: "A web app for ripping DVDs and Blu-rays on a home server. It scans a disc as soon as it goes in, names everything for Jellyfin using TMDB, and checks every rip before it reaches the library, so a failed or interrupted rip never leaves a bad file behind. It sends a notification to your phone when a rip finishes.",
    stack: "Python, Flask, SQLite, MakeMKV, Docker",
    shots: [
      { src: "library-desktop.webp", w: 1600, h: 1000, alt: "Riparr library page on a desktop, listing ripped movies" },
      { src: "tabbar-phone.webp", w: 780, h: 1308, alt: "Riparr on a phone in dark mode, choosing the main feature on a Blu-ray" },
      { src: "library-episodes-phone.webp", w: 780, h: 1328, alt: "Riparr library on a phone, showing TV seasons and episodes" }
    ]
  }
];
