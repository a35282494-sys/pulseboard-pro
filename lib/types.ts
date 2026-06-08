export type Status = "todo" | "doing" | "done" | "blocked";

export type Task = {
  id: string;
  title: string;
  project: string;
  status: Status;
  priority: "low" | "medium" | "high";
  dueDate: string;
  assignee: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  progress: number;
  members: number;
  tasks: number;
  dueDate: string;
  status: "active" | "paused" | "completed";
};

export type Activity = {
  id: string;
  title: string;
  time: string;
  type: "task" | "project" | "billing" | "system";
};

export type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "neutral" | "warning";
};
