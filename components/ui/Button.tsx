import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "ink";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blush-400 text-white shadow-soft hover:bg-blush-500 active:bg-blush-600",
  secondary:
    "bg-ink-800 text-white hover:bg-ink-700 active:bg-ink-900",
  ink: "bg-ink-700 text-white hover:bg-ink-800",
  ghost: "bg-transparent text-ink-700 hover:bg-ink-100",
  outline:
    "bg-transparent text-ink-700 border border-ink-200 hover:border-ink-700 hover:bg-ink-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const classes = cn(
    "btn-base inline-flex items-center justify-center font-medium tracking-wide rounded-full transition",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
