import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero, SectionTitle, Stat } from "@/components/ui";
import { governance, values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "D207 Construction Limited is an indigenous Nigerian company delivering construction, smart home technology, interiors and design in Lagos since 2006.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title="Building refined Lagos homes since 2006."
        lede="D207 Construction Limited is an indigenous Nigerian company delivering construction, smart home technology, interiors and design for private and commercial clients."
        image="/images/about.jpg"
        imageAlt="D207 crew at work on a reinforced concrete structure"
      />

      {/* Who we are */}
      <section className="site-wrap py-24 md:py-30">
        <div className="flex flex-wrap gap-10 md:gap-16">
          <div className="flex-[1_1_280px]">
            <Eyebrow>01 — Who we are</Eyebrow>
          </div>
          <div className="flex-[3_1_560px]">
            <p className="font-serif text-[30px] font-medium leading-[1.22] md:text-[42px]">
              We combine technical delivery, project discipline and practical design thinking to create spaces that are{" "}
              <em className="text-brand">functional, refined and valuable.</em>
            </p>
            <div className="mt-12 grid gap-8 text-base leading-[1.7] text-body md:grid-cols-2">
              <p>
                From detached residences and duplexes in Lekki Phase 1 to apartment blocks, renovations and a waterfront
                jetty in VGC, our work spans the full life of a building — structure, systems and finish.
              </p>
              <p>
                Because one team carries a project from the first site review to the final handover, clients deal with
                one accountable partner instead of five separate contractors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={String(site.established)} label="Year established" divider={false} />
          <Stat value={site.rc} label="Registered with the CAC" />
          <Stat value="Lekki" label="Head office, Lagos" />
          {/* TODO(D207): name the 7 strategic partners if the client wants them listed. */}
          <Stat value="7" label="Strategic partners in design, steel and multimedia" />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-navy text-cream">
        <div className="site-wrap grid gap-14 py-24 md:grid-cols-2 md:gap-0 md:py-30">
          <div className="md:pr-14">
            <Eyebrow dark>02 — Mission</Eyebrow>
            <p className="mt-6 font-serif text-[32px] leading-[1.2] text-ivory md:text-[40px]">
              To provide quality professional services with cost-effective project solutions.
            </p>
            <p className="mt-6 text-[15px] leading-[1.7] text-mist">
              Built on client relationships, responsible community participation, safe project environments and practical
              value.
            </p>
          </div>
          <div className="border-t border-cream/20 pt-14 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <Eyebrow dark>03 — Vision</Eyebrow>
            <p className="mt-6 font-serif text-[32px] leading-[1.2] text-ivory md:text-[40px]">
              To become an international flagship brand for luxurious residential and commercial smart homes.
            </p>
            <p className="mt-6 text-[15px] leading-[1.7] text-mist">
              Rooted in comfortable homes, contemporary technology, refined design and competitive value.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="site-wrap py-24 md:py-30">
        <Eyebrow>04 — Our values</Eyebrow>
        <SectionTitle>The principles behind every build.</SectionTitle>
        <div className="mt-14 border-t border-ink">
          {values.map((v, i) => (
            <div key={v.title} className="flex flex-wrap gap-6 border-b border-ink/15 py-8">
              <span className="eyebrow w-20 shrink-0 pt-2.5 text-brand">0{i + 1}</span>
              <h3 className="flex-[1_1_280px] font-serif text-[34px] font-semibold leading-[1.1]">{v.title}</h3>
              <p className="flex-[2_1_360px] pt-1.5 text-base leading-relaxed text-body">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="bg-stone">
        <div className="site-wrap py-24 md:py-30">
          <Eyebrow>05 — Governance &amp; assurance</Eyebrow>
          <SectionTitle>Safety, quality and responsibility — on every site.</SectionTitle>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {governance.map((g) => (
              <article key={g.title} className="flex flex-col gap-4 border border-ink/10 bg-white px-9 py-10">
                <p className="eyebrow text-[11px] tracking-[0.16em] text-brand">{g.tag}</p>
                <h3 className="font-serif text-[32px] font-semibold">{g.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
