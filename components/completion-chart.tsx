"use client";

import { chartData } from "@/lib/mock-data";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area
} from "recharts";

export function CompletionChart() {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Weekly performance</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Completed vs created tasks over the last 7 days.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          Live mock data
        </span>
      </div>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="completedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.28} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="createdFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.22} />
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
            <Area type="monotone" dataKey="completed" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#completedFill)" />
            <Line type="monotone" dataKey="created" stroke="#8b5cf6" strokeWidth={2.5} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
