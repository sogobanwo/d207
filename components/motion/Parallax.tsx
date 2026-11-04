"use client";

import { useRef, type ReactNode } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

/**
 * Scroll-linked parallax for a full-bleed image. Place inside a `relative overflow-hidden`
 * box; the inner layer is oversized so its edges never show while it drifts.
 */
export function Parallax({ children, amount = 12, zoom = false }: { children: ReactNode; amount?: number; zoom?: boolean }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          inner.current,
          { yPercent: -amount / 2, scale: zoom ? 1.12 : 1 },
          {
            yPercent: amount / 2,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: outer.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: outer },
  );

  return (
    <div ref={outer} className="absolute inset-0">
      <div ref={inner} className="absolute inset-x-0 -inset-y-[8%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
