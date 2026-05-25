"use client";

import { motion } from "framer-motion";

type Step = {
  n: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    n: 1,
    title: "Choose fabric",
    subtitle: "Send your own or pick from our shop",
    icon: <FabricIcon />,
  },
  {
    n: 2,
    title: "Submit measurements",
    subtitle: "Share size, fitting & preferences",
    icon: <RulerIcon />,
  },
  {
    n: 3,
    title: "Upload reference",
    subtitle: "Inspiration & design photos",
    icon: <ImageIcon />,
  },
  {
    n: 4,
    title: "We stitch",
    subtitle: "Hand-finished by our atelier",
    icon: <ScissorsIcon />,
  },
  {
    n: 5,
    title: "Delivery",
    subtitle: "Quality-checked & shipped to you",
    icon: <BoxIcon />,
  },
];

export function OrderJourney() {
  return (
    <div className="relative">
      {/* Background soft shapes */}
      <div className="absolute -top-8 -left-6 w-48 h-48 rounded-full bg-blush-100 blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-10 -right-6 w-56 h-56 rounded-full bg-sand blur-3xl opacity-80 pointer-events-none" />

      <div className="relative bg-surface rounded-[2rem] border border-border shadow-soft p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Decorative top tag */}
        <div className="absolute top-5 right-5 hidden sm:block">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-blush-500 bg-blush-50 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blush-400 animate-pulse" />
            Order journey
          </div>
        </div>

        {/* Desktop: horizontal flow with connecting dashed line behind cards */}
        <div className="hidden md:block relative pt-8">
          <svg
            className="absolute left-0 right-0 top-[78px] w-full h-6 pointer-events-none"
            viewBox="0 0 1200 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 12 Q 300 -20 600 12 T 1160 12"
              fill="none"
              stroke="#FD8D7F"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                <StepNode step={s} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with connecting line */}
        <div className="md:hidden relative">
          <div
            className="absolute left-[31px] top-8 bottom-8 w-px border-l-2 border-dashed border-blush-200"
            aria-hidden="true"
          />
          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-4 relative z-10"
              >
                <NodeBadge n={s.n} />
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-blush-500">{s.icon}</span>
                    <p className="font-display text-lg text-ink-800">{s.title}</p>
                  </div>
                  <p className="text-sm text-ink-500 mt-1 leading-relaxed">
                    {s.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer caption */}
        <div className="relative mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm text-ink-500">
            Typical turnaround: <span className="text-ink-800 font-medium">2–4 weeks</span> from request to delivery.
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-1.5 text-sm text-blush-500 hover:gap-2.5 transition-all"
          >
            Start your request →
          </a>
        </div>
      </div>
    </div>
  );
}

function StepNode({ step }: { step: Step }) {
  return (
    <>
      <NodeBadge n={step.n} />
      <div className="mt-4 w-11 h-11 rounded-full bg-blush-50 text-blush-500 grid place-items-center">
        {step.icon}
      </div>
      <p className="mt-3 font-display text-base lg:text-lg text-ink-800">{step.title}</p>
      <p className="mt-1 text-xs lg:text-[13px] text-ink-500 leading-relaxed max-w-[180px]">
        {step.subtitle}
      </p>
    </>
  );
}

function NodeBadge({ n }: { n: number }) {
  return (
    <div className="relative shrink-0">
      <div className="absolute inset-0 rounded-full bg-blush-200 blur-md opacity-60" />
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blush-400 to-blush-500 text-white grid place-items-center shadow-soft">
        <span className="font-display text-2xl leading-none">{n}</span>
      </div>
    </div>
  );
}

/* ------- Icons (kept inline to keep this component self-contained) ------- */

function FabricIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7c3-2 5 0 9-2s7 1 9-1v12c-3 2-5-1-9 1s-7-1-9 1V7Z" />
      <path d="M3 11c3-2 5 0 9-2s7 1 9-1" opacity="0.5" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5 9.5 3l11.5 11.5L14.5 21 3 9.5Z" />
      <path d="m7 8 1.5 1.5M9.5 5.5 11 7M11 10l1.5 1.5M14 8l1.5 1.5M16.5 11l1.5 1.5" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="1.5" />
      <path d="m3 17 5-4 4 3 4-5 5 6" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 8 9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}
