import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { CtaBand, PageHero } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected D207 projects across Lekki Phase 1, Ikate, Agungi, Oniru, Carlton Gate and VGC — luxury duplexes, apartments, interiors and renovations.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Homes we’re proud to have built."
        lede="Nine project references across Lekki Phase 1, Ikate, Agungi, Oniru, Carlton Gate and VGC — from private duplexes to an eight-storey apartment block."
      />
      <section className="site-wrap pb-28 pt-16 md:pb-36">
        <ProjectsBrowser projects={projects} />
      </section>
      <CtaBand title="Your home could be next." />
    </>
  );
}
