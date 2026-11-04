import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { CountUp } from "./motion/CountUp";
import { Magnetic } from "./motion/Magnetic";
import { Parallax } from "./motion/Parallax";
import { Reveal } from "./motion/Reveal";
import { SplitReveal } from "./motion/SplitReveal";

export function Eyebrow({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`eyebrow ${dark ? "text-haze" : "text-mute"} ${className}`}>{children}</p>;
}

export function SectionTitle({
  children,
  dark = false,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <SplitReveal
      as={Tag}
      className={`mt-5 text-balance font-serif text-[44px] font-medium leading-[1.04] md:text-[60px] ${
        dark ? "text-ivory" : "text-ink"
      } ${className}`}
    >
      {children}
    </SplitReveal>
  );
}

type ButtonProps = { href: string; children: ReactNode; variant?: "brand" | "light" | "outline" | "outline-light"; className?: string };

export function Button({ href, children, variant = "brand", className = "" }: ButtonProps) {
  const styles = {
    brand: "bg-brand text-white hover:bg-brand-dark",
    light: "bg-ivory text-ink hover:bg-white",
    outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
    "outline-light": "border border-cream/40 text-ivory hover:bg-ivory hover:text-ink",
  }[variant];
  return (
    <Magnetic>
      <Link
        href={href}
        className={`group inline-flex min-h-13 flex-1 items-center justify-center gap-2.5 px-7 text-[15px] font-medium tracking-[0.02em] transition-colors ${styles} ${className}`}
      >
        {children}
        <Arrow />
      </Link>
    </Magnetic>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2.5 border-b text-[15px] font-medium ${
        dark ? "border-ivory text-ivory" : "border-ink text-ink"
      }`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

/** Navy page header used by every inner page. Renders under <Header />. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <>
      <section className="bg-navy text-cream">
        <div className="site-wrap pb-20 pt-12 md:pb-24 md:pt-18">
          <Reveal immediate y={12}>
            <Eyebrow dark>{eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-10">
            <SplitReveal
              as="h1"
              immediate
              delay={0.1}
              className="max-w-[820px] text-balance font-serif text-5xl font-medium leading-none tracking-[-0.01em] text-ivory md:text-[84px]"
            >
              {title}
            </SplitReveal>
            <Reveal as="p" immediate delay={0.45} className="max-w-[400px] text-[17px] leading-relaxed text-mist">
              {lede}
            </Reveal>
          </div>
        </div>
        {image && (
          <div className="site-wrap">
            <Reveal immediate delay={0.3} y={60} className="relative -mb-24 aspect-[4/3] overflow-hidden bg-navy-2 md:-mb-40 md:aspect-[21/9]">
              <Parallax zoom>
                <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1280px) 1184px, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>
          </div>
        )}
      </section>
      {image && <div aria-hidden="true" className="h-24 md:h-40" />}
    </>
  );
}

export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell us about your plot, your plans and your timeline. Our team will review your brief and respond with the right next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-stone">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-10 py-24 md:py-28">
        <div className="max-w-[680px]">
          <SplitReveal className="text-balance font-serif text-[44px] font-medium leading-[1.04] md:text-[60px]">{title}</SplitReveal>
          <Reveal as="p" delay={0.2} className="mt-5 text-base leading-relaxed text-body">
            {text}
          </Reveal>
        </div>
        <Button href="/contact">Start a project</Button>
      </div>
    </section>
  );
}

export function Stat({ value, label, divider = true }: { value: string; label: string; divider?: boolean }) {
  return (
    <div className={`pt-7 sm:px-6 ${divider ? "sm:border-l sm:border-ink/15" : "sm:pl-0"}`}>
      <div className="font-serif text-5xl leading-none tabular-nums md:text-[64px]">
        <CountUp value={value} />
      </div>
      <div className="mt-3 text-sm leading-normal text-mute">{label}</div>
    </div>
  );
}
