import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your NeedleOn account.",
};

export default function LoginPage() {
  return (
    <Container className="py-16 max-w-md">
      <div className="bg-surface rounded-2xl border border-border p-7 sm:p-9 shadow-soft">
        <h1 className="font-display text-3xl text-ink-800">Welcome back</h1>
        <p className="text-sm text-ink-500 mt-1">
          Sign in to access your orders, wishlist and stitching requests.
        </p>

        <form className="mt-7 space-y-4">
          <Field label="Email">
            <Input type="email" name="email" placeholder="you@example.com" required />
          </Field>
          <Field label="Password">
            <Input type="password" name="password" placeholder="••••••••" required />
          </Field>
          <Button size="lg" className="w-full" type="submit">
            Sign in
          </Button>
        </form>

        <p className="text-xs text-ink-500 mt-5 text-center">
          Auth backend wires up in Phase 2 (Auth.js v5).
        </p>

        <div className="mt-7 pt-6 border-t border-border text-sm text-ink-600 text-center">
          New here?{" "}
          <Link href="/signup" className="text-blush-500 hover:underline">
            Create an account
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
