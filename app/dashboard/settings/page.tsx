import { SectionHeading } from "@/components/section-heading";

const settings = [
  ["Profile", "Edit name, avatar, and contact details"],
  ["Workspace", "Branding, members, and permissions"],
  ["Billing", "Plans, invoices, and payment method"],
  ["Security", "2FA, sessions, and access control"]
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Settings"
        title="Product-grade configuration space"
        description="This page gives the app a believable SaaS structure and clear next steps."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {settings.map(([title, text]) => (
          <div
            key={title}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
