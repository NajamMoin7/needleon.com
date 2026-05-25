import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Props = {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "sand" | "ink";
  spacing?: "sm" | "md" | "lg";
  id?: string;
};

const bgs = {
  cream: "bg-background",
  white: "bg-surface",
  sand: "bg-sand",
  ink: "bg-ink-800 text-white",
};

const pads = {
  sm: "py-12 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

export function Section({ children, className, bg = "cream", spacing = "md", id }: Props) {
  return (
    <section id={id} className={cn(bgs[bg], pads[spacing], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-medium tracking-[0.2em] uppercase",
            invert ? "text-blush-300" : "text-blush-500",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-medium font-display",
          invert ? "text-white" : "text-ink-800",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed",
            invert ? "text-white/70" : "text-ink-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
