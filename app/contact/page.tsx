import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  IconFacebook,
  IconInstagram,
  IconWhatsapp,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NeedleOn — WhatsApp, email or visit our flagship boutique.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-14 max-w-3xl">
          <Badge tone="blush">Contact</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
            We&apos;d love to hear from you
          </h1>
          <p className="text-ink-500 mt-2">
            Questions about an order, a stitching booking, or something else?
            Send us a message — we usually reply within a few hours.
          </p>
        </Container>
      </section>

      <Container className="py-12 grid lg:grid-cols-[1fr_360px] gap-10">
        <form className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <Input placeholder="Your name" />
            </Field>
            <Field label="Email">
              <Input type="email" placeholder="you@example.com" />
            </Field>
          </div>
          <Field label="Subject">
            <Input placeholder="How can we help?" />
          </Field>
          <Field label="Message">
            <Textarea rows={6} placeholder="Tell us a little about what you need…" />
          </Field>
          <Button size="lg" className="w-full sm:w-auto" type="submit">
            Send message
          </Button>
        </form>

        <aside className="space-y-5">
          <div className="bg-surface rounded-2xl border border-border p-6 space-y-3">
            <h2 className="font-display text-xl text-ink-800">Reach us directly</h2>
            <dl className="text-sm space-y-2.5">
              <div>
                <dt className="text-ink-500 text-xs uppercase tracking-wider">WhatsApp</dt>
                <dd className="text-ink-800">+92 300 0000000</dd>
              </div>
              <div>
                <dt className="text-ink-500 text-xs uppercase tracking-wider">Email</dt>
                <dd className="text-ink-800">hello@needleon.com</dd>
              </div>
              <div>
                <dt className="text-ink-500 text-xs uppercase tracking-wider">Boutique address</dt>
                <dd className="text-ink-800">Visit us — address coming soon</dd>
              </div>
            </dl>
            <div className="flex gap-2 pt-2">
              <a className="p-2 rounded-full bg-ink-100 text-ink-700 hover:bg-blush-100 hover:text-blush-500" href="https://wa.me/923000000000" aria-label="WhatsApp">
                <IconWhatsapp />
              </a>
              <a className="p-2 rounded-full bg-ink-100 text-ink-700 hover:bg-blush-100 hover:text-blush-500" href="https://instagram.com" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a className="p-2 rounded-full bg-ink-100 text-ink-700 hover:bg-blush-100 hover:text-blush-500" href="https://facebook.com" aria-label="Facebook">
                <IconFacebook />
              </a>
            </div>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-6">
            <h3 className="font-display text-lg text-ink-800">Boutique hours</h3>
            <ul className="text-sm text-ink-600 mt-3 space-y-1.5">
              <li className="flex justify-between"><span>Mon – Sat</span><span>11:00 – 20:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>14:00 – 19:00</span></li>
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}

const fieldClass =
  "w-full rounded-xl border border-ink-200 bg-surface px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm text-ink-700">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={fieldClass} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={fieldClass} />;
}
