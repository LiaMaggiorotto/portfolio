import { projects } from "$lib/projects.js";

export const prerender = true;

export function GET({ url }) {
  const pages = [
    { path: "/", priority: "1.0" },
    { path: "/projects", priority: "0.6" },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: "0.8" })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${new URL(p.path, url.origin).href}</loc>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
