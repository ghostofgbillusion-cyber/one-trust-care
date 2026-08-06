import { Mail, Phone, Globe } from "lucide-react";
import logo from "/logo.jpg";
import { BUSINESS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-gradient-brand">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="OneTrust logo" className="h-11 w-11 rounded-lg object-cover" />
              <span className="font-display text-xl font-semibold text-primary-foreground">
                OneTrust
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              {BUSINESS.tagline} Revenue cycle management built for independent practices.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              {[
                { href: "#services", label: "Services" },
                { href: "#process", label: "Process" },
                { href: "#why", label: "Why Us" },
                { href: "#remarks", label: "Client Remarks" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-emerald-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              {SERVICES.map((s) => (
                <li key={s.key}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="inline-flex items-start gap-2 break-all transition-colors hover:text-emerald-light">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {BUSINESS.email}
                </a>
              </li>
              <li>
                <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-emerald-light">
                  <Phone className="h-4 w-4" /> {BUSINESS.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" /> {BUSINESS.site}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name} — All rights reserved.</p>
          <p>HIPAA-compliant workflows · Certified coders</p>
        </div>
      </div>
    </footer>
  );
}
