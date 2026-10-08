"use client";

import React from "react";
import { ArrowUpRight, Tv, Music, Users, MessageSquare } from "lucide-react";

export const KiWorkflows: React.FC = () => {
  const workflows = [
    {
      icon: Tv,
      titleEn: "1. Mobile LED Display Screen Vans",
      descEn:
        "High-brightness, weather-resistant daylight LED display vans deployed across constituencies with hydraulic masts, sound systems, and daily broadcast schedules."
    },
    {
      icon: Music,
      titleEn: "2. Custom Prachar Songs & Anthems",
      descEn:
        "Original lyric writing, professional studio recording, catchy rhythms, and high-energy music videos tailored to candidate manifestos and regional cultural appeal."
    },
    {
      icon: Users,
      titleEn: "3. Nukkad Natak & Street Theatre",
      descEn:
        "Engaging on-ground street play performances by seasoned theatrical artists connecting directly with voters in weekly haats, town plazas, and residential sectors."
    },
    {
      icon: MessageSquare,
      titleEn: "4. WhatsApp Outreach & Digital Campaigns",
      descEn:
        "Targeted constituency-level digital messaging, graphic manifesto banners, short video clips, and high-frequency voter engagement across social platforms."
    }
  ];

  return (
    <section id="ki-workflows" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Mission */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            Election Management &amp; Outreach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
            Turn key Campaign Execution.
          </h2>
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed mb-8">
            RFP Digital Productions runs end-to-end election campaign media operations. From mobile LED vans and catchy prachar songs to street theatre and constituency-wide digital voter outreach, we bring candidates directly to the people.
          </p>

          <div className="p-6 rounded-2xl bg-[#17161d] border border-white/[0.1] shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] block mb-2">
              Constituency Strategy
            </span>
            <p className="text-sm text-[#f4f2f7] font-medium mb-4">
              Integrated political campaign solutions deployed across Vidhan Sabha and Lok Sabha elections nationwide.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#a89bfa] hover:text-white transition-colors"
            >
              <span>Inquire Campaign Services</span>
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
                    {wf.titleEn}
                  </h3>
                  <p className="text-xs text-[#f4f2f780] leading-relaxed">
                    {wf.descEn}
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

