"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "header" | "li" | "p" | "h1" | "h2" | "h3" | "span";
};

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  once = true,
  as: Tag = "div",
}: Props) {
  const transition: Transition = { duration, delay, ease: [0.22, 1, 0.36, 1] };
  const Motion = motion[Tag] as typeof motion.div;
  return (
    <Motion
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={transition}
      className={className}
    >
      {children}
    </Motion>
  );
}
