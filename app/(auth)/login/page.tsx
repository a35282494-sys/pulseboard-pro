import Link from "next/link";
import { ArrowRight, BadgeCheck, LockKeyhole, Sparkles, ShieldCheck } from "lucide-react";
const benefits = [
  "Secure workspace access",
  "Dashboard, projects, and analytics in one place",
  "Ready for teams, clients, and product demos"
];

export default function LoginPage() {
  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-soft dark:border-slate-800 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_24%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">PulseBoard Pro</p>
                  <p className="text-xs text-white/65">Premium workspace login</p>
                </div>
              </div>

              <h1 className="mt-8 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">
                Sign in to a dashboard that already feels premium.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                This screen is built to look trustworthy in a client demo and clean enough to plug into
                NextAuth, Clerk, or any custom backend.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <BadgeCheck className="h-5 w-5 text-emerald-300" />
                  <p className="mt-3 text-sm leading-6 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center rounded-[2.25rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="w-full max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <ShieldCheck className="h-4 w-4" />
              Secure access
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Continue to your workspace, projects, and analytics overview.
            </p>

            <form className="mt-8 space-y-4">
              <label className="block text-sm font-medium">
                Email
                <div className="relative mt-2">
                  <input
                    className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 pr-12 outline-none transition focus:border-slate-400 dark:border-slate-800"
                    placeholder="you@company.com"
                    type="email"
                  />
                  <LockKeyhole className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </label>
              <label className="block text-sm font-medium">
                Password
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 outline-none transition focus:border-slate-400 dark:border-slate-800"
                  placeholder="••••••••"
                  type="password"
                />
              </label>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <Link href="/register" className="font-medium text-slate-900 dark:text-white">
                Create account
              </Link>
              <a href="/dashboard" className="font-medium text-sky-600 dark:text-sky-400">
                Open demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
