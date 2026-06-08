import { ActivityFeed } from "@/components/activity-feed";
import { CompletionChart } from "@/components/completion-chart";
import { ProjectList } from "@/components/project-list";
import { SectionHeading } from "@/components/section-heading";
import { StatCard } from "@/components/stat-card";
import { metrics } from "@/lib/mock-data";
import { BarChart3, Users, Wallet, Workflow, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const icons = [Wallet, Users, Workflow, BarChart3];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-soft dark:from-white dark:to-slate-100 dark:text-slate-950">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 dark:border-slate-200/60 dark:bg-slate-100 dark:text-slate-600">
              <Sparkles className="h-3.5 w-3.5" />
              Overview
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">A clean command center for product work.</h1>
            <p className="mt-4 text-sm leading-7 text-white/75 dark:text-slate-600">
              Use this as a client-ready SaaS demo, a paid template, or the base of a real product.
            </p>
          </div>

          <Link
            href="/dashboard/projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = icons[index];
          return <StatCard key={metric.label} {...metric} icon={Icon} />;
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <CompletionChart />
        <ActivityFeed />
      </div>

      <ProjectList />
      <SectionHeading
        eyebrow="Next step"
        title="Now wire the product to real data"
        description="This build already feels premium. Connect auth, database records, and billing when you're ready to ship."
      />
    </div>
  );
}
