import { Activity, Metric, Project, Task } from "./types";

export const metrics: Metric[] = [
  { label: "Revenue", value: "$24,500", delta: "+18.2%", tone: "positive" },
  { label: "Active Users", value: "1,248", delta: "+11.4%", tone: "positive" },
  { label: "Completion", value: "87%", delta: "+6.1%", tone: "neutral" },
  { label: "Overdue", value: "14", delta: "-3.0%", tone: "warning" }
];

export const projects: Project[] = [
  {
    id: "p1",
    name: "Client Portal Revamp",
    description: "Redesign the onboarding and billing experience for enterprise customers.",
    progress: 82,
    members: 6,
    tasks: 28,
    dueDate: "2026-07-14",
    status: "active"
  },
  {
    id: "p2",
    name: "Mobile Analytics",
    description: "Ship a mobile-first analytics experience for field operators.",
    progress: 64,
    members: 4,
    tasks: 16,
    dueDate: "2026-06-28",
    status: "active"
  },
  {
    id: "p3",
    name: "Billing Automation",
    description: "Automate subscriptions, invoices, and dunning flows.",
    progress: 91,
    members: 5,
    tasks: 19,
    dueDate: "2026-06-18",
    status: "paused"
  },
  {
    id: "p4",
    name: "Internal Ops Hub",
    description: "One place for support, operations, and customer health.",
    progress: 100,
    members: 3,
    tasks: 12,
    dueDate: "2026-06-01",
    status: "completed"
  }
];

export const tasks: Task[] = [
  {
    id: "t1",
    title: "Design onboarding flow",
    project: "Client Portal Revamp",
    status: "doing",
    priority: "high",
    dueDate: "2026-06-11",
    assignee: "Mina"
  },
  {
    id: "t2",
    title: "Connect Stripe webhooks",
    project: "Billing Automation",
    status: "todo",
    priority: "high",
    dueDate: "2026-06-09",
    assignee: "Omar"
  },
  {
    id: "t3",
    title: "QA the settings page",
    project: "Internal Ops Hub",
    status: "done",
    priority: "medium",
    dueDate: "2026-06-07",
    assignee: "Sarah"
  },
  {
    id: "t4",
    title: "Polish chart tooltips",
    project: "Mobile Analytics",
    status: "doing",
    priority: "medium",
    dueDate: "2026-06-12",
    assignee: "Yousef"
  },
  {
    id: "t5",
    title: "Ship invite email template",
    project: "Client Portal Revamp",
    status: "blocked",
    priority: "low",
    dueDate: "2026-06-15",
    assignee: "Lina"
  },
  {
    id: "t6",
    title: "Add export CSV action",
    project: "Mobile Analytics",
    status: "todo",
    priority: "medium",
    dueDate: "2026-06-17",
    assignee: "Hassan"
  }
];

export const activities: Activity[] = [
  { id: "a1", title: "Invoice #204 approved", time: "2 min ago", type: "billing" },
  { id: "a2", title: "Mina moved a task to Done", time: "19 min ago", type: "task" },
  { id: "a3", title: "New workspace created", time: "1 hour ago", type: "system" },
  { id: "a4", title: "Billing Automation hit 91%", time: "3 hours ago", type: "project" }
];

export const chartData = [
  { name: "Mon", completed: 22, created: 28 },
  { name: "Tue", completed: 34, created: 30 },
  { name: "Wed", completed: 28, created: 26 },
  { name: "Thu", completed: 40, created: 38 },
  { name: "Fri", completed: 33, created: 29 },
  { name: "Sat", completed: 27, created: 24 },
  { name: "Sun", completed: 44, created: 35 }
];
