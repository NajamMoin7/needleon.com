import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HoverScale } from "@/components/motion/HoverScale";
import { categories } from "@/lib/data/categories";
import { bestSellers, newArrivals } from "@/lib/data/products";
import {
  IconArrowRight,
  IconScissors,
  IconShield,
  IconSparkles,
  IconTruck,
} from "@/components/ui/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <StitchingCTA />
      <BestSellers />
      <HowItWorks />
      <TrustSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-veil">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-blush-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-sand blur-3xl opacity-70" />
      </div>
      <Container className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
        <div className="space-y-7">
          <FadeUp>
            <Badge tone="blush">New Spring Edit · 2026</Badge>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink-800">
              Boutique pieces,
              <br />
              <span className="text-blush-500">stitched for you.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-base sm:text-lg text-ink-500 max-w-md leading-relaxed">
              A curated wardrobe of ready-to-wear, unstitched fabric and bespoke
              stitching services, all hand-finished and delivered across Pakistan.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex flex-wrap gap-3 pt-2">
              <HoverScale>
                <Button href="/shop" size="lg">
                  Shop the collection
                  <IconArrowRight className="w-4 h-4" />
                </Button>
              </HoverScale>
              <HoverScale>
                <Button href="/custom-stitch" variant="outline" size="lg">
                  Book stitching service
                </Button>
              </HoverScale>
            </div>
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-ink-500">
              <span className="flex items-center gap-2">
                <IconTruck className="w-4 h-4 text-blush-500" /> Free shipping over Rs. 10,000
              </span>
              <span className="flex items-center gap-2">
                <IconShield className="w-4 h-4 text-blush-500" /> Easy 7-day returns
              </span>
            </div>
          </FadeUp>
        </div>
        <FadeIn direction="right" delay={0.2}>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lifted">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
                alt="Featured boutique piece"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-surface rounded-2xl shadow-soft px-5 py-4 items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-blush-100 grid place-items-center">
                <IconSparkles className="w-5 h-5 text-blush-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-ink-800">Handcrafted pieces</p>
                <p className="text-[11px] text-ink-500">Made-to-measure in 2–4 weeks</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function FeaturedCategories() {
  return (
    <Section spacing="md">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <FadeUp>
          <SectionHeading
            eyebrow="Shop by edit"
            title="Explore the collection"
            description="From everyday pret to occasion-ready formals, find your next favourite piece."
          />
        </FadeUp>
        <FadeUp delay={0.05}>
          <Link
            href="/shop"
            className="text-sm text-blush-500 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View all <IconArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
      <Stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.slice(0, 6).map((cat, i) => (
          <StaggerItem key={cat.slug}>
            <Link
              href={`/shop?category=${cat.slug}`}
              className={`group relative overflow-hidden rounded-3xl block ${
                i === 0 || i === 3 ? "lg:col-span-1 aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-display text-xl sm:text-2xl">{cat.name}</p>
                <p className="text-xs text-white/80 mt-1">{cat.tagline}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function NewArrivals() {
  const items = newArrivals().slice(0, 4);
  return (
    <Section bg="white" spacing="md">
      <div className="flex items-end justify-between gap-6 mb-10">
        <FadeUp>
          <SectionHeading eyebrow="Just in" title="New arrivals" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <Link
            href="/shop?sort=new"
            className="text-sm text-blush-500 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View all <IconArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
      <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((p) => (
          <StaggerItem key={p.slug}>
            <ProductCard product={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function StitchingCTA() {
  return (
    <Section bg="cream" spacing="md">
      <FadeUp>
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-soft bg-surface">
          <div className="relative min-h-[320px] lg:min-h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1400&q=80"
              alt="Custom stitching atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <Badge tone="blush" className="self-start">Boutique stitching</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-ink-800 mt-4 leading-tight">
              Your fabric. Our atelier.
              <br />
              <span className="text-blush-500">Tailored to fit perfectly.</span>
            </h2>
            <p className="text-ink-500 mt-4 leading-relaxed max-w-md">
              Send us your fabric, or pick one from our shop, and we&apos;ll
              stitch a piece designed around your measurements, dress type and
              inspiration. Two simple flows, one beautifully finished outfit.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
                Bring-your-own fabric or buy &amp; stitch combo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
                Upload design references &amp; share measurements
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
                Pay on delivery or via Easypaisa
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/custom-stitch" size="lg">Book stitching service</Button>
              <Button href="/services" variant="outline" size="lg">
                See all services
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

function BestSellers() {
  const items = bestSellers().slice(0, 4);
  return (
    <Section bg="white" spacing="md">
      <div className="flex items-end justify-between gap-6 mb-10">
        <FadeUp>
          <SectionHeading
            eyebrow="Loved by you"
            title="Best sellers"
            description="The pieces our customers keep coming back for."
          />
        </FadeUp>
        <FadeUp delay={0.05}>
          <Link
            href="/shop"
            className="text-sm text-blush-500 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View all <IconArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
      <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((p) => (
          <StaggerItem key={p.slug}>
            <ProductCard product={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <IconSparkles className="w-5 h-5" />,
      title: "Browse or design",
      body: "Shop ready-to-wear or start a custom stitching request from our boutique service.",
    },
    {
      icon: <IconScissors className="w-5 h-5" />,
      title: "Pick your fit",
      body: "Choose size, colour and fabric, or share your measurements for made-to-measure stitching.",
    },
    {
      icon: <IconTruck className="w-5 h-5" />,
      title: "Delivered to you",
      body: "Cash on Delivery or Easypaisa. Hand-finished and shipped across Pakistan.",
    },
  ];
  return (
    <Section bg="sand" spacing="md">
      <FadeUp>
        <SectionHeading
          eyebrow="How it works"
          title="A simple, considered process"
          description="Whether you're shopping the collection or booking a stitching service, every order goes through the same care."
          align="center"
        />
      </FadeUp>
      <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <div className="bg-surface rounded-2xl p-7 shadow-soft hairline h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-full bg-blush-100 text-blush-500 grid place-items-center">
                  {s.icon}
                </div>
                <span className="font-display text-3xl text-blush-200">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl text-ink-800">{s.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function TrustSection() {
  const items = [
    { icon: <IconTruck />, title: "Pakistan-wide delivery", body: "2–5 business days" },
    { icon: <IconShield />, title: "Secure checkout", body: "COD & Easypaisa supported" },
    { icon: <IconSparkles />, title: "Hand-finished", body: "Quality-checked piece-by-piece" },
    { icon: <IconScissors />, title: "Made-to-measure", body: "Custom stitching in 2–4 weeks" },
  ];
  return (
    <Section bg="white" spacing="sm">
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6" amount={0.05}>
        {items.map((it) => (
          <StaggerItem key={it.title}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blush-100 text-blush-500 grid place-items-center shrink-0">
                {it.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-ink-800">{it.title}</p>
                <p className="text-xs text-ink-500">{it.body}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section bg="ink" spacing="md">
      <FadeUp>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="Ready when you are"
              title="Bring your wardrobe to life."
              description="Shop the collection or start a custom stitching request. We'll take care of the rest."
              invert
            />
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/shop" size="lg">Shop now</Button>
            <Button
              href="/custom-stitch"
              variant="outline"
              size="lg"
              className="!text-white !border-white/30 hover:!bg-white/10"
            >
              Book stitching
            </Button>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
