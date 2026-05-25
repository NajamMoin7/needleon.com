export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "Free";

export type ColorOption = {
  name: string;
  hex: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export type Product = {
  slug: string;
  title: string;
  category: string; // category slug
  price: number; // PKR
  discountPrice?: number;
  images: string[];
  sizes: Size[];
  colors: ColorOption[];
  fabric: string;
  stock: number;
  description: string;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  rating?: number;
  reviews?: number;
};

export type CartItem = {
  slug: string;
  title: string;
  price: number; // unit price (already discounted if applicable)
  image: string;
  size: Size;
  color: string;
  quantity: number;
};
