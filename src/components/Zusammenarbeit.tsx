"use client";

import React from "react";
import { ArrowUpRight, Film, Vote, Share2 } from "lucide-react";

export const Zusammenarbeit: React.FC = () => {
  const cards = [
    {
      icon: Film,
      titleEn: "Standalone Video Production",
      subEn: "Corporate films, documentaries & commercials",
      descEn:
        "From scriptwriting to final post-production, we deliver flagship institutional films, corporate showcases, and promotional commercials tailored to your vision.",
      tagEn: "Single Production"
    },
    {
      icon: Vote,
      titleEn: "Election Campaign Management",
      subEn: "Turnkey voter outreach & media engine",
      descEn:
        "Full campaign operations from announcement to polling day: mobile LED screen vans, custom prachar songs, ground rally cinematography, Nukkad Natak, and digital WhatsApp delivery.",
      tagEn: "Campaign Retainer"
    },
    {
      icon: Share2,
      titleEn: "Annual Social Media & Digital Marketing",
      subEn: "Consistent brand growth & engagement",
      descEn:
        "Structured content calendars, high-impact vertical short-form reels, performance Meta/Google ad management, and community engagement for organizations and political figures.",
      tagEn: "Annual Retainer"
    }
  ];

  return (
    <section id="zusammenarbeit" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="max-w-3xl mb-14 lg:mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
          Ways of Working
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
          A dedicated project. Or a strategic partner for the entire year.
        </h2>
        <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed">
          We integrate where you need us most – whether launching a single institutional film, scaling an intensive election campaign, or managing annual digital media.
        </p>
      </div>

      {/* 3 Collaboration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="relative rounded-[24px] p-8 bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#a89bfa] group-hover:bg-[#6b54ee] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f4f2f780] px-3 py-1 rounded-full bg-white/[0.04]">
                    {card.tagEn}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white">
                  {card.titleEn}
                </h3>
                <div className="text-xs font-medium text-[#a89bfa] mb-4">
                  {card.subEn}
                </div>

                <p className="text-sm text-[#f4f2f7b8] leading-relaxed mb-6 font-normal">
                  {card.descEn}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#kontakt"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#f4f2f7] group-hover:text-[#a89bfa] transition-colors"
                >
                  <span>Start Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
