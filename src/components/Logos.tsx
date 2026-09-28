"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/imagineContent";

interface LogosProps {
  titleEn?: string;
  items?: { name: string; src: string }[];
}

export const Logos: React.FC<LogosProps> = ({
  titleEn = "Esteemed Clients & Organizations We Have Produced For",
  items = CLIENT_LOGOS.slice(0, 7),
}) => {
  return (
    <section className="py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden bg-[#0a090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-8 sm:mb-10 font-medium">
          {titleEn}
        </h2>

        {/* Logo Cards with crisp white contrast for original full-color visibility */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
          {items.map((logo, idx) => (
            <div
              key={idx}
              title={logo.name}
              className="w-[calc(50%-8px)] sm:w-[calc(33.33%-12px)] md:w-[calc(25%-14px)] lg:w-[calc(14.28%-16px)] min-w-[130px] max-w-[170px] h-16 sm:h-20 flex items-center justify-center p-3 rounded-2xl bg-white shadow-md hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 border border-white/20 group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-11 sm:max-h-12 max-w-[85%] sm:max-w-[88%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
