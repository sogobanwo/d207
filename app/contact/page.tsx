import type { Metadata } from "next";
import { Arrow } from "@/components/Arrow";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with D207 — share your brief, or call our Lekki office on +234 803 704 9853.",
};

const steps = [
  { n: "01", t: "Brief reviewed", d: "Our project team reads your brief and any drawings you share." },
  { n: "02", t: "Scope identified", d: "We outline the technical scope, services and the questions we need answered." },
  { n: "03", t: "Advisory response", d: "You receive a considered response with the right next step — usually a site visit." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell us what you want to build."
        lede="Share a few details about your plot and plans. A member of our project team will review your brief and get back to you."
      />

      <section className="site-wrap flex flex-wrap gap-16 py-24 md:gap-20 md:py-30">
        <div className="flex-[3_1_560px]">
          <ContactForm />
        </div>

        <aside className="grid flex-[2_1_360px] content-start gap-6">
          <div className="bg-navy px-10 py-11 text-cream">
            <Eyebrow dark>What happens next</Eyebrow>
            <ol className="mt-4">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-6 border-b border-cream/15 py-7 last:border-b-0">
                  <span className="font-serif text-4xl leading-none text-ivory">{s.n}</span>
                  <span>
                    <span className="block text-[17px] font-semibold text-ivory">{s.t}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-mist">{s.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-6 border border-ink/10 bg-white p-10">
            <div>
              <p className="eyebrow text-[11px] text-mute">Call</p>
              <a href={site.phoneHref} className="mt-2 block text-xl hover:text-brand">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-[11px] text-mute">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all text-lg hover:text-brand">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-[11px] text-mute">Visit</p>
              <address className="mt-2 text-base not-italic leading-relaxed">
                {site.address.line1},
                <br />
                {site.address.line2}
              </address>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand"
              >
                Open in Google Maps <Arrow />
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
