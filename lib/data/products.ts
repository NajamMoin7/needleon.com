import type { Product } from "@/lib/types";

const blush = { name: "Blush", hex: "#FD8D7F" };
const ivory = { name: "Ivory", hex: "#F4ECE5" };
const charcoal = { name: "Charcoal", hex: "#424242" };
const emerald = { name: "Emerald", hex: "#1f6f54" };
const navy = { name: "Midnight", hex: "#1f2a44" };
const dustyRose = { name: "Dusty Rose", hex: "#c98a8a" };
const sand = { name: "Sand", hex: "#d8c4a8" };
const wine = { name: "Wine", hex: "#6b1f2a" };

export const products: Product[] = [
  {
    slug: "rosewater-embroidered-kurta",
    title: "Rosewater Embroidered Kurta",
    category: "ready-to-wear",
    price: 8500,
    discountPrice: 6800,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [blush, ivory, dustyRose],
    fabric: "Lawn cotton with thread embroidery",
    stock: 24,
    description:
      "A lightweight lawn kurta with hand-finished thread embroidery on the neckline and cuffs. Tailored for an easy, drapey fit — equally at home for daywear or paired with statement earrings for evening.",
    featured: true,
    newArrival: true,
    bestSeller: true,
    rating: 4.8,
    reviews: 126,
  },
  {
    slug: "ivory-pearl-formal-suit",
    title: "Ivory Pearl Formal 3-Piece",
    category: "formals",
    price: 24500,
    discountPrice: 19999,
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: [ivory, sand],
    fabric: "Raw silk with pearl & dabka work",
    stock: 8,
    description:
      "An heirloom-worthy 3-piece raw silk suit, embellished with seed pearls and dabka detailing along the bodice and dupatta border. Includes shirt, gharara trousers and a full-width hand-finished dupatta.",
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviews: 42,
  },
  {
    slug: "blush-chiffon-dupatta",
    title: "Blush Chiffon Dupatta",
    category: "dupattas",
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [blush, ivory, dustyRose],
    fabric: "Pure chiffon with scalloped edges",
    stock: 60,
    description:
      "A featherweight chiffon dupatta finished with a delicate scalloped edge. The blush tone flatters every skin tone and layers beautifully over neutrals.",
    newArrival: true,
    rating: 4.7,
    reviews: 78,
  },
  {
    slug: "midnight-velvet-shawl",
    title: "Midnight Velvet Shawl",
    category: "dupattas",
    price: 12500,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [navy, charcoal, wine],
    fabric: "Silk velvet with zari embroidery",
    stock: 12,
    description:
      "A wedding-season essential. Soft silk velvet shawl with zari embroidered borders that catch the light. Generously cut for graceful draping.",
    featured: true,
    rating: 4.9,
    reviews: 31,
  },
  {
    slug: "emerald-pret-kurta",
    title: "Emerald Pret Kurta",
    category: "casual",
    price: 5800,
    discountPrice: 4900,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [emerald, charcoal, ivory],
    fabric: "Cambric cotton",
    stock: 40,
    description:
      "A clean, structured pret kurta in a deep emerald green. Box-cut silhouette with side slits and a mandarin collar — designed for movement.",
    newArrival: true,
    bestSeller: true,
    rating: 4.6,
    reviews: 54,
  },
  {
    slug: "sandstone-unstitched-3-piece",
    title: "Sandstone Unstitched 3-Piece",
    category: "unstitched",
    price: 6200,
    images: [
      "https://images.unsplash.com/photo-1612722432474-b971cdcea546?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [sand, ivory],
    fabric: "Khaddar — shirt, trouser, dupatta",
    stock: 35,
    description:
      "A complete unstitched khaddar set in soft sandstone. Includes 2.5m shirt fabric, 2.5m trouser fabric and a 2.5m printed dupatta. Pair with our stitching service to have it tailored to your measurements.",
    newArrival: true,
    rating: 4.5,
    reviews: 22,
  },
  {
    slug: "wine-bridal-lehenga",
    title: "Wine Bridal Lehenga",
    category: "formals",
    price: 86000,
    discountPrice: 72500,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: [wine, dustyRose],
    fabric: "Raw silk lehenga with heavy zardozi",
    stock: 3,
    description:
      "A bridal statement — full-flare raw silk lehenga with hand-done zardozi across the bodice, hem and dupatta border. Includes choli and 4m dupatta. Made-to-order in 4 weeks.",
    featured: true,
    rating: 5.0,
    reviews: 9,
  },
  {
    slug: "pearl-drop-earrings",
    title: "Pearl Drop Earrings",
    category: "accessories",
    price: 2200,
    discountPrice: 1800,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [ivory, sand],
    fabric: "Freshwater pearls, gold-plated brass",
    stock: 50,
    description:
      "Delicate drop earrings with freshwater pearls on a gold-plated brass setting. The perfect finishing touch for both pret and formal looks.",
    bestSeller: true,
    rating: 4.7,
    reviews: 88,
  },
  {
    slug: "rose-quartz-clutch",
    title: "Rose Quartz Beaded Clutch",
    category: "accessories",
    price: 4800,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [dustyRose, blush],
    fabric: "Hand-beaded with detachable chain",
    stock: 15,
    description:
      "A hand-beaded evening clutch in rose quartz tones. Comes with a detachable chain so you can carry it as a clutch or wear it crossbody.",
    newArrival: true,
    rating: 4.8,
    reviews: 14,
  },
  {
    slug: "charcoal-everyday-kurta",
    title: "Charcoal Everyday Kurta",
    category: "casual",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [charcoal, ivory, navy],
    fabric: "Cotton blend",
    stock: 80,
    description:
      "A workwear essential. Straight-cut charcoal kurta in a soft cotton blend that holds its shape all day. Wear it with cigarette pants or shalwar.",
    bestSeller: true,
    rating: 4.5,
    reviews: 132,
  },
  {
    slug: "blossom-lawn-3-piece",
    title: "Blossom Lawn 3-Piece (Unstitched)",
    category: "unstitched",
    price: 7200,
    discountPrice: 5900,
    images: [
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["Free"],
    colors: [blush, ivory],
    fabric: "Digital-printed lawn",
    stock: 28,
    description:
      "A bright digital-printed lawn 3-piece with embroidered front panel. A celebration of soft florals — perfect for spring and summer.",
    newArrival: true,
    featured: true,
    rating: 4.6,
    reviews: 19,
  },
  {
    slug: "dusty-rose-pret-kurta",
    title: "Dusty Rose Pret Kurta",
    category: "ready-to-wear",
    price: 6800,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [dustyRose, blush, ivory],
    fabric: "Lawn cotton with chikankari",
    stock: 18,
    description:
      "A soft dusty-rose kurta featuring traditional chikankari on the yoke. Relaxed A-line cut with full-length sleeves and pearl button placket.",
    featured: true,
    rating: 4.8,
    reviews: 47,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function listProducts(filter?: {
  category?: string;
  search?: string;
  size?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
}): Product[] {
  let result = products.slice();
  if (filter?.category) {
    result = result.filter((p) => p.category === filter.category);
  }
  if (filter?.size) {
    result = result.filter((p) => p.sizes.includes(filter.size as Product["sizes"][number]));
  }
  if (filter?.color) {
    const c = filter.color.toLowerCase();
    result = result.filter((p) => p.colors.some((col) => col.name.toLowerCase() === c));
  }
  if (filter?.minPrice != null) {
    result = result.filter((p) => (p.discountPrice ?? p.price) >= filter.minPrice!);
  }
  if (filter?.maxPrice != null) {
    result = result.filter((p) => (p.discountPrice ?? p.price) <= filter.maxPrice!);
  }
  if (filter?.search) {
    const q = filter.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }
  return result;
}

export function relatedProducts(slug: string, take = 4): Product[] {
  const current = getProduct(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, take);
}

export const featuredProducts = () => products.filter((p) => p.featured);
export const newArrivals = () => products.filter((p) => p.newArrival);
export const bestSellers = () => products.filter((p) => p.bestSeller);

export function allSizes(): string[] {
  const set = new Set<string>();
  for (const p of products) for (const s of p.sizes) set.add(s);
  return Array.from(set);
}

export function allColors(): { name: string; hex: string }[] {
  const map = new Map<string, string>();
  for (const p of products) for (const c of p.colors) map.set(c.name, c.hex);
  return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
}
