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
  const isGallery = pathname?.startsWith("/gallery");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0d12]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="relative flex items-center space-x-3 transition-transform hover:opacity-95 active:scale-98 group"
          aria-label="RFP Digital Productions – Home"
        >
          <img
            src="/medien/logo/rfp-emblem.png"
            alt="RFP Crest"
            className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-sm sm:text-base tracking-[0.16em] text-white font-mono leading-tight flex items-center gap-1.5">
              RFP
              <span className="text-[9px] font-sans font-semibold px-1.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#E6C665] border border-[#D4AF37]/35 tracking-wider">
                FILM & AI
              </span>
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.28em] text-[#D4AF37]/85 font-mono uppercase font-semibold">
              Digital Productions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          <Link
            href={isHome ? "#projekte" : "/#projekte"}
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            Projects
          </Link>

          <Link
            href="/gallery"
            className={`px-3.5 py-2 text-sm rounded-full transition-all font-medium flex items-center gap-1.5 ${
              isGallery
                ? "text-white bg-white/[0.08] border border-[#a89bfa]/30 shadow-[0_0_15px_rgba(168,155,250,0.15)]"
                : "text-[#f4f2f7b8] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
            <span>Gallery</span>
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium focus:outline-none"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#a89bfa]" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-72 bg-[#17161d] border border-white/[0.12] rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="text-[10px] font-mono tracking-widest text-[#a89bfa] uppercase px-3 py-1.5 border-b border-white/[0.08] mb-1">
                  Disciplines
                </div>
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.id}
                    href={isHome ? `#service-${service.id}` : `/#service-${service.id}`}
                    onClick={() => setServicesOpen(false)}
                    className="group flex items-center justify-between px-3 py-2 text-xs text-[#f4f2f7b8] hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                  >
                    <span>{service.titleEn}</span>
                    <span className="text-[10px] font-mono text-white/30 group-hover:text-[#a89bfa]">
                      {service.num}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            About
          </Link>

          <Link
            href={isHome ? "#faq" : "/#faq"}
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            FAQ
          </Link>

          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            onClick={(e) => {
              if (isHome && onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="group hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-xs font-semibold tracking-wide shadow-lg hover:shadow-[#7c6af2]/20 hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0e0d12]/98 border-b border-white/[0.1] p-6 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            <Link href={isHome ? "#projekte" : "/#projekte"} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90 hover:text-white py-1">
              Projects
            </Link>

            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#a89bfa] hover:text-white py-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#a89bfa]" />
              <span>Visual Gallery</span>
            </Link>

            <div className="py-1">
              <div className="text-xs uppercase tracking-widest text-[#a89bfa] font-mono mb-2">Services</div>
              <div className="grid grid-cols-1 gap-2 pl-3 border-l border-white/[0.1]">
                {SERVICES_DATA.map((service) => (
                  <Link key={service.id} href={isHome ? `#service-${service.id}` : `/#service-${service.id}`} onClick={() => setMobileMenuOpen(false)} className="text-sm text-white/70 hover:text-white py-1">
                    {service.titleEn}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90 hover:text-white py-1">About</Link>
            <Link href={isHome ? "#faq" : "/#faq"} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90 hover:text-white py-1">FAQ</Link>
            <Link href={isHome ? "#kontakt" : "/#kontakt"} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90 hover:text-white py-1">Contact</Link>

            <div className="pt-4 border-t border-white/[0.08]">
              <Link href={isHome ? "#kontakt" : "/#kontakt"} onClick={() => setMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#f4f2f7] text-[#0e0d12] text-sm font-semibold">
                <span>Discuss Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
