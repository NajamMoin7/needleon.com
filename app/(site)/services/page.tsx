import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight, IconScissors, IconSparkles } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NeedleOn's two service tracks: curated ready-to-wear and bespoke boutique stitching.",
};

export default function ServicesPage() {
  const services = [
    {
      tag: "Ecommerce",
      title: "Ready-to-Wear Clothing",
      body: "Browse our curated collection of pret, unstitched fabrics, formals and accessories. Cash on Delivery and Easypaisa supported across Pakistan.",
      cta: { href: "/shop", label: "Shop the collection" },
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=80",
      icon: <IconSparkles className="w-5 h-5" />,
    },
    {
      tag: "Boutique",
      title: "Custom Stitching",
      body: "Bespoke, made-to-measure stitching by our atelier. Bring your own fabric or pair it with a piece from our shop. Hand-finished in 2–4 weeks.",
      cta: { href: "/custom-stitch", label: "Book stitching service" },
      image:
        "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1400&q=80",
      icon: <IconScissors className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-14 sm:py-20 max-w-3xl">
          <Badge tone="blush">Our Services</Badge>
          <h1 className="font-display text-4xl sm:text-5xl text-ink-800 mt-3 leading-[1.05]">
            Two ways to dress with NeedleOn.
          </h1>
          <p className="text-ink-500 mt-3 leading-relaxed">
            Whether you&apos;re shopping the latest collection or commissioning
            a piece of your own, every NeedleOn order is hand-finished and
            quality-checked.
          </p>
        </Container>
      </section>

      <Section spacing="lg">
        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lifted">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 text-blush-500">
                  {s.icon}
                  <span className="text-[12px] tracking-[0.2em] uppercase font-medium">
                    {s.tag}
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-ink-800 leading-tight">
                  {s.title}
                </h2>
                <p className="text-ink-500 leading-relaxed">{s.body}</p>
                <div>
                  <Button href={s.cta.href} size="lg">
                    {s.cta.label} <IconArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ink" spacing="md">
        <SectionHeading
          eyebrow="Need help choosing?"
          title="We're a message away."
          description="If you're not sure whether to shop ready-to-wear or book a stitching slot, drop us a note and we'll guide you."
          align="center"
          invert
        />
        <div className="mt-8 flex justify-center">
          <Button href="/contact" size="lg">Contact us</Button>
        </div>
      </Section>
    </>
  );
}
