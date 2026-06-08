import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/mock-data";
import { CalendarDays, Target, Users, ArrowUpRight } from "lucide-react";

const statusTone: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  paused: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  completed: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio of active workstreams"
        description="Track delivery, health, team size, and due dates across all projects."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{project.description}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusTone[project.status]}`}>
                {project.status}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-slate-100 dark:bg-slate-900">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-sm font-semibold">{project.progress}%</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/50">
                <Users className="h-4 w-4" />
                <p className="mt-2 font-semibold">{project.members}</p>
                <p className="text-slate-500 dark:text-slate-400">Members</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/50">
                <Target className="h-4 w-4" />
                <p className="mt-2 font-semibold">{project.tasks}</p>
                <p className="text-slate-500 dark:text-slate-400">Tasks</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/50">
                <CalendarDays className="h-4 w-4" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide">Due</p>
                <p className="text-slate-500 dark:text-slate-400">{project.dueDate}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
