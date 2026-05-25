"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import {
  IconBag,
  IconChevronDown,
  IconClose,
  IconMenu,
  IconSearch,
  IconUser,
} from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type NavItem =
  | { type: "link"; href: string; label: string }
  | {
      type: "dropdown";
      label: string;
      items: { href: string; label: string; description?: string }[];
    };

const nav: NavItem[] = [
  { type: "link", href: "/", label: "Home" },
  { type: "link", href: "/about", label: "About" },
  {
    type: "dropdown",
    label: "Shop",
    items: [
      {
        href: "/shop",
        label: "Ready to Wear",
        description: "Curated pret, formals & accessories",
      },
      {
        href: "/custom-stitch",
        label: "Custom Stitch",
        description: "Bespoke stitching, made to measure",
      },
    ],
  },
  { type: "link", href: "/contact", label: "Contact" },
];

export function Header() {
  const { count, isHydrated } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopOpenMobile, setShopOpenMobile] = useState(false);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [mobileOpen]);

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

      <div className="container-page flex items-center justify-between gap-4 py-3 sm:py-4">
        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden p-2 -ml-2 text-ink-700"
          onClick={() => setMobileOpen(true)}
        >
          <IconMenu />
        </button>

        <Logo size="md" priority />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[13px] tracking-wide uppercase text-ink-600 hover:text-blush-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setShopOpen((v) => !v)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-[13px] tracking-wide uppercase text-ink-600 hover:text-blush-500 transition-colors"
                  aria-haspopup="true"
                  aria-expanded={shopOpen}
                >
                  {item.label}
                  <IconChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      shopOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
                    >
                      <div className="bg-surface rounded-2xl border border-border shadow-lifted overflow-hidden">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setShopOpen(false)}
                            className="block px-5 py-4 hover:bg-blush-50 transition-colors group"
                          >
                            <p className="text-sm font-medium text-ink-800 group-hover:text-blush-600">
                              {sub.label}
                            </p>
                            {sub.description && (
                              <p className="text-xs text-ink-500 mt-0.5">{sub.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ),
          )}
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
              <motion.span
                key={count}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-blush-400 text-white text-[10px] font-medium grid place-items-center px-1"
              >
                {count}
              </motion.span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-ink-900/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background shadow-lifted overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <Logo size="sm" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-ink-700"
                >
                  <IconClose />
                </button>
              </div>
              <nav className="px-5 py-5">
                {nav.map((item) =>
                  item.type === "link" ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center py-3.5 text-base text-ink-700 hover:text-blush-500 border-b border-border/60"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div key={item.label} className="border-b border-border/60">
                      <button
                        type="button"
                        onClick={() => setShopOpenMobile((v) => !v)}
                        className="w-full flex items-center justify-between py-3.5 text-base text-ink-700"
                        aria-expanded={shopOpenMobile}
                      >
                        {item.label}
                        <IconChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            shopOpenMobile && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {shopOpenMobile && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 space-y-1">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2.5 text-sm text-ink-600 hover:text-blush-500"
                                >
                                  {sub.label}
                                  {sub.description && (
                                    <span className="block text-xs text-ink-400 mt-0.5">
                                      {sub.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ),
                )}
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
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
