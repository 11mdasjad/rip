"use client";

import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const [legalModal, setLegalModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <footer className="bg-[#0a090d] border-t border-white/[0.08] pt-16 pb-12 text-[#f4f2f780]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center space-x-3.5 mb-5 group">
              <img
                src="/medien/logo/rfp-logo-full.png"
                alt="RFP Digital Productions"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-[#f4f2f7b8] mb-6 max-w-sm">
              {lang === "de"
                ? "RFP Digital Productions – Filmproduktion, KI-Film und 3D-Animation. Höchste filmische Ästhetik und zukunftsweisende Technologie weltweit im Einsatz."
                : "RFP Digital Productions – Cinema production, generative AI films and 3D visual effects. Cinematic craftsmanship and cutting-edge media engineering worldwide."}
            </p>
            <div className="text-xs font-mono text-white/50 space-y-1">
              <p className="text-white/80 font-bold tracking-wider">RFP DIGITAL PRODUCTIONS</p>
              <p>Studio & Postproduction Suites</p>
              <p>E-Mail: film@rfpdigital.com · Kontakt weltweit</p>
            </div>
          </div>

          {/* Nav Column 1: Leistungen */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
              {lang === "de" ? "Leistungen" : "Services"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#service-filmproduktion" className="hover:text-white transition-colors">
                  {lang === "de" ? "Filmproduktion" : "Film Production"}
                </a>
              </li>
              <li>
                <a href="#service-b2b-contentproduktion" className="hover:text-white transition-colors">
                  {lang === "de" ? "B2B-Contentproduktion" : "B2B Content Production"}
                </a>
              </li>
              <li>
                <a href="#service-ki-filmproduktion" className="hover:text-white transition-colors">
                  {lang === "de" ? "KI-Filmproduktion" : "AI Film Production"}
                </a>
              </li>
              <li>
                <a href="#service-3d-animation" className="hover:text-white transition-colors">
                  {lang === "de" ? "3D-Animation & Visualisierung" : "3D Animation & Product Viz"}
                </a>
              </li>
              <li>
                <a href="#service-erklaerfilm-produktion" className="hover:text-white transition-colors">
                  {lang === "de" ? "Erklärfilm-Produktion" : "Explainer Films"}
                </a>
              </li>
              <li>
                <a href="#service-ki-workflows-automatisierung" className="hover:text-white transition-colors">
                  {lang === "de" ? "KI-Workflows & Automatisierung" : "AI Workflows & Automation"}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Unternehmen & Rechtliches */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
              {lang === "de" ? "Unternehmen" : "Company"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#projekte" className="hover:text-white transition-colors">
                  {lang === "de" ? "Projekte" : "Projects"}
                </a>
              </li>
              <li>
                <a href="#zusammenarbeit" className="hover:text-white transition-colors">
                  {lang === "de" ? "Über uns & Zusammenarbeit" : "About & Collaboration"}
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">
                  {lang === "de" ? "Kontakt & Anfrage" : "Contact & Inquiry"}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal("impressum")}
                  className="hover:text-white transition-colors text-left"
                >
                  {lang === "de" ? "Impressum" : "Legal Notice"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal("datenschutz")}
                  className="hover:text-white transition-colors text-left"
                >
                  {lang === "de" ? "Datenschutz" : "Privacy Policy"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-white/40">
            © {new Date().getFullYear()} Imagine Yes GmbH. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLegalModal("impressum")}
              className="text-white/60 hover:text-white transition-colors"
            >
              {lang === "de" ? "Impressum" : "Legal Notice"}
            </button>
            <button
              onClick={() => setLegalModal("datenschutz")}
              className="text-white/60 hover:text-white transition-colors"
            >
              {lang === "de" ? "Datenschutz" : "Privacy"}
            </button>
            <button
              onClick={toggleLang}
              className="text-[#a89bfa] hover:text-white transition-colors uppercase font-bold"
            >
              {lang === "de" ? "Switch to English (EN)" : "Zur deutschen Fassung (DE)"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Impressum / Datenschutz */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#17161d] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === "impressum" ? (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Impressum</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>Imagine Yes GmbH</strong>
                    <br />
                    Feringastraße 6<br />
                    85774 Unterföhring / München<br />
                    Deutschland
                  </p>
                  <p>
                    <strong>Vertreten durch:</strong> Gabor Brüning
                  </p>
                  <p>
                    <strong>Kontakt:</strong>
                    <br />
                    Telefon: +49 176 62077437
                    <br />
                    E-Mail: film@imagineyes.de
                    <br />
                    Web: www.imagineyes.de
                  </p>
                  <p>
                    <strong>Registereintrag:</strong>
                    <br />
                    Eintragung im Handelsregister beim Amtsgericht München.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Datenschutzerklärung</h3>
                <div className="text-xs sm:text-sm text-white/80 space-y-3 leading-relaxed">
                  <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                    Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
                    möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
                    Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies stets auf
                    freiwilliger Basis.
                  </p>
                  <p>
                    <strong>Verantwortliche Stelle:</strong>
                    <br />
                    Imagine Yes GmbH, Feringastraße 6, 85774 Unterföhring
                    <br />
                    E-Mail: film@imagineyes.de
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
