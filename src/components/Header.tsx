"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/data/imagineContent";

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const { lang, toggleLang } = useLanguage();
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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0d12]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* RFP Brand Logo */}
        <a
          href="#"
          className="relative flex items-center space-x-3 transition-transform hover:opacity-95 active:scale-98 group"
          aria-label="RFP Digital Productions – Startseite"
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
                FILM & KI
              </span>
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.28em] text-[#D4AF37]/85 font-mono uppercase font-semibold">
              Digital Productions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Hauptnavigation">
          <a
            href="#projekte"
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            {lang === "de" ? "Projekte" : "Projects"}
          </a>

          {/* Leistungen with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium focus:outline-none"
              aria-expanded={servicesOpen}
            >
              <span>{lang === "de" ? "Leistungen" : "Services"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#a89bfa]" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-72 bg-[#17161d] border border-white/[0.12] rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="text-[10px] font-mono tracking-widest text-[#a89bfa] uppercase px-3 py-1.5 border-b border-white/[0.08] mb-1">
                  {lang === "de" ? "Kompetenzen" : "Disciplines"}
                </div>
                {SERVICES_DATA.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.id}`}
                    onClick={() => setServicesOpen(false)}
                    className="group flex items-center justify-between px-3 py-2 text-xs text-[#f4f2f7b8] hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                  >
                    <span>{lang === "de" ? service.titleDe : service.titleEn}</span>
                    <span className="text-[10px] font-mono text-white/30 group-hover:text-[#a89bfa]">
                      {service.num}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#zusammenarbeit"
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            {lang === "de" ? "Über uns" : "About"}
          </a>

          <a
            href="#faq"
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            FAQ
          </a>

          <a
            href="#kontakt"
            className="px-3.5 py-2 text-sm text-[#f4f2f7b8] hover:text-white rounded-full transition-colors font-medium"
          >
            {lang === "de" ? "Kontakt" : "Contact"}
          </a>
        </nav>

        {/* Right Actions: Language Switch & CTA */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border border-white/[0.15] hover:border-[#a89bfa] text-[#f4f2f7] hover:text-[#a89bfa] transition-all bg-white/[0.03] active:scale-95"
            aria-label="Sprache wechseln / Switch Language"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>

          {/* Primary CTA Button */}
          <a
            href="#kontakt"
            onClick={(e) => {
              // Smooth scroll to contact
            }}
            className="group hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-xs font-semibold tracking-wide shadow-lg hover:shadow-[#7c6af2]/20 hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            <span>{lang === "de" ? "Projekt besprechen" : "Discuss Project"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0e0d12]/98 border-b border-white/[0.1] p-6 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            <a
              href="#projekte"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white py-1"
            >
              {lang === "de" ? "Projekte" : "Projects"}
            </a>
            <div className="py-1">
              <div className="text-xs uppercase tracking-widest text-[#a89bfa] font-mono mb-2">
                {lang === "de" ? "Leistungen" : "Services"}
              </div>
              <div className="grid grid-cols-1 gap-2 pl-3 border-l border-white/[0.1]">
                {SERVICES_DATA.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-white/70 hover:text-white py-1"
                  >
                    {lang === "de" ? service.titleDe : service.titleEn}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#zusammenarbeit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white py-1"
            >
              {lang === "de" ? "Über uns" : "About"}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white py-1"
            >
              FAQ
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white py-1"
            >
              {lang === "de" ? "Kontakt" : "Contact"}
            </a>

            <div className="pt-4 border-t border-white/[0.1] flex items-center justify-between">
              <button
                onClick={() => {
                  toggleLang();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold uppercase text-[#a89bfa]"
              >
                {lang === "de" ? "English Version (EN)" : "Deutsche Fassung (DE)"}
              </button>

              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#f4f2f7] text-[#0e0d12] text-xs font-semibold"
              >
                <span>{lang === "de" ? "Projekt besprechen" : "Discuss Project"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
