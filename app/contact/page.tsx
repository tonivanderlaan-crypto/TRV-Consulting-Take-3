import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@trvconsulting.ca",
    href: "mailto:info@trvconsulting.ca",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "1.416.671.6301",
    href: "tel:+18000000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Toronto, ON",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "TRV Consulting Services Inc.",
    href: "https://www.linkedin.com/in/toni-vanderlaan-94a8693",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24 text-center px-6">
        <span className="text-[#B8963E] text-sm font-semibold uppercase tracking-widest">Contact Us</span>
        <h1 className="text-white text-5xl font-bold mt-3 mb-5">Get in Touch</h1>
        <div className="w-16 h-1 bg-[#B8963E] mx-auto mb-6" />
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          All inquiries are handled with strict confidentiality. Reach out to schedule a consultation or learn how TRV Consulting can assist.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h2 className="text-[#0D1B2A] text-2xl font-bold mb-2">Contact Information</h2>
            <div className="w-10 h-1 bg-[#B8963E] mb-8" />

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-[#B8963E]" />
                  </div>
                  <div>
                    <div className="text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-600 text-sm hover:text-[#B8963E] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#0D1B2A] rounded-lg p-6 text-white">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-[#B8963E]">Confidentiality</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We understand the sensitive nature of restructuring and turnaround engagements. All inquiries and information shared with TRV Consulting are held in strict confidence.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <h2 className="text-[#0D1B2A] text-2xl font-bold mb-2">Send Us a Message</h2>
            <div className="w-10 h-1 bg-[#B8963E] mb-8" />

              <form
                action="/cgi-bin/FormMail.pl"
                method="POST"
                className="space-y-5"
              >
                {/* Hidden FormMail fields */}
                <input type="hidden" name="recipient" value="info@trvconsulting.ca" />
                <input type="hidden" name="subject" value="New Contact Form Submission - TRV Consulting" />
                <input type="hidden" name="redirect" value="https://trvconsulting.ca/contact/thank-you.html" />
                <input type="hidden" name="required" value="name,email,message" />
                <input type="hidden" name="missing_fields_redirect" value="https://trvconsulting.ca/contact/" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#B8963E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#B8963E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors bg-white"
                  >
                    <option value="">Select a service area</option>
                    <option value="Interim Management">Interim Management</option>
                    <option value="Independent Board Advisory">Independent Board Advisory</option>
                    <option value="Independent Business Review">Independent Business Review</option>
                    <option value="Independent Shareholder Advisory">Independent Shareholder Advisory</option>
                    <option value="Insolvency & Formal Proceedings">Insolvency &amp; Formal Proceedings</option>
                    <option value="Turnaround Advisory">Turnaround Advisory</option>
                    <option value="Restructuring">Restructuring</option>
                    <option value="Value Creation">Value Creation</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#B8963E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#B8963E] transition-colors resize-none"
                    placeholder="Please briefly describe your situation or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D1B2A] text-white font-bold uppercase text-sm tracking-wider py-4 rounded hover:bg-[#1a2e45] transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>

                <p className="text-gray-400 text-xs text-center">
                  All submissions are treated with strict confidentiality.
                </p>
              </form>
          </div>
        </div>
      </section>
    </>
  );
}
