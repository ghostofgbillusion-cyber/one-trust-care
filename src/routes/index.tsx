import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process, WhyUs } from "@/components/site/Process";
import { Remarks } from "@/components/site/Remarks";
import { Faq } from "@/components/site/Faq";
import { Contact, TrustBand } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BUSINESS, SERVICES, FAQS } from "@/lib/site-data";

const TITLE = "OneTrust Medical Billing Service | Accurate Billing. Better Results.";
const DESC =
  "Full-service RCM: credentialing, medical billing & coding, state licensing, virtual assistance & scribing, AR follow-up, website design and telemarketing.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: BUSINESS.name,
          email: BUSINESS.email,
          telephone: BUSINESS.phone,
          slogan: BUSINESS.tagline,
          description: DESC,
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.desc },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Remarks />
        <Faq />
        <TrustBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
