import { FileCheck2, CalendarCheck, Lock, Percent, Award, Phone } from "lucide-react";
import logo from "@/assets/onetrust-logo.jpeg.asset.json";
import { BUSINESS } from "@/lib/site-data";

const ORBIT = [
  { label: "Credential", style: "top-[2%] left-1/2" },
  { label: "Code", style: "top-[26%] left-[88%]" },
  { label: "Bill", style: "top-[76%] left-[80%]" },
  { label: "Collect", style: "top-[76%] left-[20%]" },
  { label: "Reconcile", style: "top-[26%] left-[12%]" },
];

const STATS = [
  { num: "99.5%", label: "First-pass claim acceptance" },
  { num: "24-48H", label: "Average claim turnaround" },
  { num: "8+", label: "Specialties supported" },
  { num: "100%", label: "HIPAA-compliant workflow" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-4">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-secondary blur-3xl opacity-70" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal-up">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Revenue Cycle Management
          </span>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Get paid for the care
            <br />
            you <span className="text-emerald">already provided.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            From credentialing to collections, OneTrust manages your entire revenue cycle —
            accurate coding, faster claims, fewer denials — so your team can focus on patients,
            not paperwork.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <FileCheck2 className="h-4 w-4" /> Get Your Free Revenue Audit
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-semibold text-navy-deep shadow-soft transition-colors hover:bg-secondary"
            >
              <CalendarCheck className="h-4 w-4" /> Book an Appointment
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-accent px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-navy-light">
            <span className="inline-flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-emerald" /> HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Percent className="h-3.5 w-3.5 text-emerald" /> 99.5% First-Pass Acceptance
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="h-3.5 w-3.5 text-emerald" /> Certified Coders (CPC / CCS)
            </span>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-emerald/30" />
          <div className="absolute inset-16 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full bg-card shadow-card">
            <img src={logo.url} alt="OneTrust icon" className="h-14 w-14 rounded-full object-cover" />
            <span className="text-xs font-semibold uppercase tracking-wider text-navy">
              Revenue Cycle
            </span>
          </div>
          {ORBIT.map((o) => (
            <div
              key={o.label}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-card px-4 py-2 text-xs font-semibold text-navy-deep shadow-soft ${o.style}`}
            >
              {o.label}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-6">
        <div className="grid gap-6 rounded-3xl bg-gradient-brand px-8 py-9 text-center shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-primary-foreground">
                {s.num}
              </div>
              <div className="mt-1 text-xs text-primary-foreground/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
