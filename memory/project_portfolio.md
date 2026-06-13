---
name: project-portfolio
description: Architecture and design system of Lia's portfolio site — stack, components, color palette, sections
metadata:
  type: project
---

**Stack:** SvelteKit (Svelte 5) + Tailwind CSS v4 + Vite. No TypeScript. Component-per-section pattern.

**Page structure (top to bottom):**
1. `Nav` — sticky nav with anchor links: About, Resume, Portfolio, Contact
2. `Header` — full-bleed hero image with overlay and tagline text
3. `About` — two-column: photo with decorative background box + bio text
4. `ContentRow` — reusable two-column section (text left, image right or reversed). Currently used for "My Professional Journey" (Resume section) with a View Resume button that opens `/resume.pdf`.
5. `PortfolioSection` — dark `espresso-martini` background, 2-column grid of `PortfolioItem` cards. Has a large transparent "Portfolio" watermark heading. Currently has 1 real project (CDL job landing pages) + 3 placeholder entries.
6. Contact section — referenced in Nav but not yet implemented as a component.

**Color palette (all defined as CSS variables and Tailwind utilities):**
- `whipped-cream` #f5f3ee — light page background, nav bg
- `coconut-flour` #dad5ca — body bg, light text on dark
- `creme-brulee` #a1846e — accent
- `mocha-latte` #5b4338 — decorative elements
- `espresso-martini` #352620 — dark sections, primary button bg
- `dark-chocolate` #161513 — darkest, image panels
- `olive-branch` #575242 — supporting neutral

**Fonts:** Fraunces (serif, headings/brand) + Fira Mono (monospace, body).

**Button classes:** `button-standard` (dark fill), `button-light` (light fill), `button-text` (transparent).

**Why:** This is a project under active development. Contact section is a known missing piece. Several PortfolioItem entries are placeholders.
