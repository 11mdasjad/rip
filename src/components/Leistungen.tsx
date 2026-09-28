"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/data/imagineContent";

interface LeistungenProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const Leistungen: React.FC<LeistungenProps> = ({ onOpenContact }) => {
  const { lang } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section id="leistungen" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 lg:mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
          Our Core Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
          The project objective dictates the direction.
        </h2>
        <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed">
          From full corporate documentaries and university campus films to election campaigns and viral social media reels, we provide end-to-end creative direction, production, and execution.
        </p>
      </div>

      {/* Services Grid (6 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES_DATA.map((service) => {
          const isExpanded = expandedService === service.id;
          return (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="relative rounded-[26px] p-8 bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header row with Number and Arrow */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                  <span className="text-2xl font-mono font-bold text-[#a89bfa]">
                    {service.num}
                  </span>
                  <a
                    href="#kontakt"
                    onClick={() => onOpenContact(service.titleEn)}
                    className="w-10 h-10 rounded-full bg-white/[0.04] group-hover:bg-[#6b54ee] border border-white/[0.1] group-hover:border-transparent flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300"
                    aria-label={`Inquire Service: ${service.titleEn}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-[#f4f2f7] mb-4 tracking-tight group-hover:text-white transition-colors">
                  {service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#f4f2f7b8] leading-relaxed mb-6 font-normal">
                  {service.descEn}
                </p>

                {/* Deliverables / Key Outputs */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                    Key Deliverables:
                  </div>
                  {(service.deliverablesEn || []).map(
                    (del, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#f4f2f7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa] flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#kontakt"
                  onClick={() => onOpenContact(service.titleEn)}
                  className="text-xs font-semibold text-[#a89bfa] group-hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Discuss Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
