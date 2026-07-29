export const BUSINESS = {
  name: "OneTrust Medical Billing Service",
  tagline: "One Trust. Accurate Billing. Better Results.",
  email: "service@onetrustmedicalbillingservice.com",
  phone: "+1 209 294 0014",
  phoneHref: "tel:+12092940014",
  site: "onetrustmedicalbillingservice.com",
};

export type ServiceKey =
  | "credentialing"
  | "billing"
  | "licensing"
  | "virtual"
  | "scribing"
  | "denials"
  | "website"
  | "telemarketing";

export type Service = {
  key: ServiceKey;
  icon: string;
  title: string;
  short: string;
  desc: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    key: "credentialing",
    icon: "IdCard",
    title: "Credentialing & LLC Registration",
    short: "Payer enrollment and entity formation handled start to finish.",
    desc: "We get you enrolled with insurance payers and, if needed, handle your entity formation — so you can legally bill and collect from day one.",
    points: [
      "Payer enrollment (Medicare, Medicaid, commercial)",
      "NPI & CAQH profile setup and maintenance",
      "LLC / entity formation guidance",
      "Re-credentialing and roster updates",
    ],
  },
  {
    key: "billing",
    icon: "FileText",
    title: "Medical Billing & Coding",
    short: "Certified coders ensure accurate, compliant claims every time.",
    desc: "Certified coders translate every encounter into a clean, compliant claim — reducing rejections and speeding up payment.",
    points: [
      "CPC / CCS certified coding staff",
      "ICD-10, CPT & HCPCS accuracy checks",
      "Claims scrubbed before submission",
      "Specialty-specific coding expertise",
    ],
  },
  {
    key: "licensing",
    icon: "Gavel",
    title: "State Licensing Support",
    short: "Guidance through licensing requirements across states.",
    desc: "Navigating state-by-state licensing requirements is complex — we guide you through the paperwork so nothing delays your ability to practice.",
    points: [
      "State medical board application support",
      "License renewal tracking",
      "Multi-state practice guidance",
      "Compliance document preparation",
    ],
  },
  {
    key: "virtual",
    icon: "Headset",
    title: "Virtual Assistance",
    short: "Trained virtual staff to support front and back office tasks.",
    desc: "Trained virtual staff support your front and back office — scheduling, patient calls, and admin work — without the overhead of an in-house hire.",
    points: [
      "Appointment scheduling & reminders",
      "Insurance verification calls",
      "Patient intake support",
      "Inbox & call triage",
    ],
  },
  {
    key: "scribing",
    icon: "PenLine",
    title: "Virtual Scribing",
    short: "Real-time documentation support during patient visits.",
    desc: "A live scribe documents the visit in real time, so providers can stay focused on the patient instead of the screen.",
    points: [
      "Real-time EHR documentation",
      "Reduced after-hours charting",
      "Specialty-trained scribes",
      "HIPAA-compliant remote workflow",
    ],
  },
  {
    key: "denials",
    icon: "Undo2",
    title: "AR Follow-Up & Denial Management",
    short: "Persistent follow-up and appeals to recover owed revenue.",
    desc: "We chase every unpaid and denied claim, file appeals, and stay on payers until the balance is resolved.",
    points: [
      "Aging AR review & prioritization",
      "Denial root-cause analysis",
      "Appeals filed on your behalf",
      "Monthly AR performance reporting",
    ],
  },
  {
    key: "website",
    icon: "Globe",
    title: "Website Design & Digital Media",
    short: "A professional online presence that builds patient trust.",
    desc: "A clean, professional online presence that builds trust with prospective patients before they ever call your office.",
    points: [
      "Custom practice website",
      "Mobile-friendly, HIPAA-aware design",
      "Basic SEO setup",
      "Social & digital media management",
    ],
  },
  {
    key: "telemarketing",
    icon: "PhoneCall",
    title: "TeleMarketing",
    short: "Outreach support to help grow your patient base.",
    desc: "Outbound outreach support to help grow your patient base and fill your schedule.",
    points: [
      "Outbound call campaigns",
      "Appointment-setting support",
      "Lead follow-up",
      "Call scripting & reporting",
    ],
  },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Credential", text: "We enroll you with payers and verify eligibility." },
  { num: "02", title: "Code & Enter Charges", text: "Certified coders translate visits into clean claims." },
  { num: "03", title: "Submit Claims", text: "Claims are scrubbed and submitted within 24-48 hours." },
  { num: "04", title: "Follow Up & Appeal", text: "We chase denials and resubmit until they're resolved." },
  { num: "05", title: "Reconcile & Report", text: "Transparent reporting on every dollar collected." },
];

export const FAQS = [
  {
    q: "How long does onboarding take?",
    a: "Most practices are fully onboarded and submitting claims through OneTrust within 5-10 business days, depending on credentialing status with your payers.",
  },
  {
    q: "Do you work with my specific specialty?",
    a: "Our certified coders support a wide range of specialties. Tell us about your practice during the free audit and we'll confirm fit before you commit to anything.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We work month-to-month and earn your business with results, not fine print.",
  },
  {
    q: "How is my patient data protected?",
    a: "All data handling follows HIPAA-compliant processes, with encrypted transmission and restricted, need-to-know access across our team.",
  },
  {
    q: "What does the free revenue audit involve?",
    a: "Send us a recent sample of claims and we'll review acceptance rates, denial patterns, and AR aging to show you concrete opportunities — no obligation.",
  },
];

export type Remark = {
  id: string;
  name: string;
  practice: string;
  rating: number;
  text: string;
};

export const SEED_REMARKS: Remark[] = [
  {
    id: "r1",
    name: "Dr. Amanda Reyes",
    practice: "Family Medicine — Texas",
    rating: 5,
    text: "Our first-pass acceptance jumped within the first two months. OneTrust cleaned up coding errors we didn't even know we had, and collections have been steady ever since.",
  },
  {
    id: "r2",
    name: "Dr. Michael Osei",
    practice: "Internal Medicine — Georgia",
    rating: 5,
    text: "Credentialing used to take us months of back-and-forth. Their team handled every payer application and kept me updated weekly until everything was approved.",
  },
  {
    id: "r3",
    name: "Sarah Whitfield, PA-C",
    practice: "Urgent Care — Ohio",
    rating: 5,
    text: "The AR follow-up team recovered aged claims we had written off. Genuinely the most responsive billing partner we have worked with.",
  },
  {
    id: "r4",
    name: "Dr. Priya Nandan",
    practice: "Pediatrics — New Jersey",
    rating: 5,
    text: "Virtual scribing gave me my evenings back. Notes are done before I leave the clinic and the documentation quality is excellent.",
  },
  {
    id: "r5",
    name: "Dr. Luis Carrillo",
    practice: "Cardiology — Florida",
    rating: 5,
    text: "Transparent monthly reporting is the difference. I can see exactly what was billed, paid, denied, and appealed — no guessing, no black box.",
  },
  {
    id: "r6",
    name: "Dr. Hannah Blake",
    practice: "Behavioral Health — Arizona",
    rating: 5,
    text: "They set up my LLC, licensing paperwork, and website. It felt like having an entire back office without hiring a single employee.",
  },
];
