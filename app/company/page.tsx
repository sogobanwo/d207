import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero, SectionTitle, Stat } from "@/components/ui";
import { advisors, governance, partners, team, values } from "@/lib/content";
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
        imageAlt="Render of Phoenix Apartments from above at sunset"
      />

      {/* Who we are */}
      <section className="site-wrap py-24 md:py-30">
        <div className="flex flex-wrap gap-10 md:gap-16">
          <div className="flex-[1_1_280px]">
            <Eyebrow>01 — Who we are</Eyebrow>
          </div>
          <div className="flex-[3_1_560px]">
            <p className="font-serif text-[30px] font-medium leading-[1.22] md:text-[42px]">
              Young, enterprising local and foreign engineering talent, focused on simple, aesthetic, efficient and{" "}
              <em className="text-brand">cost-effective solutions.</em>
            </p>
            <div className="mt-12 grid gap-8 text-base leading-[1.7] text-body md:grid-cols-2">
              <p>
                Our team of chartered engineers brings a reputation for technical and aesthetic excellence, founded on years
                of experience. Our main objective is to surpass our clients’ expectations on quality and cost.
              </p>
              <p>
                We work with clients who value the utmost levels of safety, comfort, urbane style and quality — drawing on
                civil, mechanical and electrical engineering, construction, information technology and general management
                to solve complex challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={String(site.established)} label="Year established" divider={false} />
          <Stat value={site.rc} label="Registered with the CAC" />
          <Stat value="Lekki" label="Head office, Lagos" />
          <Stat value={String(partners.length)} label="Strategic partners in construction, design, steel and multimedia" />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-navy text-cream">
        <div className="site-wrap grid gap-14 py-24 md:grid-cols-2 md:gap-0 md:py-30">
          <div className="md:pr-14">
            <Eyebrow dark>02 — Mission</Eyebrow>
            <p className="mt-6 font-serif text-[32px] leading-[1.2] text-ivory md:text-[40px]">
              To provide quality professional services and mutually beneficial relationships, creating cost-effective
              solutions.
            </p>
            <p className="mt-6 text-[15px] leading-[1.7] text-mist">
              We partner actively and responsibly in the communities we serve, and strive for a harmonious and safe
              environment.
            </p>
          </div>
          <div className="border-t border-cream/20 pt-14 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <Eyebrow dark>03 — Vision</Eyebrow>
            <p className="mt-6 font-serif text-[32px] leading-[1.2] text-ivory md:text-[40px]">
              To become an international flagship brand for luxurious residential and commercial smart homes.
            </p>
            <p className="mt-6 text-[15px] leading-[1.7] text-mist">
              Comfortable homes with contemporary smart technology at competitive prices — using intercommunication in every
              part of the home to keep African families closely knit, even when living in separate rooms or apartments.
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

      {/* Team & partners */}
      <section className="site-wrap py-24 md:py-30">
        <Eyebrow>06 — Strategic team</Eyebrow>
        <SectionTitle>The people behind every build.</SectionTitle>
        <ul className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
          {team.map((m) => (
            <li key={m.name} className="border-b border-ink/15 py-6">
              <p className="font-serif text-2xl font-semibold">{m.name}</p>
              <p className="mt-1.5 text-[15px] text-body">{m.role}</p>
            </li>
          ))}
        </ul>
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Financial &amp; business advisory</Eyebrow>
            <ul className="mt-6 border-t border-ink/15">
              {advisors.map((a) => (
                <li key={a} className="border-b border-ink/15 py-4 text-[17px]">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Strategic partners</Eyebrow>
            <ul className="mt-6 border-t border-ink/15">
              {partners.map((p) => (
                <li key={p} className="border-b border-ink/15 py-4 text-[17px]">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
