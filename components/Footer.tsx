import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="text-[#B8963E] font-bold text-lg tracking-widest uppercase mb-1">TRV Consulting Services Inc.</div>
          <div className="text-white/40 text-xs tracking-wider uppercase mb-4">Turnaround · Restructuring · Value</div>
          <p className="text-sm leading-relaxed text-white/60">
            Expert advisory services helping organizations navigate financial distress, operational challenges, and strategic transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#B8963E] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-[#B8963E] mt-0.5 shrink-0" />
              <span>info@trvconsulting.ca</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-[#B8963E] mt-0.5 shrink-0" />
              <span>1.416.671.6301</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#B8963E] mt-0.5 shrink-0" />
              <span>Toronto, ON</span>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin size={16} className="text-[#B8963E] mt-0.5 shrink-0" />
              <a href="https://www.linkedin.com/in/toni-vanderlaan-94a8693" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8963E] transition-colors duration-200">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} TRV Consulting Services Inc. All rights reserved.</span>
          <span>Turnaround · Restructuring · Value</span>
        </div>
      </div>
    </footer>
  );
}
