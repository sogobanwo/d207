"use client";

import { AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import type { Project } from "@/lib/projects";
import { FilterChips } from "./FilterChips";
import { FilterItem } from "./motion/Reveal";
import { ProjectCard } from "./ProjectCard";

export function HomeWork({ projects, heading }: { projects: Project[]; heading: ReactNode }) {
  const areas = ["All", ...new Set(projects.map((p) => p.area))];
  const [area, setArea] = useState("All");
  const shown = projects.filter((p) => area === "All" || p.area === area);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>{heading}</div>
        <FilterChips options={areas} value={area} onChange={setArea} label="Filter projects by location" />
      </div>
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <FilterItem key={p.slug} index={i}>
              <ProjectCard project={p} aspect={i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} />
            </FilterItem>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
