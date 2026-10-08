"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAKTEN_DATA } from "@/data/imagineContent";

export const Fakten: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section
      className="border-y border-black/[0.08] bg-white py-12 lg:py-16 relative text-[#0e0d12] shadow-inner"
      aria-label="Key Metrics & Achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6b54ee] font-semibold mb-8 text-center sm:text-left">
          Key Metrics &amp; Achievements
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-black/[0.1]">
          {FAKTEN_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx > 0 ? "lg:pl-8" : ""
              } ${idx < FAKTEN_DATA.length - 1 ? "lg:pr-8" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0e0d12] mb-2 font-mono">
                {item.num}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#0e0d12]/80">
                {item.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
