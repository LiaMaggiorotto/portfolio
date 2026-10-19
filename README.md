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
    +layout.js                prerender = true, applies site-wide (required for GitHub Pages)
    +page.svelte              Home page, composes the sections below
    _components/
      Nav, Header, About, PortfolioSection, PortfolioItem,
      Recognition, Contact
    projects/[slug]/
      +page.js                Looks up a project by slug, 404s if missing
      +page.svelte            Project detail page
    sitemap.xml/
      +server.js               Generates sitemap.xml at build time
static/
  images/                     Hero, headshot, project images and diagrams (served as .webp)
  resume.pdf
  CNAME                       Custom domain for GitHub Pages — see Deployment below
.github/
  workflows/
    deploy.yml                Builds and deploys to GitHub Pages on every push to main
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

## Deployment

Hosted on GitHub Pages at `liamaggiorotto.com`, built with `@sveltejs/adapter-static`
(pinned to v3 for SvelteKit 2 compatibility — the latest major requires SvelteKit 3).

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it via GitHub's official Pages actions. No manual deploy step needed.

**One thing to know:** Actions-based Pages deploys do *not* auto-generate a `CNAME` file
the way branch-based deploys do, so `static/CNAME` (containing `liamaggiorotto.com`) is
committed directly. If the custom domain ever stops resolving after a deploy, check that
this file still exists and wasn't accidentally removed.

One-time GitHub setup (already done, documented here for reference):
1. Repo Settings → Pages → Source: **GitHub Actions**
2. Repo Settings → Pages → Custom domain: `liamaggiorotto.com`
3. DNS at the registrar: four `A` records for the apex domain pointing at GitHub's IPs
   (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), plus a `CNAME` record for
   `www` pointing at `liamaggiorotto.github.io`
4. Once DNS propagates, enable "Enforce HTTPS" in Pages settings

To preview a production build locally before pushing: `npm run build && npm run preview`.

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

Each token exposes `.text-*` and `.bg-*` utility classes (e.g. `text-creme-brulee`,
`bg-creme-brulee`), and `.border-*` for most tokens too — these are hand-rolled in
`app.css`, not registered in Tailwind's theme, so a color only has a working class if
it's explicitly defined there. If a `border-{token}` class ever renders invisible, that's
why: check it's actually in `app.css` before assuming the markup is wrong.

Fonts: Fraunces for headings, Fira Mono for body text. Button classes: `button-standard`, `button-light`, `button-text`.

