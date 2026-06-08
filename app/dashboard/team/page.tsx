import { SectionHeading } from "@/components/section-heading";

const team = [
  ["Mina", "Product design", "Lead"],
  ["Omar", "Backend", "Member"],
  ["Sarah", "QA", "Member"],
  ["Yousef", "Data", "Member"]
];

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Team"
        title="Simple team view"
        description="A lightweight page that keeps the app feeling complete and product-oriented."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {team.map(([name, role, label]) => (
          <div
            key={name}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600" />
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{role}</p>
            <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide dark:bg-slate-900">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
