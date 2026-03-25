"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function TRVLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
      {/* Diamond crest */}
      <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="none" stroke="#B8963E" strokeWidth="2"/>
        <polygon points="60,20 100,60 60,100 20,60" fill="#1a2e45"/>
        <circle cx="60" cy="4" r="5" fill="#B8963E"/>
        <circle cx="116" cy="60" r="5" fill="#B8963E"/>
        <circle cx="60" cy="116" r="5" fill="#B8963E"/>
        <circle cx="4" cy="60" r="5" fill="#B8963E"/>
        <text x="60" y="76" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="42" fill="#B8963E">T</text>
      </svg>

      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "26px", color: "#0D1B2A", letterSpacing: "0.06em", lineHeight: 1, marginBottom: "5px" }}>
          TRV
        </div>
        <div style={{ width: "100%", height: "1px", background: "#B8963E", marginBottom: "5px" }} />
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "7px", color: "#2C3E50", letterSpacing: "0.55em", marginBottom: "3px" }}>
          CONSULTING
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "5.5px", color: "#4a5a6a", letterSpacing: "0.2em" }}>
          TURNAROUND · RESTRUCTURING · VALUE
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5EF] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <TRVLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide uppercase font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#B8963E] border-b-2 border-[#B8963E] pb-0.5"
                  : "text-[#0D1B2A]/80 hover:text-[#B8963E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-[#B8963E] text-[#F8F5EF] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#d4aa55] transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0D1B2A]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F5EF] border-t border-[#0D1B2A]/10 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm uppercase tracking-wide font-medium border-b border-[#0D1B2A]/10 transition-colors ${
                pathname === link.href ? "text-[#B8963E]" : "text-[#0D1B2A]/80 hover:text-[#B8963E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
