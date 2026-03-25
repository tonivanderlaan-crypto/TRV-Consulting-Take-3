import Link from "next/link";
import { ArrowRight, Award, BookOpen, Briefcase, Globe } from "lucide-react";

const values = [
  {
    title: "Integrity",
    desc: "We operate with transparency and honesty in every client relationship, providing candid advice even when difficult.",
  },
  {
    title: "Urgency",
    desc: "Distressed situations demand speed. We move quickly to stabilize, diagnose, and act — without compromising rigor.",
  },
  {
    title: "Accountability",
    desc: "We stand behind our recommendations and work alongside management teams to see strategies through to execution.",
  },
  {
    title: "Independence",
    desc: "Our advice is always in the client's best interest. We have no competing mandates — only yours.",
  },
];
const credentials = [
  { icon: Award, text: "Chartered Professional Accountant (CPA-CA)" },
  { icon: BookOpen, text: "Licensed Insolvency Trustee (LIT)" },
  { icon: Briefcase, text: "Certified Turnaround Professional (CTP)" },
  { icon: Globe, text: "25+ years of advisory experience across North America and Internationally" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24 text-center px-6">
        <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">About Us</span>
        <h1 className="text-white text-5xl font-bold mt-3 mb-5">Who We Are</h1>
        <div className="w-16 h-1 bg-[#B8963E] mx-auto mb-6" />
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          TRV Consulting Services Inc. is a boutique advisory firm dedicated to helping businesses navigate complexity, restore financial health, and unlock lasting value.
        </p>
      </section>

      {/* About TRV */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">The Firm</span>
            <h2 className="text-[#0D1B2A] text-4xl font-bold mt-2 mb-6">About TRV Consulting</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                TRV Consulting Inc. was founded on a simple but powerful premise: that businesses experiencing difficulties or distress deserve a senior, experienced advisor fully committed to their recovery and long-term success.
              </p>
              <p>
                The firm&apos;s name reflects our three core competencies — <strong className="text-[#0D1B2A]">Turnaround</strong>, <strong className="text-[#0D1B2A]">Restructuring</strong>, and <strong className="text-[#0D1B2A]">Value</strong> — which define both our service offerings and our philosophy. We don&apos;t just stabilize businesses; we rebuild them to create enduring value for shareholders, creditors, employees, and communities.
              </p>
              <p>
                Operating wherever you need us to be, TRV Consulting brings deep expertise in financial restructuring, stakeholder management, and strategic transformation. We serve mid-market companies across a wide range of industries, from aerospace to manufacturing to retail and services.
                             </p>
              <p>
                Our independence distinguishes us. Our sole focus is delivering the best possible outcome for our clients.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((v) => (
              <div key={v.title} className="border-l-4 border-[#B8963E] pl-5 py-1">
                <h3 className="text-[#0D1B2A] font-bold text-base mb-1">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Toni Vanderlaan */}
      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">Leadership</span>
            <h2 className="text-[#0D1B2A] text-4xl font-bold mt-2">Meet Toni Vanderlaan</h2>
            <div className="w-16 h-1 bg-[#B8963E] mx-auto mt-4" />
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/toni-vanderlaan.jpg"
                  alt="Toni Vanderlaan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h3 className="text-[#0D1B2A] text-2xl font-bold mb-1">Toni Vanderlaan</h3>
              <p className="text-[#B8963E] font-semibold text-sm uppercase tracking-wider mb-5">Managing Director</p>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                <p>
                  Toni is known as a client focused, results-oriented professional who is considered a problem solver and consensus builder. Toni has built her reputation with over 25 years of international turnaround and restructuring experience helping companies, management teams, boards, private equity, lenders and public investment institutions evaluate and assess their strategic options to develop and implement restructuring plans.
                </p>
                <p>
                  Understanding what is possible is fundamental to delivering results. Toni provides objective financial leadership, an unbiased assessment of strategic options and actionable insight to stabilize operations, restore stakeholder confidence and improve performance.
                </p>
                <p>
                  She brings creative thinking, open-mindedness, strong communications skills, attention to detail, perseverance, teamwork and leadership to each role. Toni helps her clients to prioritize competing agendas, understand the value aspects of their business and to manage stakeholders to maximize the likelihood of a successful outcome.
                </p>
                <p>
                  Toni has lived and worked in Canada, the UK, the US and been involved in numerous international restructuring projects. Over the course of her career she has been involved with or actively led engagements restructuring over $10 billion in debt and improved business outcomes for everyone from small family owned businesses to global enterprises.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[#0D1B2A] font-bold text-sm uppercase tracking-wider mb-3">Credentials & Experience</h4>
                {credentials.map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-gray-700 text-sm">
                    <c.icon size={16} className="text-[#B8963E] shrink-0" />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-white/60 mb-8">Connect with our team for a confidential discussion about your situation.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8963E] text-[#0D1B2A] font-bold uppercase text-sm tracking-wider px-10 py-4 rounded hover:bg-[#d4aa55] transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
