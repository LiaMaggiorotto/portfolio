export const projects = [
  {
    slug: 'cdl-job-landing-pages',
    title: 'High-Performance CDL Job Landing Pages',
    shortDescription:
      'Replaced a costly third-party service with an in-house SvelteKit system delivering Lighthouse 100 SEO-optimized job pages with in-memory caching and automatic sitemaps.',
    longDescription: `Designed and built a custom SvelteKit landing page system to replace a legacy third-party job listing service that was costing thousands per month and limiting SEO control. The system generates fast, fully server-rendered pages for thousands of CDL job listings, each with structured data, auto-generated sitemaps, and in-memory caching to reduce database load.

The project required close collaboration with the SEO team to define URL structure, metadata strategy, and content templates. After launch, organic search rankings improved significantly, and Search Console data was used to iteratively tune performance. The system has handled production traffic without incident since launch.`,
    techStack: ['SvelteKit', 'Node.js', 'PostgreSQL', 'Redis', 'SEO'],
    imgSrc: '/images/joblist.png',
    images: [],
    liveUrl: 'https://cdllife.com/jobslist',
    githubUrl: null,
  },
  {
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    shortDescription:
      'This site — a minimal, modern portfolio built with SvelteKit and Tailwind CSS v4, featuring editorial typography, smooth animations, and a focus on performance.',
    longDescription: `A complete ground-up design and build of a personal portfolio to represent five years of growth as a software engineer. The goal was to move away from template-based solutions and create something that reflected a distinct visual identity: warm, editorial, and minimal.

Built with SvelteKit and Tailwind CSS v4, with Fraunces as the display typeface and Fira Mono for body copy. Every section — hero, about, portfolio grid, recognition, and contact — was designed with intentional hierarchy and breathing room. The portfolio section links out to dedicated project detail pages for deeper context.`,
    techStack: ['SvelteKit', 'Tailwind CSS', 'Vite'],
    imgSrc: '',
    images: [],
    liveUrl: 'https://liamaggiorotto.com',
    githubUrl: null,
  },
  {
    slug: 'internal-analytics-dashboard',
    title: 'Internal Analytics Dashboard',
    shortDescription:
      'A data visualization platform built for internal stakeholders to track content performance, traffic trends, and SEO health across thousands of pages in real time.',
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dashboard reduced the time stakeholders spent compiling manual reports from several hours per week to near-zero, and surfaced insights that directly informed editorial strategy.`,
    techStack: ['React', 'D3.js', 'Python', 'BigQuery'],
    imgSrc: '',
    images: [],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: 'seo-content-pipeline',
    title: 'SEO Content Pipeline',
    shortDescription:
      'An automated pipeline that ingests raw job data, generates structured SEO metadata, validates content quality, and publishes at scale — processing thousands of records per run.',
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The pipeline runs on a scheduled cron job and feeds directly into the CMS, eliminating the need for manual content entry and enabling the team to scale content output without scaling headcount.`,
    techStack: ['Python', 'Node.js', 'BigQuery', 'GCP'],
    imgSrc: '',
    images: [],
    liveUrl: null,
    githubUrl: null,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
