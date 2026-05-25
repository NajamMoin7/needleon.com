import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your NeedleOn order — Cash on Delivery or Easypaisa.",
};

export default function CheckoutPage() {
  return (
    <>
      <section className="bg-rose-veil border-b border-border">
        <Container className="py-10">
          <Badge tone="blush">Checkout</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink-800 mt-3">
            Almost there
          </h1>
        </Container>
      </section>

      <Container className="py-12 grid lg:grid-cols-[1fr_380px] gap-10">
        <form className="space-y-7">
          <Card title="Contact">
            <Grid>
              <Field label="Full name"><Input placeholder="Ayesha Khan" /></Field>
              <Field label="Phone"><Input type="tel" placeholder="03XX-XXXXXXX" /></Field>
              <Field label="Email" full>
                <Input type="email" placeholder="you@example.com" />
              </Field>
            </Grid>
          </Card>

          <Card title="Shipping address">
            <Grid>
              <Field label="Street address" full>
                <Input placeholder="House, street, area" />
              </Field>
              <Field label="City"><Input placeholder="Lahore" /></Field>
              <Field label="Province">
                <Select>
                  <option>Punjab</option>
                  <option>Sindh</option>
                  <option>KPK</option>
                  <option>Balochistan</option>
                  <option>Islamabad Capital</option>
                  <option>Gilgit-Baltistan</option>
                  <option>Azad Kashmir</option>
                </Select>
              </Field>
              <Field label="Postal code"><Input placeholder="54000" /></Field>
              <Field label="Order notes (optional)" full>
                <Textarea rows={3} placeholder="Anything we should know about delivery?" />
              </Field>
            </Grid>
          </Card>

          <Card title="Payment method">
            <div className="space-y-3">
              <PaymentOption
                value="cod"
                title="Cash on Delivery"
                body="Pay in cash when your order arrives. No advance payment required."
                defaultChecked
              />
              <PaymentOption
                value="easypaisa"
                title="Easypaisa"
                body="Send payment to our Easypaisa account, then upload the screenshot — we'll verify within 24 hours."
              />
            </div>

            <div className="mt-5 p-4 rounded-xl bg-blush-50 border border-blush-100 text-sm space-y-1.5">
              <p className="text-[11px] tracking-[0.2em] uppercase text-blush-600 font-medium">
                Easypaisa details
              </p>
              <p className="text-ink-800 font-medium">Account holder: Boutique Owner Name <span className="text-xs text-ink-500">(placeholder)</span></p>
              <p className="text-ink-800 font-medium">Number: 0300-XXXXXXX <span className="text-xs text-ink-500">(placeholder)</span></p>
              <p className="text-xs text-ink-500">
                After paying, upload a screenshot below. Final account details will be configured by the admin in Phase 2.
              </p>
            </div>

            <Field label="Upload payment screenshot (Easypaisa only)" >
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-ink-700 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blush-100 file:text-blush-700 hover:file:bg-blush-200"
              />
            </Field>
          </Card>
        </form>

        <aside className="lg:sticky lg:top-28 self-start space-y-4">
          <div className="bg-surface rounded-2xl border border-border p-6 space-y-3">
            <h2 className="font-display text-xl text-ink-800">Order summary</h2>
            <p className="text-sm text-ink-500">
              Items, subtotal and total are calculated from your bag.
            </p>
            <p className="text-xs text-ink-400">
              Order placement becomes live in Phase 2 once the backend is wired up.
            </p>
          </div>
          <Button size="lg" className="w-full" type="submit">
            Place order
          </Button>
        </aside>
      </Container>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-surface rounded-2xl border border-border p-6">
      <h2 className="font-display text-xl text-ink-800 mb-5">{title}</h2>
      {children}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block space-y-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-sm text-ink-700">{label}</span>
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

function PaymentOption({
  value,
  title,
  body,
  defaultChecked,
}: {
  value: string;
  title: string;
  body: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="block border border-ink-200 rounded-xl p-4 cursor-pointer hover:border-blush-300 has-[input:checked]:border-blush-400 has-[input:checked]:bg-blush-50/40 transition-colors">
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name="payment"
          value={value}
          defaultChecked={defaultChecked}
          className="mt-1 accent-blush-400"
        />
        <div>
          <p className="text-sm font-medium text-ink-800">{title}</p>
          <p className="text-xs text-ink-500 mt-1">{body}</p>
        </div>
      </div>
    </label>
  );
}
