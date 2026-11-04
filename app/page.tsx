import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { HomeWork } from "@/components/HomeWork";
import { Button, Eyebrow, SectionTitle, Stat, TextLink } from "@/components/ui";
import { faqs, process, services } from "@/lib/content";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative flex min-h-[760px] flex-col overflow-hidden bg-navy text-cream md:min-h-[900px]">
        <Image
          src="/images/hero.jpg"
          alt="A contemporary two-storey residence lit at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_60%] md:object-[center_60%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,51,0.8)_0%,rgba(14,26,51,0.35)_40%,rgba(14,26,51,0.92)_100%)] md:bg-[linear-gradient(90deg,rgba(14,26,51,0.92)_0%,rgba(14,26,51,0.72)_42%,rgba(14,26,51,0.18)_100%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="site-wrap grid h-full grid-cols-4">
            <div className="border-l border-cream/10" />
            <div className="border-l border-cream/10" />
            <div className="border-l border-cream/10" />
            <div className="border-x border-cream/10" />
          </div>
        </div>

        <div className="site-wrap relative mt-auto pb-12 pt-36 md:mb-auto md:mt-0 md:pb-0 md:pt-56">
          <p className="eyebrow flex flex-wrap gap-x-7 gap-y-2 text-haze">
            <span>Est. {site.established}</span>
            <span>{site.rc}</span>
            <span>Lekki · Lagos</span>
          </p>
          <h1 className="mt-6 max-w-[980px] font-serif text-[54px] font-medium leading-[0.98] tracking-[-0.015em] text-ivory sm:text-7xl lg:text-[104px]">
            Refined homes,
            <br />
            <em className="font-normal">precisely</em> built.
          </h1>
          <p className="mt-8 max-w-[520px] text-base leading-relaxed text-mist md:text-lg">
            Construction, smart home technology, interior finishes and furnishing — delivered by one team, from the
            first foundation to the final handover.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/projects" variant="light">
              View our work
            </Button>
            <Button href="/contact">Discuss your project</Button>
          </div>
        </div>

        <div className="site-wrap eyebrow relative hidden justify-between pb-7 text-[11px] tracking-[0.16em] text-haze md:flex">
          <span>Featured · Road 26 Duplex Residences, Lekki Ph.1</span>
          <span>Scroll ↓</span>
        </div>
      </section>

      {/* ───────────── Company intro ───────────── */}
      <section className="site-wrap py-24 md:py-36">
        <div className="flex flex-wrap gap-10 md:gap-16">
          <div className="flex-[1_1_280px]">
            <Eyebrow>01 — The company</Eyebrow>
          </div>
          <div className="flex-[3_1_560px]">
            <p className="font-serif text-[32px] font-medium leading-[1.18] md:text-[46px]">
              For nearly two decades, D207 has built some of Lekki’s most considered private residences —{" "}
              <em className="text-brand">and made them intelligent, finished and ready to live in.</em>
            </p>
            <div className="mt-14 grid border-t border-ink/15 sm:grid-cols-3 md:mt-18">
              <Stat value={String(site.established)} label="Incorporated and building in Lagos" divider={false} />
              <Stat value={String(projects.length)} label="Signature residences across Lekki, Ikate, Oniru and VGC" />
              <Stat value={String(services.length)} label="Disciplines under one roof — build, systems, interiors, hardscape" />
            </div>
            <div className="mt-12">
              <TextLink href="/company">About D207</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="bg-stone">
        <div className="site-wrap py-24 md:py-30">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow>02 — What we do</Eyebrow>
              <SectionTitle className="max-w-[640px] md:text-[64px]">One contractor, from foundation to final finish.</SectionTitle>
            </div>
            <p className="max-w-[380px] text-base leading-relaxed text-body">
              Most homes in Lagos pass through four or five contractors. At D207 the structure, the systems and the
              interiors are planned and delivered by the same team.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a key={s.slug} href={`/services#${s.slug}`} className="group flex flex-col bg-ivory">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3.5 px-7 pb-8 pt-7">
                  <span className="eyebrow text-brand">{s.number}</span>
                  <h3 className="font-serif text-3xl font-semibold leading-[1.1]">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{s.short}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Selected work ───────────── */}
      <section id="work" className="site-wrap py-24 md:py-36">
        <HomeWork
          projects={featured}
          heading={
            <>
              <Eyebrow>03 — Selected work</Eyebrow>
              <SectionTitle className="md:text-[64px]">Our work speaks for itself.</SectionTitle>
            </>
          }
        />
        <div className="mt-18 flex justify-center">
          <Button href="/projects" variant="outline">
            View all projects
          </Button>
        </div>
      </section>

      {/* ───────────── Smart home band ───────────── */}
      <section className="bg-navy text-cream">
        <div className="site-wrap flex flex-wrap items-center gap-14 py-24 md:gap-16 md:py-30">
          <div className="flex-[1_1_420px]">
            <Eyebrow dark>04 — Intelligent living</Eyebrow>
            <SectionTitle dark>
              A home that knows
              <br />
              <em className="font-normal">how you live.</em>
            </SectionTitle>
            <p className="mt-7 max-w-[460px] text-base leading-[1.7] text-mist">
              Because we build the walls, we can wire them properly. Lighting scenes, climate, CCTV, access control,
              motorised windows and multimedia are planned with the structure — not retrofitted after it.
            </p>
            <ul className="mt-10 grid max-w-[480px] grid-cols-2 border-t border-cream/15 text-[15px]">
              {["Lighting & scenes", "Climate & HVAC", "Security & access", "Media & audio"].map((x) => (
                <li key={x} className="border-b border-cream/15 py-4.5">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/10] w-full flex-[1_1_480px] overflow-hidden">
            <Image
              src="/images/night.jpg"
              alt="A modern home with every room lit at night"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" className="site-wrap scroll-mt-8 py-24 md:py-36">
        <Eyebrow>05 — How we build</Eyebrow>
        <SectionTitle className="max-w-[760px] md:text-[64px]">From vision to handover, with nothing left to chance.</SectionTitle>
        <ol className="mt-16 grid gap-x-7 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <li key={step.title} className="pt-8">
              <div className="relative mb-7 aspect-[4/3] overflow-hidden bg-stone">
                <Image src={step.image} alt={step.imageAlt} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
              </div>
              <div className="font-serif text-[44px] text-brand">{step.numeral}</div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 pb-4 text-[15px] leading-relaxed text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="bg-stone">
        <div className="site-wrap flex flex-wrap gap-14 py-24 md:gap-16 md:py-30">
          <div className="flex-[1_1_320px]">
            <Eyebrow>06 — Questions</Eyebrow>
            <SectionTitle className="md:text-[56px]">What clients ask us first.</SectionTitle>
          </div>
          <div className="flex-[2_1_560px]">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* ───────────── Contact ───────────── */}
      <section id="contact" className="site-wrap flex flex-wrap gap-16 py-24 md:gap-20 md:py-36">
        <div className="flex-[1_1_380px]">
          <Eyebrow>07 — Start a project</Eyebrow>
          <SectionTitle className="md:text-[64px]">Tell us what you want to build.</SectionTitle>
          <p className="mt-6 max-w-[420px] text-base leading-relaxed text-body">
            Share a few details about your plot and plans. A member of our project team will review your brief and get
            back to you.
          </p>
          <dl className="mt-14 grid gap-7">
            <div>
              <dt className="eyebrow text-[11px] text-mute">Call</dt>
              <dd className="mt-2 text-xl">
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[11px] text-mute">Email</dt>
              <dd className="mt-2 break-all text-xl">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[11px] text-mute">Studio</dt>
              <dd className="mt-2 text-[17px] leading-normal">
                {site.address.line1},
                <br />
                {site.address.line2}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex-[1_1_480px]">
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
