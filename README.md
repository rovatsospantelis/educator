# TenLux Starter

Production-ready Vue 3 starter για γρήγορα, custom sites — με PWA, dark mode, SEO, analytics και animations έτοιμα. Κάθε νέο project ξεκινά από το ~70%.

> *Post tenebras spero lucem* — TenLux

---

## Τι περιλαμβάνει

- **Vue 3 + Vite + Tailwind v4 + Vue Router**
- **Config-driven** — αλλάζεις `src/config/site.js` και το μισό site προσαρμόζεται
- **PWA** — εγκαταστάσιμο app (manifest + service worker + icon generator)
- **Dark mode** — token-based, toggle με μνήμη, no-flash, easter egg
- **SEO** — per-page titles/meta, Open Graph, JSON-LD
- **Analytics** — GA4 με event tracking + localhost guard
- **Animations** — scroll reveal (stagger), page transitions
- **Components**: Navbar (+ mobile tab bar), Footer, ThemeToggle, WhatsAppButton, OpenStatus, ContactForm (lead-gen), Gallery+Lightbox (portfolio), BaseSection
- **Feature flags** — άναψε/σβήσε κομμάτια ανά project

---

## Γρήγορο ξεκίνημα

```bash
npm install
npm run dev
```

### 1. Config (`src/config/site.js`)
Όνομα, tagline, επικοινωνία, social, ωράριο, GA ID, domain, feature flags:

```js
features: {
  darkMode: true,
  openStatus: false,   // live "ανοιχτά τώρα" — μαγαζιά
  whatsappButton: false,
  contactForm: true,   // lead-gen (φιλόλογος)
  gallery: true,       // portfolio (καλλιτέχνις)
  booking: false,      // booking CTA
}
```

### 2. Παλέτα & fonts
- Χρώματα: `src/assets/main.css` → `@theme` (light) + `html.dark` (dark)
- Fonts: `index.html` `<link>` + `main.css` `--font-sans`/`--font-display`

### 3. Icons & OG
```bash
pip install pillow numpy --break-system-packages
python3 scripts/make_assets.py path/to/logo.png "#FFFFFF" "Tagline"
```

### 4. Links (`src/App.vue`)
Όρισε τα `navLinks` (4 για το mobile tab bar).

### 5. Περιεχόμενο
Επεξεργάσου `src/views/*`.

---

## Ανά τύπο project

**Lead-gen (φιλόλογος):** `contactForm: true` · στήσε Formspree → endpoint στο `ContactView.vue`.

**Portfolio (καλλιτέχνις):** `gallery: true` · φωτό στο `public/` + `GalleryView.vue`. Το Gallery έχει lightbox (keyboard + swipe).

---

## Deploy (Netlify)

1. Push σε GitHub (private)
2. Netlify → New site from Git
3. Build: `npm run build` · Publish: `dist`
4. Custom domain + auto HTTPS

`public/_redirects` → SPA routing.

### Production checklist
- [ ] `site.js`: domain, GA ID, στοιχεία
- [ ] Icons/OG (`make_assets.py`)
- [ ] Ξεσχόλιασε GA στο `index.html`
- [ ] SEO URLs → πραγματικό domain
- [ ] `robots.txt` + `sitemap.xml` στο `public/`
- [ ] Google Search Console: sitemap

---

## Δομή

```
src/
  config/      site.js + theme.js
  composables/ useTheme, useSeo
  components/  Navbar, Footer, ThemeToggle, WhatsApp,
               OpenStatus, ContactForm, Gallery, BaseSection
  directives/  reveal.js
  utils/       track.js
  views/       Home, About, Work, Gallery, Contact
  router/      index.js
scripts/       make_assets.py
```

---

Crafted by **TenLux** · *Post tenebras spero lucem*
