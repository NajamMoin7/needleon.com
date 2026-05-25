import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  IconArrowRight,
  IconCheck,
  IconScissors,
  IconSparkles,
  IconTruck,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Boutique Stitching",
  description:
    "Book a custom stitching service with NeedleOn — bring your own fabric or pair it with a piece from our shop. Made-to-measure in 2–4 weeks.",
};

export default function BoutiquePage() {
  return (
    <>
      <Hero />
      <Flows />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-veil">
      <Container className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="space-y-6">
          <Badge tone="blush">Boutique Stitching</Badge>
          <h1 className="font-display text-4xl sm:text-5xl text-ink-800 leading-[1.05]">
            Bespoke pieces,
            <br />
            <span className="text-blush-500">made to your measurements.</span>
          </h1>
          <p className="text-ink-500 max-w-md leading-relaxed">
            Two simple flows. Bring your own fabric, or pair a stitching service
            with a piece from our shop. Every garment is hand-finished by our
            atelier and quality-checked before delivery.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/boutique/request" size="lg">
              Start a stitching request <IconArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/shop" variant="outline" size="lg">
              Browse fabrics
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lifted">
            <Image
              src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1400&q=80"
              alt="Stitching atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Flows() {
  const flows = [
    {
      tag: "Flow A",
      title: "Bring your own fabric",
      body: "Already have a fabric piece you love? Send it to our boutique with your measurements, design inspiration and we'll stitch it up.",
      bullets: [
        "Ship your fabric to our boutique",
        "Share measurements & design references",
        "Receive your finished piece in 2–4 weeks",
      ],
    },
    {
      tag: "Flow B",
      title: "Buy fabric + stitching combo",
      body: "Prefer an end-to-end experience? Pick an unstitched piece from our shop and add stitching at checkout for a single, made-to-measure outfit.",
      bullets: [
        "Pick an unstitched fabric from our shop",
        "Add stitching service & share measurements",
        "We source, stitch & deliver — all in one",
      ],
    },
  ];

  return (
    <Section spacing="md">
      <SectionHeading
        eyebrow="Two ways to book"
        title="Pick the flow that fits you"
        description="Whichever path you choose, the craftsmanship is the same."
      />
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {flows.map((f) => (
          <div
            key={f.title}
            className="bg-surface rounded-2xl p-7 shadow-soft hairline space-y-5"
          >
            <div className="flex items-center justify-between">
              <Badge tone="blush">{f.tag}</Badge>
              <IconScissors className="w-5 h-5 text-blush-400" />
            </div>
            <h3 className="font-display text-2xl text-ink-800">{f.title}</h3>
            <p className="text-sm text-ink-500 leading-relaxed">{f.body}</p>
            <ul className="space-y-2">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                  <IconCheck className="w-4 h-4 text-blush-500 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <Button href="/boutique/request" size="md">
                Start with this flow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  const steps = [
    { n: 1, title: "Submit your request", body: "Fill in the stitching form with measurements, dress type and references." },
    { n: 2, title: "Cloth received & confirmed", body: "We confirm your fabric (or ship it from our shop) and lock measurements." },
    { n: 3, title: "Stitching begins", body: "Our atelier hand-stitches and finishes the piece to your specs." },
    { n: 4, title: "Quality check & delivery", body: "Each piece is inspected and shipped to your address — COD or Easypaisa." },
  ];
  return (
    <Section id="how" bg="sand" spacing="md">
      <SectionHeading
        eyebrow="How it works"
        title="A clear, four-step process"
        align="center"
      />
      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <li key={s.n} className="bg-surface rounded-2xl p-6 shadow-soft hairline">
            <div className="font-display text-5xl text-blush-200">0{s.n}</div>
            <h3 className="font-display text-lg text-ink-800 mt-3">{s.title}</h3>
            <p className="text-sm text-ink-500 mt-2 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="ink" spacing="md">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <SectionHeading
          eyebrow="Ready to begin?"
          title="Tell us about the piece you have in mind."
          description="Share measurements, references and special instructions. We'll respond within 24 hours."
          invert
        />
        <div className="md:justify-self-end flex flex-wrap gap-3">
          <Button href="/boutique/request" size="lg">
            Start a stitching request
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-blush-300"
          >
            Or contact us first <IconSparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
