"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isServices = pathname?.startsWith("/services");
  const isGallery = pathname?.startsWith("/gallery");
  const isTeam = pathname?.startsWith("/team");
  const isTestimonials = pathname?.startsWith("/testimonials");
  const isEc = pathname === "/ec" || pathname?.startsWith("/ec");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a090e]/95 backdrop-blur-xl border-b border-white/[0.12] py-3.5 sm:py-4 shadow-2xl shadow-black/80"
          : "bg-[#0a090e]/75 backdrop-blur-md border-b border-white/[0.06] py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Enlarged Official Brand Logo */}
        <Link
          href="/"
          className="relative flex items-center space-x-3.5 transition-transform hover:opacity-95 active:scale-98 group shrink-0"
          aria-label="RFP Digital Productions – Home"
        >
          <img
            src="/medien/logo/rfp-emblem.png"
            alt="RFP Emblem"
            className="h-14 sm:h-16 md:h-17 w-auto object-contain filter drop-shadow-[0_2px_18px_rgba(212,175,55,0.55)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 leading-none">
              <span className="font-extrabold text-xl sm:text-2xl md:text-[26px] tracking-[0.16em] text-white font-mono">
                RFP
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase shadow-sm">
                MEDIA &amp; FILMS
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.28em] text-[#D4AF37] font-mono uppercase font-bold mt-1.5">
              Digital Productions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Exact Requested Row Order: About, Project, Gallery, Services, Team, Testimonial, FAQ, Contact */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
          {/* 1. About */}
          <Link
            href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
            className="px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            About
          </Link>

          {/* 2. Project */}
          <Link
            href={isHome ? "#projekte" : "/#projekte"}
            className="px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            Project
          </Link>

          {/* 3. Gallery */}
          <Link
            href="/gallery"
            className={`px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold flex items-center gap-1.5 ${
              isGallery
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
            <span>Gallery</span>
          </Link>

          {/* 4. Services */}
          <Link
            href="/services"
            className={`px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold ${
              isServices
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Services
          </Link>

          {/* 5. Team */}
          <Link
            href="/team"
            className={`px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold ${
              isTeam
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Team
          </Link>

          {/* 6. Testimonial */}
          <Link
            href="/testimonials"
            className={`px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold ${
              isTestimonials
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Testimonial
          </Link>

          {/* 7. FAQ */}
          <Link
            href={isHome ? "#faq" : "/#faq"}
            className="px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            FAQ
          </Link>

          {/* 8. Contact */}
          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            className="px-3 xl:px-3.5 py-2 text-[14px] xl:text-[15px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            Contact
          </Link>

          {/* 9. Election Campaign - Golden Highlighted Heading Link next to Contact */}
          <Link
            href="/ec"
            className={`px-3 xl:px-3.5 py-1.5 text-[13px] xl:text-[14px] whitespace-nowrap rounded-xl transition-all font-bold tracking-wide flex items-center gap-1.5 ${
              isEc
                ? "text-[#F3E5AB] bg-[#D4AF37]/25 border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                : "text-[#E6C665] hover:text-[#FFF8DC] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 shadow-sm"
            }`}
          >
            <span>Election Campaign</span>
          </Link>
        </nav>

        {/* Right Actions - Magnified Button */}
        <div className="flex items-center space-x-3 shrink-0">
          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            onClick={(e) => {
              if (isHome && onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="group hidden sm:inline-flex items-center space-x-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#f4f2f7] text-[#0e0d12] text-sm sm:text-[15px] font-bold tracking-wide shadow-xl hover:shadow-[#7c6af2]/30 transition-all duration-200 active:scale-95"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-20">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative bg-[#0e0d12]/98 border-b border-white/[0.1] p-6 backdrop-blur-2xl shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top-4 duration-250">
            <nav className="flex flex-col space-y-3">
              {/* 1. About */}
              <Link
                href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                About
              </Link>

              {/* 2. Project */}
              <Link
                href={isHome ? "#projekte" : "/#projekte"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Project
              </Link>

              {/* 3. Gallery */}
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#a89bfa] hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a89bfa]" />
                  <span>Gallery</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7c6af2]/20 text-[#a89bfa] border border-[#7c6af2]/30">
                  New
                </span>
              </Link>

              {/* 4. Services */}
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Services</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              {/* 5. Team */}
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Team</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              {/* 6. Testimonial */}
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Testimonial</span>
                <span className="text-xs text-[#a89bfa]">★</span>
              </Link>

              {/* 7. FAQ */}
              <Link
                href={isHome ? "#faq" : "/#faq"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                FAQ
              </Link>

              {/* 8. Contact */}
              <Link
                href={isHome ? "#kontakt" : "/#kontakt"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Contact
              </Link>

              {/* Election Campaign */}
              <Link
                href="/ec"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2.5 px-3 rounded-xl flex items-center justify-between transition-all ${
                  isEc
                    ? "text-[#F3E5AB] bg-[#D4AF37]/25 border border-[#D4AF37]"
                    : "text-[#E6C665] bg-[#D4AF37]/10 border border-[#D4AF37]/35 hover:bg-[#D4AF37]/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold tracking-wide">Election Campaign</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/30">Hub</span>
                </div>
                <span className="text-xs text-[#E6C665]">✦</span>
              </Link>

              <div className="pt-3 border-t border-white/[0.08]">
                <Link
                  href={isHome ? "#kontakt" : "/#kontakt"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-xs font-bold uppercase tracking-wider shadow-lg active:scale-98 transition-all"
                >
                  <span>Discuss Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
