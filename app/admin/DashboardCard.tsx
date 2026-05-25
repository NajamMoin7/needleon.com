"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Tone = "default" | "blush" | "ink";

export function DashboardCard({
  label,
  value,
  icon,
  delay = 0,
  tone = "default",
  wide,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  delay?: number;
  tone?: Tone;
  wide?: boolean;
}) {
  const toneClasses: Record<Tone, string> = {
    default: "bg-surface text-ink-700 border-border",
    blush: "bg-blush-50 text-ink-800 border-blush-100",
    ink: "bg-ink-800 text-white border-ink-900",
  };
  const iconBg: Record<Tone, string> = {
    default: "bg-blush-100 text-blush-500",
    blush: "bg-blush-400 text-white",
    ink: "bg-white/10 text-white",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={cn(
        "rounded-2xl border p-5 transition-shadow hover:shadow-soft",
        toneClasses[tone],
        wide && "col-span-2 md:col-span-3 lg:col-span-4",
      )}
    >
      <div className="flex items-center justify-between">
        <p className={cn("text-xs uppercase tracking-wider", tone === "ink" ? "text-white/60" : "text-ink-500")}>
          {label}
        </p>
        <span className={cn("w-9 h-9 rounded-full grid place-items-center", iconBg[tone])}>
          {icon}
        </span>
      </div>
      <p
        className={cn(
          "font-display mt-2",
          wide ? "text-4xl" : "text-3xl",
          tone === "ink" ? "text-white" : "text-ink-800",
        )}
      >
        {value}
      </p>
    </motion.div>
  );
}
