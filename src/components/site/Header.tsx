import { Menu, X, ShieldCheck, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../../public/logo.jpg";
import { BUSINESS } from "@/lib/site-data";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#remarks", label: "Client Remarks" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-card/95 shadow-soft backdrop-blur" : "bg-card/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="OneTrust Medical Billing Service logo"
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy-deep">
              One<span className="text-emerald">Trust</span>
            </span>
            <span className="block text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
              MEDICAL BILLING SERVICE
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy transition-colors hover:text-emerald"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ShieldCheck className="h-4 w-4" /> Free Audit
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-navy-deep lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-navy hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-emerald px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
