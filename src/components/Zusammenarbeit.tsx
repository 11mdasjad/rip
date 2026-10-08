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
    <section id="zusammenarbeit" className="w-full bg-white text-[#0e0d12] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6b54ee] font-bold block mb-3">
            Ways of Working
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0e0d12] mb-6">
            A dedicated project. Or a strategic partner for the entire year.
          </h2>
          <p className="text-base sm:text-lg text-[#0e0d12]/80 leading-relaxed">
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
                className="relative rounded-[24px] p-8 bg-[#f8f7fa] border border-[#0e0d12]/10 hover:border-[#6b54ee] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#0e0d12]/10 flex items-center justify-center text-[#6b54ee] group-hover:bg-[#0e0d12] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0e0d12]/70 px-3 py-1 rounded-full bg-white border border-[#0e0d12]/10 font-bold">
                      {card.tagEn}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0e0d12] mb-2 tracking-tight">
                    {card.titleEn}
                  </h3>
                  <div className="text-xs font-semibold text-[#6b54ee] mb-4">
                    {card.subEn}
                  </div>

                  <p className="text-sm text-[#0e0d12]/75 leading-relaxed mb-6 font-normal">
                    {card.descEn}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0e0d12]/10 flex items-center justify-between">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0e0d12] group-hover:text-[#6b54ee] transition-colors"
                  >
                    <span>Start Inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
