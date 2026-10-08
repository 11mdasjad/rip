"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/imagineContent";

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";
  const isServices = pathname?.startsWith("/services");
  const isGallery = pathname?.startsWith("/gallery");
  const isTeam = pathname?.startsWith("/team");
  const isTestimonials = pathname?.startsWith("/testimonials");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a090e]/95 backdrop-blur-xl border-b border-white/[0.12] py-3.5 sm:py-4 shadow-2xl shadow-black/80"
          : "bg-[#0a090e]/75 backdrop-blur-md border-b border-white/[0.06] py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Magnified Logo */}
        <Link
          href="/"
          className="relative flex items-center space-x-3.5 transition-transform hover:opacity-95 active:scale-98 group shrink-0"
          aria-label="RFP Digital Productions – Home"
        >
          <img
            src="/medien/logo/rfp-emblem.svg"
            alt="RFP Crest"
            className="h-11 sm:h-13 md:h-14 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 leading-none">
              <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-[0.16em] text-white font-mono">
                RFP
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase">
                MEDIA &amp; FILM
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.28em] text-[#D4AF37] font-mono uppercase font-bold mt-1">
              Digital Productions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Magnified and Clearly Visualized */}
        <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2" aria-label="Main Navigation">
          <Link
            href={isHome ? "#projekte" : "/#projekte"}
            className="px-4 py-2.5 text-[15px] xl:text-[16px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            Projects
          </Link>

          <Link
            href="/gallery"
            className={`px-4 py-2.5 text-[15px] xl:text-[16px] rounded-xl transition-all font-semibold flex items-center gap-2 ${
              isGallery
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#a89bfa]" />
            <span>Gallery</span>
          </Link>

          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center">
              <Link
                href="/services"
                className={`px-4 py-2.5 text-[15px] xl:text-[16px] rounded-xl transition-all font-semibold ${
                  isServices
                    ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                    : "text-white/85 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="p-2 -ml-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.08] transition-all focus:outline-none"
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#a89bfa]" : "text-white/60"
                  }`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 bg-[#17161d] border border-white/[0.15] rounded-2xl p-3 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 mb-2 text-xs font-mono font-bold text-[#a89bfa] bg-[#6b54ee]/15 hover:bg-[#6b54ee]/25 rounded-xl border border-[#a89bfa]/30 transition-all group"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>All Services Hub</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>

                <div className="text-[11px] font-mono tracking-widest text-[#a89bfa] uppercase px-3 py-1 border-b border-white/[0.08] mb-1 font-bold">
                  Core Disciplines
                </div>
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#service-${service.id}`}
                    onClick={() => setServicesOpen(false)}
                    className="group flex items-center justify-between px-3.5 py-2 text-sm text-white/85 hover:text-white hover:bg-white/[0.08] rounded-xl transition-all font-medium"
                  >
                    <span>{service.titleEn}</span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#a89bfa] font-semibold">
                      {service.num}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/team"
            className={`px-4 py-2.5 text-[15px] xl:text-[16px] rounded-xl transition-all font-semibold ${
              isTeam
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Team
          </Link>

          <Link
            href="/testimonials"
            className={`px-4 py-2.5 text-[15px] xl:text-[16px] rounded-xl transition-all font-semibold ${
              isTestimonials
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/85 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Testimonials
          </Link>

          <Link
            href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
            className="px-4 py-2.5 text-[15px] xl:text-[16px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            About
          </Link>

          <Link
            href={isHome ? "#faq" : "/#faq"}
            className="px-4 py-2.5 text-[15px] xl:text-[16px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            FAQ
          </Link>

          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            className="px-4 py-2.5 text-[15px] xl:text-[16px] text-white/85 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold"
          >
            Contact
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
              <Link
                href={isHome ? "#projekte" : "/#projekte"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Projects
              </Link>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#a89bfa] hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a89bfa]" />
                  <span>Visual Gallery</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7c6af2]/20 text-[#a89bfa] border border-[#7c6af2]/30">
                  New
                </span>
              </Link>

              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Creative Team</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Client Testimonials</span>
                <span className="text-xs text-[#a89bfa]">★</span>
              </Link>

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>All Services</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              <div className="py-2 px-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-widest text-[#a89bfa] font-mono mb-2 flex items-center justify-between">
                  <span>Core Disciplines</span>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[10px] text-[#E6C665] hover:underline"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1.5 pl-2 border-l border-white/[0.1]">
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services#service-${service.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-white/70 hover:text-white py-1.5 transition-colors block"
                    >
                      {service.titleEn}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                About
              </Link>
              <Link
                href={isHome ? "#faq" : "/#faq"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                FAQ
              </Link>
              <Link
                href={isHome ? "#kontakt" : "/#kontakt"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Contact
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
