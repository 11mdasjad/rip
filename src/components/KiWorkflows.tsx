"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Languages, Wand2, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const KiWorkflows: React.FC = () => {
  const { lang } = useLanguage();

  const workflows = [
    {
      icon: Sparkles,
      titleDe: "1. Rapid AI Concepting & Moodfilms",
      titleEn: "1. Rapid AI Concepting & Moodfilms",
      descDe:
        "Generierung konsistenter Storyboards, Moodboards und Bewegtbild-Pitches innerhalb von 24 Stunden für schnelle interne Abstimmungen und Vorstandspräsentationen.",
      descEn:
        "Generating consistent storyboards, visual moodfilms, and motion pitches within 24 hours for rapid stakeholder alignment and executive presentations."
    },
    {
      icon: Languages,
      titleDe: "2. Automatisierte Lokalisierung & Lip-Sync",
      titleEn: "2. Automated Localization & Lip-Sync",
      descDe:
        "Übersetzung von Filmen in 30+ Sprachen mit nativer Stimmklonung des Originalsprechers und KI-gestütztem Lippenabgleich für globale Rollouts.",
      descEn:
        "Translating hero videos into 30+ languages featuring voice cloning of original speakers and synthetic lip-sync alignment for international campaigns."
    },
    {
      icon: Wand2,
      titleDe: "3. Synthetische Set- & Hintergrunderweiterung",
      titleEn: "3. Synthetic Set & Background Extension",
      descDe:
        "Realdreh im Greenscreen-Studio oder vor schlichter Kulisse – fotorealistisch versetzt in futuristische Fabriken, Hochgebirge oder sterile Reinräume.",
      descEn:
        "Physical filming in studio conditions seamlessly transposed into futuristic gigafactories, alpine summits, or cleanrooms using diffusion models."
    },
    {
      icon: Shield,
      titleDe: "4. Rechtssichere Enterprise-Pipelines",
      titleEn: "4. Enterprise Compliance & Brand Governance",
      descDe:
        "Etablierung lokaler, geschützter KI-Workflows ohne Datenspeicherung durch Drittanbieter – mit klaren Leitfäden für Urheberrecht und Markenschutz.",
      descEn:
        "Implementing proprietary, secure AI architectures that protect confidential corporate IP, with explicit copyright and governance frameworks."
    }
  ];

  return (
    <section id="ki-workflows" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Mission */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            {lang === "de" ? "KI im Unternehmen" : "AI for the Enterprise"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
            {lang === "de"
              ? "Gute Ergebnisse. Eingespielte Abläufe."
              : "Exceptional results. Refined workflows."}
          </h2>
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed mb-8">
            {lang === "de"
              ? "Sie möchten KI auch im eigenen Team produktiv einsetzen? Wir entwickeln passende Workflows, führen bestehende Plattformen ein und schulen Ihre Mitarbeitenden – von der ersten Orientierung bis zur täglichen Nutzung."
              : "Looking to deploy generative AI productively within your own creative or marketing departments? We engineer custom workflows, onboard intuitive tools, and upskill your personnel – from orientation to daily production."}
          </p>

          <div className="p-6 rounded-2xl bg-[#17161d] border border-white/[0.1] shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] block mb-2">
              {lang === "de" ? "Unternehmenseinsatz" : "Enterprise Deployment"}
            </span>
            <p className="text-sm text-[#f4f2f7] font-medium mb-4">
              {lang === "de"
                ? "Vier produktive KI-Workflows im laufenden Einsatz bei führenden Konzernen und mittelständischen Marktführern."
                : "Four production-grade AI pipelines currently deployed across global corporations and market leaders."}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#a89bfa] hover:text-white transition-colors"
            >
              <span>{lang === "de" ? "KI-Workshop anfragen" : "Request AI Workshop"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 4 Workflows Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workflows.map((wf, idx) => {
            const Icon = wf.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-[#a89bfa] group-hover:bg-[#6b54ee] group-hover:text-white flex items-center justify-center mb-4 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f4f2f7] mb-2 tracking-tight">
                    {lang === "de" ? wf.titleDe : wf.titleEn}
                  </h3>
                  <p className="text-xs text-[#f4f2f780] leading-relaxed">
                    {lang === "de" ? wf.descDe : wf.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
