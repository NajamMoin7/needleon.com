import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Stitching Request",
  description:
    "Submit a custom stitching request — share your measurements, dress type and design references.",
};

export default function StitchingRequestPage() {
  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-12">
          <Badge tone="blush">Stitching Request</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
            Tell us about your piece
          </h1>
          <p className="text-ink-500 mt-2 max-w-xl">
            Fields marked with <span className="text-blush-500">*</span> are required.
            We&apos;ll review your request and respond within 24 hours.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <form className="grid lg:grid-cols-[1fr_360px] gap-10">
          <div className="space-y-8 bg-surface rounded-2xl border border-border p-6 sm:p-8">
            <Fieldset legend="Your details">
              <Grid>
                <Field label="Full name" required>
                  <Input name="name" placeholder="e.g. Ayesha Khan" />
                </Field>
                <Field label="Phone number" required>
                  <Input name="phone" type="tel" placeholder="03XX-XXXXXXX" />
                </Field>
                <Field label="Email" required>
                  <Input name="email" type="email" placeholder="you@example.com" />
                </Field>
                <Field label="Delivery address" required>
                  <Input name="address" placeholder="House, street, city" />
                </Field>
              </Grid>
            </Fieldset>

            <Fieldset legend="Stitching details">
              <Grid>
                <Field label="Fabric source" required>
                  <Select name="fabricSource">
                    <option value="own">I&apos;ll send my own fabric</option>
                    <option value="buy">Buy fabric from NeedleOn</option>
                  </Select>
                </Field>
                <Field label="Dress type" required>
                  <Select name="dressType">
                    <option>Shalwar Kameez</option>
                    <option>Kurta</option>
                    <option>Lehenga</option>
                    <option>Gharara / Sharara</option>
                    <option>Maxi / Gown</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field label="Stitching type" required>
                  <Select name="stitchingType">
                    <option>Standard stitching</option>
                    <option>Designer stitching</option>
                    <option>Bridal stitching</option>
                  </Select>
                </Field>
                <Field label="Fabric details">
                  <Input name="fabricDetails" placeholder="e.g. Lawn cotton, 2.5m, printed" />
                </Field>
              </Grid>
            </Fieldset>

            <Fieldset legend="Measurements (inches)">
              <Grid cols={3}>
                {["Bust", "Waist", "Hip", "Shoulder", "Sleeve length", "Kameez length", "Trouser length", "Ghera (flare)"].map((m) => (
                  <Field key={m} label={m}>
                    <Input name={m.toLowerCase().replace(/\s+/g, "-")} placeholder="—" />
                  </Field>
                ))}
              </Grid>
              <p className="text-xs text-ink-500 mt-3">
                Unsure of your measurements? Add a note in special instructions and we&apos;ll guide you.
              </p>
            </Fieldset>

            <Fieldset legend="Design references">
              <Field label="Upload reference images">
                <div className="border-2 border-dashed border-ink-200 rounded-2xl p-8 text-center bg-cream">
                  <p className="text-sm text-ink-600">
                    Drag images here, or <span className="text-blush-500 underline">browse</span>
                  </p>
                  <p className="text-xs text-ink-400 mt-1">PNG, JPG up to 5MB each</p>
                  <input type="file" multiple accept="image/*" className="sr-only" />
                </div>
              </Field>
              <Field label="Special instructions">
                <Textarea
                  name="notes"
                  rows={4}
                  placeholder="Anything else we should know — neckline preferences, embroidery details, urgency…"
                />
              </Field>
            </Fieldset>

            <Fieldset legend="Delivery & payment">
              <Grid>
                <Field label="Delivery preference" required>
                  <Select name="delivery">
                    <option>Standard (3–5 days after stitching)</option>
                    <option>Express (1–2 days, additional charges)</option>
                  </Select>
                </Field>
                <Field label="Payment method" required>
                  <Select name="payment">
                    <option>Cash on Delivery</option>
                    <option>Easypaisa (manual verification)</option>
                  </Select>
                </Field>
              </Grid>
            </Fieldset>
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-4">
            <div className="bg-surface rounded-2xl border border-border p-6 space-y-3">
              <h2 className="font-display text-xl text-ink-800">What happens next</h2>
              <ol className="text-sm text-ink-600 space-y-2 list-decimal list-inside">
                <li>We review your request within 24 hours.</li>
                <li>We confirm fabric receipt and finalise measurements with you.</li>
                <li>Stitching begins — typically 2–4 weeks.</li>
                <li>Quality check, then shipped to your address.</li>
              </ol>
            </div>
            <Button size="lg" className="w-full" type="submit">
              Submit request
            </Button>
            <p className="text-xs text-ink-500 text-center">
              Form submission becomes active in Phase 3 — backend not yet wired.
            </p>
          </aside>
        </form>
      </Container>
    </>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="text-[11px] tracking-[0.2em] uppercase text-ink-500 font-medium mb-4">
        {legend}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}

function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm text-ink-700">
        {label} {required && <span className="text-blush-500">*</span>}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-xl border border-ink-200 bg-surface px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={fieldClass} />;
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={fieldClass} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={fieldClass} />;
}
