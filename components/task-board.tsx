"use client";

import { useEffect, useMemo, useState } from "react";
import { tasks as seedTasks } from "@/lib/mock-data";
import { Task, Status } from "@/lib/types";
import { BadgePlus, Filter, Plus, Search } from "lucide-react";

const STORAGE_KEY = "pulseboard.tasks";

const statusLabels: Record<Status, string> = {
  todo: "To do",
  doing: "Doing",
  done: "Done",
  blocked: "Blocked"
};

const statusTone: Record<Status, string> = {
  todo: "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300",
  doing: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-300",
  done: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
  blocked: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300"
};

function loadTasks(): Task[] {
  if (typeof window === "undefined") return seedTasks;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return seedTasks;
  try {
    return JSON.parse(raw) as Task[];
  } catch {
    return seedTasks;
  }
}

export function TaskBoard() {
  const [mounted, setMounted] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [mounted, tasks]);

  const grouped = useMemo(() => {
    const filtered = tasks.filter((task) => {
      const matchesStatus = filter === "all" ? true : task.status === filter;
      const matchesQuery =
        query.trim().length === 0 ||
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.project.toLowerCase().includes(query.toLowerCase()) ||
        task.assignee.toLowerCase().includes(query.toLowerCase());
      return matchesStatus && matchesQuery;
    });

    return {
      todo: filtered.filter((task) => task.status === "todo"),
      doing: filtered.filter((task) => task.status === "doing"),
      done: filtered.filter((task) => task.status === "done"),
      blocked: filtered.filter((task) => task.status === "blocked")
    };
  }, [tasks, filter, query]);

  function moveTask(id: string, nextStatus: Status) {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, status: nextStatus } : task)));
  }

  function addDemoTask() {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: "Plan weekly stakeholder update",
      project: "Client Portal Revamp",
      status: "todo",
      priority: "medium",
      dueDate: "2026-06-20",
      assignee: "You"
    };
    setTasks((current) => [newTask, ...current]);
  }

  const columns: Status[] = ["todo", "doing", "done", "blocked"];

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Task board</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage work across the pipeline. Data persists locally for demo purposes.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/70 px-3 py-2 dark:border-slate-800">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tasks…"
              className="w-56 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as Status | "all")}
              className="rounded-2xl border border-slate-200/70 bg-transparent px-3 py-2 text-sm outline-none dark:border-slate-800"
            >
              <option value="all">All statuses</option>
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
              <option value="blocked">Blocked</option>
            </select>

            <button
              onClick={addDemoTask}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              <Plus className="h-4 w-4" />
              Quick add
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-4">
        {columns.map((status) => (
          <div key={status} className="rounded-3xl border border-slate-100 p-4 dark:border-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{statusLabels[status]}</h4>
                <p className="mt-1 text-xs text-slate-400">{(grouped[status] || []).length} tasks</p>
              </div>
              <BadgePlus className={`h-4 w-4 ${statusTone[status]}`} />
            </div>

            <div className="mt-4 space-y-3">
              {(grouped[status] || []).map((task) => (
                <article
                  key={task.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium leading-6">{task.title}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{task.project}</p>
                    </div>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-950 dark:text-slate-300">
                      {task.priority}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{task.assignee}</span>
                    <span>•</span>
                    <span>Due {task.dueDate}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {columns
                      .filter((item) => item !== task.status)
                      .map((next) => (
                        <button
                          key={next}
                          onClick={() => moveTask(task.id, next)}
                          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 dark:border-slate-800"
                        >
                          Move to {statusLabels[next]}
                        </button>
                      ))}
                  </div>
                </article>
              ))}

              {(grouped[status] || []).length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 p-5 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  No tasks in this column.
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
