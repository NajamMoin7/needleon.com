"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Size } from "@/lib/types";

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: CartItem) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  isHydrated: boolean;
};

const Ctx = createContext<CartCtx | null>(null);
const STORAGE_KEY = "needleon.cart.v1";

function itemKey(slug: string, size: Size, color: string) {
  return `${slug}::${size}::${color}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore
    }
    setIsHydrated(true);
  }, []);

  // Persist on change (after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items, isHydrated]);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

    return {
      items,
      count,
      subtotal,
      isHydrated,
      add: (item) =>
        setItems((prev) => {
          const key = itemKey(item.slug, item.size, item.color);
          const existing = prev.find(
            (p) => itemKey(p.slug, p.size, p.color) === key,
          );
          if (existing) {
            return prev.map((p) =>
              itemKey(p.slug, p.size, p.color) === key
                ? { ...p, quantity: p.quantity + item.quantity }
                : p,
            );
          }
          return [...prev, item];
        }),
      remove: (key) =>
        setItems((prev) =>
          prev.filter((p) => itemKey(p.slug, p.size, p.color) !== key),
        ),
      setQuantity: (key, quantity) =>
        setItems((prev) =>
          prev
            .map((p) =>
              itemKey(p.slug, p.size, p.color) === key
                ? { ...p, quantity: Math.max(1, Math.min(99, quantity)) }
                : p,
            )
            .filter((p) => p.quantity > 0),
        ),
      clear: () => setItems([]),
    };
  }, [items, isHydrated]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(): CartCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

export { itemKey };
