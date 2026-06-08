import Link from "next/link";
import { BarChart3, FolderKanban, LayoutDashboard, Settings, Sparkles, SquareKanban, Users, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/tasks", label: "Tasks", icon: SquareKanban },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings }
];

export function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col">
      <div className="glass flex h-[calc(100vh-1.5rem)] flex-col rounded-[2rem] p-5 shadow-soft">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">PulseBoard Pro</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">SaaS command center</p>
          </div>
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Workspace</p>
          <p className="mt-2 text-lg font-semibold">North Star Studio</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">12 members · Pro plan</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            Demo workspace active
          </div>
        </div>

        <nav className="mt-8 flex-1 space-y-1">
          {navItems.map((item) => {
            const active = activePath === item.href || activePath.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                  active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-violet-600 p-5 text-white shadow-soft">
          <p className="text-sm font-medium">Ready to sell</p>
          <p className="mt-2 text-sm/6 text-white/85">
            Use this build as a client starter, a paid template, or the base for your own SaaS.
          </p>
          <Link href="/" className="mt-4 inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            View landing page
          </Link>
        </div>
      </div>
    </aside>
  );
}
