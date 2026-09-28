"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CLIENT_LOGOS } from "@/data/imagineContent";

interface LogosProps {
  titleEn?: string;
  items?: { name: string; src: string }[];
}

export const Logos: React.FC<LogosProps> = ({
  titleEn = "Esteemed Clients & Organizations We Have Produced For",
  items = CLIENT_LOGOS.slice(0, 8),
}) => {
  return (
    <section className="py-12 lg:py-16 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs font-mono uppercase tracking-[0.2em] text-[#f4f2f780] mb-10">
          {titleEn}
        </h2>

        {/* Logo Grid / Marquee */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center">
          {items.map((logo, idx) => (
            <div
              key={idx}
              className="h-12 w-28 sm:w-32 flex items-center justify-center p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.2] hover:bg-white/[0.06] transition-all duration-300 filter grayscale brightness-125 opacity-70 hover:opacity-100 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
