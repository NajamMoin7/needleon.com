"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { IconBag, IconClose, IconMenu, IconSearch, IconUser } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/boutique", label: "Boutique Stitching" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { count, isHydrated } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="bg-ink-800 text-white text-[12px] tracking-wider">
        <div className="container-page py-2 flex items-center justify-between">
          <span className="opacity-80">Free shipping on orders over Rs. 10,000</span>
          <span className="hidden sm:inline opacity-80">
            Custom stitching · Made-to-measure · Pakistan-wide delivery
          </span>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-6 py-4">
        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden p-2 -ml-2 text-ink-700"
          onClick={() => setMobileOpen(true)}
        >
          <IconMenu />
        </button>

        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-ink-800">
            Needle<span className="text-blush-400">On</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] tracking-wide uppercase text-ink-600 hover:text-blush-500 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 text-ink-700">
          <Link
            href="/shop"
            aria-label="Search"
            className="hidden sm:inline-flex p-2 rounded-full hover:bg-ink-100"
          >
            <IconSearch />
          </Link>
          <Link
            href="/login"
            aria-label="Account"
            className="p-2 rounded-full hover:bg-ink-100"
          >
            <IconUser />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative p-2 rounded-full hover:bg-ink-100"
          >
            <IconBag />
            {isHydrated && count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-blush-400 text-white text-[10px] font-medium grid place-items-center px-1">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink-900/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background shadow-lifted transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <span className="font-display text-xl text-ink-800">
              Needle<span className="text-blush-400">On</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-ink-700"
            >
              <IconClose />
            </button>
          </div>
          <nav className="px-5 py-6 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base text-ink-700 hover:text-blush-500 border-b border-border/60"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-6 flex gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-3 rounded-full border border-ink-200 text-sm text-ink-700"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-3 rounded-full bg-blush-400 text-white text-sm"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
