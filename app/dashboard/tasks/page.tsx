import { SectionHeading } from "@/components/section-heading";
import { TaskBoard } from "@/components/task-board";

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tasks"
        title="Operational control with visual flow"
        description="Move work across statuses, filter tasks, and keep the pipeline tidy."
      />
      <TaskBoard />
    </div>
  );
}
