import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Target,
  Search,
  Users,
  FileText,
  BarChart2,
  RefreshCw,
  Scale,
  Award,
} from "lucide-react";

const serviceCategories = [
  {
    icon: Users,
    title: "Interim Management",
    tagline: "Experienced leadership when it matters most",
    description:
      "Sometimes a situation calls for experienced, independent leadership to drive change. TRV provides interim CFO, CRO (Chief Restructuring Officer), and other C-suite support to guide companies through transitions and execute on improvement plans.",
    offerings: [
      "Interim CFO and financial leadership",
      "Chief Restructuring Officer (CRO) services",
      "Operational management support",
      "Board advisory and independent director roles",
      "Transition management post-restructuring",
    ],
  },
  {
    icon: Award,
    title: "Independent Board Advisor",
    tagline: "Objective guidance at the board level",
    description:
      "Boards facing complex financial, operational, or strategic challenges benefit from the perspective of an experienced, independent advisor. TRV provides candid, objective counsel to boards navigating uncertainty, stakeholder pressure, or significant business transitions.",
    offerings: [
      "Independent board advisory and governance support",
      "Financial oversight and risk assessment",
      "Strategic options analysis and recommendations",
      "Stakeholder and creditor communication strategy",
      "Crisis preparedness and response planning",
      "Special committee advisory",
    ],
  },
  {
    icon: Search,
    title: "Independent Business Review",
    tagline: "Objective assessment of business viability and options",
    description:
      "Lenders, boards, and investors rely on TRV for independent, objective assessments of potential acquisitions of healthy, distressed or underperforming businesses. Our IBRs provide a clear-eyed view of the potential upside while identifying risks and potential pitfalls of your intended target.",
    offerings: [
      "Financial and operational viability assessment",
      "Cash flow forecasting and stress testing",
      "Management and business plan review",
      "Options analysis (acquire, restructure, sale, wind-down)",
      "Lender advisory and reporting",
      "Board and governance advisory",
    ],
  },
  {
    icon: Scale,
    title: "Independent Shareholder Advisory",
    tagline: "Expert advisory in complex shareholder matters",
    description:
      "Shareholder disputes can paralyze a business and destroy value if not managed carefully. TRV provides experienced, independent advisory support to help parties understand the financial realities of their situation and work toward practical, value-preserving resolutions.",
    offerings: [
      "Independent financial assessment and support",
      "Independent monitoring and advisory roles",
      "Advice on business preservation protocols",
      "Buy-sell and exit structuring advice",
      "Forensic review support services",
      "Litigation support and expert witness services",
    ],
  },
  {
    icon: FileText,
    title: "Insolvency & Formal Proceedings*",
    tagline: "Navigating formal insolvency processes with expertise",
    description:
      "When formal insolvency proceedings are necessary, TRV's licensed professionals guide companies and stakeholders through the process efficiently and effectively — minimizing disruption and maximizing recovery for all parties.",
    note: "*This service is coming soon pending approval from the OSB.",
    offerings: [
      "Receivership and proposal advisory",
      "Court-supervised restructuring",
      "Creditor committee advisory",
      "Proof of claim and distribution processes",
      "Cross-border insolvency matters",
    ],
  },
  {
    icon: TrendingUp,
    title: "Turnaround Advisory",
    tagline: "Rapid stabilization and performance recovery",
    description:
      "When a business is in decline, time is one of the most critical resources. TRV's turnaround advisory services provides the analysis to bring immediate clarity and the decisive action needed to stabilize operations and arrest the decline in order to focus on building a roadmap for recovery.",
    offerings: [
      "Crisis assessment and rapid diagnostic",
      "Cash flow stabilization and liquidity management",
      "Operational performance improvement",
      "Management support and interim leadership",
      "Stakeholder communication and relationship management",
      "Ongoing strategic review and execution",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Restructuring",
    tagline: "Balance sheet optimization and creditor solutions",
    description:
      "TRV provides comprehensive financial restructuring advisory to companies and their stakeholders. Whether addressing an over-leveraged balance sheet, navigating formal insolvency proceedings, or negotiating with lenders and creditors, we bring structure and strategy to complex situations.",
    offerings: [
      "Debt restructuring and refinancing advisory",
      "Creditor negotiation and stakeholder alignment",
      "CCAA and CCBJA proceedings advisory (Canada)",
      "Chapter 11 and out-of-court restructuring (U.S.)",
      "Distressed M&A and asset sales",
      "Post-restructuring stabilization",
    ],
  },
  {
    icon: Target,
    title: "Value Creation",
    tagline: "Unlocking potential and driving sustainable growth",
    description:
      "TRV partners with management teams to identify and execute on strategic opportunities that create lasting value — for shareholders, employees, customers, and other stakeholders.",
    offerings: [
      "Strategic planning and business transformation",
      "Operational efficiency and margin improvement",
      "Working capital optimization",
      "Cost reduction and organizational redesign",
      "Growth strategy and market positioning",
      "Performance measurement and KPI frameworks",
    ],
  },
];

const industries = [
  "Manufacturing & Industrial",
  "Retail & Consumer",
  "Hospitality & Food Service",
  "Real Estate & Construction",
  "Technology & Software",
  "Healthcare & Life Sciences",
  "Energy & Resources",
  "Mining",
  "Transportation & Logistics",
  "Media & Entertainment",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24 text-center px-6">
        <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">Our Services</span>
        <h1 className="text-white text-5xl font-bold mt-3 mb-5">What We Do</h1>
        <div className="w-16 h-1 bg-[#B8963E] mx-auto mb-6" />
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          From crisis stabilization to long-term value creation, TRV Consulting delivers integrated advisory services tailored to each client&apos;s unique situation.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {serviceCategories.map((svc, idx) => (
            <div
              key={svc.title}
              className={`grid md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center">
                    <svc.icon size={20} className="text-[#B8963E]" />
                  </div>
                  <span className="text-[#B8963E] text-xs font-semibold uppercase tracking-widest">{svc.tagline}</span>
                </div>
                <h2 className="text-[#0D1B2A] text-3xl font-bold mb-4">{svc.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">{svc.description}</p>
                {svc.note && <p className="text-gray-400 italic text-xs mb-6">{svc.note}</p>}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#B8963E] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Discuss this service <ArrowRight size={14} />
                </Link>
              </div>

              <div className={`bg-[#f8f7f4] rounded-lg p-8 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h4 className="text-[#0D1B2A] font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BarChart2 size={14} className="text-[#B8963E]" /> Service Offerings
                </h4>
                <ul className="space-y-3">
                  {svc.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <RefreshCw size={14} className="text-[#B8963E] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">Sector Expertise</span>
          <h2 className="text-[#0D1B2A] text-3xl font-bold mt-2 mb-3">Industries We Serve</h2>
          <div className="w-16 h-1 bg-[#B8963E] mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="border border-[#0D1B2A]/20 text-[#0D1B2A] text-sm px-5 py-2 rounded-full hover:border-[#B8963E] hover:text-[#B8963E] transition-colors duration-200"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white text-3xl font-bold mb-4">Facing a Complex Challenge?</h2>
          <p className="text-white/60 mb-8">
            Contact TRV Consulting for a confidential consultation. We&apos;ll help you assess the situation and develop a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8963E] text-[#0D1B2A] font-bold uppercase text-sm tracking-wider px-10 py-4 rounded hover:bg-[#d4aa55] transition-colors"
          >
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
