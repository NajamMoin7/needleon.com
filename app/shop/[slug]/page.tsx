import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { getProduct, products, relatedProducts } from "@/lib/data/products";
import { getCategory } from "@/lib/data/categories";
import { ProductDetail } from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: product.images.slice(0, 1),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const cat = getCategory(product.category);
  const related = relatedProducts(slug);

  return (
    <>
      <Container className="pt-8 pb-2 text-xs text-ink-500">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-blush-500">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-blush-500">Shop</Link>
          {cat && (
            <>
              <span>/</span>
              <Link href={`/shop?category=${cat.slug}`} className="hover:text-blush-500">
                {cat.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-ink-700">{product.title}</span>
        </nav>
      </Container>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="bg-cream pb-20">
          <Container>
            <div className="border-t border-border pt-14">
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-2xl sm:text-3xl text-ink-800">
                  You may also like
                </h2>
                <Badge tone="muted">{cat?.name}</Badge>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
