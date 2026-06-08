import { SectionHeading } from "@/components/section-heading";
import { chartData } from "@/lib/mock-data";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Analytics"
        title="Performance data with a product feel"
        description="A clean executive view of creation, completion, and momentum."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-lg font-semibold">Task throughput</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Completed tasks vs created tasks.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="throughputFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="createdAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} strokeOpacity={0.15} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} width={30} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(255,255,255,0.95)"
                  }}
                />
                <Area type="monotone" dataKey="completed" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#throughputFill)" />
                <Area type="monotone" dataKey="created" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#createdAreaFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-lg font-semibold">Weekly breakdown</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Created tasks by day.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} strokeOpacity={0.15} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} width={30} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(255,255,255,0.95)"
                  }}
                />
                <Bar dataKey="created" radius={[12, 12, 0, 0]} fill="#0f172a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
