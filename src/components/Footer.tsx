"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <footer className="bg-[#0a090d] border-t border-white/[0.08] pt-16 pb-12 text-[#f4f2f780]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/[0.08]">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center space-x-3.5 mb-5 group">
              <img src="/medien/logo/rfp-logo-full.png" alt="RFP Digital Productions" className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-sm text-[#f4f2f7b8] mb-6 max-w-sm">
              RFP Digital Productions – Video production &amp; election management company. Managed by media professionals and alumni from AJK MCRC, Jamia Millia Islamia, New Delhi. Over 17+ years of media excellence.
            </p>
            <div className="text-xs font-mono text-white/50 space-y-1">
              <p className="text-white/80 font-bold tracking-wider">RFP DIGITAL PRODUCTIONS</p>
              <p>156, First Floor, Sarai Julena (NFC), New Delhi - 110065, India</p>
              <p>Mobile: +91 97117 91403 · +91 95990 99320 · Office: +91-11-49963157</p>
              <p>Email: rfpdigitalmedia@gmail.com</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/#service-corporate-films" className="hover:text-white transition-colors">Corporate Films</Link></li>
              <li><Link href="/#service-documentary-films" className="hover:text-white transition-colors">Documentary Films</Link></li>
              <li><Link href="/#service-social-media-management" className="hover:text-white transition-colors">Social Media Management</Link></li>
              <li><Link href="/#service-digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/#service-election-campaigns" className="hover:text-white transition-colors">Election Campaign Services</Link></li>
              <li><Link href="/#service-photography-events" className="hover:text-white transition-colors">Photography &amp; Event Coverage</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">Company &amp; Stories</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/gallery" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
                  <span>Visual Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-[#a89bfa]">✦</span>
                  <span>Our Creative Team</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-[#a89bfa]">★</span>
                  <span>Client Testimonials</span>
                </Link>
              </li>
              <li><Link href="/#projekte" className="hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link href="/#zusammenarbeit" className="hover:text-white transition-colors">About &amp; Collaboration</Link></li>
              <li><Link href="/#kontakt" className="hover:text-white transition-colors">Contact &amp; Inquiry</Link></li>
              <li><button onClick={() => setLegalModal("impressum")} className="hover:text-white transition-colors text-left">Company Information</button></li>
              <li><button onClick={() => setLegalModal("datenschutz")} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>


        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-white/40">© {new Date().getFullYear()} RFP Digital Productions. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/team" className="text-white/70 hover:text-white transition-colors">Team</Link>
            <Link href="/testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</Link>
            <button onClick={() => setLegalModal("impressum")} className="text-white/60 hover:text-white transition-colors">Company Information</button>
            <button onClick={() => setLegalModal("datenschutz")} className="text-white/60 hover:text-white transition-colors">Privacy Policy</button>
            <Link href="/gallery" className="text-[#a89bfa] hover:text-white transition-colors font-semibold">Gallery Archive →</Link>
          </div>
        </div>
      </div>

      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#17161d] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button onClick={() => setLegalModal(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            {legalModal === "impressum" ? (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p><strong>RFP Digital Productions</strong><br />156, First Floor, Sarai Julena (NFC), New Delhi - 110065<br />Delhi NCR, India</p>
                  <p><strong>Management & Leadership:</strong> Alumni of AJK Mass Communication &amp; Research Center (AJK MCRC), Jamia Millia Islamia, New Delhi</p>
                  <p><strong>Contact:</strong><br />Office: +91-11-49963157<br />Mobile / WhatsApp: +91 97117 91403 / +91 95990 99320<br />Email: rfpdigitalmedia@gmail.com<br />Website: https://www.rfpdigital.com</p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p>RFP Digital Productions is committed to safeguarding the privacy of our visitors and clients. Any information submitted via inquiries, messages, or consultation requests is used strictly for communications and project proposals.</p>
                  <p>We do not share, sell, or rent your personal contact details to third parties.</p>
                  <p><strong>Contact:</strong><br />RFP Digital Productions, 156, First Floor, Sarai Julena (NFC), New Delhi - 110065<br />Email: rfpdigitalmedia@gmail.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
