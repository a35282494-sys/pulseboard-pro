import { AppShell } from "@/components/app-shell";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      title="Dashboard"
      subtitle="A premium workspace for projects, analytics, team operations, and client delivery."
    >
      {children}
    </AppShell>
  );
}
