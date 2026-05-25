"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

type OrderOption = "own" | "buy";
type Payment = "cod" | "easypaisa";

export function CustomStitchForm() {
  const [orderOption, setOrderOption] = useState<OrderOption>("own");
  const [payment, setPayment] = useState<Payment>("cod");
  const [submitted, setSubmitted] = useState(false);
  const [referenceName, setReferenceName] = useState<string>("");
  const [screenshotName, setScreenshotName] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-surface rounded-2xl border border-border p-8 sm:p-10 text-center max-w-2xl mx-auto"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-blush-100 text-blush-500 grid place-items-center text-2xl">
          ✓
        </div>
        <h3 className="font-display text-2xl text-ink-800 mt-4">
          Thank you — request received
        </h3>
        <p className="text-ink-500 mt-2 leading-relaxed">
          Our team will reach out within 24 hours to confirm measurements,
          fabric details, pricing and delivery timeline.
        </p>
        <p className="text-xs text-ink-400 mt-4">
          (Backend submission becomes live in Phase 2.)
        </p>
        <div className="mt-6">
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit another request
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={onSubmit}
      className="grid lg:grid-cols-[1fr_360px] gap-8"
    >
      <div className="space-y-8 bg-surface rounded-2xl border border-border p-6 sm:p-8">
        <Fieldset legend="Your details">
          <Grid>
            <Field label="Full name" required>
              <Input name="name" placeholder="e.g. Ayesha Khan" required />
            </Field>
            <Field label="Phone number" required>
              <Input name="phone" type="tel" placeholder="03XX-XXXXXXX" required />
            </Field>
            <Field label="Email" required>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </Field>
            <Field label="Delivery address" required>
              <Input name="address" placeholder="House, street, city" required />
            </Field>
          </Grid>
        </Fieldset>

        <Fieldset legend="Order option">
          <div className="grid sm:grid-cols-2 gap-3">
            <RadioCard
              checked={orderOption === "own"}
              onSelect={() => setOrderOption("own")}
              title="I will send my own fabric"
              body="Ship your fabric to our boutique with your request reference."
            />
            <RadioCard
              checked={orderOption === "buy"}
              onSelect={() => setOrderOption("buy")}
              title="I want to purchase from the website"
              body="Pair stitching with an unstitched piece from our shop."
            />
          </div>
        </Fieldset>

        <Fieldset legend="Stitching details">
          <Grid>
            <Field label="Stitching type" required>
              <Select name="stitchingType" required>
                <option>Standard stitching</option>
                <option>Designer stitching</option>
                <option>Bridal stitching</option>
              </Select>
            </Field>
            <Field label="Dress type" required>
              <Select name="dressType" required>
                <option>Shalwar Kameez</option>
                <option>Kurta</option>
                <option>Lehenga</option>
                <option>Gharara / Sharara</option>
                <option>Maxi / Gown</option>
                <option>Other</option>
              </Select>
            </Field>
            <Field label="Fabric details" full>
              <Input
                name="fabricDetails"
                placeholder={
                  orderOption === "own"
                    ? "e.g. Lawn cotton, 2.5m, printed"
                    : "Select an unstitched piece from /shop"
                }
              />
            </Field>
          </Grid>
        </Fieldset>

        <Fieldset legend="Measurements (inches)">
          <Grid cols={3}>
            {[
              "Bust",
              "Waist",
              "Hip",
              "Shoulder",
              "Sleeve length",
              "Kameez length",
              "Trouser length",
              "Ghera (flare)",
            ].map((m) => (
              <Field key={m} label={m}>
                <Input
                  name={m.toLowerCase().replace(/\s+/g, "-")}
                  placeholder="—"
                  inputMode="decimal"
                />
              </Field>
            ))}
          </Grid>
          <p className="text-xs text-ink-500 mt-3">
            Unsure of your measurements? Add a note below and we&apos;ll guide you.
          </p>
        </Fieldset>

        <Fieldset legend="Design reference">
          <Field label="Upload reference image">
            <FileInput
              onFileName={setReferenceName}
              accept="image/*"
              hint="PNG, JPG up to 5MB"
              fileName={referenceName}
            />
          </Field>
          <Field label="Special instructions" full>
            <Textarea
              name="notes"
              rows={4}
              placeholder="Neckline preferences, embroidery details, urgency…"
            />
          </Field>
        </Fieldset>

        <Fieldset legend="Delivery & payment">
          <Field label="Delivery preference" required>
            <Select name="delivery" required>
              <option>Standard (3–5 days after stitching)</option>
              <option>Express (1–2 days, additional charges)</option>
            </Select>
          </Field>

          <div className="mt-4">
            <span className="block text-sm text-ink-700 mb-2">
              Payment method <span className="text-blush-500">*</span>
            </span>
            <div className="grid sm:grid-cols-2 gap-3">
              <RadioCard
                checked={payment === "cod"}
                onSelect={() => setPayment("cod")}
                title="Cash on Delivery"
                body="Pay in cash when your stitched piece arrives."
              />
              <RadioCard
                checked={payment === "easypaisa"}
                onSelect={() => setPayment("easypaisa")}
                title="Easypaisa"
                body="Send via Easypaisa, then upload your screenshot below."
              />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {payment === "easypaisa" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 rounded-xl bg-blush-50 border border-blush-100 text-sm space-y-1.5">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-blush-600 font-medium">
                    Easypaisa details (placeholder)
                  </p>
                  <p className="text-ink-800 font-medium">
                    Account holder: Boutique Owner Name
                  </p>
                  <p className="text-ink-800 font-medium">Number: 0300-XXXXXXX</p>
                  <p className="text-xs text-ink-500">
                    Final account details will be configured by the admin in Phase 2.
                  </p>
                </div>

                <div className="mt-4">
                  <Field label="Upload payment screenshot" required>
                    <FileInput
                      onFileName={setScreenshotName}
                      accept="image/*"
                      hint="PNG, JPG up to 5MB"
                      fileName={screenshotName}
                    />
                  </Field>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Fieldset>
      </div>

      <aside className="lg:sticky lg:top-28 self-start space-y-4">
        <div className="bg-surface rounded-2xl border border-border p-6 space-y-3">
          <h3 className="font-display text-xl text-ink-800">What happens next</h3>
          <ol className="text-sm text-ink-600 space-y-2 list-decimal list-inside">
            <li>We review your request within 24 hours.</li>
            <li>We confirm fabric receipt and finalise measurements.</li>
            <li>Stitching begins — typically 2–4 weeks.</li>
            <li>Quality check, then shipped to your address.</li>
          </ol>
        </div>

        <Button size="lg" className="w-full" type="submit">
          Submit request
        </Button>

        <p className="text-xs text-ink-500 text-center">
          By submitting you agree to be contacted about your request.
        </p>
      </aside>
    </motion.form>
  );
}

/* ----------------- Form atoms ----------------- */

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="text-[11px] tracking-[0.2em] uppercase text-ink-500 font-medium mb-4">
        {legend}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}

function Grid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-4 ${
        cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
  full,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block space-y-1.5 ${full ? "sm:col-span-full" : ""}`}>
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

function FileInput({
  onFileName,
  accept,
  hint,
  fileName,
}: {
  onFileName: (n: string) => void;
  accept?: string;
  hint?: string;
  fileName?: string;
}) {
  return (
    <label className="block border-2 border-dashed border-ink-200 rounded-2xl p-5 text-center bg-cream cursor-pointer hover:border-blush-300 transition-colors">
      <input
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0];
          onFileName(f?.name ?? "");
        }}
      />
      {fileName ? (
        <p className="text-sm text-ink-800 font-medium">{fileName}</p>
      ) : (
        <p className="text-sm text-ink-600">
          Drag an image here, or{" "}
          <span className="text-blush-500 underline">browse</span>
        </p>
      )}
      {hint && <p className="text-xs text-ink-400 mt-1">{hint}</p>}
    </label>
  );
}

function RadioCard({
  checked,
  onSelect,
  title,
  body,
}: {
  checked: boolean;
  onSelect: () => void;
  title: string;
  body: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`text-left rounded-xl border p-4 transition-colors ${
        checked
          ? "border-blush-400 bg-blush-50/60 ring-2 ring-blush-100"
          : "border-ink-200 hover:border-blush-300"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 w-4 h-4 rounded-full border-2 grid place-items-center ${
            checked ? "border-blush-400" : "border-ink-300"
          }`}
        >
          {checked && <span className="w-2 h-2 rounded-full bg-blush-400" />}
        </span>
        <div>
          <p className="text-sm font-medium text-ink-800">{title}</p>
          <p className="text-xs text-ink-500 mt-1 leading-relaxed">{body}</p>
        </div>
      </div>
    </button>
  );
}
