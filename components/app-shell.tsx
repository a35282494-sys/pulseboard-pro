"use client";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { usePathname } from "next/navigation";

export function AppShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen p-3 text-slate-900 dark:text-slate-100 sm:p-4">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        <Sidebar activePath={pathname} />

        <main className="min-w-0 flex-1">
          <div className="glass rounded-[2rem] p-4 shadow-soft sm:p-5 lg:p-6">
            <Topbar title={title} subtitle={subtitle} />
            <div className="mt-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
