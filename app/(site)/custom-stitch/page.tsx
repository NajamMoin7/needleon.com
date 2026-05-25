import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  IconArrowRight,
  IconCheck,
  IconScissors,
  IconSparkles,
  IconTruck,
} from "@/components/ui/Icons";
import { OrderJourney } from "./OrderJourney";
import { CustomStitchForm } from "./CustomStitchForm";

export const metadata: Metadata = {
  title: "Custom Stitch",
  description:
    "Custom stitching made simple — send your own fabric or buy from the shop, share measurements and references, and our atelier stitches it up.",
};

export default function CustomStitchPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SampleJourneySection />
      <FormSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-veil">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-blush-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-sand blur-3xl opacity-70" />
      </div>
      <Container className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center py-16 lg:py-24">
        <div className="space-y-6">
          <FadeUp>
            <Badge tone="blush">Boutique Stitching</Badge>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink-800">
              Custom Stitching
              <br />
              <span className="text-blush-500">Made Simple.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-base sm:text-lg text-ink-500 max-w-xl leading-relaxed">
              Send your own fabric — or purchase from our ready-to-wear
              collection — and request professional stitching tailored to your
              style, measurements and inspiration.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#form" size="lg">
                Start Custom Stitch Order <IconArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/shop" variant="outline" size="lg">
                Browse fabrics
              </Button>
            </div>
          </FadeUp>
        </div>

        <FadeIn direction="right" delay={0.2}>
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-lifted aspect-[5/6] bg-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-rose-veil to-sand" />
              <div className="relative h-full p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <Badge tone="ink" className="mb-4">Atelier</Badge>
                  <p className="font-display text-3xl text-ink-800 leading-tight">
                    Hand-finished,
                    <br />
                    quality-checked,
                    <br />
                    delivered to you.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Made-to-measure in 2–4 weeks",
                    "Cash on Delivery & Easypaisa",
                    "Pakistan-wide delivery",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2.5 text-sm text-ink-800"
                    >
                      <span className="w-7 h-7 rounded-full bg-blush-400 text-white grid place-items-center">
                        <IconCheck className="w-4 h-4" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Choose Your Option",
      body: "Either send us your own fabric, or pick a piece from our ready-to-wear shop and add stitching at the same time.",
      icon: <IconSparkles className="w-5 h-5" />,
    },
    {
      n: 2,
      title: "Share Your Measurements",
      body: "Fill in size, fitting preference and stitching style — we'll guide you if anything's unclear.",
      icon: <RulerIcon className="w-5 h-5" />,
    },
    {
      n: 3,
      title: "Upload Design Reference",
      body: "Send us a sample image, inspiration photo or design idea so we stitch exactly the look you want.",
      icon: <CameraIcon className="w-5 h-5" />,
    },
    {
      n: 4,
      title: "Confirm Payment Method",
      body: "Pay on delivery, or send via Easypaisa and upload your screenshot — we'll verify within 24 hours.",
      icon: <WalletIcon className="w-5 h-5" />,
    },
    {
      n: 5,
      title: "Boutique Starts Stitching",
      body: "Our atelier confirms your request, sources what's needed and begins stitching — you'll see status updates as we go.",
      icon: <IconScissors className="w-5 h-5" />,
    },
    {
      n: 6,
      title: "Delivery",
      body: "Quality-checked and shipped to your door. Track your order from your customer dashboard.",
      icon: <IconTruck className="w-5 h-5" />,
    },
  ];

  return (
    <Section bg="cream" spacing="md">
      <SectionHeading
        eyebrow="How it works"
        title="A clear, six-step process"
        description="From the moment you start your request to the day your piece arrives — here's exactly what happens."
        align="center"
      />
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s) => (
          <StaggerItem key={s.n}>
            <div className="bg-surface rounded-2xl p-6 sm:p-7 shadow-soft hairline h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-full bg-blush-100 text-blush-500 grid place-items-center">
                  {s.icon}
                </div>
                <span className="font-display text-3xl text-blush-200">
                  0{s.n}
                </span>
              </div>
              <h3 className="font-display text-xl text-ink-800">{s.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed">
                {s.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function SampleJourneySection() {
  return (
    <Section bg="white" spacing="md">
      <SectionHeading
        eyebrow="Your order journey"
        title="From fabric to finished piece."
        description="A quick look at what a typical custom stitch order looks like from start to finish."
        align="center"
      />
      <FadeUp delay={0.05}>
        <div className="mt-12">
          <OrderJourney />
        </div>
      </FadeUp>
    </Section>
  );
}

function FormSection() {
  return (
    <>
      <section id="form" className="bg-rose-veil border-y border-border">
        <Container className="py-10">
          <FadeUp>
            <Badge tone="blush">Stitching Request</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
              Tell us about your piece
            </h2>
            <p className="text-ink-500 mt-2 max-w-xl">
              Fields marked with <span className="text-blush-500">*</span> are
              required. Our team reviews each request before confirming
              measurements, fabric and pricing.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Container className="py-12">
        <CustomStitchForm />

        <FadeUp className="mt-8">
          <div className="bg-blush-50 border border-blush-100 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-blush-400 text-white grid place-items-center shrink-0 mt-0.5">
              <IconSparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink-800">Heads up</p>
              <p className="text-sm text-ink-600 leading-relaxed mt-1">
                Our team will contact you after reviewing your custom stitch
                request to confirm measurements, fabric details, pricing and
                delivery timeline.
              </p>
            </div>
          </div>
        </FadeUp>

        <p className="text-xs text-ink-400 text-center mt-6">
          Form submission becomes live in Phase 2 once the backend is wired up.{" "}
          <Link href="/contact" className="text-blush-500 underline">
            Need help? Contact us
          </Link>
          .
        </p>
      </Container>
    </>
  );
}

/* ------- Inline icons used only on this page ------- */

function RulerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5 9.5 3l11.5 11.5L14.5 21 3 9.5Z" />
      <path d="m7 8 1.5 1.5M9.5 5.5 11 7M11 10l1.5 1.5M14 8l1.5 1.5M16.5 11l1.5 1.5" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7h3l2-2h4l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7a2 2 0 0 1 2-2h11v4H6a2 2 0 0 1-2-2Z" />
      <path d="M4 7v10a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1v-3" />
      <path d="M20 13h-4a2 2 0 1 1 0-4h4Z" />
    </svg>
  );
}
