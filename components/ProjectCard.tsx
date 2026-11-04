import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  aspect = "aspect-[4/3]",
  showLocation = false,
}: {
  project: Project;
  aspect?: string;
  showLocation?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-5 text-ink">
      <div data-cursor="view" className={`relative overflow-hidden bg-stone ${aspect}`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="eyebrow flex justify-between gap-4 border-t border-ink/15 pt-4 text-[11px] tracking-[0.16em] text-mute">
        <span>
          D207—{project.number} · {project.area}
        </span>
        <span>{project.type}</span>
      </div>
      <h3 className="font-serif text-[32px] font-semibold leading-[1.1] transition-colors group-hover:text-brand">
        {project.title}
      </h3>
      {showLocation && <p className="-mt-3 text-sm text-mute">{project.location}</p>}
      <p className="-mt-2 text-[15px] leading-relaxed text-body">{project.scope}</p>
    </Link>
  );
}
