import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Answers before you ask.</h2>
          <p className="mt-4 text-muted-foreground">
            Can't find what you're looking for? Reach out through the contact form below.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base text-navy-deep">{f.q}</span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-emerald">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
