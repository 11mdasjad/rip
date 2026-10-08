"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/imagineContent";

interface LogosProps {
  titleEn?: string;
  items?: { name: string; src: string }[];
  reverse?: boolean;
}

export const Logos: React.FC<LogosProps> = ({
  titleEn = "Esteemed Clients & Organizations We Have Produced For",
  items = CLIENT_LOGOS,
  reverse = false,
}) => {
  // Duplicate items 3 times to ensure uninterrupted infinite marquee scroll
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden bg-[#0a090e]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] font-medium">
          {titleEn}
        </h2>
      </div>

      {/* Marquee Wrapper with Edge Fade Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a090e] via-[#0a090e]/80 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a090e] via-[#0a090e]/80 to-transparent z-10" />

        {/* Continuous Horizontal Moving Track */}
        <div className={reverse ? "animate-marquee-reverse gap-4 sm:gap-6 py-2" : "animate-marquee gap-4 sm:gap-6 py-2"}>
          {displayItems.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              title={logo.name}
              className="shrink-0 w-44 sm:w-52 h-20 sm:h-24 flex items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/20 select-none group cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 sm:max-h-14 max-w-[88%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
