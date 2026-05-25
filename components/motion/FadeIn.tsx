"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "left" | "right" | "none";
  distance?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className,
  direction = "none",
  distance = 32,
  once = true,
}: Props) {
  const offset =
    direction === "left" ? { x: -distance } : direction === "right" ? { x: distance } : { x: 0 };
  const transition: Transition = { duration, delay, ease: [0.22, 1, 0.36, 1] };
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
