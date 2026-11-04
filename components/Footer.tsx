import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-mist">
      <div className="site-wrap pb-10 pt-20 md:pt-24">
        <div className="flex flex-wrap justify-between gap-14">
          <div className="max-w-sm flex-[1_1_320px]">
            <Image src="/logo-white.png" alt="D207 Designs & Projects" width={251} height={324} className="h-20 w-auto md:h-22" />
            <p className="mt-7 font-serif text-[26px] leading-snug text-ivory">
              Refined homes, precisely built — in Lagos since {site.established}.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 text-[15px]">
            <div className="grid content-start gap-3.5">
              <p className="eyebrow text-[11px] text-haze">Explore</p>
              <Link className="hover:text-white" href="/company">Company</Link>
              <Link className="hover:text-white" href="/services">Services</Link>
              <Link className="hover:text-white" href="/projects">Projects</Link>
              <Link className="hover:text-white" href="/contact">Contact</Link>
            </div>
            <div className="grid content-start gap-3.5">
              <p className="eyebrow text-[11px] text-haze">Contact</p>
              <a className="hover:text-white" href={site.phoneHref}>{site.phone}</a>
              <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
              <address className="not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
            </div>
          </div>
        </div>

        <div className="eyebrow mt-20 flex flex-wrap justify-between gap-4 border-t border-cream/15 pt-6 text-[11px] tracking-[0.12em] text-haze">
          <span>
            © {new Date().getFullYear()} {site.legalName} · {site.rc}
          </span>
          <span>HSE · Quality assurance · CSR</span>
        </div>
      </div>
    </footer>
  );
}
