"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<"impressum" | "datenschutz" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08070b] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12 text-[#f4f2f780] font-sans antialiased relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-14 border-b border-white/[0.08] items-start">
          
          {/* Column 1 (4 cols): Brand, Heritage & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="relative inline-flex items-center space-x-3.5 transition-transform hover:opacity-95 active:scale-98 group shrink-0"
              aria-label="RFP Digital Productions – Home"
            >
              <img
                src="/medien/logo/rfp-emblem.png"
                alt="RFP Emblem"
                className="h-16 sm:h-18 w-auto object-contain filter drop-shadow-[0_2px_18px_rgba(212,175,55,0.55)] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 leading-none">
                  <span className="font-extrabold text-2xl sm:text-3xl tracking-[0.16em] text-white font-mono">
                    RFP
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase shadow-sm">
                    MEDIA &amp; FILMS
                  </span>
                </div>
                <span className="text-[11px] sm:text-[12px] tracking-[0.28em] text-[#D4AF37] font-mono uppercase font-bold mt-1.5">
                  Digital Productions
                </span>
              </div>
            </Link>

            <div className="space-y-1">
              <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                RFP Digital Productions
              </p>
              <p className="text-xs sm:text-[13px] text-[#f4f2f7b8] font-normal leading-relaxed">
                Video Production &amp; Election Management Company
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6C665] block font-semibold">
                Official Channels
              </span>
              <div className="flex items-center space-x-2.5" aria-label="Social Media Channels">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rfpdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow RFP on Instagram"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(225,48,108,0.55)] p-0.5 overflow-hidden group"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/rfpdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Connect with RFP on Facebook"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(24,119,242,0.55)] text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@rfpdigitalproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="Watch RFP on YouTube"
                  className="w-9 h-9 rounded-xl bg-[#FF0000] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.55)] text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/14546896/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="Connect with RFP on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#0A66C2] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(10,102,194,0.55)] text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Message RFP on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(37,211,102,0.55)] text-white"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

            {/* Address & Office */}
            <div className="pt-1 text-xs text-white/60 space-y-1.5 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E6C665] shrink-0 mt-0.5" />
                <span>156, First Floor, Sarai Julena (NFC), New Delhi – 110025, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#a89bfa] shrink-0" />
                <a href="mailto:info@rfpdigital.com" className="hover:text-white transition-colors">
                  info@rfpdigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 (3 cols): Core Disciplines / Services */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] font-semibold">
                Core Disciplines
              </span>
              <Link href="/services" className="text-[10px] font-mono text-[#E6C665] hover:underline flex items-center gap-1">
                <span>View All 7</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/corporate-films" className="hover:text-white transition-colors block py-0.5 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Corporate Films</span>
                </Link>
              </li>
              <li>
                <Link href="/services/documentary-films" className="hover:text-white transition-colors block py-0.5 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Documentary Films</span>
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-management" className="hover:text-white transition-colors block py-0.5 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Social Media Management</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-white transition-colors block py-0.5 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/services/election-campaign-services" className="hover:text-[#E6C665] transition-colors block py-0.5 group text-white/95 font-medium">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Election Campaign Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/photography-events" className="hover:text-white transition-colors block py-0.5 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Photography &amp; Event Coverage</span>
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-[#a89bfa] hover:text-white transition-colors block py-0.5 group font-medium">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>Website Development</span>
                    <span className="text-[10px] text-[#E6C665]">✦</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (2.5 cols): Hubs & Company Stories */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/[0.08] pb-2.5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] font-semibold">
                Hubs &amp; Stories
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/ec" className="text-[#E6C665] hover:text-[#F3E5AB] transition-colors flex items-center gap-1.5 py-1 font-semibold group">
                  <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E6C665]">
                    EC
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">Election Campaign</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 py-1 text-white/90 group">
                  <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
                  <span className="group-hover:translate-x-1 transition-transform">Visual Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 py-1 text-white/90 group">
                  <span className="text-[#a89bfa]">✦</span>
                  <span className="group-hover:translate-x-1 transition-transform">Our Creative Team</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 py-1 text-white/90 group">
                  <span className="text-[#E6C665]">★</span>
                  <span className="group-hover:translate-x-1 transition-transform">Client Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/#projekte" className="hover:text-white transition-colors block py-1">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/#zusammenarbeit" className="hover:text-white transition-colors block py-1">
                  About &amp; Collaboration
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:text-white transition-colors block py-1">
                  Contact &amp; Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (2.5 cols): War Room & Direct Inquiry Box */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#131218] border border-white/[0.1] shadow-xl space-y-4 relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] font-bold">
                  War Room &amp; Desk
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#25D366] px-2 py-0.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              <p className="text-xs text-white/75 font-sans leading-relaxed">
                Planning an assembly campaign, corporate documentary, or high-traffic web platform? Direct consultation is open.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20would%20like%20to%20discuss%20a%20project%20%2F%20campaign%20consultation.%20Please%20connect%20with%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Direct WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+919711791403"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10 active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E6C665]" />
                  <span>+91 97117 91403</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>ECI Guidelines Ready</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#E6C665]" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Symmetry & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-white/40 flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} RFP Digital Productions. All rights reserved.</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-white/40">Crafting Cinema &amp; Political Architecture</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setLegalModal("impressum")}
              className="text-white/60 hover:text-white transition-colors"
            >
              Company Information
            </button>
            <button
              onClick={() => setLegalModal("datenschutz")}
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <Link href="/admin" className="text-white/40 hover:text-[#a89bfa] transition-colors">
              Admin
            </Link>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#E6C665] hover:text-white border border-white/10 transition-all flex items-center gap-1 active:scale-95"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#17161d] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {legalModal === "impressum" ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif">Company Information</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed font-sans">
                  <p>
                    <strong className="text-white">RFP Digital Productions</strong><br />
                    156, First Floor, Sarai Julena (NFC), New Delhi - 110025<br />
                    Delhi NCR, India
                  </p>
                  <p>
                    <strong className="text-[#E6C665]">Management &amp; Leadership:</strong><br />
                    Alumni of AJK Mass Communication &amp; Research Center (AJK MCRC), Jamia Millia Islamia, New Delhi.
                  </p>
                  <p>
                    <strong className="text-white">Contact &amp; Telephony:</strong><br />
                    Mobile / WhatsApp: +91 99999 63157 / +91 97117 91403<br />
                    Office Landline: +91-11-49963157<br />
                    Email: info@rfpdigital.com / rfpdigitalmedia@gmail.com<br />
                    Website: https://www.rfpdigital.com
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif">Privacy Policy</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed font-sans">
                  <p>
                    RFP Digital Productions is committed to safeguarding the privacy of our visitors, clients, and partners. Any information submitted via inquiries, messages, or consultation requests is used strictly for communication and project scoping.
                  </p>
                  <p>
                    We strictly uphold client confidentiality across our corporate and political election assignments and never share data with third parties.
                  </p>
                  <p>
                    <strong className="text-white">Inquiries:</strong><br />
                    RFP Digital Productions, 156, First Floor, Sarai Julena (NFC), New Delhi - 110025<br />
                    Email: info@rfpdigital.com
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
