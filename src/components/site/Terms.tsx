import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/site-data";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

type TermSection = {
  title: string;
  blocks: Block[];
};

const SECTIONS: TermSection[] = [
  {
    title: "1. Overview of Services",
    blocks: [
      {
        type: "p",
        text: "OneTrust provides revenue cycle management and related business support services to healthcare practices and providers. Services may include, without limitation: payer credentialing, LLC/entity registration assistance, medical coding and billing, claims submission, accounts receivable follow-up and denial management, virtual administrative and scribing support, state licensing guidance, website design, and telemarketing/outreach support.",
      },
      {
        type: "p",
        text: 'Specific scope, pricing, deliverables, and timelines for any engagement will be set out in a separate service agreement, proposal, or statement of work ("Service Agreement") between OneTrust and the Client. In the event of a conflict between these Terms and a signed Service Agreement, the Service Agreement controls.',
      },
    ],
  },
  {
    title: "2. No Guarantee of Outcomes",
    blocks: [
      {
        type: "p",
        text: "While OneTrust maintains high standards for coding accuracy and claims processing (including internal first-pass acceptance benchmarks referenced on this Site), we do not guarantee:",
      },
      {
        type: "ul",
        items: [
          "Approval, payment, or reimbursement of any specific claim by any payer;",
          "Specific revenue, collection amounts, or timelines;",
          "Approval of credentialing, licensing, or payer enrollment applications, which are subject to third-party payer and state agency decisions outside our control.",
        ],
      },
      {
        type: "p",
        text: "Statistics and figures presented on this Site (e.g., claim acceptance rates, turnaround times) reflect general performance across our client base and are not a promise of results for any individual practice.",
      },
    ],
  },
  {
    title: "3. Client Responsibilities",
    blocks: [
      {
        type: "p",
        text: "To provide our Services, Client agrees to:",
      },
      {
        type: "ul",
        items: [
          "Provide accurate, complete, and timely information, documentation, and records (including patient encounter data, provider credentials, and billing information) necessary for OneTrust to perform the Services;",
          "Promptly review and respond to requests for information or approvals;",
          "Maintain any licenses, certifications, or provider enrollments required to lawfully practice and bill for services rendered;",
          "Notify OneTrust promptly of any changes to practice information, payer contracts, or compliance requirements that may affect billing or credentialing.",
        ],
      },
      {
        type: "p",
        text: "OneTrust is not responsible for delays, denials, or errors resulting from inaccurate, incomplete, or untimely information provided by the Client.",
      },
    ],
  },
  {
    title: "4. HIPAA Compliance and Data Handling",
    blocks: [
      {
        type: "p",
        text: 'OneTrust handles Protected Health Information ("PHI") in accordance with the Health Insurance Portability and Accountability Act ("HIPAA") and applicable state and federal privacy laws. Where required, OneTrust will execute a Business Associate Agreement ("BAA") with Client prior to the exchange of PHI.',
      },
      {
        type: "p",
        text: "Client is responsible for ensuring that any information transmitted to OneTrust is submitted through secure, agreed-upon channels. For details on how we collect and handle data through the Site itself (e.g., contact form submissions), please refer to our Privacy Policy.",
      },
    ],
  },
  {
    title: "5. Fees and Payment",
    blocks: [
      {
        type: "p",
        text: "Fees for Services are set forth in the applicable Service Agreement or invoice. Unless otherwise stated:",
      },
      {
        type: "ul",
        items: [
          "Fees are due according to the payment schedule specified in the Service Agreement;",
          "Late payments may be subject to a late fee and/or suspension of Services;",
          "Client is responsible for any third-party costs (e.g., payer application fees, state licensing fees) unless otherwise agreed in writing.",
        ],
      },
    ],
  },
  {
    title: "6. No Long-Term Lock-In / Termination",
    blocks: [
      {
        type: "p",
        text: "As reflected on this Site, OneTrust generally does not require long-term contracts. Either party may terminate Services in accordance with the notice period stated in the applicable Service Agreement. Upon termination, Client remains responsible for fees accrued through the termination date, and OneTrust will reasonably cooperate in the transition of billing records and data back to Client or a successor vendor.",
      },
    ],
  },
  {
    title: "7. Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "All content on this Site — including text, graphics, logos, the OneTrust name and branding, and website design — is the property of OneTrust Medical Billing Service or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from this content without our prior written consent.",
      },
      {
        type: "p",
        text: "Any materials created for Client as part of Services (e.g., a custom website, marketing materials) will be governed by the ownership terms specified in the applicable Service Agreement.",
      },
    ],
  },
  {
    title: "8. Third-Party Links and Services",
    blocks: [
      {
        type: "p",
        text: "The Site may reference or link to third-party services (e.g., payer portals, state licensing bodies). OneTrust does not control and is not responsible for the content, policies, or practices of any third-party site or service.",
      },
    ],
  },
  {
    title: "9. Testimonials and Client Remarks",
    blocks: [
      {
        type: "p",
        text: "Client testimonials and remarks displayed on this Site reflect the individual experiences of specific clients and are not a guarantee of results for any other practice. Testimonials may be edited for length or clarity but reflect the substance of the original statement.",
      },
    ],
  },
  {
    title: "10. Disclaimer of Warranties",
    blocks: [
      {
        type: "p",
        text: 'The Site and Services are provided "as is" and "as available," without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. OneTrust does not warrant that the Site will be uninterrupted, error-free, or secure.',
      },
    ],
  },
  {
    title: "11. Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the fullest extent permitted by law, OneTrust and its owners, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost revenue or lost profits, arising out of or related to your use of the Site or the Services, even if advised of the possibility of such damages. OneTrust's total liability arising from any Service engagement shall not exceed the fees paid by Client to OneTrust for the Services giving rise to the claim in the preceding three (3) months, except where limited by an applicable Service Agreement or by law.",
      },
    ],
  },
  {
    title: "12. Indemnification",
    blocks: [
      {
        type: "p",
        text: "You agree to indemnify and hold harmless OneTrust, its owners, employees, and contractors from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your breach of these Terms, your violation of applicable law, or inaccurate information you provide to OneTrust.",
      },
    ],
  },
  {
    title: "13. Governing Law and Dispute Resolution",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Services shall first be addressed through good-faith negotiation, and if unresolved, may be subject to binding arbitration or the exclusive jurisdiction of the courts located in Texas, as agreed by the parties.",
      },
    ],
  },
  {
    title: "14. Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: 'OneTrust may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site or Services after changes are posted constitutes acceptance of the revised Terms.',
      },
    ],
  },
  {
    title: "15. Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Terms, please contact us:",
      },
    ],
  },
];

export function Terms() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-secondary blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-3xl px-5">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Legal
        </span>
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last Updated: September 18, 2026
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              These Terms and Conditions ("Terms") are a binding agreement between OneTrust Medical
              Billing Service ("OneTrust," "Company," "we," "us," or "our"), a company based in
              Texas, and any person or entity that accesses our website, {BUSINESS.site} (the
              "Site"), or engages our services, including credentialing, medical billing and coding,
              state licensing support, virtual assistance, virtual scribing, AR follow-up and denial
              management, website design and digital media, and telemarketing services
              (collectively, the "Services").
            </p>
            <p>
              By accessing the Site, submitting a form, requesting a consultation, or engaging our
              Services, you ("Client," "you," or "your") accept and agree to be bound by these
              Terms. If you do not agree to these Terms, please discontinue use of the Site and do
              not engage our Services.
            </p>
          </div>

          {SECTIONS.map((section) => (
            <article key={section.title} className="border-t border-border pt-8">
              <h2 className="font-display text-xl text-navy-deep">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {section.blocks.map((block, i) =>
                  block.type === "p" ? (
                    <p key={i}>{block.text}</p>
                  ) : (
                    <ul key={i} className="list-disc space-y-2 pl-5">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
                {section.title.startsWith("15.") && (
                  <div className="rounded-2xl border border-border bg-secondary/60 p-5 text-navy">
                    <p className="font-display text-base font-semibold text-navy-deep">
                      {BUSINESS.name}
                    </p>
                    <p className="mt-3">
                      Email:{" "}
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="font-medium text-emerald hover:underline"
                      >
                        {BUSINESS.email}
                      </a>
                    </p>
                    <p className="mt-1">
                      Phone:{" "}
                      <a
                        href={BUSINESS.phoneHref}
                        className="font-medium text-emerald hover:underline"
                      >
                        {BUSINESS.phone}
                      </a>
                    </p>
                    <p className="mt-1">Website: {BUSINESS.site}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Questions about billing or our services?{" "}
          <Link to="/" hash="contact" className="font-medium text-emerald hover:underline">
            Contact OneTrust
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
