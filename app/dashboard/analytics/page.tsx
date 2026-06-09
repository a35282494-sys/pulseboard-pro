"use client";

import { SectionHeading } from "@/components/section-heading";
import { chartData } from "@/lib/mock-data";
import dynamic from "next/dynamic";

const ResponsiveContainer = dynamic(
() => import("recharts").then((m) => m.ResponsiveContainer),
{ ssr: false }
);

const AreaChart = dynamic(
() => import("recharts").then((m) => m.AreaChart),
{ ssr: false }
);

const Area = dynamic(
() => import("recharts").then((m) => m.Area),
{ ssr: false }
);

const BarChart = dynamic(
() => import("recharts").then((m) => m.BarChart),
{ ssr: false }
);

const Bar = dynamic(
() => import("recharts").then((m) => m.Bar),
{ ssr: false }
);

const CartesianGrid = dynamic(
() => import("recharts").then((m) => m.CartesianGrid),
{ ssr: false }
);

const Tooltip = dynamic(
() => import("recharts").then((m) => m.Tooltip),
{ ssr: false }
);

const XAxis = dynamic(
() => import("recharts").then((m) => m.XAxis),
{ ssr: false }
);

const YAxis = dynamic(
() => import("recharts").then((m) => m.YAxis),
{ ssr: false }
);

export default function AnalyticsPage() {
return (
<div className="space-y-8">
<SectionHeading
eyebrow="Analytics"
title="Performance data with a product feel"
description="A clean executive view of creation, completion, and momentum."
/>

  <div className="grid gap-6 xl:grid-cols-2">
    <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">Task throughput</h3>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="completed"
              stroke="#0ea5e9"
              fill="#0ea5e9"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">Weekly breakdown</h3>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="created" fill="#0f172a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
</div>

);
}
