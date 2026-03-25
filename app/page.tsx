import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Target, Users, BarChart2, Handshake, Award, Scale } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Turnaround Advisory",
    desc: "Rapid assessment and decisive action to stabilize operations and restore organizational health for businesses in distress.",
  },
  {
    icon: ShieldCheck,
    title: "Restructuring",
    desc: "Balance sheet optimization, debt restructuring, and creditor negotiations to restore financial health.",
  },
  {
    icon: Target,
    title: "Value Creation",
    desc: "Identifying and executing initiatives that drive measurable, long-term stakeholder value.",
  },
  {
    icon: Users,
    title: "Interim Management",
    desc: "Experienced interim CFO, CRO, and C-suite leadership to guide companies through transitions and execute on improvement plans.",
  },
  {
    icon: Award,
    title: "Independent Board Advisory",
    desc: "Objective, independent counsel to boards navigating financial complexity, stakeholder pressure, or significant business transitions.",
  },
  {
    icon: Scale,
    title: "Independent Shareholder Advisory",
    desc: "Experienced, independent advisory support to help parties understand the financial realities of their situation and work toward practical, value-preserving resolutions.",
  },
];

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "$10B+", label: "in Transactions Advised" },
  { value: "75+", label: "Engagements Completed" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0D1B2A] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #B8963E 0, #B8963E 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px"
          }} />
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#B8963E]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
<h1 className="text-[#F8F5EF] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              When Making The Decisions That Matter,<br />
              <span className="text-[#B8963E]">Matters More.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TRV Consulting partners with organizations in transition to restore stability, unlock performance and create measurable value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold uppercase text-sm tracking-wider px-8 py-4 rounded hover:border-[#B8963E] hover:text-[#B8963E] transition-colors duration-200"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8963E] text-[#0D1B2A] font-bold uppercase text-sm tracking-wider px-8 py-4 rounded hover:bg-[#d4aa55] transition-colors duration-200"
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#B8963E]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[#0D1B2A] text-3xl font-bold">{stat.value}</div>
              <div className="text-[#0D1B2A]/70 text-sm font-medium uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-[#0D1B2A] text-4xl font-bold mt-2">Our Core Services</h2>
            <div className="w-16 h-1 bg-[#B8963E] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group border border-gray-100 rounded-lg p-8 hover:border-[#B8963E] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center mb-5 group-hover:bg-[#B8963E]/10 transition-colors">
                  <svc.icon size={24} className="text-[#B8963E]" />
                </div>
                <h3 className="text-[#0D1B2A] text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#B8963E] font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why TRV */}
      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">Why TRV</span>
            <h2 className="text-[#0D1B2A] text-4xl font-bold mt-2 mb-6">A Trusted Partner in Critical Moments</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When businesses face their most challenging moments, TRV Consulting brings deep expertise, a structured methodology, and unwavering commitment to results. We work shoulder-to-shoulder with management teams and stakeholders to define options, create a plan and implement change.
            </p>
            <ul className="space-y-4">
              {[
                { icon: BarChart2, text: "Data-driven diagnosis and action planning" },
                { icon: Users, text: "Experienced senior advisor on every engagement" },
                { icon: Handshake, text: "Committed to building consensus among stakeholders" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-gray-700 text-sm">
                  <item.icon size={18} className="text-[#B8963E] mt-0.5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#0D1B2A] font-semibold hover:text-[#B8963E] transition-colors"
            >
              Learn About TRV <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-[#0D1B2A] rounded-lg p-10 text-white">
            <blockquote className="text-lg leading-relaxed italic text-white/80">
              &ldquo;In every engagement, our mission is to help our clients navigate through their challenges and emerge stronger, more competitive, and positioned for long-term success.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-4xl font-bold mb-4">Ready to Chart a New Course?</h2>
          <p className="text-white/60 text-lg mb-8">
            Reach out today for a confidential consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8963E] text-[#0D1B2A] font-bold uppercase text-sm tracking-wider px-10 py-4 rounded hover:bg-[#d4aa55] transition-colors duration-200"
          >
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
