import { useState } from "react";
import {
  IdCard,
  FileText,
  Gavel,
  Headset,
  PenLine,
  Undo2,
  Globe,
  PhoneCall,
  ArrowRight,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  IdCard,
  FileText,
  Gavel,
  Headset,
  PenLine,
  Undo2,
  Globe,
  PhoneCall,
};

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Everything your revenue cycle needs, under one roof.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From getting you credentialed to chasing down every dollar owed — our team handles the
            full billing lifecycle so nothing slips through the cracks.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? FileText;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(s)}
                className="group rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-emerald">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald">
                  View details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/60 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
            className="reveal-up relative w-full max-w-lg rounded-2xl bg-card p-7 shadow-card"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="pr-8 font-display text-2xl">{active.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{active.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {active.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setActive(null)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Ask About This Service
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
