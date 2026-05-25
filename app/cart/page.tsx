"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  IconArrowRight,
  IconMinus,
  IconPlus,
  IconShield,
  IconTrash,
  IconTruck,
} from "@/components/ui/Icons";
import { itemKey, useCart } from "@/components/cart/CartProvider";
import { formatPKR } from "@/lib/format";

const SHIPPING_THRESHOLD = 10000;
const SHIPPING_FEE = 250;

export default function CartPage() {
  const { items, subtotal, setQuantity, remove, isHydrated } = useCart();

  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const empty = items.length === 0;

  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-10">
          <Badge tone="blush">Cart</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
            Your shopping bag
          </h1>
        </Container>
      </section>

      <Container className="py-12">
        {!isHydrated ? (
          <p className="text-sm text-ink-500">Loading your bag…</p>
        ) : empty ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            <div className="space-y-4">
              {items.map((it) => {
                const key = itemKey(it.slug, it.size, it.color);
                return (
                  <div
                    key={key}
                    className="bg-surface rounded-2xl p-4 sm:p-5 border border-border flex gap-4"
                  >
                    <Link
                      href={`/shop/${it.slug}`}
                      className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-sand"
                    >
                      <Image src={it.image} alt={it.title} fill className="object-cover" sizes="120px" />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            href={`/shop/${it.slug}`}
                            className="font-medium text-ink-800 truncate hover:text-blush-500"
                          >
                            {it.title}
                          </Link>
                          <p className="text-xs text-ink-500 mt-1">
                            {it.color} · Size {it.size}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(key)}
                          className="text-ink-400 hover:text-blush-500 p-1"
                          aria-label="Remove item"
                        >
                          <IconTrash />
                        </button>
                      </div>
                      <div className="mt-auto pt-3 flex items-end justify-between gap-3">
                        <div className="inline-flex items-center border border-ink-200 rounded-full">
                          <button
                            type="button"
                            onClick={() => setQuantity(key, it.quantity - 1)}
                            className="w-9 h-9 grid place-items-center text-ink-700 hover:text-blush-500"
                            aria-label="Decrease"
                          >
                            <IconMinus />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{it.quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(key, it.quantity + 1)}
                            className="w-9 h-9 grid place-items-center text-ink-700 hover:text-blush-500"
                            aria-label="Increase"
                          >
                            <IconPlus />
                          </button>
                        </div>
                        <span className="font-semibold text-ink-800">
                          {formatPKR(it.price * it.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 text-sm text-blush-500 mt-2"
              >
                ← Continue shopping
              </Link>
            </div>

            <aside className="lg:sticky lg:top-28 self-start space-y-4">
              <div className="bg-surface rounded-2xl border border-border p-6 space-y-4">
                <h2 className="font-display text-xl text-ink-800">Order summary</h2>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-ink-500">Subtotal</dt>
                    <dd className="text-ink-800 font-medium">{formatPKR(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-500">Shipping</dt>
                    <dd className="text-ink-800 font-medium">
                      {shipping === 0 ? "Free" : formatPKR(shipping)}
                    </dd>
                  </div>
                  {subtotal > 0 && subtotal < SHIPPING_THRESHOLD && (
                    <p className="text-xs text-blush-500 leading-relaxed">
                      Add {formatPKR(SHIPPING_THRESHOLD - subtotal)} more for free shipping.
                    </p>
                  )}
                  <div className="flex justify-between border-t border-border pt-3 mt-2">
                    <dt className="text-ink-800 font-medium">Total</dt>
                    <dd className="text-ink-800 text-lg font-semibold">{formatPKR(total)}</dd>
                  </div>
                </dl>
                <Button href="/checkout" size="lg" className="w-full">
                  Checkout <IconArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-5 space-y-3">
                <p className="text-[11px] tracking-[0.2em] uppercase text-ink-500">Payment methods</p>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="inline-flex items-center gap-2 text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
                    Cash on Delivery
                  </span>
                  <span className="inline-flex items-center gap-2 text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
                    Easypaisa — manual verification
                  </span>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-3 text-xs text-ink-600">
                <li className="flex items-center gap-2">
                  <IconTruck className="w-4 h-4 text-blush-500" />
                  Free shipping over Rs. 10k
                </li>
                <li className="flex items-center gap-2">
                  <IconShield className="w-4 h-4 text-blush-500" />
                  7-day easy returns
                </li>
              </ul>
            </aside>
          </div>
        )}
      </Container>
    </>
  );
}

function EmptyCart() {
  return (
    <div className="text-center py-20 bg-surface rounded-3xl border border-border">
      <div className="font-display text-2xl text-ink-800">Your bag is empty</div>
      <p className="text-sm text-ink-500 mt-2">
        Add a few pieces from the collection — they&apos;ll appear here.
      </p>
      <Button href="/shop" size="lg" className="mt-6">
        Start shopping
      </Button>
    </div>
  );
}
