import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "unstitched",
    name: "Unstitched",
    tagline: "Premium fabrics, ready for your tailor",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ready-to-wear",
    name: "Ready-to-Wear",
    tagline: "Pre-stitched pieces in modern silhouettes",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "formals",
    name: "Formals & Bridal",
    tagline: "Statement pieces for weddings and events",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "casual",
    name: "Casual & Pret",
    tagline: "Everyday elegance, effortlessly styled",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dupattas",
    name: "Dupattas & Shawls",
    tagline: "Hand-finished drapes and embroidered shawls",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "Bags, jewellery & finishing touches",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
