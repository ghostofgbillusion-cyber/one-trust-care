import { useState } from "react";
import { Mail, Phone, Globe, Lock, Handshake, CalendarCheck, ShieldCheck, CheckCircle2, LineChart, Stethoscope } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { BUSINESS } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  specialty: z.string().trim().max(100),
  message: z.string().trim().max(1000),
});

export function TrustBand() {
  const items = [
    { icon: ShieldCheck, label: "HIPAA Compliant" },
    { icon: CheckCircle2, label: "99.5% Claim Acceptance" },
    { icon: Stethoscope, label: "Certified Coders (CPC, CCS)" },
    { icon: LineChart, label: "Free AR Analysis" },
  ];
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6">
        {items.map((i) => (
          <span key={i.label} className="inline-flex items-center gap-2 text-sm font-medium text-navy">
            <i.icon className="h-4 w-4 text-emerald" /> {i.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, email, specialty, message });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const d = result.data;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nPractice / Specialty: ${d.specialty || "—"}\n\n${d.message || "I'd like to book an appointment."}`;
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      `Appointment request — ${d.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Your email is ready to send — we'll reply within 2 hours.");
  };

  const field =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald";

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Book an Appointment</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Schedule a free consultation with our RCM experts. We'll review your revenue cycle and
              show you where you're leaving money on the table.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-navy transition-colors hover:text-emerald"
              >
                <Mail className="h-4 w-4 text-emerald" /> {BUSINESS.email}
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-navy transition-colors hover:text-emerald"
              >
                <Phone className="h-4 w-4 text-emerald" /> {BUSINESS.phone}
              </a>
              <span className="flex items-center gap-3 text-navy">
                <Globe className="h-4 w-4 text-emerald" /> {BUSINESS.site}
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-sand p-6">
              <Handshake className="h-6 w-6 text-emerald" />
              <h3 className="mt-3 font-display text-lg">30-Minute Free Consultation</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Speak directly with a billing expert. No obligation, just honest advice.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                <CalendarCheck className="h-4 w-4" /> Call to Schedule
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5 text-emerald" /> Your information is secure &amp;
              HIPAA-ready.
            </p>
          </div>

          <form onSubmit={submit} className="rounded-2xl bg-sand p-6 sm:p-7">
            <h3 className="font-display text-xl">Request a Callback</h3>
            <label className="mt-5 block text-sm">
              <span className="font-medium text-navy">Full name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} placeholder="Dr. Jane Smith" className={field} />
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-medium text-navy">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" maxLength={255} placeholder="practice@clinic.com" className={field} />
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-medium text-navy">Practice / specialty</span>
              <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} maxLength={100} placeholder="Family Medicine, Cardiology, etc." className={field} />
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-medium text-navy">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={4} placeholder="Tell us what you need help with..." className={`${field} resize-y`} />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </button>
            {sent && (
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald">
                <CheckCircle2 className="h-4 w-4" /> Thank you! We'll reach out within 2 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
