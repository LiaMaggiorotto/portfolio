import { getProject, projects } from "$lib/projects.js";
import { error } from "@sveltejs/kit";

// Prerender every project page to static HTML (required for a crawler to
// see real content here, and for a static host like Cloudflare Pages to
// serve these routes at all - without `entries`, the adapter has no way to
// know which [slug] values exist).
export const prerender = true;

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const project = getProject(params.slug);
  if (!project) throw error(404, "Project not found");
  return { project };
}
