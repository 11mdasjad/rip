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
              RFP Digital Productions – Cinema production, generative AI films and 3D visual effects. Cinematic craftsmanship and cutting-edge media engineering deployed globally.
            </p>
            <div className="text-xs font-mono text-white/50 space-y-1">
              <p className="text-white/80 font-bold tracking-wider">RFP DIGITAL PRODUCTIONS</p>
              <p>Studio & Postproduction Suites</p>
              <p>Email: film@rfpdigital.com · Worldwide Operations</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/#service-filmproduktion" className="hover:text-white transition-colors">Film Production</Link></li>
              <li><Link href="/#service-b2b-contentproduktion" className="hover:text-white transition-colors">B2B Content Production</Link></li>
              <li><Link href="/#service-ki-filmproduktion" className="hover:text-white transition-colors">AI Film Production</Link></li>
              <li><Link href="/#service-3d-animation" className="hover:text-white transition-colors">3D Animation & Product Viz</Link></li>
              <li><Link href="/#service-erklaerfilm-produktion" className="hover:text-white transition-colors">Explainer Films</Link></li>
              <li><Link href="/#service-ki-workflows-automatisierung" className="hover:text-white transition-colors">AI Workflows & Automation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">Explore & Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/gallery" className="hover:text-[#a89bfa] transition-colors flex items-center gap-1.5 text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
                  <span>Visual Gallery</span>
                </Link>
              </li>
              <li><Link href="/#projekte" className="hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link href="/#zusammenarbeit" className="hover:text-white transition-colors">About & Collaboration</Link></li>
              <li><Link href="/#kontakt" className="hover:text-white transition-colors">Contact & Inquiry</Link></li>
              <li><button onClick={() => setLegalModal("impressum")} className="hover:text-white transition-colors text-left">Legal Notice</button></li>
              <li><button onClick={() => setLegalModal("datenschutz")} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-white/40">© {new Date().getFullYear()} RFP Digital Productions. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <button onClick={() => setLegalModal("impressum")} className="text-white/60 hover:text-white transition-colors">Legal Notice</button>
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
                <h3 className="text-xl font-bold text-white mb-4">Legal Notice (Impressum)</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p><strong>RFP Digital Productions</strong><br />Feringastraße 6<br />85774 Unterföhring / Munich<br />Germany</p>
                  <p><strong>Management & Direction:</strong> RFP Executive Production</p>
                  <p><strong>Contact:</strong><br />Telephone: +49 176 62077437<br />Email: film@rfpdigital.com<br />Web: https://rfpdigital.com</p>
                  <p><strong>Commercial Register:</strong><br />Registered at Local Court Munich.</p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy Policy (GDPR)</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p>We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations (GDPR) and this privacy policy.</p>
                  <p>The use of our website is generally possible without providing personal data. As far as personal data (such as name, address or e-mail addresses) is collected on our pages, this is done on a voluntary basis.</p>
                  <p><strong>Responsible Authority:</strong><br />RFP Digital Productions, Feringastraße 6, 85774 Unterföhring / Munich<br />Email: film@rfpdigital.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
