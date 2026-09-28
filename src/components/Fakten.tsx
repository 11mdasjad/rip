"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAKTEN_DATA } from "@/data/imagineContent";

export const Fakten: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section
      className="border-y border-white/[0.08] bg-[#0e0d12]/50 py-12 lg:py-16 relative"
      aria-label="Kennzahlen, Stand 2026"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-8 text-center sm:text-left">
          Key Metrics &amp; Achievements
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/[0.08]">
          {FAKTEN_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx > 0 ? "lg:pl-8" : ""
              } ${idx < FAKTEN_DATA.length - 1 ? "lg:pr-8" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-2 font-mono">
                {item.num}
              </div>
              <div className="text-sm font-semibold text-[#f4f2f7] mb-2">
                {item.labelEn}
              </div>
              <p className="text-xs sm:text-sm text-[#f4f2f780] leading-relaxed">
                {item.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
