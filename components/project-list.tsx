import { projects } from "@/lib/mock-data";
import { CalendarDays, CircleDashed, Users, ArrowUpRight } from "lucide-react";

const statusTone: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  paused: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  completed: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
};

export function ProjectList() {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">4 active workstreams with visible delivery signals.</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-400" />
      </div>

      <div className="mt-5 grid gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl border border-slate-100 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold">{project.name}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusTone[project.status]}`}>
                {project.status}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-600" style={{ width: `${project.progress}%` }} />
              </div>
              <p className="text-sm font-semibold">{project.progress}%</p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {project.members} members
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleDashed className="h-4 w-4" />
                {project.tasks} tasks
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                Due {project.dueDate}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
