"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  IconCheck,
  IconHeart,
  IconMinus,
  IconPlus,
  IconScissors,
  IconShield,
  IconStar,
  IconTruck,
} from "@/components/ui/Icons";
import { discountPercent, formatPKR } from "@/lib/format";
import { useCart } from "@/components/cart/CartProvider";
import type { Product, Size } from "@/lib/types";
import { cn } from "@/lib/cn";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState<Size>(product.sizes[0]);
  const [color, setColor] = useState<string>(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const { add } = useCart();
  const off = discountPercent(product.price, product.discountPrice);
  const price = product.discountPrice ?? product.price;
  const outOfStock = product.stock <= 0;

  function onAdd() {
    add({
      slug: product.slug,
      title: product.title,
      price,
      image: product.images[0],
      size,
      color,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <Container className="pt-6 pb-16">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
            <Image
              src={product.images[activeImg] ?? product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {off > 0 && (
              <div className="absolute top-4 left-4">
                <Badge tone="blush">{off}% off</Badge>
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden border-2 transition",
                    activeImg === i ? "border-blush-400" : "border-transparent",
                  )}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <Badge tone="muted" className="mb-3">{product.fabric}</Badge>
            <h1 className="font-display text-3xl sm:text-4xl text-ink-800 leading-tight">
              {product.title}
            </h1>
            {product.rating && (
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="inline-flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.round(product.rating!) ? "text-blush-400" : "text-ink-200",
                      )}
                    />
                  ))}
                </span>
                <span className="text-ink-500">
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>
            )}
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-ink-800">{formatPKR(price)}</span>
            {product.discountPrice && (
              <span className="text-base text-ink-400 line-through">
                {formatPKR(product.price)}
              </span>
            )}
            {off > 0 && (
              <span className="text-sm text-blush-500 font-medium">Save {off}%</span>
            )}
          </div>

          <p className="text-ink-600 leading-relaxed">{product.description}</p>

          {/* Colour */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] tracking-[0.2em] uppercase text-ink-500">Colour</span>
              <span className="text-xs text-ink-500">{color}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  className={cn(
                    "w-9 h-9 rounded-full border-2 transition",
                    color === c.name ? "border-ink-800" : "border-white shadow-soft hover:border-ink-200",
                  )}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] tracking-[0.2em] uppercase text-ink-500">Size</span>
              <button type="button" className="text-xs text-blush-500 hover:underline">
                Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={cn(
                    "min-w-11 h-11 px-3 rounded-full text-sm border transition",
                    size === s
                      ? "bg-ink-800 text-white border-ink-800"
                      : "bg-surface text-ink-700 border-ink-200 hover:border-ink-700",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + Add to cart */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="inline-flex items-center border border-ink-200 rounded-full">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 grid place-items-center text-ink-700 hover:text-blush-500"
                aria-label="Decrease quantity"
              >
                <IconMinus />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="w-11 h-11 grid place-items-center text-ink-700 hover:text-blush-500"
                aria-label="Increase quantity"
              >
                <IconPlus />
              </button>
            </div>
            <Button onClick={onAdd} size="lg" className="flex-1" disabled={outOfStock}>
              {added ? (
                <>
                  <IconCheck className="w-4 h-4" />
                  Added to cart
                </>
              ) : outOfStock ? (
                "Out of stock"
              ) : (
                "Add to cart"
              )}
            </Button>
            <button
              type="button"
              aria-label="Add to wishlist"
              className="w-12 h-12 grid place-items-center rounded-full border border-ink-200 text-ink-700 hover:text-blush-500 hover:border-blush-300"
            >
              <IconHeart />
            </button>
          </div>

          {/* Trust strip */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
            <li className="flex items-center gap-2 text-xs text-ink-600">
              <IconTruck className="w-4 h-4 text-blush-500" />
              Pakistan-wide delivery
            </li>
            <li className="flex items-center gap-2 text-xs text-ink-600">
              <IconShield className="w-4 h-4 text-blush-500" />
              7-day easy returns
            </li>
            <li className="flex items-center gap-2 text-xs text-ink-600">
              <IconScissors className="w-4 h-4 text-blush-500" />
              Stitching service available
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
