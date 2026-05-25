import Link from "next/link";
import { IconFacebook, IconInstagram, IconWhatsapp } from "@/components/ui/Icons";

const cols = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/shop?category=ready-to-wear", label: "Ready-to-wear" },
      { href: "/shop?category=unstitched", label: "Unstitched" },
      { href: "/shop?category=formals", label: "Formals & bridal" },
      { href: "/shop?category=dupattas", label: "Dupattas & shawls" },
    ],
  },
  {
    title: "Boutique",
    links: [
      { href: "/boutique", label: "Custom stitching" },
      { href: "/services", label: "Services" },
      { href: "/boutique#how", label: "How it works" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/about", label: "About NeedleOn" },
      { href: "/account/orders", label: "Track your order" },
      { href: "/login", label: "Account" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-800 text-white mt-auto">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="font-display text-2xl">
              Needle<span className="text-blush-400">On</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              A modern boutique pairing curated ready-to-wear with bespoke
              stitching. Hand-finished pieces, made to fit you.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-blush-400 transition-colors"
              >
                <IconInstagram />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-blush-400 transition-colors"
              >
                <IconFacebook />
              </a>
              <a
                href="https://wa.me/923000000000"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/10 hover:bg-blush-400 transition-colors"
              >
                <IconWhatsapp />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] tracking-[0.2em] uppercase text-blush-300 font-medium mb-4 font-sans">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-blush-300 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} NeedleOn Boutique. All rights reserved.</span>
          <span>Crafted with care in Pakistan · Cash on Delivery & Easypaisa</span>
        </div>
      </div>
    </footer>
  );
}
