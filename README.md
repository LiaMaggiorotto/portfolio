# Portfolio

Personal portfolio for Lia Maggiorotto, a full-stack software engineer and tech lead based in Kansas City. The site covers background, how I work, selected projects, and recognition from teammates.

Built with SvelteKit (Svelte 5), Tailwind CSS v4, and Vite. JavaScript only, no TypeScript.

## Getting started

Requires Node 20.11.1 (see `.nvmrc`). `.npmrc` sets `engine-strict=true`, so installs fail on a mismatched Node version.

```bash
nvm use
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build
npm run preview    # serve the production build locally
```

## Structure

```
src/
  app.css                     Tailwind setup, color tokens, fonts, shared classes
  app.html                    Document shell, Google Fonts links
  lib/
    projects.js               All project data (single source of truth)
    images/                   Imported assets (icons)
  routes/
    +layout.svelte            Page frame
    +page.svelte              Home page, composes the sections below
    +page.js                  prerender = true
    _components/
      Nav, Header, About, PortfolioSection, PortfolioItem,
      Recognition, Contact
    projects/[slug]/
      +page.js                Looks up a project by slug, 404s if missing
      +page.svelte            Project detail page
static/
  images/                     Hero, headshot, project images and diagrams
  resume.pdf
```

Home page order: Nav, Header, About, Portfolio, Recognition, Contact.

## Adding or editing a project

Everything lives in `src/lib/projects.js`. Each entry has:

| Field | Notes |
| --- | --- |
| `slug` | URL segment, becomes `/projects/<slug>` |
| `title`, `shortDescription` | Shown on the card |
| `longDescription` | Shown on the detail page, blank lines become paragraphs |
| `techStack` | Array of strings |
| `imgSrc` | Path under `static/`, for example `/images/foo.png` |
| `liveUrl`, `githubUrl` | Optional, use `null` to hide the link |

Cards and detail pages fall back gracefully if an image path fails to load, but the image should exist before you ship.

## Design tokens

Defined in `src/app.css` and exposed as Tailwind utilities.

| Token | Hex |
| --- | --- |
| whipped-cream | `#f5f3ee` |
| coconut-flour | `#dad5ca` |
| creme-brulee | `#a1846e` |
| mocha-latte | `#5b4338` |
| espresso-martini | `#352620` |
| dark-chocolate | `#161513` |
| olive-branch | `#575242` |

Fonts: Fraunces for headings, Fira Mono for body text. Button classes: `button-standard`, `button-light`, `button-text`.

