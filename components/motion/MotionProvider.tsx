"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Framer Motion honours the OS "reduce motion" setting across the whole site. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
