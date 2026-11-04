"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Mode = "default" | "link" | "view" | "text" | "hidden";

const INTERACTIVE = "a, button, [role='button'], label, summary, select";
const TEXT = "input:not([type='checkbox']):not([type='radio']):not([type='submit']), textarea, [contenteditable='true']";

// White ring on a difference-blended layer: reads dark on ivory and light on navy.
const RING: Record<Mode, { width: number; height: number; opacity: number; backgroundColor: string }> = {
  default: { width: 32, height: 32, opacity: 1, backgroundColor: "rgba(255,255,255,0)" },
  link: { width: 48, height: 48, opacity: 1, backgroundColor: "rgba(255,255,255,1)" },
  view: { width: 20, height: 20, opacity: 0, backgroundColor: "rgba(255,255,255,0)" },
  text: { width: 4, height: 28, opacity: 0, backgroundColor: "rgba(255,255,255,0)" },
  hidden: { width: 32, height: 32, opacity: 0, backgroundColor: "rgba(255,255,255,0)" },
};

/**
 * Custom cursor: a precise dot plus a trailing ring.
 * - Grows into a solid (colour-inverting) disc over links and buttons.
 * - Becomes a brand-blue "View" disc over anything marked `data-cursor="view"` (label via `data-cursor-label`).
 * - Steps aside over text fields so the native caret stays usable.
 * Only mounts for mouse/trackpad users who haven't asked for reduced motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("hidden");
  const [label, setLabel] = useState("View");
  const [pressed, setPressed] = useState(false);
  const pathname = usePathname();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const resolve = (t: Element | null) => {
      const view = t?.closest<HTMLElement>("[data-cursor='view']");
      if (view) {
        setLabel(view.dataset.cursorLabel ?? "View");
        setMode("view");
      } else if (t?.closest(TEXT)) setMode("text");
      else if (t?.closest(INTERACTIVE)) setMode("link");
      else setMode("default");
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      resolve(e.target as Element | null);
    };
    // Scrolling moves content under a still pointer, so re-check what it's over.
    const onScroll = () => {
      if (x.get() >= 0) resolve(document.elementFromPoint(x.get(), y.get()));
    };
    const onLeave = () => setMode("hidden");
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  // The element under the pointer changes on navigation without the mouse moving.
  useEffect(() => setMode((m) => (m === "hidden" ? m : "default")), [pathname]);

  if (!enabled) return null;

  return (
    <>
      {/* The blend mode sits on the fixed layer itself: on a child it would only blend
          against this (empty) layer's own stacking context and stay plain white. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
        <motion.div
          className="absolute left-0 top-0 rounded-full border border-white"
          style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
          animate={{ ...RING[mode], scale: pressed ? 0.82 : 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.5 }}
        />
        <motion.div
          className="absolute left-0 top-0 size-1.5 rounded-full bg-white"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
          animate={{ opacity: mode === "default" ? 1 : 0, scale: pressed ? 0.6 : 1 }}
          transition={{ duration: 0.15 }}
        />
      </div>

      {/* "View" disc on its own unblended layer so the brand colour stays true. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
        <motion.div
          className="absolute left-0 top-0 grid size-[68px] place-items-center rounded-full bg-brand"
          style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
          initial={false}
          animate={{ opacity: mode === "view" ? 1 : 0, scale: mode === "view" ? (pressed ? 0.88 : 1) : 0.3 }}
          transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={label}
              className="font-mono text-[9px] uppercase tracking-[0.16em] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
