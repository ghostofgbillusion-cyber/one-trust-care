import { PROCESS_STEPS } from "@/lib/site-data";
import { UserRoundCheck, PieChart, FileSignature, ShieldCheck, Lock, FileBadge } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-sand p-8 shadow-soft sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              A clear, five-step path from claim to cash.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl bg-card p-5 shadow-soft">
                <div className="font-display text-2xl text-emerald">{s.num}</div>
                <h3 className="mt-2 font-display text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: UserRoundCheck,
    title: "Dedicated Account Manager",
    text: "One point of contact who knows your practice — not a rotating call center.",
  },
  {
    icon: PieChart,
    title: "Transparent Reporting",
    text: "Clear, regular reports on claims, denials, and collections — no black box.",
  },
  {
    icon: FileSignature,
    title: "No Long-Term Lock-In",
    text: "We earn your business every month with results, not fine print.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Why Practices Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Billing support that acts like part of your team.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-emerald text-primary-foreground shadow-glow">
                <w.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-brand p-8 shadow-card sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
                Built On Trust
              </span>
              <h3 className="mt-3 font-display text-3xl text-primary-foreground">
                A billing partner your patients — and your books — can rely on.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Every claim is handled by certified coders under a HIPAA-compliant process, with
                clear reporting so you always know exactly where your revenue stands.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "HIPAA Compliant" },
                { icon: FileBadge, label: "Certified Coders" },
                { icon: Lock, label: "Encrypted Data Handling" },
                { icon: PieChart, label: "Transparent Billing" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-card/10 px-4 py-3 text-sm font-medium text-primary-foreground"
                >
                  <b.icon className="h-4 w-4 text-emerald-light" /> {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
