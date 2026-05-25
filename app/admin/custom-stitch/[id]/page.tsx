import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { getStitchingRequest, statusTone } from "@/lib/data/stitchingRequests";
import { StatusUpdater } from "./StatusUpdater";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return { title: `${id} · Custom Stitch · Admin` };
}

export default async function AdminStitchingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const req = getStitchingRequest(id);
  if (!req) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/custom-stitch"
          className="text-xs text-blush-500 hover:underline"
        >
          ← All stitching requests
        </Link>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl text-ink-800">{req.id}</h1>
            <p className="text-sm text-ink-500 mt-1">
              Created {new Date(req.createdAt).toLocaleString("en-PK")}
            </p>
          </div>
          <Badge tone={statusTone[req.status]} className="self-start sm:self-center">
            {req.status}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-6">
        <div className="space-y-6">
          <Card title="Customer">
            <Grid>
              <Item label="Name" value={req.customer.name} />
              <Item label="Phone" value={req.customer.phone} />
              <Item label="Email" value={req.customer.email} />
              <Item label="Address" value={req.customer.address} />
            </Grid>
          </Card>

          <Card title="Stitching">
            <Grid>
              <Item
                label="Order option"
                value={
                  req.orderOption === "own"
                    ? "Customer is sending own fabric"
                    : "Customer purchased fabric from website"
                }
              />
              <Item label="Stitching type" value={req.stitchingType} />
              <Item label="Dress type" value={req.dressType} />
              <Item label="Delivery preference" value={req.delivery} />
              <Item label="Payment" value={req.payment === "easypaisa" ? "Easypaisa" : "Cash on Delivery"} />
              {req.fabricDetails && (
                <Item label="Fabric details" value={req.fabricDetails} wide />
              )}
              {req.notes && <Item label="Special instructions" value={req.notes} wide />}
            </Grid>
          </Card>

          <Card title="Measurements">
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-sm">
              {Object.entries(req.measurements).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-ink-500">{k}</dt>
                  <dd className="text-ink-800 font-medium mt-0.5">{v}&quot;</dd>
                </div>
              ))}
            </dl>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card title="Design reference">
              {req.referenceImage ? (
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-sand">
                  <Image
                    src={req.referenceImage}
                    alt="Design reference"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Empty label="No reference image uploaded" />
              )}
            </Card>
            <Card title="Easypaisa screenshot">
              {req.paymentScreenshot ? (
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-sand">
                  <Image
                    src={req.paymentScreenshot}
                    alt="Payment screenshot"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Empty
                  label={
                    req.payment === "easypaisa"
                      ? "Awaiting screenshot upload"
                      : "Not applicable (COD)"
                  }
                />
              )}
            </Card>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start space-y-4">
          <StatusUpdater currentStatus={req.status} requestId={req.id} />
        </aside>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-surface rounded-2xl border border-border p-6">
      <h2 className="font-display text-lg text-ink-800 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">{children}</dl>;
}

function Item({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="text-ink-800 mt-0.5">{value}</dd>
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return (
    <div className="aspect-[4/5] rounded-xl border-2 border-dashed border-ink-200 grid place-items-center text-sm text-ink-400 px-4 text-center">
      {label}
    </div>
  );
}
