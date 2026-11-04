import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/company", "/services", "/projects", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const cases = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now }));
  return [...pages, ...cases];
}
