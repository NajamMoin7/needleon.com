"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  stitchingStatuses,
  type StitchingStatus,
  statusTone,
} from "@/lib/data/stitchingRequests";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export function StatusUpdater({
  currentStatus,
  requestId,
}: {
  currentStatus: StitchingStatus;
  requestId: string;
}) {
  const [status, setStatus] = useState<StitchingStatus>(currentStatus);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  function onSave() {
    // Phase 2: PATCH /api/admin/custom-stitch/[id]
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-ink-500 font-medium">
          Update status
        </p>
        <div className="mt-2 flex items-center gap-2">
          <Badge tone={statusTone[currentStatus]}>{currentStatus}</Badge>
          {status !== currentStatus && (
            <>
              <span className="text-ink-300">→</span>
              <Badge tone={statusTone[status]}>{status}</Badge>
            </>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        {stitchingStatuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between",
              status === s
                ? "bg-blush-50 text-blush-700 border border-blush-200"
                : "text-ink-600 hover:bg-ink-100 border border-transparent",
            )}
          >
            <span>{s}</span>
            {status === s && (
              <span className="w-2 h-2 rounded-full bg-blush-400" />
            )}
          </button>
        ))}
      </div>

      <label className="block space-y-1.5">
        <span className="text-xs text-ink-700">Admin note (optional)</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Internal note about this status change…"
          className="w-full rounded-xl border border-ink-200 bg-surface px-3 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100"
        />
      </label>

      <Button
        onClick={onSave}
        size="md"
        className="w-full"
        disabled={status === currentStatus && !note}
      >
        Save changes
      </Button>

      <AnimatePresence>
        {saved && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-green-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2"
          >
            ✓ Saved locally. Will sync to backend in Phase 2 ({requestId}).
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
