"use client";

import { useState } from "react";
import { projectCategories, type Project } from "@/lib/projects";
import { FilterChips } from "./FilterChips";
import { ProjectCard } from "./ProjectCard";

type Category = (typeof projectCategories)[number];

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<Category>("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);
  const counts = Object.fromEntries(
    projectCategories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length]),
  ) as Record<Category, number>;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-ink/15 pb-7">
        <FilterChips options={projectCategories} value={cat} onChange={setCat} label="Filter projects by type" counts={counts} />
        <p className="eyebrow text-mute" aria-live="polite">
          Showing {String(shown.length).padStart(2, "0")} projects
        </p>
      </div>
      <div className="mt-14 grid items-start gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            showLocation
            aspect={i % 4 === 0 || i % 4 === 3 ? "aspect-[16/11]" : "aspect-[4/5]"}
          />
        ))}
      </div>
    </>
  );
}
