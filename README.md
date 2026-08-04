# Hearts For Humanity — H4H KSA
### Official Website · Alfaisal University, Riyadh

A bilingual (EN/AR) multi-page website for the Hearts For Humanity student organization at Alfaisal University. Built with vanilla HTML/CSS/JS, Supabase, and GSAP.

---

## Pages

| Page | Path | Theme |
|------|------|-------|
| Main Landing | `index.html` | Rose/Pink |
| PR & Media | `pr.html` | Rose/Pink |
| Outreach | `outreach.html` | Teal/Emerald |
| Organizing | `organizing.html` | Gold/Amber |
| Content | `content.html` | Purple/Violet |
| Volunteering | `volunteering.html` | Orange/Coral |
| Admin Dashboard | `admin.html` | — |

---

## Features

- **Bilingual EN/AR** — lever toggle on every subteam page, button toggle on main page. Full RTL layout support with Arabic font (Noto Sans Arabic).
- **GSAP Animations** — scroll-triggered fade-ups, scale-ins, counter animations, and canvas-based scroll-scrubbing background.
- **Supabase Integration** — volunteer sign-up form submissions stored in a real Postgres database.
- **Admin Dashboard** — password-protected panel to add/remove events without touching code (`admin.html`).
- **SEO Ready** — Schema.org NGO structured data, Open Graph, Twitter Cards, sitemap, robots.txt.
- **Netlify Optimized** — `netlify.toml` configured with security headers and asset caching.

---

## Project Structure

```
h4h/
├── index.html          # Main landing page
├── pr.html             # PR & Media subteam
├── outreach.html       # Outreach subteam
├── organizing.html     # Organizing subteam
├── content.html        # Content subteam
├── volunteering.html   # Volunteering subteam
├── admin.html          # Admin dashboard
├── logo2.png           # H4H logo
├── galary/             # Event photos
├── events/             # Event assets
├── frames_webp/        # Background animation frames
├── sitemap.xml         # SEO sitemap
├── robots.txt          # SEO robots
└── netlify.toml        # Deployment config
```

---

## How to Update Content

### Adding/Removing Events
1. Open `admin.html` in your browser
2. Log in with the admin password
3. Use the dashboard to add or remove events — changes reflect on the site immediately via Supabase

### Updating Page Text
Each HTML file has clearly labeled sections. Search for the text you want to change and edit it directly. Arabic translations are in the `<script>` block at the bottom of each file inside the `T = { ar: { ... } }` object.

### Adding Photos to Gallery
Drop images into the `galary/` folder and reference them in `index.html` under the `#events` carousel section.

---

## Deployment

The site is deployed on **Netlify** with automatic deploys from the `main` branch.

- **Live URL:** https://h4h-ksa.netlify.app
- Every push to `main` triggers a new deploy automatically
- No build step required — pure static site

### Manual Deploy (first time)
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site → Import from GitHub
3. Select this repo, leave build settings empty, set publish directory to `.`
4. Deploy

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML/CSS/JS | Core site |
| GSAP 3 + ScrollTrigger | Animations |
| Tailwind CSS (CDN) | Utility classes |
| Supabase | Database + form backend |
| Netlify | Hosting + CDN |
| Google Fonts | Inter + Playfair Display + Noto Sans Arabic |

---

## Support

This project includes **1 year of support** (until June 2027).

For updates, bug fixes, or new features — contact the developer.

---

*Hearts For Humanity — H4H KSA · Alfaisal University · Riyadh, Saudi Arabia*
