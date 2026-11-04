"use client";

import { useRef, type ReactNode } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "./gsap";

type Tag = "h1" | "h2" | "h3" | "p";

/**
 * Text animation built on GSAP SplitText.
 * - "rise":  each line is masked and its words slide up into view.
 * - "scrub": words brighten from faint to solid as the reader scrolls past.
 * Reduced-motion users get the plain text.
 */
export function SplitReveal({
  as: Tag = "h2",
  children,
  className = "",
  variant = "rise",
  immediate = false,
  delay = 0,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  variant?: "rise" | "scrub";
  /** Play on mount instead of when scrolled into view (for above-the-fold headings). */
  immediate?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const split = SplitText.create(el, {
          type: variant === "rise" ? "lines,words" : "words",
          mask: variant === "rise" ? "lines" : undefined,
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { autoAlpha: 1 });
            if (variant === "scrub") {
              return gsap.fromTo(
                self.words,
                { opacity: 0.18 },
                {
                  opacity: 1,
                  stagger: 0.08,
                  ease: "none",
                  scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
                },
              );
            }
            return gsap.from(self.words, {
              yPercent: 110,
              rotate: 4,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.045,
              delay,
              scrollTrigger: immediate ? undefined : { trigger: el, start: "top 88%", once: true },
            });
          },
        });
        return () => split.revert();
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [variant, immediate, delay] },
  );

  return (
    <Tag ref={ref as never} className={`split-reveal ${className}`}>
      {children}
    </Tag>
  );
}
