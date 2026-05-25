import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a NeedleOn account to track orders and bookings.",
};

export default function SignupPage() {
  return (
    <Container className="py-16 max-w-md">
      <div className="bg-surface rounded-2xl border border-border p-7 sm:p-9 shadow-soft">
        <h1 className="font-display text-3xl text-ink-800">Create an account</h1>
        <p className="text-sm text-ink-500 mt-1">
          A NeedleOn account lets you track orders, save addresses and book
          stitching services in one click.
        </p>

        <form className="mt-7 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First name">
              <Input name="firstName" placeholder="Ayesha" required />
            </Field>
            <Field label="Last name">
              <Input name="lastName" placeholder="Khan" required />
            </Field>
          </div>
          <Field label="Email">
            <Input type="email" name="email" placeholder="you@example.com" required />
          </Field>
          <Field label="Phone (optional)">
            <Input type="tel" name="phone" placeholder="03XX-XXXXXXX" />
          </Field>
          <Field label="Password">
            <Input type="password" name="password" placeholder="At least 8 characters" required />
          </Field>
          <Button size="lg" className="w-full" type="submit">
            Create account
          </Button>
        </form>

        <p className="text-xs text-ink-500 mt-5 text-center">
          Auth backend wires up in Phase 2 (Auth.js v5).
        </p>

        <div className="mt-7 pt-6 border-t border-border text-sm text-ink-600 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blush-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </Container>
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
