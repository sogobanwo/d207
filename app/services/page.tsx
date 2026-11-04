import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Eyebrow, PageHero, SectionTitle, TextLink } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction, smart home technology, interiors & furnishing and concrete stamp design — four disciplines delivered by one accountable team in Lagos.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Four disciplines. One accountable team."
        lede="Structure, systems, interiors and hardscape — planned together and delivered by the same people, so nothing falls between contractors."
      />

      <div className="space-y-24 pb-28 pt-16 md:space-y-30 md:pb-36 md:pt-24">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="site-wrap scroll-mt-8">
            <div className={`flex flex-col gap-12 lg:gap-18 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-stone lg:flex-1">
                <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center lg:flex-1">
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-[72px] leading-none text-brand">{s.number}</span>
                  <span className="eyebrow text-[11px] tracking-[0.16em] text-mute">{s.tag}</span>
                </div>
                <h2 className="mt-6 font-serif text-[44px] font-medium leading-[1.04] md:text-[56px]">{s.title}</h2>
                <p className="mt-5 max-w-[480px] text-base leading-[1.7] text-body">{s.description}</p>
                <ul className="mt-8 grid grid-cols-2 gap-x-8 border-t border-ink/15">
                  {s.includes.map((item) => (
                    <li key={item} className="border-b border-ink/15 py-3.5 text-[15px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy text-cream">
        <div className="site-wrap flex flex-wrap items-center gap-14 py-24 md:gap-16 md:py-28">
          <div className="flex-[1_1_420px]">
            <Eyebrow dark>Turnkey delivery</Eyebrow>
            <SectionTitle dark className="max-w-[560px] md:text-[54px]">
              From empty plot to furnished, intelligent home.
            </SectionTitle>
            <p className="mt-6 max-w-[460px] text-base leading-[1.7] text-mist">
              Combine any of our services — or hand us the whole project. Carlton Gate Estate is one example: a
              5-bedroom duplex built and fully furnished by D207.
            </p>
            <div className="mt-9">
              <TextLink href="/projects/carlton-gate-estate-residence" dark>
                See a turnkey project
              </TextLink>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full flex-[1_1_480px] overflow-hidden">
            <Image
              src="/images/projects/carlton-gate.jpg"
              alt="Furnished living room with large windows"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
