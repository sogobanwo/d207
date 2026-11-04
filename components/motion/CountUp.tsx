"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/** Counts a numeric value up when it enters the viewport. Non-numeric values render as-is. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const target = Number(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce || !Number.isFinite(target)) return;
    // Years count over their last few decades rather than from zero.
    const from = target > 1000 ? target - 40 : 0;
    const controls = animate(from, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, reduce, target]);

  return <span ref={ref}>{value}</span>;
}
