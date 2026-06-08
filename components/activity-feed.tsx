import { activities } from "@/lib/mock-data";
import { Activity, CreditCard, FolderKanban, Gauge, Settings2 } from "lucide-react";

const iconMap = {
  task: Activity,
  project: FolderKanban,
  billing: CreditCard,
  system: Settings2
};

const toneMap = {
  task: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-300",
  project: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
  billing: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
  system: "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
} as const;

export function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recent activity</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Live-style event stream for the workspace.</p>
        </div>
        <Gauge className="h-4 w-4 text-slate-400" />
      </div>

      <div className="mt-5 space-y-4">
        {activities.map((item) => {
          const Icon = iconMap[item.type];
          return (
            <div key={item.id} className="flex items-start gap-3 rounded-2xl border border-slate-100 p-3 dark:border-slate-900">
              <div className={`rounded-2xl p-2 ${toneMap[item.type]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
