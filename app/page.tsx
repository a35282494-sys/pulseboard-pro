import Link from "next/link";
import { ArrowRight, BadgeCheck, LockKeyhole, Sparkles, ShieldCheck } from "lucide-react";

const metrics = [
  { value: "10x", label: "faster client delivery" },
  { value: "100%", label: "portfolio-ready presentation" },
  { value: "1", label: "project away from revenue" }
];

const features = [
  {
    icon: Workflow,
    title: "Product-first structure",
    text: "Landing page, auth screens, dashboard, analytics, and settings already feel like one product."
  },
  {
    icon: BarChart3,
    title: "Executive dashboards",
    text: "The overview gives clients instant confidence with KPI cards, charts, and action-focused layout."
  },
  {
    icon: ShieldCheck,
    title: "Production-minded UI",
    text: "Responsive spacing, dark mode, reusable shells, and clean hierarchy make the app feel expensive."
  },
  {
    icon: Layers3,
    title: "Easy to customize",
    text: "Each page is separated cleanly so you can swap colors, copy, data, or brand in minutes."
  },
  {
    icon: CircleDollarSign,
    title: "Built to monetize",
    text: "Sell it as a template, a starter kit, or a client-ready dashboard without rebuilding the foundation."
  },
  {
    icon: LockKeyhole,
    title: "Auth-ready experience",
    text: "Login and register screens give the product a believable SaaS flow from first impression to dashboard."
  }
];

const pricing = [
  {
    name: "Template",
    price: "$29",
    description: "Best for selling the starter kit itself.",
    items: ["Landing page", "Dashboard shell", "Auth screens", "GitHub-ready structure"]
  },
  {
    name: "Client Project",
    price: "$149+",
    description: "Best for freelance work and custom delivery.",
    items: ["Brand changes", "Feature tailoring", "Deploy setup", "Handoff support"]
  },
  {
    name: "SaaS Base",
    price: "Custom",
    description: "Best for turning it into a real product.",
    items: ["Billing", "Database wiring", "Multi-tenant setup", "Production auth"]
  }
];

const faq = [
  {
    question: "Is this ready to show a client?",
    answer:
      "Yes. The product already looks polished enough for proposals, demos, and portfolio reviews."
  },
  {
    question: "Can I turn it into a real SaaS?",
    answer:
      "Yes. The structure is already close to a proper product; you mainly need auth, data, billing, and deployment."
  },
  {
    question: "Can I resell it as a template?",
    answer:
      "Yes. It is intentionally built to look premium and be packaged as a paid starter kit."
  },
  {
    question: "What should I do next?",
    answer:
      "Deploy it, add a live demo, and start sending it to prospects instead of polishing endlessly."
  }
];

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden px-4 py-6 text-slate-900 dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_22%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <header className="glass flex flex-wrap items-center justify-between gap-4 rounded-full px-5 py-3 shadow-soft">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">PulseBoard Pro</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Premium SaaS starter kit</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-500 md:flex">
            <a href="#features" className="transition hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-slate-900 dark:hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-slate-900 dark:hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              Open demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <BadgeCheck className="h-4 w-4" />
              Portfolio-grade SaaS UI ready for clients, demos, and resale
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
              A dashboard that looks like a real product on the first click.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              PulseBoard Pro gives you a polished landing page, authenticated dashboard experience,
              analytics, tasks, projects, team pages, and a clean codebase that is easy to package,
              sell, or turn into your own SaaS.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
              >
                Launch demo
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950"
              >
                View pricing
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-500/15 via-transparent to-violet-500/15 blur-3xl" />
            <div className="rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white dark:bg-white dark:text-slate-950">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55 dark:text-slate-500">Product snapshot</p>
                    <h2 className="mt-3 text-2xl font-semibold">North Star Studio</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-medium text-white/80 dark:bg-slate-950/5 dark:text-slate-500">
                    Live demo
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    ["Monthly revenue", "$24.5k"],
                    ["Task completion", "87%"],
                    ["Active users", "1,248"],
                    ["Open projects", "12"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl bg-white/10 p-4 dark:bg-slate-950/5">
                      <p className="text-xs text-white/70 dark:text-slate-500">{label}</p>
                      <p className="mt-2 text-2xl font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 dark:border-slate-200/60 dark:bg-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span>Weekly momentum</span>
                    <span className="font-medium text-emerald-400 dark:text-emerald-600">+18.2%</span>
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-2">
                    {[42, 58, 47, 70, 64, 52, 78].map((bar, index) => (
                      <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-500 to-violet-600" style={{ height: `${bar}%` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ["Client-ready structure", "Landing page, app shell, and dashboard pages feel complete."],
                  ["Easy monetization", "Sell it as a template, client starter, or SaaS base."],
                  ["Fast to extend", "Typed, modular, and simple to wire to real data."]
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-3xl border border-slate-100 p-4 dark:border-slate-900"
                  >
                    <div className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-sm font-semibold dark:bg-slate-900">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-6 py-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built like a product, not a demo.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Every section is designed to help you look credible to clients, move faster with freelance work,
              and ship a nicer first version of your own SaaS.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              Why it sells
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">A confident offer instead of random code.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Clients buy clarity. This build gives you a clear story: modern dashboard, polished auth flow,
              real app sections, and a strong visual system that feels expensive without extra work.
            </p>
            <div className="mt-6 space-y-3">
              {[
                [Rocket, "Quick to deploy on Vercel"],
                [Users, "Easy to pitch to startups and small businesses"],
                [Gauge, "Strong enough for a live demo today"],
                [LifeBuoy, "Simple enough to maintain later"]
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/50">
                  <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  <span className="text-sm font-medium">{label as string}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="pricing" className="grid gap-4 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-6 shadow-soft ${
                  index === 1
                    ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950"
                    : "border-slate-200/70 bg-white dark:border-slate-800 dark:bg-slate-950"
                }`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${index === 1 ? "text-white/70 dark:text-slate-500" : "text-sky-600 dark:text-sky-400"}`}>
                  {plan.name}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                </div>
                <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-white/75 dark:text-slate-600" : "text-slate-500 dark:text-slate-400"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck className={`mt-0.5 h-4 w-4 ${index === 1 ? "text-emerald-300 dark:text-emerald-600" : "text-emerald-500 dark:text-emerald-400"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    index === 1
                      ? "bg-white text-slate-950 dark:bg-slate-950 dark:text-white"
                      : "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                  }`}
                >
                  Choose plan
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Clear answers for the next buyer.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="pb-10 pt-4">
          <div className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-soft dark:from-white dark:to-slate-100 dark:text-slate-950">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 dark:text-slate-500">
                Ready to ship
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Turn this into revenue instead of a folder on your laptop.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75 dark:text-slate-600">
                Deploy the demo, show the dashboard, and start pitching a premium web app that already looks finished.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
              >
                Open dashboard
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:border-slate-300 dark:text-slate-950"
              >
                Create account
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
