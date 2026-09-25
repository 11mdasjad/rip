"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PROCESS_STEPS } from "@/data/imagineContent";

interface ProzessProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Prozess: React.FC<ProzessProps> = ({ onPlayVideo }) => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Top Section Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            {lang === "de" ? "Ablauf & Sicherheit" : "Workflow & Control"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
            {lang === "de"
              ? "Kreative Qualität. Klare Verantwortung."
              : "Creative quality. Clear accountability."}
          </h2>
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed">
            {lang === "de"
              ? "Sie behalten den Überblick. Wir führen die Produktion. Wir koordinieren die beteiligten Gewerke und machen Entscheidungen früh sichtbar. Ein zentraler Ansprechpartner führt das Projekt vom Briefing bis zur finalen Version."
              : "You keep complete oversight. We lead the entire production engine. We coordinate all craft disciplines and bring creative decisions into sharp focus early. One dedicated partner steers your project from briefing to final delivery."}
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-2 text-[#a89bfa]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide text-white">
                {lang === "de" ? "Freigabegarantie" : "Milestone Assurance"}
              </span>
            </div>
            <p className="text-xs text-[#f4f2f780] leading-relaxed">
              {lang === "de"
                ? "Jede Phase endet mit einem definierten Freigabepunkt. So bleiben Qualität, Termine und Budget zu 100 % transparent und verlässlich."
                : "Each phase concludes with an unambiguous client sign-off checkpoint, ensuring quality, milestones, and costs remain completely predictable."}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Agency Realization Case: Jung von Matt + 1&1 */}
      <div className="mb-20 rounded-[28px] overflow-hidden bg-[#17161d] border border-white/[0.1] shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 relative aspect-[16/9] w-full overflow-hidden">
          <img
            src="/medien/projekte/1und1-imagefilm-16x9.jpg"
            alt="1&1 Imagefilm Jung von Matt"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#17161d] hidden lg:block" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
              Agency Case Study
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] block mb-2">
            Jung von Matt + Imagine Yes
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#f4f2f7] mb-4 tracking-tight">
            {lang === "de"
              ? "1&1: Das Agentur-Storyboard, vollumfänglich realisiert."
              : "1&1: An agency storyboard, fully brought to life."}
          </h3>
          <p className="text-sm text-[#f4f2f7b8] leading-relaxed mb-6">
            {lang === "de"
              ? "Jung von Matt lieferte das kreative Konzept und Storyboard. Imagine Yes übernahm Locationscouting, Besetzung, Hochsicherheits-Rechenzentrumsdrehs, 3D-Servervisualisierung und Postproduktion."
              : "Jung von Matt delivered the creative concept and storyboards. Imagine Yes handled high-security datacenter production, casting, CGI server visualization, and full post-production."}
          </p>

          <button
            onClick={() =>
              onPlayVideo(
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "1&1 Imagefilm",
                "Jung von Matt / Imagine Yes"
              )
            }
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#f4f2f7] hover:text-[#a89bfa] transition-colors"
          >
            <span>{lang === "de" ? "Projektfilm ansehen" : "Watch Project Film"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5-Phase Process Steps Roadmap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-2xl font-mono font-bold text-[#a89bfa] block mb-3">
                {step.nr}
              </span>
              <h4 className="text-lg font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white">
                {lang === "de" ? step.titleDe : step.titleEn}
              </h4>
              <p className="text-xs text-[#f4f2f780] leading-relaxed">
                {lang === "de" ? step.descDe : step.descEn}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-white/30">
              <span>{lang === "de" ? `Schritt ${idx + 1}/5` : `Step ${idx + 1}/5`}</span>
              <Check className="w-3.5 h-3.5 text-[#a89bfa]/60" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
