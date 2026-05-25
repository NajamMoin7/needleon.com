import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return <Tag className={cn("container-page", className)}>{children}</Tag>;
}
