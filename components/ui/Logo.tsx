import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { width: number; height: number; className: string }> = {
  sm: { width: 110, height: 38, className: "h-8 w-auto" },
  md: { width: 150, height: 52, className: "h-10 sm:h-11 w-auto" },
  lg: { width: 220, height: 76, className: "h-16 w-auto" },
};

export function Logo({
  size = "md",
  asLink = true,
  href = "/",
  invert = false,
  className,
  priority = false,
}: {
  size?: Size;
  asLink?: boolean;
  href?: string;
  invert?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const s = sizes[size];
  const img = (
    <Image
      src="/logo.png"
      alt="NeedleOn, Fit For Perfection"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(s.className, invert && "invert brightness-0", "select-none")}
    />
  );

  if (!asLink) return <span className={className}>{img}</span>;
  return (
    <Link href={href} aria-label="NeedleOn home" className={cn("inline-flex", className)}>
      {img}
    </Link>
  );
}
