"use client";

import { Bell, Search, Plus, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Topbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200/70 pb-5 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
          <Sparkles className="h-3.5 w-3.5" />
          Workspace overview
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950 md:flex">
          <Search className="h-4 w-4 text-slate-500" />
          <span className="text-slate-500 dark:text-slate-400">Search dashboards, reports…</span>
        </div>
        <button className="hidden items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950 md:inline-flex">
          <Plus className="h-4 w-4" />
          New
        </button>
        <ThemeToggle />
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
