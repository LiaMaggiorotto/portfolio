export const projects = [
  {
  slug: 'cdlcp-post-apply-leadflow',
  title: 'Post-Apply Lead Routing Engine',
  shortDescription:
    'Designed and built a weighted A/B routing engine with sticky lead assignment, per-client feature flags, server-side validation, a full admin UI, and a 37-case test suite — shipped as a dark launch with zero disruption to existing lead flow.',
  longDescription: `Most routing systems are a flag and a coin flip. This one needed to be sticky, auditable, weighted, and safe to roll back across clients with different configurations running in production simultaneously.

I designed the full architecture: a weighted-bucket router that assigns leads to flow variants on first contact and locks that assignment on subsequent touches. Per-client feature flags let the business enable or disable the experiment independently for each account without a deploy. A migration script handled backfilling existing records cleanly, and the admin UI gave non-engineers visibility into routing state without needing to touch the database.

The implementation shipped as a dark launch — routing logic running in the background while the existing flow continued uninterrupted — which meant the rollout carried zero risk to live lead volume. A 37-case Mocha spec suite covered edge cases across variant assignment, sticky behavior, flag evaluation, and server-side validation. This is the kind of system design work I'm drawn to: defensively built, operationally transparent, and safe to hand off.`,
  techStack: ['Node.js', 'Express', 'MongoDB', 'Mocha', 'SvelteKit'],
  imgSrc: '/images/lead-routing-engine.svg',
  images: [],
  liveUrl: null,
  githubUrl: null,
},

{
  slug: 'appadmin2-nextjs-rewrite',
  title: 'Internal Mobile App Admin Panel - Ground-Up Next.js Rewrite',
  shortDescription:
    'Rewrote a legacy SvelteKit admin panel in Next.js 16 App Router in six days, delivering authentication, a proxy API gateway, full CRUD with file uploads, theming, and CI/CD from scratch.',
  longDescription: `The existing internal admin panel had accumulated enough debt that a rewrite was faster than a refactor. I took full ownership: architecture decisions, framework selection, implementation, and deployment — all in six days.

The new system is built on Next.js 16 with the App Router, using iron-session for auth and a custom proxy API gateway to isolate internal service calls from the client. Deal Depot CRUD includes file upload handling, and the UI was built with theming support so it can adapt across internal tools without restyling from scratch. CI/CD was configured from zero alongside the build.

The constraint that made this interesting wasn't the feature set — it was the timeline. Six days meant every architectural decision had to be right the first time, with no room to backtrack on framework choices or data patterns mid-build. The panel has been in production use by internal teams since launch.`,
  techStack: ['Next.js', 'React', 'TypeScript', 'iron-session', 'GitHub Actions', 'Shadcn UI'],
  imgSrc: '/images/appadmin2.png',
  images: [],
  liveUrl: null,
  githubUrl: null,
},

{
  slug: 'ai-post-analysis-pipeline',
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
  slug: 'cdlconnect-pro',
  title: 'CDLConnect Pro - Recruiter Analytics Dashboard',
  shortDescription:
    'Contributed across the full stack of a production recruiter analytics platform - implementing role-based access control, god view dashboards, BigQuery-backed data pipelines, and post-launch stabilization across 168 commits.',
  longDescription: `CDLConnect Pro is the analytics layer that recruiters and clients use to measure driver pipeline performance — a high-stakes dashboard where data accuracy and access control directly affect business decisions.

My work spanned the full stack across two major release cycles. On the frontend, I helped build the god view dashboard and recruiter filter system in SvelteKit, giving our team cross-account visibility with scoped permissions. On the backend, I implemented role-based access control across API routes and hardened data pipeline reliability with retry logic and crash guards. Precomputed nightly pipelines replaced expensive on-demand BigQuery queries, reducing load and improving dashboard response times.

Post-launch, I owned stabilization across 168 commits - the kind of sustained ownership that follows a major release when the real edge cases emerge. That included parallelizing key pipeline functions, reconfiguring CI/CD to unblock a deployment blocked by unrelated test script failures, and conducting security audits on new API routes. I also reviewed PRs exceeding 5,000 lines of changes, providing architectural guidance across frontend, backend, and data systems.`,
  techStack: ['SvelteKit', 'TypeScript', 'BigQuery', 'Node.js', 'MongoDB'],
  imgSrc: '/images/cdlconnect-pro.png',
  images: [],
  liveUrl: 'https://pro.cdlconnect.io',
  githubUrl: null,
},

{
  slug: 'cdl-job-landing-pages',
  title: 'High-Performance CDL Job Landing Pages',
  shortDescription:
    'Replaced a costly third-party job listing service with an in-house SvelteKit system delivering Lighthouse 100 SEO-optimized pages, structured data, automatic sitemaps, and in-memory caching at scale.',
  longDescription: `The platform was paying a third-party vendor for job listing pages it had no control over — limited SEO configuration, no ability to iterate on structure, and a recurring cost with no ceiling. I designed and built a replacement from scratch.

The system uses SvelteKit's server-side rendering to generate fully optimized pages for thousands of CDL job listings, each with JSON-LD structured data for Google Jobs, auto-generated sitemaps, and in-memory caching to reduce database pressure under production traffic. URL structure, metadata strategy, and content templates were defined in close collaboration with the SEO team.

The result: Lighthouse 100 on performance, the vendor contract eliminated, and measurably improved organic search rankings tracked through Search Console post-launch. The system has run in production without incident since launch and serves as the primary organic acquisition surface for the platform.`,
  techStack: ['SvelteKit', 'Node.js', 'MongoDB', 'SEO', 'JSON-LD'],
  imgSrc: '/images/joblist.png',
  images: [],
  liveUrl: 'https://cdllife.com/jobslist',
  githubUrl: null,
},
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
