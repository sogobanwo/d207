import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow } from "@/components/ui";
import { getNextProject, getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.title}, ${project.location}. ${project.scope}`,
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  const facts = [
    { k: "Location", v: project.location },
    { k: "Scope", v: project.scope },
    { k: "Services", v: project.services.join(", ") },
    { k: "Status", v: project.status ?? "[Completed — confirm]" },
    { k: "Year", v: project.year ?? "[Year — confirm]" },
  ];

  return (
    <>
      <section className="bg-navy text-cream">
        <div className="site-wrap pt-10">
          <nav aria-label="Breadcrumb" className="eyebrow text-haze">
            <Link href="/projects" className="text-mist hover:text-white">
              Projects
            </Link>{" "}
            / D207—{project.number}
          </nav>
        </div>
        <div className="site-wrap flex flex-wrap items-end gap-14 pb-20 pt-12">
          <div className="flex-[2_1_560px]">
            <Eyebrow dark>
              {project.type} · {project.area}
            </Eyebrow>
            <h1 className="mt-6 text-balance font-serif text-5xl font-medium leading-[0.98] text-ivory md:text-[92px]">
              {project.title}
            </h1>
          </div>
          <dl className="w-full flex-[1_1_300px] border-t border-cream/15">
            {facts.map((f) => (
              <div key={f.k} className="border-b border-cream/15 py-5">
                <dt className="eyebrow text-[11px] tracking-[0.16em] text-haze">{f.k}</dt>
                <dd className="mt-2 text-[17px] text-ivory">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="site-wrap">
          <div className="relative -mb-28 aspect-[4/3] overflow-hidden md:-mb-50 md:aspect-[2/1]">
            <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1280px) 1184px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="h-28 md:h-50" />

      <section className="site-wrap flex flex-wrap gap-10 py-24 md:gap-16 md:py-30">
        <div className="flex-[1_1_280px]">
          <Eyebrow>The brief</Eyebrow>
        </div>
        <div className="flex-[3_1_560px]">
          <p className="font-serif text-[30px] font-medium leading-[1.24] md:text-[40px]">{project.scope}</p>
          {/* TODO(D207): add the project story for each case study. */}
          <div className="mt-10 grid gap-8 text-base leading-[1.7] text-body md:grid-cols-2">
            <p>[Short paragraph on the client’s brief, the plot and the design intent — to be supplied by D207.]</p>
            <p>[Short paragraph on how the project was delivered: structure, finishes, systems and any challenges — to be supplied by D207.]</p>
          </div>
        </div>
      </section>

      {project.gallery && (
        <section className="site-wrap pb-24 md:pb-30">
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((g) => (
              <div key={g.src} className={`relative overflow-hidden bg-stone ${g.wide ? "aspect-[16/9] md:col-span-2 md:aspect-[21/9]" : "aspect-[4/5]"}`}>
                <Image src={g.src} alt={g.alt} fill sizes={g.wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-ink/15">
        <Link href={`/projects/${next.slug}`} className="site-wrap group flex flex-wrap items-center justify-between gap-8 py-18">
          <div>
            <Eyebrow>Next project · D207—{next.number}</Eyebrow>
            <p className="mt-4 font-serif text-4xl font-medium leading-none transition-colors group-hover:text-brand md:text-[56px]">
              {next.title}
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden sm:w-80">
            <Image src={next.image} alt={next.imageAlt} fill sizes="320px" className="object-cover" />
          </div>
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
