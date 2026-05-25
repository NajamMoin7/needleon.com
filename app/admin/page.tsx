import Link from "next/link";
import { products } from "@/lib/data/products";
import { stitchingRequests } from "@/lib/data/stitchingRequests";
import { formatPKR } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DashboardCard } from "./DashboardCard";
import {
  IconArrowRight,
  IconBag,
  IconScissors,
  IconUser,
} from "@/components/ui/Icons";

export default function AdminDashboardPage() {
  const totalCustomers = 248; // mock — will come from User collection
  const totalOrders = 96;
  const pendingOrders = 14;
  const completedOrders = 71;
  const totalStitching = stitchingRequests.length;
  const pendingStitching = stitchingRequests.filter(
    (r) => r.status !== "Delivered" && r.status !== "Cancelled",
  ).length;
  const revenue = 1_847_500;

  const stats = [
    { label: "Total customers", value: totalCustomers, icon: <IconUser className="w-5 h-5" /> },
    { label: "Total orders", value: totalOrders, icon: <IconBag className="w-5 h-5" /> },
    { label: "Pending orders", value: pendingOrders, tone: "blush" as const, icon: <IconBag className="w-5 h-5" /> },
    { label: "Completed orders", value: completedOrders, icon: <IconBag className="w-5 h-5" /> },
    { label: "Stitching requests", value: totalStitching, icon: <IconScissors className="w-5 h-5" /> },
    { label: "Pending stitching", value: pendingStitching, tone: "blush" as const, icon: <IconScissors className="w-5 h-5" /> },
    { label: "Total revenue", value: formatPKR(revenue), wide: true, tone: "ink" as const, icon: <IconBag className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-ink-500">Dashboard</p>
        <h1 className="font-display text-3xl text-ink-800 mt-1">Good morning 👋</h1>
        <p className="text-sm text-ink-500 mt-1">
          Here&apos;s what&apos;s happening across NeedleOn today.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <DashboardCard
            key={s.label}
            delay={i * 0.04}
            label={s.label}
            value={s.value}
            icon={s.icon}
            tone={s.tone}
            wide={s.wide}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-surface rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-ink-800">Recent stitching requests</h2>
            <Link
              href="/admin/custom-stitch"
              className="text-xs text-blush-500 inline-flex items-center gap-1"
            >
              View all <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {stitchingRequests.slice(0, 5).map((r) => (
              <li key={r.id}>
                <Link
                  href={`/admin/custom-stitch/${r.id}`}
                  className="flex items-center justify-between gap-4 py-3 group"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink-800 truncate group-hover:text-blush-500">
                      {r.customer.name}
                    </p>
                    <p className="text-xs text-ink-500 truncate">
                      {r.id} · {r.dressType}
                    </p>
                  </div>
                  <Badge tone="muted">{r.status}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-ink-800">Top products</h2>
            <Link
              href="/admin/products"
              className="text-xs text-blush-500 inline-flex items-center gap-1"
            >
              View all <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {products.slice(0, 5).map((p) => (
              <li
                key={p.slug}
                className="flex items-center justify-between gap-4 py-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink-800 truncate">{p.title}</p>
                  <p className="text-xs text-ink-500 truncate">{p.fabric}</p>
                </div>
                <span className="text-sm text-ink-800 font-medium">
                  {formatPKR(p.discountPrice ?? p.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-xs text-ink-400">
        Stats and lists shown above use mock data. They will switch to live
        Mongo data in Phase 2.
      </p>
    </div>
  );
}
