"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Arrow } from "./Arrow";

export function Header() {
  const pathname = usePathname();
  // On the homepage the header floats over the full-bleed hero photo.
  const overlay = pathname === "/";
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && href !== "/" && pathname.startsWith(href);

  return (
    <div className={overlay ? "absolute inset-x-0 top-0 z-30" : "relative z-30 bg-navy"}>
      <motion.nav
        aria-label="Main"
        className="site-wrap flex items-center justify-between gap-6 py-5 md:py-7"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src="/logo-white.png"
            alt="D207 Designs & Projects"
            width={251}
            height={324}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-10 text-sm tracking-[0.04em] lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href)
                    ? "border-b border-white pb-1 text-white"
                    : "text-mist transition-colors hover:text-white"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden min-h-11 items-center gap-2.5 border border-cream/40 px-5 text-sm tracking-[0.04em] text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-ink sm:inline-flex"
          >
            Start a project <Arrow />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-12 place-items-center border border-cream/40 text-ivory lg:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M2 2l14 14M16 2L2 16" />
              </svg>
            ) : (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M0 1h20M0 7h20M0 13h20" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[88px] z-40 overflow-y-auto bg-navy px-6 pb-10 pt-4 lg:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center border-b border-cream/15 font-serif text-3xl text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-8 flex min-h-13 items-center justify-center bg-brand text-[15px] text-white"
          >
            Call {site.phone}
          </a>
        </div>
      )}
    </div>
  );
}
