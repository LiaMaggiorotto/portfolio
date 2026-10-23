export const projects = [
  {
  slug: 'cdlcp-post-apply-leadflow',
  featured: true,
  title: 'Post-Apply Lead Routing Engine',
  shortDescription:
    'Designed and built a weighted A/B routing engine with sticky lead assignment, per-client feature flags, server-side validation, a full admin UI, and a 37-case test suite — rolled out live per client with the legacy flow suppressed on a win, and a one-flag rollback if anything looked wrong.',
  longDescription: `Most routing systems are a flag and a coin flip. This one needed to be sticky, auditable, weighted, and safe to roll back across clients with different configurations running in production simultaneously.

I designed the full architecture: a flow registry plus a weighted-bucket router, where a single roll per lead assigns it to a flow using cumulative percentage buckets, with legacy filling whatever's left over. In practice that meant a 20/80 split, sending a fifth of leads to a new, optionally customizable flow while legacy held the rest as the comparison baseline — and the registry was built so adding the next flow is a one-line entry, not a new system. Per-client feature flags let the business enable or disable the experiment independently for each account without a deploy. A migration script handled backfilling existing records cleanly, and the admin UI gave non-engineers visibility into routing state and performance (click-through rate, full-app applies) without needing to touch the database.

This wasn't a shadow deployment — once a lead rolled into a custom flow, a listener actively suppressed the legacy flow for that lead, so the split had a real, immediate effect on production traffic. The safety came from the engineering around that change, not from the change being inert: server-side validation rejected any client config whose enabled-flow weights exceeded 100%, sticky assignment meant a lead's flow was locked in once decided, and the per-client feature flag was a one-line, no-deploy rollback if a client's numbers looked wrong. A 37-case Mocha spec suite covered assignment math, stickiness, flag evaluation, and config validation before any of it touched real leads. This is the kind of system design work I'm drawn to: a real behavioral change, made safe by the guardrails around it rather than by avoiding the change.`,
  techStack: ['Node.js', 'Express', 'MongoDB', 'Mocha', 'SvelteKit'],
  imgSrc: '/images/lead-routing-engine.svg',
  images: [],
  liveUrl: null,
  githubUrl: null,
},
{
  slug: 'cdlconnect-pro',
  featured: true,
  title: 'CDLConnect Pro - Recruiter Analytics Dashboard',
  shortDescription:
    'Contributed across the full stack of a production recruiter analytics platform - implementing role-based access control, god view dashboards, BigQuery-backed data pipelines, and post-launch stabilization across 168 commits.',
  longDescription: `CDLConnect Pro is the analytics layer that recruiters and clients use to measure driver pipeline performance — a high-stakes dashboard where data accuracy and access control directly affect business decisions.

My work spanned the full stack across two major release cycles. On the frontend, I helped build the god view dashboard and recruiter filter system in SvelteKit, giving our team cross-account visibility with scoped permissions. On the backend, I implemented role-based access control across API routes and hardened data pipeline reliability with retry logic and crash guards. Precomputed nightly pipelines replaced expensive on-demand BigQuery queries, reducing load and improving dashboard response times.

Post-launch, I owned stabilization across 168 commits - the kind of sustained ownership that follows a major release when the real edge cases emerge. That included parallelizing key pipeline functions, reconfiguring CI/CD to unblock a deployment blocked by unrelated test script failures, and conducting security audits on new API routes. I also reviewed PRs exceeding 5,000 lines of changes, providing architectural guidance across frontend, backend, and data systems.`,
  techStack: ['SvelteKit', 'TypeScript', 'BigQuery', 'Node.js', 'MongoDB'],
  imgSrc: '/images/cdlconnect_pro.webp',
  ogImage: '/images/cdlconnect_pro-og.jpg',
  images: [],
  liveUrl: 'https://pro.cdlconnect.io',
  githubUrl: null,
},
{
  slug: 'ai-post-analysis-pipeline',
  featured: true,
  title: 'AI-Powered Post Analysis Pipeline',
  shortDescription:
    'Built a production LLM pipeline classifying ~33K mobile app posts using GPT-4o-mini — with SHA-256 caching, token optimization, strict output validation, and partial MongoDB indexes, engineered within Node v10 constraints.',
  longDescription: `The mobile app had tens of thousands of user posts with no structured classification — no way to surface quality content, flag problems, or feed downstream systems. I designed and built a fire-and-forget pipeline to fix that, using GPT-4o-mini to classify posts at scale without blocking the application layer.

The architecture prioritized cost and reliability: SHA-256 content hashing to skip reprocessing identical posts, token-optimized prompts to minimize API spend, and strict output validation to catch malformed model responses before they touched the database. Partial MongoDB indexes kept query performance tight on a growing collection.

The entire thing was engineered within Node v10 constraints, which meant no OpenAI SDK — raw HTTPS requests only. That constraint forced a cleaner separation between transport, parsing, and business logic than the SDK would have encouraged. The pipeline processed the full backlog and new posts, feeding classification data into downstream features.`,
  techStack: ['Node.js', 'MongoDB', 'OpenAI API', 'TypeScript'],
  imgSrc: '/images/ai-post-analysis-pipeline.svg',
  images: [],
  liveUrl: null,
  githubUrl: null,
},

{
  slug: 'cdl-job-landing-pages',
  featured: true,
  title: 'High-Performance CDL Job Landing Pages',
  shortDescription:
    'Replaced a costly third-party job listing service with an in-house SvelteKit system delivering Lighthouse 100 SEO-optimized pages, structured data, automatic sitemaps, and in-memory caching at scale.',
  longDescription: `The platform was paying a third-party vendor for job listing pages it had no control over — limited SEO configuration, no ability to iterate on structure, and a recurring cost with no ceiling. I designed and built a replacement from scratch.

The system uses SvelteKit's server-side rendering to generate fully optimized pages for thousands of CDL job listings, each with JSON-LD structured data for Google Jobs, auto-generated sitemaps, and in-memory caching to reduce database pressure under production traffic. URL structure, metadata strategy, and content templates were defined in close collaboration with the SEO team.

The result: Lighthouse 100 on performance, the vendor contract eliminated, and measurably improved organic search rankings tracked through Search Console post-launch. The system has run in production without incident since launch and serves as the primary organic acquisition surface for the platform.`,
  techStack: ['SvelteKit', 'Node.js', 'MongoDB', 'SEO', 'JSON-LD'],
  imgSrc: '/images/joblist.webp',
  ogImage: '/images/joblist-og.jpg',
  images: [],
  liveUrl: 'https://cdllife.com/jobslist',
  githubUrl: null,
},
{
  slug: 'cdllife-copilot',
  featured: true,
  title: 'CDLLife Copilot - Driver Job Application Portal',
  shortDescription:
    'Took ownership of a SvelteKit 2 driver portal after more than a year in development, with two weeks to get it production ready. Hardened authentication, fixed a real verification security gap, and closed out the performance and UX work left before launch.',
  longDescription: `The portal had been in development for over a year across a multi-service system, a mobile API, a job board, an SSO provider, and lead generation infrastructure, when I took ownership with a two-week window to ship it. The work was mostly stabilization: finding what was still broken across services that had been built somewhat independently of each other.

The most important fix was a verification flaw. Phone numbers were being marked verified before the driver had actually confirmed the SMS code, so the system trusted a number nobody had proven they controlled. I re-architected the flow so verification status only updates after the code is confirmed. I also traced a race condition in the proxy layer, where a session token created mid-request wasn't available yet to the API calls that needed it, and fixed it with a cookie fallback.

One fix removed a 24-hour onboarding delay entirely: an endpoint that should have linked a new driver's account immediately had been disabled, so the system was falling back to a nightly cron job to do the same thing a day later. Re-enabling it, correctly, meant new drivers no longer waited a full day to get into their own account.

Past the backend work, I mapped how driver identity actually flows across three MongoDB collections (driver profiles, leads, and jobs) so the ownership model made sense end to end, then closed out the UX: pagination, filtering, modal transitions, empty states, and mobile navigation, the kind of polish a portal needs before real drivers depend on it.`,
  techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  imgSrc: '/images/cdllife-copilot.svg',
  images: [],
  liveUrl: 'https://copilot.cdllife.com',
  githubUrl: null,
},
{
  slug: 'cosmic-flow',
  featured: true,
  title: 'Cosmic Flow - Mobile App Platform',
  status: 'In development',
  shortDescription:
    'A mobile app I\'m building to learn system design by doing it, one layer at a time. React Native client, Express API on MongoDB and Redis, a Next.js admin, and a shared design system, all in one TypeScript monorepo.',
  longDescription: `I started Cosmic Flow to get better at system design, and I wanted to learn it by building something real instead of whiteboarding hypotheticals. The goal is to go deep on every layer, including the ones I haven't touched at work. It's also the project where the creative side is entirely mine, from the brand to the interface to the product, and that's a big part of why I love it.

The system design came first. I worked through requirements, entities, API, storage and architecture before writing code, which left me with seven entities to model. Five live in MongoDB. The other two are derived, so they live only in Redis with TTLs and are cheap to lose. Mongo is a hard dependency at boot and Redis is not, so a cache outage degrades those routes instead of taking the API down.

Auth and security got the same attention. Phone and SMS login sits behind an AuthProvider interface, so I can swap providers without touching the routes. Sensitive profile fields are encrypted at rest and the API is rate limited. I wrote tests for each of those pieces, plus token handling and error handling, and the auth suite turned up two bugs I fixed right away.

On the front end, the mobile app and the admin share one design token package and one icon library, so a change to a color or an icon lands in one place.

It's still in development, and I'm keeping v1 to a working core on purpose. Finishing a smaller thing teaches me more than half-building a bigger one.`,
  techStack: ['React Native', 'Expo', 'TypeScript', 'Express', 'MongoDB', 'Redis', 'Next.js', 'shadcn/ui'],
  imgSrc: '/images/cosmic-flow.webp',
  ogImage: '/images/cosmic-flow-og.jpg',
  images: [],
  liveUrl: null,
  githubUrl: null,
},
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
