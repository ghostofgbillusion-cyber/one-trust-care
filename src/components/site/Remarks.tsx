import { useEffect, useState } from "react";
import { Quote, Star, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { SEED_REMARKS, type Remark } from "@/lib/site-data";

const STORAGE_KEY = "onetrust-remarks";

const remarkSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  practice: z.string().trim().max(100, "Practice is too long"),
  text: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(600, "Remark must be under 600 characters"),
});

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= value ? "fill-star text-star" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function Remarks() {
  const [remarks, setRemarks] = useState<Remark[]>(SEED_REMARKS);
  const [name, setName] = useState("");
  const [practice, setPractice] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Remark[];
        if (Array.isArray(parsed) && parsed.length) setRemarks([...parsed, ...SEED_REMARKS]);
      }
    } catch {
      /* ignore corrupted storage */
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = remarkSchema.safeParse({ name, practice, text });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const entry: Remark = {
      id: `${Date.now()}`,
      name: result.data.name,
      practice: result.data.practice || "Client",
      rating,
      text: result.data.text,
    };
    const next = [entry, ...remarks];
    setRemarks(next);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(next.filter((r) => !SEED_REMARKS.some((s) => s.id === r.id))),
      );
    } catch {
      /* storage may be unavailable */
    }
    setName("");
    setPractice("");
    setText("");
    setRating(5);
    toast.success("Thank you! Your remark has been posted.");
  };

  return (
    <section id="remarks" className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Client Remarks
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl">What our assigned clients say.</h2>
          <p className="mt-4 text-muted-foreground">
            Remarks from practices we manage day to day — credentialing, coding, AR follow-up and
            everything in between.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remarks.map((r) => (
            <article
              key={r.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <Quote className="h-6 w-6 text-emerald/40" />
              <Stars value={r.rating} className="mt-3" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-emerald text-xs font-semibold text-primary-foreground">
                  {initials(r.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy-deep">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.practice}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <form
          onSubmit={submit}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-card p-7 shadow-card"
        >
          <h3 className="font-display text-2xl">Leave your remark</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Assigned clients — tell us how our team is doing.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-navy">Full name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                placeholder="Dr. Jane Smith"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-navy">Practice / specialty</span>
              <input
                value={practice}
                onChange={(e) => setPractice(e.target.value)}
                maxLength={100}
                placeholder="Family Medicine — Texas"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald"
              />
            </label>
          </div>

          <div className="mt-4">
            <span className="text-sm font-medium text-navy">Rating</span>
            <div className="mt-1.5 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
                  onClick={() => setRating(i)}
                  className="p-0.5"
                >
                  <Star
                    className={`h-6 w-6 transition-transform hover:scale-110 ${
                      i <= rating ? "fill-star text-star" : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <label className="mt-4 block text-sm">
            <span className="font-medium text-navy">Your remark</span>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={600}
              rows={4}
              placeholder="Share your experience working with OneTrust..."
              className="mt-1.5 w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald"
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Post remark
          </button>
        </form>
      </div>
    </section>
  );
}
