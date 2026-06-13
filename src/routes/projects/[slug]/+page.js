import { getProject } from "$lib/projects.js";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const project = getProject(params.slug);
  if (!project) throw error(404, "Project not found");
  return { project };
}
