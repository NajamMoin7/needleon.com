import { cn } from "@/lib/cn";

type Tone = "blush" | "ink" | "ivory" | "muted";

const tones: Record<Tone, string> = {
  blush: "bg-blush-100 text-blush-700",
  ink: "bg-ink-800 text-white",
  ivory: "bg-sand text-ink-700",
  muted: "bg-ink-100 text-ink-700",
};

export function Badge({
  children,
  tone = "blush",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
