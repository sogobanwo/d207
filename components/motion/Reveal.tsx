"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const tags = { div: motion.div, ul: motion.ul, ol: motion.ol, li: motion.li, p: motion.p } as const;
type Tag = keyof typeof tags;

/** Fades and lifts its content into view once, the first time it is scrolled to. */
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 28,
  immediate = false,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on mount instead of on scroll (for above-the-fold content). */
  immediate?: boolean;
}) {
  const M = tags[as];
  const target = { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay } };
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
    >
      {children}
    </M>
  );
}

const group: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};
const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

/** Staggers its <RevealItem> children into view one after another. */
export function RevealGroup({
  as = "div",
  children,
  className,
  stagger = 0.12,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const M = tags[as];
  return (
    <M
      className={className}
      variants={group}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </M>
  );
}

export function RevealItem({ as = "div", children, className }: { as?: Tag; children: ReactNode; className?: string }) {
  const M = tags[as];
  return (
    <M className={className} variants={item}>
      {children}
    </M>
  );
}

/** Grid item that animates in, out and into its new position when a filter changes. Use inside <AnimatePresence mode="popLayout">. */
export function FilterItem({ children, index = 0 }: { children: ReactNode; index?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: Math.min(index, 6) * 0.06 } }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{ layout: { duration: 0.6, ease } }}
    >
      {children}
    </motion.div>
  );
}
