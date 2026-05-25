import Link from "next/link";
import { stitchingRequests, statusTone } from "@/lib/data/stitchingRequests";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight } from "@/components/ui/Icons";

export const metadata = { title: "Custom Stitch Requests · Admin" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function AdminCustomStitchListPage() {
  const requests = [...stitchingRequests].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-ink-500">Boutique</p>
        <h1 className="font-display text-3xl text-ink-800 mt-1">Custom Stitch Requests</h1>
        <p className="text-sm text-ink-500 mt-1">
          {requests.length} request{requests.length === 1 ? "" : "s"} ·{" "}
          {requests.filter((r) => r.status === "New Request").length} new
        </p>
      </div>

      <div className="bg-surface rounded-2xl border border-border overflow-hidden">
        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full text-sm">
            <thead className="bg-cream border-b border-border">
              <tr className="text-left text-[11px] tracking-[0.2em] uppercase text-ink-500">
                <th className="px-5 py-3 font-medium">Request</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Dress / Type</th>
                <th className="px-5 py-3 font-medium">Payment</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-blush-50/40 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink-800">{r.id}</p>
                    <p className="text-xs text-ink-500 mt-0.5">
                      {formatDate(r.createdAt)}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-ink-800">{r.customer.name}</p>
                    <p className="text-xs text-ink-500 mt-0.5">{r.customer.phone}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-ink-800">{r.dressType}</p>
                    <p className="text-xs text-ink-500 mt-0.5">{r.stitchingType}</p>
                  </td>
                  <td className="px-5 py-4 capitalize text-ink-700">
                    {r.payment === "easypaisa" ? "Easypaisa" : "COD"}
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={statusTone[r.status]}>{r.status}</Badge>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/admin/custom-stitch/${r.id}`}
                      className="text-blush-500 inline-flex items-center gap-1 text-sm hover:gap-2 transition-all"
                    >
                      Open <IconArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list */}
        <ul className="md:hidden divide-y divide-border">
          {requests.map((r) => (
            <li key={r.id}>
              <Link
                href={`/admin/custom-stitch/${r.id}`}
                className="block px-5 py-4 hover:bg-blush-50/40"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="text-sm font-medium text-ink-800">{r.id}</p>
                  <Badge tone={statusTone[r.status]}>{r.status}</Badge>
                </div>
                <p className="text-sm text-ink-700">{r.customer.name}</p>
                <p className="text-xs text-ink-500 mt-0.5">
                  {r.dressType} · {r.payment === "easypaisa" ? "Easypaisa" : "COD"} ·{" "}
                  {formatDate(r.createdAt)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
