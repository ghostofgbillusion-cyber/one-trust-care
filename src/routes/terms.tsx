import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Terms } from "@/components/site/Terms";

const TITLE = "Terms and Conditions | OneTrust Medical Billing Service";
const DESC =
  "Terms and Conditions for OneTrust Medical Billing Service — credentialing, medical billing, and related RCM services.";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Terms />
      </main>
      <Footer />
    </div>
  );
}
