import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "positive"
}: {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  tone?: "positive" | "neutral" | "warning";
}) {
  const toneClass =
    tone === "positive"
      ? "text-emerald-600 dark:text-emerald-400"
      : tone === "warning"
        ? "text-amber-600 dark:text-amber-400"
        : "text-sky-600 dark:text-sky-400";

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-900">
          <Icon className="h-5 w-5" />
        </div>
        <div className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium", toneClass, "bg-slate-50 dark:bg-slate-900/70") }>
          <ArrowUpRight className="h-3.5 w-3.5" />
          {delta}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
