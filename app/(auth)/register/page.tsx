import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles, UserPlus } from "lucide-react";

const benefits = [
  "Fast setup for demos and real clients",
  "Built to support teams, founders, and solo builders",
  "Looks polished enough to sell on day one"
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-soft dark:from-white dark:to-slate-100 dark:text-slate-950 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_24%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">PulseBoard Pro</p>
                  <p className="text-xs text-white/65 dark:text-slate-500">Create your workspace</p>
                </div>
              </div>

              <h1 className="mt-8 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">
                Create a workspace that feels ready for serious work.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 dark:text-slate-600">
                A signup flow that matches the rest of the product and helps the app feel like a complete SaaS.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {benefits.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur dark:border-slate-200/60 dark:bg-white/80">
                  <BadgeCheck className="h-5 w-5 text-emerald-300 dark:text-emerald-600" />
                  <p className="mt-3 text-sm leading-6 text-white/80 dark:text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center rounded-[2.25rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="w-full max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <UserPlus className="h-4 w-4" />
              Start free
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight">Create your account</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Set up a polished workspace for projects, analytics, and client delivery.
            </p>

            <form className="mt-8 space-y-4">
              <label className="block text-sm font-medium">
                Full name
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 outline-none transition focus:border-slate-400 dark:border-slate-800"
                  placeholder="Ahmed Darwish"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 outline-none transition focus:border-slate-400 dark:border-slate-800"
                  placeholder="you@company.com"
                  type="email"
                />
              </label>
              <label className="block text-sm font-medium">
                Password
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 outline-none transition focus:border-slate-400 dark:border-slate-800"
                  placeholder="Create a strong password"
                  type="password"
                />
              </label>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
                Create account
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <Link href="/login" className="font-medium text-slate-900 dark:text-white">
                Sign in
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
