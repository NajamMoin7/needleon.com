"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { discountPercent, formatPKR } from "@/lib/format";
import { Badge } from "./Badge";

export function ProductCard({ product }: { product: Product }) {
  const off = discountPercent(product.price, product.discountPrice);
  const price = product.discountPrice ?? product.price;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="h-full"
    >
      <Link href={`/shop/${product.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-sand aspect-[3/4]">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.newArrival && <Badge tone="ink">New</Badge>}
            {off > 0 && <Badge tone="blush">{off}% off</Badge>}
          </div>
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute bottom-3 left-3 right-3">
              <span className="block text-[11px] tracking-wider uppercase bg-white/95 text-ink-700 px-2.5 py-1 rounded-full text-center">
                Only {product.stock} left
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1.5">
          <h3 className="text-sm sm:text-base font-medium text-ink-800 group-hover:text-blush-500 transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-ink-400">{product.fabric}</p>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-sm font-semibold text-ink-800">
              {formatPKR(price)}
            </span>
            {product.discountPrice && (
              <span className="text-xs text-ink-400 line-through">
                {formatPKR(product.price)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
