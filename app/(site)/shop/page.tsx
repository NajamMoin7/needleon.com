import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { categories } from "@/lib/data/categories";
import {
  allColors,
  allSizes,
  listProducts,
} from "@/lib/data/products";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the NeedleOn collection — ready-to-wear, unstitched fabrics, formals and accessories.",
};

type SP = {
  category?: string;
  size?: string;
  color?: string;
  q?: string;
  min?: string;
  max?: string;
  sort?: string;
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;

  const min = sp.min ? Number(sp.min) : undefined;
  const max = sp.max ? Number(sp.max) : undefined;

  let products = listProducts({
    category: sp.category,
    search: sp.q,
    size: sp.size,
    color: sp.color,
    minPrice: Number.isFinite(min) ? min : undefined,
    maxPrice: Number.isFinite(max) ? max : undefined,
  });

  if (sp.sort === "price-asc") {
    products = products.slice().sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
  } else if (sp.sort === "price-desc") {
    products = products.slice().sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
  } else if (sp.sort === "new") {
    products = products.slice().sort((a, b) => Number(!!b.newArrival) - Number(!!a.newArrival));
  }

  const sizes = allSizes();
  const colors = allColors();
  const activeFilters = [
    sp.category && { key: "category", label: categories.find((c) => c.slug === sp.category)?.name ?? sp.category },
    sp.size && { key: "size", label: `Size ${sp.size}` },
    sp.color && { key: "color", label: sp.color },
    sp.q && { key: "q", label: `“${sp.q}”` },
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-12 sm:py-16">
          <Badge tone="blush">Shop</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
            The collection
          </h1>
          <p className="text-ink-500 mt-2 max-w-xl">
            Explore curated ready-to-wear, unstitched fabrics and finishing
            touches — filter by category, size, colour or price.
          </p>
        </Container>
      </section>

      <Container className="py-10 lg:py-14 grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
        <aside className="lg:sticky lg:top-28 self-start space-y-7">
          <SearchBox initial={sp.q ?? ""} />

          <FilterGroup title="Category">
            <FilterLink href={qs(sp, { category: undefined })} active={!sp.category}>
              All
            </FilterLink>
            {categories.map((c) => (
              <FilterLink
                key={c.slug}
                href={qs(sp, { category: c.slug })}
                active={sp.category === c.slug}
              >
                {c.name}
              </FilterLink>
            ))}
          </FilterGroup>

          <FilterGroup title="Size">
            <div className="flex flex-wrap gap-2">
              <SizeChip href={qs(sp, { size: undefined })} active={!sp.size}>
                Any
              </SizeChip>
              {sizes.map((s) => (
                <SizeChip
                  key={s}
                  href={qs(sp, { size: s })}
                  active={sp.size === s}
                >
                  {s}
                </SizeChip>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Colour">
            <div className="flex flex-wrap gap-2">
              <Link
                href={qs(sp, { color: undefined })}
                title="Any"
                className={cn(
                  "w-7 h-7 rounded-full border-2 grid place-items-center text-[10px]",
                  !sp.color ? "border-ink-700 text-ink-700" : "border-ink-200 text-ink-400",
                )}
              >
                All
              </Link>
              {colors.map((c) => (
                <Link
                  key={c.name}
                  href={qs(sp, { color: c.name })}
                  title={c.name}
                  className={cn(
                    "w-7 h-7 rounded-full border-2",
                    sp.color === c.name ? "border-ink-700" : "border-white shadow-soft",
                  )}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Price">
            {[
              { label: "Under Rs. 5,000", min: undefined, max: "5000" },
              { label: "Rs. 5,000 – 10,000", min: "5000", max: "10000" },
              { label: "Rs. 10,000 – 25,000", min: "10000", max: "25000" },
              { label: "Rs. 25,000+", min: "25000", max: undefined },
            ].map((r) => (
              <FilterLink
                key={r.label}
                href={qs(sp, { min: r.min, max: r.max })}
                active={(sp.min ?? "") === (r.min ?? "") && (sp.max ?? "") === (r.max ?? "")}
              >
                {r.label}
              </FilterLink>
            ))}
            <FilterLink
              href={qs(sp, { min: undefined, max: undefined })}
              active={!sp.min && !sp.max}
            >
              Any
            </FilterLink>
          </FilterGroup>

          {activeFilters.length > 0 && (
            <Link
              href="/shop"
              className="inline-flex text-xs uppercase tracking-wider text-blush-500"
            >
              Clear all filters
            </Link>
          )}
        </aside>

        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-sm text-ink-500">
              <span className="font-medium text-ink-800">{products.length}</span> product{products.length === 1 ? "" : "s"}
            </p>
            <SortMenu current={sp.sort} sp={sp} />
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {activeFilters.map((f) => (
                <Link
                  key={f.key}
                  href={qs(sp, { [f.key]: undefined } as Partial<SP>)}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-ink-100 text-ink-700 hover:bg-blush-100 hover:text-blush-700 transition-colors"
                >
                  {f.label} <span className="text-ink-400">×</span>
                </Link>
              ))}
            </div>
          )}

          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

function qs(current: SP, override: Partial<SP>): string {
  const merged: Record<string, string | undefined> = { ...current, ...override };
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(merged)) {
    if (v != null && v !== "") params.set(k, String(v));
  }
  const s = params.toString();
  return s ? `/shop?${s}` : "/shop";
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] tracking-[0.2em] uppercase text-ink-500 font-medium mb-3">
        {title}
      </h3>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block text-sm py-1.5 transition-colors",
        active ? "text-blush-500 font-medium" : "text-ink-600 hover:text-ink-800",
      )}
    >
      {children}
    </Link>
  );
}

function SizeChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "min-w-9 h-9 px-2.5 rounded-full text-xs grid place-items-center border transition-colors",
        active
          ? "bg-ink-800 text-white border-ink-800"
          : "bg-surface text-ink-600 border-ink-200 hover:border-ink-700",
      )}
    >
      {children}
    </Link>
  );
}

function SearchBox({ initial }: { initial: string }) {
  return (
    <form action="/shop" method="get" className="relative">
      <input
        type="search"
        name="q"
        defaultValue={initial}
        placeholder="Search products…"
        className="w-full rounded-full border border-ink-200 bg-surface pl-4 pr-4 py-2.5 text-sm text-ink-700 placeholder:text-ink-400 focus:outline-none focus:border-blush-400"
      />
    </form>
  );
}

function SortMenu({ current, sp }: { current?: string; sp: SP }) {
  const options = [
    { value: "", label: "Featured" },
    { value: "new", label: "Newest" },
    { value: "price-asc", label: "Price: low to high" },
    { value: "price-desc", label: "Price: high to low" },
  ];
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-ink-500 hidden sm:inline">Sort</span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((o) => (
          <Link
            key={o.value}
            href={qs(sp, { sort: o.value || undefined })}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition-colors",
              (current ?? "") === o.value
                ? "bg-ink-800 text-white border-ink-800"
                : "bg-surface text-ink-600 border-ink-200 hover:border-ink-700",
            )}
          >
            {o.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20 bg-surface rounded-3xl border border-border">
      <div className="font-display text-2xl text-ink-800">Nothing matched your filters</div>
      <p className="text-sm text-ink-500 mt-2">
        Try removing a filter or browsing all products.
      </p>
      <Link
        href="/shop"
        className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-blush-400 text-white text-sm font-medium"
      >
        Reset filters
      </Link>
    </div>
  );
}
