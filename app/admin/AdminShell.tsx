"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import {
  IconBag,
  IconClose,
  IconMenu,
  IconScissors,
  IconSparkles,
  IconUser,
} from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const sections: { title: string; items: { href: string; label: string; icon: React.ReactNode }[] }[] = [
  {
    title: "Overview",
    items: [{ href: "/admin", label: "Dashboard", icon: <IconSparkles className="w-4 h-4" /> }],
  },
  {
    title: "Catalogue",
    items: [
      { href: "/admin/products", label: "Products", icon: <IconBag className="w-4 h-4" /> },
      { href: "/admin/orders", label: "Orders", icon: <IconBag className="w-4 h-4" /> },
    ],
  },
  {
    title: "Boutique",
    items: [
      {
        href: "/admin/custom-stitch",
        label: "Custom Stitch Requests",
        icon: <IconScissors className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "People",
    items: [
      { href: "/admin/customers", label: "Customers", icon: <IconUser className="w-4 h-4" /> },
    ],
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-ink-800 text-white border-r border-ink-900">
        <SidebarContent />
      </aside>

      {/* Sidebar — mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-ink-900/50"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 w-72 bg-ink-800 text-white flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="bg-white/95 rounded-xl px-3 py-2">
                  <Logo size="sm" />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2"
                >
                  <IconClose />
                </button>
              </div>
              <SidebarContent onNavigate={() => setOpen(false)} hideHeader />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 bg-background/90 backdrop-blur border-b border-border">
          <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -ml-2 text-ink-700"
              aria-label="Open admin menu"
            >
              <IconMenu />
            </button>
            <div className="lg:hidden flex-1 flex justify-center">
              <Logo size="sm" />
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-[11px] tracking-[0.2em] uppercase text-ink-500">
                Admin Panel
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs text-ink-500 hover:text-blush-500"
              >
                View site →
              </Link>
              <div className="w-8 h-8 rounded-full bg-blush-400 text-white grid place-items-center text-xs font-medium">
                A
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </div>
    </div>
  );
}

function SidebarContent({
  onNavigate,
  hideHeader,
}: {
  onNavigate?: () => void;
  hideHeader?: boolean;
}) {
  const pathname = usePathname();
  return (
    <>
      {!hideHeader && (
        <div className="px-5 py-6 border-b border-white/10">
          <div className="bg-white/95 rounded-xl px-3 py-2 inline-flex">
            <Logo size="sm" />
          </div>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-white/60">
            Admin Panel
          </p>
        </div>
      )}
      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium mb-2">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                      active
                        ? "bg-blush-400 text-white"
                        : "text-white/75 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    <span className={active ? "text-white" : "text-white/60"}>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="px-5 py-4 border-t border-white/10 text-[11px] text-white/50">
        Backend wires up in Phase 2. Showing mock data for now.
      </div>
    </>
  );
}
