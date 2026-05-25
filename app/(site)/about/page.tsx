import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconScissors, IconShield, IconSparkles, IconTruck } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NeedleOn, a modern boutique pairing curated ready-to-wear with bespoke stitching.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <IconSparkles className="w-5 h-5" />,
      title: "Considered design",
      body: "Every silhouette is drafted in-house and refined until the fit, fabric and finish feel right.",
    },
    {
      icon: <IconScissors className="w-5 h-5" />,
      title: "Hand-finished craft",
      body: "Embroidery, finishing and quality-checks are done by hand. We work small batches, never mass.",
    },
    {
      icon: <IconShield className="w-5 h-5" />,
      title: "Trusted, honest service",
      body: "Transparent pricing, easy returns and clear timelines. We treat your wardrobe with care.",
    },
    {
      icon: <IconTruck className="w-5 h-5" />,
      title: "Pakistan-wide delivery",
      body: "From Karachi to Hunza, your piece reaches you safely, with COD and Easypaisa available.",
    },
  ];

  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-20">
          <div className="space-y-5">
            <Badge tone="blush">Our Story</Badge>
            <h1 className="font-display text-4xl sm:text-5xl text-ink-800 leading-[1.05]">
              A modern boutique
              <br />
              <span className="text-blush-500">rooted in craft.</span>
            </h1>
            <p className="text-ink-500 leading-relaxed max-w-md">
              NeedleOn began as a small atelier and grew into the boutique you
              see today, pairing curated ready-to-wear with bespoke stitching
              for women across Pakistan.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lifted">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
              alt="Our atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <Section spacing="md">
        <SectionHeading
          eyebrow="What we stand for"
          title="Quality is non-negotiable."
          align="center"
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-surface rounded-2xl p-6 shadow-soft hairline">
              <div className="w-11 h-11 rounded-full bg-blush-100 text-blush-500 grid place-items-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-display text-lg text-ink-800">{v.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ink" spacing="md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <SectionHeading
            title="Come see us in store."
            description="Walk-ins welcome at our flagship atelier. Or browse the collection online. We'll deliver to your door."
            invert
          />
          <div className="md:justify-self-end flex flex-wrap gap-3">
            <Button href="/shop" size="lg">Shop the collection</Button>
            <Button href="/contact" variant="outline" size="lg" className="!text-white !border-white/30 hover:!bg-white/10">
              Visit us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
