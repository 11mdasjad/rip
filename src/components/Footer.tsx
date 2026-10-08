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
              <img src="/medien/logo/rfp-logo.svg" alt="RFP Digital Productions" className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-sm text-[#f4f2f7b8] mb-5 max-w-sm">
              RFP Digital Productions – Video production &amp; election management company. Managed by media professionals and alumni from AJK MCRC, Jamia Millia Islamia, New Delhi. Over 17+ years of media excellence.
            </p>

            {/* Social Media Links - Original Brand Logos */}
            <div className="flex items-center space-x-3 mb-6" aria-label="Social Media Channels">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow us on Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(225,48,108,0.55)] p-0.5 overflow-hidden group"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Connect on Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(24,119,242,0.55)] text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="Watch on YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FF0000] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.55)] text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Follow on Twitter"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1DA1F2] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(29,161,242,0.55)] text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
            </div>
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
